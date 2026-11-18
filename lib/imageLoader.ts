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
  return getResponsiveImageUrl(src, width);
}
