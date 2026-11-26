import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import LazyVideo from "./LazyVideo";

type Props = {
  media: ArchiveMedia;
  className?: string;
  sizes?: string;
  priority?: boolean;
  reveal?: boolean;
  fit?: "cover" | "contain";
  position?: "center" | "top";
};

/**
 * Image box for the archive page. Plays `media.video` when set, shows the
 * photo when `media.src` is set, otherwise a labelled placeholder of the same size.
 *
 * ArchiveReveal puts the photo / video on its own GPU layer only while the
 * clip-path reveal runs (see there), then removes it again.
 */
export default function Media({
  media,
  className,
  sizes = "100vw",
  priority = false,
  reveal = true,
  fit = "cover",
  position = "center",
}: Props) {
  const dark = media.tone === "dark";

  return (
    <div
      data-reveal={reveal ? "media" : undefined}
      className={cn(
        "relative h-full w-full overflow-hidden",
        dark ? "bg-[#34322b]" : "bg-[#eae6dc]",
        className,
      )}
    >
      {media.video ? (
        <LazyVideo
          src={media.video}
          poster={media.src}
          label={media.alt}
          className={
            fit === "contain"
              ? // shown whole at its own size (no upscaling, so it stays sharp), centred on a
                // box that matches its background; soft side edges hide where the frame ends
                "absolute inset-y-0 left-1/2 aspect-square h-full w-auto max-w-full -translate-x-1/2 object-cover [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
              : "absolute inset-0 h-full w-full scale-[1.015] bg-[#fdfaf8] object-cover"
          }
        />
      ) : media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            fit === "contain" ? "object-contain" : "object-cover",
            position === "top" && "object-top",
          )}
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
