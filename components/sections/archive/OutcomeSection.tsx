import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Lines from "./Lines";
import Media from "./Media";
import { t } from "./styles";

export type OutcomeData = {
  label: string;
  heading: string[];
  intro: string;
  /** optional large statement under the intro (TSA) */
  highlight?: string;
  columns: string[];
  image: ArchiveMedia;
  collage: ArchiveMedia;
};

// left padding of each of the three columns (design px)
const columnPadding = ["xl:pl-115", "xl:pl-103", "xl:pl-90"];

export default function OutcomeSection({
  data: d,
  // gap above the photo (design px) — differs per project layout
  topPadding = "xl:pt-115",
  // text width of each column (design px) — tuned so lines break like the design
  columnWidths = ["xl:max-w-390", "xl:max-w-438", "xl:max-w-386"],
}: {
  data: OutcomeData;
  topPadding?: string;
  columnWidths?: string[];
}) {
  return (
    <section className={t.inner}>
      <div className={cn("grid grid-cols-1 items-center gap-32 border-b py-48 md:grid-cols-[1fr_1.15fr] md:gap-48 md:py-64 xl:grid-cols-[812fr_974fr] xl:gap-134 xl:pb-76", topPadding)}>
        <Media
          media={d.image}
          className="mr-[15%] aspect-[812/1054] h-auto w-auto md:mr-0 md:w-full xl:mr-0 xl:aspect-auto xl:h-1054 xl:w-full"
          sizes="(max-width: 1023px) 85vw, 43vw"
        />

        <div className="px-24 md:pr-40 md:pl-0 xl:px-0">
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-36")}>
            <Lines lines={d.heading} />
          </h2>
          <p data-reveal className={cn(t.body, "mt-20 xl:mt-75 xl:max-w-810")}>
            {d.intro}
          </p>
          {d.highlight && (
            <p
              data-reveal
              className="mt-12 text-[length:clamp(20px,4vw,28px)] leading-[1.2] tracking-[0.05em] xl:mt-22 xl:max-w-790 xl:text-[length:max(20px,calc(var(--spacing)*44))]"
            >
              {d.highlight}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 border-b md:grid-cols-3">
        {d.columns.map((text, i) => (
          <div
            key={i}
            className={cn(
              "px-24 py-32 md:px-32 md:py-48 xl:pt-121 xl:pr-40 xl:pb-116",
              columnPadding[i],
              i > 0 && "border-t md:border-t-0 md:border-l",
            )}
          >
            <p data-reveal className={cn(t.body, columnWidths[i])}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="border-b p-16 md:p-24 xl:px-50 xl:py-63">
        <Media
          media={d.collage}
          className="aspect-[1820/864] h-auto xl:aspect-auto xl:h-864"
          sizes="(max-width: 1023px) 100vw, 95vw"
        />
      </div>
    </section>
  );
}
