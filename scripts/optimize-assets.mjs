import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile, stat, unlink } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

// Next already depends on sharp. Keep originals and publish content-hashed
// derivatives so cache lifetimes can be long without serving stale edits.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "scripts/optimized-assets.json");
const responsiveManifestPath = path.join(root, "lib/responsive-images.json");
const recipe = "avif-1920-q55-e4-h264-1080p30-crf23-v1";
const responsiveWidths = [256, 480, 640, 960, 1280, 1920];
const responsiveRecipe = "responsive-avif-q50-e4-v1";
const responsiveDir = path.join(root, "public/responsive");
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
sharp.concurrency(1);
sharp.cache(false);
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
  [...text.matchAll(/["'`]((?:\/images\/|\/videos\/)[^"'`]+\.(?:avif|png|jpe?g|webp|mp4))["'`]/g)].map(match => match[1])));
// Calendar pages are selected from a generated array in lib/constants.ts, so
// their full URLs are not present as string literals for the scan above.
const calendarDir = path.join(root, "public/images/medtech/calendar");
try {
  for (const entry of await readdir(calendarDir, { withFileTypes: true })) {
    if (entry.isFile() && /\.(?:avif|png|jpe?g|webp)$/i.test(entry.name)) {
      urls.add(`/images/medtech/calendar/${entry.name}`);
    }
  }
} catch (error) { if (error.code !== "ENOENT") throw error; }
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
    // Vercel does not include ffmpeg, so retain the original when transcoding
    // is unavailable instead of failing the production build.
    const temporary = path.join(outputDir, "encoding.mp4");
    try {
      execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", input,
        "-vf", "scale=w='min(1920,iw)':h='min(1080,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30",
        "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-threads", "1",
        "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", temporary]);
      data = await readFile(temporary);
    } catch (error) {
      console.warn(`Could not encode ${source}; original retained: ${error.message}`);
      continue;
    } finally {
      await unlink(temporary).catch(() => {});
    }
  } else {
    try {
      const temporary = path.join(outputDir, "encoding.avif");
      execFileSync(process.execPath, [path.join(root, "scripts/encode-image.mjs"), input, temporary]);
      data = await readFile(temporary);
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

// The Vercel Image Optimization quota is exhausted for this project. Publish
// immutable responsive AVIF files ahead of time and have next/image point to
// them directly instead of creating transformations on demand.
await mkdir(responsiveDir, { recursive: true });
const optimizedBySource = new Map(assets.map(asset => [asset.source, asset.output]));
const responsiveImages = {};
let previousResponsive = {};
try { previousResponsive = JSON.parse(await readFile(responsiveManifestPath, "utf8")); }
catch (error) { if (error.code !== "ENOENT") throw error; }
for (const source of urls) {
  if (/\.mp4$/i.test(source)) continue;
  const output = optimizedBySource.get(source) ?? source;
  const inputPath = path.join(root, "public", output.slice(1));
  let input;
  try { input = await readFile(inputPath); }
  catch (error) {
    if (error.code === "ENOENT") {
      console.warn(`Missing image for responsive variants (unchanged): ${source}`);
      continue;
    }
    throw error;
  }

  const contentHash = createHash("sha256").update(input).digest("hex").slice(0, 12);
  const basename = path.basename(output, path.extname(output));
  const existing = previousResponsive[output];
  let cachedComplete = Boolean(existing);
  for (const width of responsiveWidths) {
    if (!cachedComplete) break;
    const url = existing[width];
    if (!url) { cachedComplete = false; break; }
    if (url === output) continue;
    if (!url.includes(`-${contentHash}-${width}.avif`)) { cachedComplete = false; break; }
    try { await stat(path.join(root, "public", url.slice(1))); }
    catch { cachedComplete = false; }
  }
  if (cachedComplete) {
    responsiveImages[output] = existing;
    continue;
  }

  const metadata = await sharp(input).metadata();
  if (!metadata.width) continue;
  const variants = {};

  for (const width of responsiveWidths) {
    if (width >= metadata.width) {
      variants[width] = output;
      continue;
    }

    const variant = `/responsive/${basename}-${contentHash}-${width}.avif`;
    const variantPath = path.join(root, "public", variant.slice(1));
    try { await stat(variantPath); }
    catch (error) {
      if (error.code !== "ENOENT") throw error;
      await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 50, effort: 4 })
        .toFile(variantPath);
      console.log(`${source} -> ${width}px responsive AVIF`);
    }
    variants[width] = variant;
  }
  responsiveImages[output] = variants;
}
await writeFile(responsiveManifestPath, JSON.stringify(responsiveImages, null, 2) + "\n");

const before = assets.reduce((sum, asset) => sum + asset.before, 0);
const after = assets.reduce((sum, asset) => sum + asset.after, 0);
console.log(JSON.stringify({ files: assets.length, before, after, reduction: `${(100 * (1 - after / before)).toFixed(1)}%` }));
