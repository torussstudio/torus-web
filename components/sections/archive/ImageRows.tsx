import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

// Generic full-width rows used between story sections.
// Each takes a `className` for the design's exact desktop padding.

/** One full-width image (1820 x ~1050 on the 1920 design) */
export function WideImageRow({
  media,
  className = "xl:pt-44 xl:pb-41",
  imageClassName = "xl:h-1052",
  aspect = "aspect-[1820/1052]",
}: {
  media: ArchiveMedia;
  className?: string;
  imageClassName?: string;
  /** phone/tablet shape of the image */
  aspect?: string;
}) {
  return (
    <div className={cn(t.inner, "border-b p-16 md:p-24 xl:px-50", className)}>
      <Media
        media={media}
        className={cn(aspect, "h-auto xl:aspect-auto", imageClassName)}
        sizes="(max-width: 1023px) 100vw, 95vw"
      />
    </div>
  );
}

/** Two images side by side with a divider */
export function PairImageRow({
  items,
  className = "xl:pt-51 xl:pb-51",
  imageClassName = "xl:h-1084",
  aspect = "aspect-[855/1084]",
}: {
  items: ArchiveMedia[];
  /** padding of each half; overrides the default side padding when it sets it */
  className?: string;
  imageClassName?: string;
  /** phone/tablet shape of the images */
  aspect?: string;
}) {
  return (
    <div className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-2")}>
      {items.map((img, i) => (
        <div
          key={i}
          className={cn(
            "p-16 md:p-24",
            i === 0 ? "xl:pr-54 xl:pl-51" : "border-t md:border-t-0 md:border-l xl:pr-51 xl:pl-54",
            className,
          )}
        >
          <Media
            media={img}
            className={cn(aspect, "h-auto xl:aspect-auto", imageClassName)}
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
        </div>
      ))}
    </div>
  );
}

/** Three images in bordered thirds */
export function TrioImageRow({
  items,
  className = "xl:pt-43 xl:pb-44",
  imageClassName = "xl:h-691",
}: {
  items: ArchiveMedia[];
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-3 xl:grid-cols-[642fr_636fr_642fr]")}>
      {items.map((img, i) => (
        <div
          key={i}
          className={cn(
            "p-16 md:p-20 xl:px-46",
            className,
            i === 0 && "xl:pl-51",
            i === items.length - 1 && "xl:pr-51",
            i > 0 && "border-t md:border-t-0 md:border-l",
          )}
        >
          <Media
            media={img}
            className={cn("aspect-[545/691] h-auto xl:aspect-auto", imageClassName)}
            sizes="(max-width: 1023px) 100vw, 29vw"
          />
        </div>
      ))}
    </div>
  );
}

/** Small grey label + one large full-width image */
export function LabeledImageRow({
  label,
  media,
}: {
  label?: string;
  media: ArchiveMedia;
}) {
  return (
    <div className={cn(t.inner, "border-b px-16 py-48 md:px-24 md:py-64 xl:px-51 xl:pt-108 xl:pb-223")}>
      {label && (
        <span data-reveal className={cn(t.label, "pl-8 md:pl-16 xl:pl-0")}>
          {label}
        </span>
      )}
      <Media
        media={media}
        className="mt-16 aspect-[1818/1738] h-auto md:mt-24 md:aspect-[1818/1300] xl:mt-54 xl:aspect-auto xl:h-1738"
        sizes="(max-width: 1023px) 100vw, 95vw"
      />
    </div>
  );
}

/** Two text columns split down the middle */
export function TextColumnsRow({
  left,
  right,
  className = "xl:pt-130 xl:pb-135",
  leftClassName = "xl:pl-151 xl:*:max-w-682",
  rightClassName = "xl:pl-145 xl:*:max-w-593",
}: {
  left: string | string[];
  right: string | string[];
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-2")}>
      <div className={cn("px-24 py-36 md:px-40 md:py-48 xl:pr-40", className, leftClassName)}>
        <Paragraphs text={left} />
      </div>
      <div className={cn("border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-48 xl:pr-40", className, rightClassName)}>
        <Paragraphs text={right} />
      </div>
    </div>
  );
}

function Paragraphs({ text }: { text: string | string[] }) {
  const paras = Array.isArray(text) ? text : [text];
  return (
    <>
      {paras.map((p, i) => (
        <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-26")}>
          {p}
        </p>
      ))}
    </>
  );
}
