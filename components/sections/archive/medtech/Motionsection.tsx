import { cn } from "@/lib/utils";
import { medtechMotion as d } from "@/lib/constants";
import IndexTag from "../IndexTag";
import Lines from "../Lines";
import Media from "../Media";
import { WideImageRow } from "../ImageRows";
import Statement from "../Statement";
import { t } from "../styles";

/**
 * MedTech "Motion"
 *   ┌──────────────────────┬─────────────────────┐
 *   │ label + heading      │ intro               │
 *   ├──────────────────────┴─────────────────────┤
 *   │                 brand film                 │
 *   ├──────────────────────┬─────────────────────┤
 *   │ story                │ [still] [still]     │
 *   ├──────────────────────┴─────────────────────┤
 *   │              statement (centred)           │
 *   │              modes intro                   │
 *   │        [ 01 ] mode     │ [ 02 ] mode       │
 *   │              together                      │
 *   └────────────────────────────────────────────┘
 */
export default function MotionSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — heading | intro */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[1016fr_904fr]">
        <div className="px-24 pt-48 md:px-40 md:py-64 xl:pt-120 xl:pr-0 xl:pb-92 xl:pl-154">
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-170 xl:pr-160 xl:pb-0 xl:pl-0">
          <p data-reveal className={cn(t.intro, "xl:max-w-620")}>
            {d.intro}
          </p>
        </div>
      </div>

      {/* row 2 — brand film */}
      <WideImageRow
        media={d.film}
        className="xl:py-46"
        aspect="aspect-[1820/1022]"
        imageClassName="xl:h-1022"
      />

      {/* row 3 — story | stills */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[962fr_958fr]">
        <div className="px-24 py-36 md:px-40 md:py-56 xl:pt-114 xl:pr-0 xl:pb-114 xl:pl-154">
          <p data-reveal className={cn(t.body, "xl:max-w-680")}>
            {d.story.before} <span className={t.accent}>{d.story.accent}</span>
            {d.story.after}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 border-t p-16 md:border-t-0 md:border-l md:p-24 xl:gap-22 xl:pt-46 xl:pr-50 xl:pb-42 xl:pl-46">
          {d.stills.map((img, i) => (
            <Media
              key={i}
              media={img}
              className="aspect-[422/402] h-auto xl:aspect-auto xl:h-402"
              sizes="(max-width: 767px) 50vw, 25vw"
            />
          ))}
        </div>
      </div>

      {/* row 4 — centred statement + two modes */}
      <div className="border-b px-24 py-56 text-center md:px-40 md:py-72 xl:px-152 xl:pt-140 xl:pb-124">
        <Statement lines={d.statement} className={cn(t.lead, "mx-auto xl:max-w-1300")} />

        <p data-reveal className={cn(t.body, "mt-40 xl:mt-120")}>
          {d.modesIntro}
        </p>

        <div className="mt-24 grid grid-cols-1 border-t border-b text-left md:grid-cols-2 xl:mt-72">
          {d.modes.map((text, i) => (
            <div
              key={i}
              className={cn(
                "py-24 md:pt-28 md:pb-40 xl:min-h-240 xl:pt-56 xl:pb-56",
                i > 0 ? "border-t md:border-t-0 md:border-l md:pl-32 xl:pl-62" : "md:pr-32",
              )}
            >
              <IndexTag index={i} className={t.tag} />
              <p
                data-reveal
                className="mt-12 text-[18px] leading-[1.3] tracking-[0.05em] xl:mt-24 xl:max-w-720 xl:text-[length:max(17px,calc(var(--spacing)*34))]"
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        <p data-reveal className={cn(t.body, "mx-auto mt-28 xl:mt-60 xl:max-w-900")}>
          {d.together}
        </p>
      </div>
    </section>
  );
}
