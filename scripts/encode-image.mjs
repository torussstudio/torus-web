import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
sharp.concurrency(1);
sharp.cache(false);
// A separate process releases encoder memory between large source images.
await sharp(readFileSync(process.argv[2])).rotate()
  .resize({ width: 1920, withoutEnlargement: true })
  .avif({ quality: 55, effort: 4 })
  .toFile(process.argv[3]);
