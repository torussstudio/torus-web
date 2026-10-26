import { cn } from "@/lib/utils";
import { spaces, stats } from "@/lib/constants";
import Media from "@/components/sections/archive/Media";
import AutoScrollRow from "./AutoScrollRow";
import { h } from "./styles";

// small square + centred title under each photo
const caption = cn(
  h.body,
  "relative mt-14 text-center xl:mt-24",
  "before:absolute before:top-1/2 before:left-0 before:size-7 before:-translate-y-1/2 before:bg-[#38362e] before:content-['']",
  "xl:before:size-[max(7px,calc(var(--spacing)*11))]",
);

export default function StudioSpaces() {
  return (
    <section data-fx="spaces" className={cn(h.inner, "pt-40 pb-64 md:pt-56 xl:pt-74 xl:pb-211")}>
      {/* PHOTO ROW — auto-scrolls sideways in a loop (pauses on hover / touch) */}
      <AutoScrollRow className="gap-16 px-24 md:gap-24 md:px-40 xl:gap-48 xl:px-0">
        {spaces.map((space) => (
          <figure key={space.title} className="w-[78%] shrink-0 md:w-[44%] xl:w-650">
            <Media
              media={{ src: space.image, alt: space.title }}
              className="aspect-[650/800] h-auto xl:aspect-auto xl:h-800"
              sizes="(max-width: 767px) 80vw, 34vw"
            />
            <figcaption>
              <p className={caption}>{space.title}</p>
            </figcaption>
          </figure>
        ))}
      </AutoScrollRow>
    </section>
  );
}