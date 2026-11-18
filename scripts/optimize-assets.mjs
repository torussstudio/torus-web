import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

// Next already depends on sharp. Keep originals and publish content-hashed
// derivatives so cache lifetimes can be long without serving stale edits.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "scripts/optimized-assets.json");
const recipe = "avif-1920-q55-e4-h264-1080p30-crf23-v1";
let previous = [];
try { previous = JSON.parse(await readFile(manifestPath, "utf8")); }
catch (error) { if (error.code !== "ENOENT") throw error; }

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const name = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(name) : [name];
  }));
  return files.flat();
}

const files = (await Promise.all(["app", "components", "lib"].map(dir => walk(path.join(root, dir)))))
  .flat().filter(file => /\.(tsx?|css)$/.test(file));
const sources = await Promise.all(files.map(async file => {
  let text = await readFile(file, "utf8");
  for (const asset of previous) text = text.replaceAll(asset.output, asset.source);
  return { file, text };
}));
const urls = new Set(sources.flatMap(({ text }) =>
  [...text.matchAll(/["'`]((?:\/images\/|\/videos\/)[^"'`]+\.(?:avif|png|jpe?g|mp4))["'`]/g)].map(match => match[1])));
const outputDir = path.join(root, "public/optimized");
await mkdir(outputDir, { recursive: true });
const assets = [];
for (const source of urls) {
  const input = path.join(root, "public", source.slice(1));
  let before;
  try { before = (await stat(input)).size; }
  catch (error) {
    if (error.code !== "ENOENT") throw error;
    console.warn(`Missing source (unchanged): ${source}`);
    continue;
  }
  const video = source.endsWith(".mp4");
  if (before < (video ? 1024 * 1024 : 256 * 1024)) continue;
  const name = path.basename(source, path.extname(source));
  const sourceHash = createHash("sha256").update(await readFile(input)).digest("hex");
  const cached = previous.find(asset => asset.source === source && asset.sourceHash === sourceHash && asset.recipe === recipe);
  if (cached) {
    try {
      await stat(path.join(root, "public", cached.output.slice(1)));
      assets.push(cached);
      continue;
    } catch (error) { if (error.code !== "ENOENT") throw error; }
  }
  let data;
  if (video) {
    // Background loops are muted. 1080p/30fps avoids decoding 4K/60fps
    // while scrolling; faststart lets playback begin before download ends.
    const temporary = path.join(outputDir, "encoding.mp4");
    execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", input,
      "-vf", "scale=w='min(1920,iw)':h='min(1080,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30",
      "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-threads", "1",
      "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", temporary]);
    data = await readFile(temporary);
    const { unlink } = await import("node:fs/promises");
    await unlink(temporary);
  } else {
    try {
      const temporary = path.join(outputDir, "encoding.avif");
      execFileSync(process.execPath, [path.join(root, "scripts/encode-image.mjs"), input, temporary]);
      data = await readFile(temporary);
      const { unlink } = await import("node:fs/promises");
      await unlink(temporary);
    } catch (error) {
      console.warn(`Could not encode ${source}; original retained: ${error.message}`);
      continue;
    }
  }
  if (data.length >= before) continue;
  const hash = createHash("sha256").update(data).digest("hex").slice(0, 12);
  const output = `/optimized/${name}-${hash}.${video ? "mp4" : "avif"}`;
  await writeFile(path.join(root, "public", output.slice(1)), data);
  assets.push({ source, output, before, after: data.length, sourceHash, recipe });
  console.log(`${source}: ${Math.round(before / 1024)} -> ${Math.round(data.length / 1024)} KiB`);
}
for (const { file } of sources) {
  let updated = await readFile(file, "utf8");
  for (const asset of previous) updated = updated.replaceAll(asset.output, asset.source);
  for (const asset of assets) updated = updated.replaceAll(asset.source, asset.output);
  if (updated !== await readFile(file, "utf8")) await writeFile(file, updated);
}
await writeFile(manifestPath, JSON.stringify(assets, null, 2) + "\n");
const before = assets.reduce((sum, asset) => sum + asset.before, 0);
const after = assets.reduce((sum, asset) => sum + asset.after, 0);
console.log(JSON.stringify({ files: assets.length, before, after, reduction: `${(100 * (1 - after / before)).toFixed(1)}%` }));
