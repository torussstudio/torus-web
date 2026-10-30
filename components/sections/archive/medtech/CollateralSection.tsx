import { cn } from "@/lib/utils";
import { medtechCollateral as d } from "@/lib/constants";
import Accented from "../Accented";
import Lines from "../Lines";
import Media from "../Media";
import { TrioImageRow } from "../ImageRows";
import Statement from "../Statement";
import { t } from "../styles";

/**
 * MedTech "Collateral & Events"
 *   ┌──────────────────────┬─────────────────────┐
 *   │ label + heading      │ intro               │
 *   ├──────────────────────┼─────────────────────┤
 *   │ [ image ]            │ body                │
 *   ├──────────────────────┴─────────────────────┤
 *   │             statement (centred)            │
 *   ├──────────────┬──────────────┬──────────────┤
 *   │ [ image ]    │ [ image ]    │ [ image ]    │
 *   ├──────────────┴───────┬──────┴──────────────┤
 *   │ tags                 │ events paragraph    │
 *   └──────────────────────┴─────────────────────┘
 */
export default function CollateralSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — heading | intro */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[1016fr_904fr]">
        <div className="px-24 pt-48 md:px-40 md:py-64 xl:pt-120 xl:pr-0 xl:pb-102 xl:pl-154">
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-170 xl:pr-120 xl:pb-0 xl:pl-0">
          <p data-reveal className={cn(t.intro, "xl:max-w-760")}>
            {d.intro}
          </p>
        </div>
      </div>

      {/* row 2 — image | body */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[1100fr_820fr]">
        <div className="p-16 md:p-24 xl:pt-46 xl:pr-44 xl:pb-46 xl:pl-50">
          <Media
            media={d.image}
            className="aspect-[1006/760] h-auto xl:aspect-auto xl:h-760"
            sizes="(max-width: 767px) 100vw, 55vw"
          />
        </div>

        <div className="flex items-center border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-48 xl:py-0 xl:pr-80 xl:pl-92">
          <p data-reveal className={cn(t.body, "xl:max-w-600")}>
            {d.body}
          </p>
        </div>
      </div>

      {/* row 3 — centred statement */}
      <div className="border-b px-24 py-56 text-center md:px-40 md:py-72 xl:pt-144 xl:pb-154">
        <Statement lines={d.statement} className={cn(t.lead, "mx-auto xl:max-w-1500")} />
      </div>

      {/* row 4 — three images */}
      <TrioImageRow items={d.images} />

      {/* row 5 — tags | events */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        <div className="px-24 pt-36 md:px-40 md:py-56 xl:pt-112 xl:pr-80 xl:pb-112 xl:pl-150">
          <ul data-reveal className="flex flex-wrap gap-x-10 gap-y-12 xl:max-w-640 xl:gap-x-16 xl:gap-y-18">
            {d.tags.map((tag) => (
              <li
                key={tag}
                className="flex h-36 items-center rounded-full border px-14 text-[12px] tracking-[0.03em] xl:h-56 xl:px-28 xl:text-[length:max(11px,calc(var(--spacing)*22))]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-24 pt-28 pb-48 md:border-l md:px-40 md:py-56 xl:pt-116 xl:pr-80 xl:pb-112 xl:pl-148">
          <p data-reveal className={cn(t.body, "xl:max-w-670")}>
            <Accented parts={d.events} />
          </p>
        </div>
      </div>
    </section>
  );
}
