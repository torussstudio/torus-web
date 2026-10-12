import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";

type Props = {
  media: ArchiveMedia;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Image box for the archive page. Plays `media.video` when set, shows the
 * photo when `media.src` is set, otherwise a labelled placeholder of the same size.
 */
export default function Media({
  media,
  className,
  sizes = "100vw",
  priority = false,
}: Props) {
  const dark = media.tone === "dark";

  return (
    <div
      data-reveal="media"
      className={cn(
        "relative h-full w-full overflow-hidden",
        dark ? "bg-[#34322b]" : "bg-[#eae6dc]",
        className,
      )}
    >
      {media.video ? (
        <video
          src={media.video}
          poster={media.src}
          aria-label={media.alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 flex items-center justify-center p-16 text-center text-[10px] uppercase tracking-[0.14em] xl:text-[length:max(10px,calc(var(--spacing)*15))]",
            dark ? "text-[#f9f8f2]/35" : "text-[#38362e]/45",
          )}
        >
          {media.alt}
        </span>
      )}
    </div>
  );
}
