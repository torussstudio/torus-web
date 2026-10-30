import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "./Media";
import SideLabel from "./SideLabel";
import { t } from "./styles";

/**
 * Half-capsule panel (vertical label + copy) with an image beside it.
 * Used by Exult "The Partnership" and TSA "The Question".
 */
export default function CapsuleSection({
  label,
  media,
  children,
  contentClassName,
  mediaClassName,
}: {
  label: string;
  media: ArchiveMedia;
  children: ReactNode;
  /** padding / widths of the copy column */
  contentClassName?: string;
  /** desktop size of the image */
  mediaClassName?: string;
}) {
  return (
    <section className={cn(t.inner, "flex flex-col border-b py-48 md:flex-row md:items-center md:gap-32 md:py-64 md:pr-40 xl:flex-row xl:items-center xl:gap-0 xl:py-90 xl:pr-0")}>
      {/* half-capsule panel */}
      <div className="w-[calc(100%-24px)] rounded-r-full border border-l-0 py-36 pr-64 pl-24 md:w-[62%] md:shrink-0 md:py-56 md:pr-88 md:pl-40 xl:grid xl:min-h-637 xl:w-1115 xl:shrink-0 xl:grid-cols-[147fr_968fr] xl:p-0">
        <SideLabel label={label} className="pb-16 xl:pb-0" />
        <div className={cn("self-center xl:py-40", contentClassName)}>{children}</div>
      </div>

      <Media
        media={media}
        className={cn(
          "mx-24 mt-32 h-auto w-auto md:m-0 md:flex-1 xl:m-0 xl:ml-81 xl:w-572 xl:flex-none xl:shrink-0 xl:aspect-auto",
          mediaClassName,
        )}
        sizes="(max-width: 1023px) 100vw, 30vw"
      />
    </section>
  );
}
