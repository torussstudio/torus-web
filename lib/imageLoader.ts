import type { ImageLoaderProps } from "next/image";
import responsiveImages from "./responsive-images.json";

const variants = responsiveImages as Record<string, Record<string, string>>;

export function getResponsiveImageUrl(src: string, width: number): string {
  const widths = variants[src];
  if (!widths) return src;

  const exact = widths[String(width)];
  if (exact) return exact;

  const available = Object.keys(widths).map(Number).sort((a, b) => a - b);
  const selected = available.find((candidate) => candidate >= width) ?? available.at(-1);
  return selected === undefined ? src : widths[String(selected)] ?? src;
}

/**
 * Resolve an image to a prebuilt static AVIF variant. The returned URL points
 * directly at /responsive, so the request never enters /_next/image.
 */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const url = getResponsiveImageUrl(src, width);
  // An image without prebuilt variants yet (e.g. just added, before
  // `npm run optimize:assets`) falls back to the original file. Tag it with the
  // width so next/image doesn't warn that the loader ignores width; the static
  // file server ignores the query.
  if (url === src && !variants[src]) {
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
  }
  return url;
}
