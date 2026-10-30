import { cn } from "@/lib/utils";
import { medtechOutcome as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

/**
 * MedTech "The Outcome" (MedTech-only layout — not the shared ../OutcomeSection)
 *   ┌───────────────┬────────────────────────────┐
 *   │ [ image ]     │ label + heading + intro    │
 *   ├───────────────┴──────┬─────────────────────┤
 *   │ left                 │ right               │
 *   ├──────────────────────┴─────────────────────┤
 *   │                 [ collage ]                │
 *   └────────────────────────────────────────────┘
 */
export default function OutcomeSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — image flush left | text */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[948fr_972fr]">
        <div className="pt-16 pr-16 md:pt-48 md:pr-0 md:pb-48 xl:pt-114 xl:pb-74">
          <Media
            media={d.image}
            className="aspect-[814/1054] h-auto xl:aspect-auto xl:h-1054 xl:w-814"
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>

        <div className="flex items-center px-24 py-40 md:px-40 md:py-48 xl:py-0 xl:pr-144 xl:pl-0">
          <div>
            <span data-reveal className={t.label}>
              {d.label}
            </span>
            <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
              <Lines lines={d.heading} />
            </h2>
            <p
              data-reveal
              className="mt-24 text-[19px] leading-[1.35] tracking-[0.05em] xl:mt-74 xl:max-w-770 xl:text-[length:max(17px,calc(var(--spacing)*34))]"
            >
              {d.intro}
            </p>
          </div>
        </div>
      </div>

      {/* row 2 — left | right */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        <div className="px-24 py-36 md:px-40 md:py-56 xl:pt-126 xl:pr-80 xl:pb-122 xl:pl-152">
          <p data-reveal className={cn(t.body, "xl:max-w-672")}>
            {d.left}
          </p>
        </div>

        <div className="border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-56 xl:pt-126 xl:pr-80 xl:pb-122 xl:pl-148">
          <p data-reveal className={cn(t.body, "xl:max-w-600")}>
            {d.right}
          </p>
        </div>
      </div>

      {/* row 3 — wide collage */}
      <div className="border-b p-16 md:p-24 xl:px-50 xl:pt-64 xl:pb-66">
        <Media
          media={d.collage}
          className="aspect-[1820/864] h-auto xl:aspect-auto xl:h-864"
          sizes="100vw"
        />
      </div>
    </section>
  );
}