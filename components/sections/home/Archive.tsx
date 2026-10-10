import { cn } from "@/lib/utils";
import { works } from "@/lib/constants";
import Media from "@/components/sections/archive/Media";
import Lines from "@/components/sections/archive/Lines";
import { TurnLink } from "./Icons";
import { h } from "./styles";

const intro = [
  "A selection of identities, digital experiences,",
  "campaigns, cultural initiatives, artworks, and",
  "experiments from across the studio.",
];

/** keep each tag on one line: "Brand Strategy / Identity / …" */
const tagLine = (tags: string[]) =>
  tags.map((tag) => tag.replace(/ /g, "\u00a0")).join("\u00a0/ "); // slash stays at the end of a line, never starts one

export default function ArchiveSection() {
  return (
    <section className={cn(h.inner, "border-b")}>
      {/* HEADER */}
      <div className="grid gap-16 border-b px-24 pt-56 pb-40 md:grid-cols-2 md:px-40 md:pt-72 md:pb-56 xl:grid-cols-[1111fr_809fr] xl:gap-0 xl:px-0 xl:pt-55 xl:pb-60">
        <h2 data-reveal className={cn(h.h2, "xl:pl-153")}>
          Selected Archive
        </h2>
        <p data-reveal className={cn(h.body, "md:pt-8 xl:pt-4 xl:pr-40 xl:pl-153")}>
          <Lines lines={intro} />
        </p>
      </div>

      {/* PROJECT ROWS */}
      {works.map((work) => (
        <article
          key={work.title}
          className="grid grid-cols-1 border-b md:grid-cols-[1fr_1fr] xl:h-637 xl:grid-cols-[922fr_998fr]"
        >
          <div className="px-24 pt-32 md:border-r md:px-40 md:py-48 xl:px-0 xl:pt-73 xl:pb-74 xl:pl-152">
            <Media
              media={{ src: work.image, alt: work.title }}
              className="aspect-[692/490] h-auto xl:aspect-auto xl:h-490 xl:w-692"
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </div>

          <div className="flex flex-col px-24 pt-28 pb-40 md:px-40 md:py-48 xl:px-0 xl:pt-75 xl:pr-60 xl:pb-75 xl:pl-76">
            <p data-reveal className={cn(h.body, "flex items-center uppercase")}>
              <span>{work.year}</span>
              <span aria-hidden="true" className="mx-14 size-6 bg-current xl:mx-34 xl:size-8" />
              <span>{work.country}</span>
            </p>

            <h3
              data-reveal
              className="mt-16 font-trial text-[length:clamp(28px,5vw,40px)] leading-[1.2] tracking-normal xl:mt-34 xl:-ml-6 xl:text-[length:max(28px,calc(var(--spacing)*55))]"
            >
              {/* keep "[ Title ]" brackets attached to the words */}
              {work.title.replace("[ ", "[\u00a0").replace(" ]", "\u00a0]")}
            </h3>

            <p
              data-reveal
              className={cn(h.body, "mt-16 max-w-[520px] xl:mt-36 xl:min-h-87 xl:max-w-none")}
            >
              <Lines lines={work.descLines} />
            </p>

            <p
              data-reveal
              className="mt-24 text-[length:clamp(20px,3.6vw,26px)] leading-[1.25] tracking-[0.05em] xl:mt-44 xl:max-w-800 xl:text-[length:max(20px,calc(var(--spacing)*40))] xl:leading-[1.2]"
            >
              {tagLine(work.tags)}
            </p>

            <div data-reveal className="mt-32 xl:mt-auto">
              <TurnLink href={work.href} tone="ink">
                View project
              </TurnLink>
            </div>
          </div>
        </article>
      ))}

      {/* EXPLORE ALL */}
      <div className="flex items-center justify-center py-48 xl:h-186 xl:py-0">
        <TurnLink href="/archive">Explore the complete archive</TurnLink>
      </div>
    </section>
  );
}
