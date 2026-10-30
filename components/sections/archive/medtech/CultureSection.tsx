import { cn } from "@/lib/utils";
import { medtechCulture as d } from "@/lib/constants";
import Accented from "../Accented";
import IndexTag from "../IndexTag";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

/**
 * MedTech "Culture"
 *   ┌──────────────────────┬─────────────────────┐
 *   │ label + heading      │ intro               │
 *   ├──────────────────────┴─────────────────────┤
 *   │               lead (centred)               │
 *   ├──────────────────────┬─────────────────────┤
 *   │ [ calendar ]         │ [ calendar ]        │
 *   │ [01] text            │ [02] text           │
 *   ├──────────────────────┴─────────────────────┤
 *   │        MedTech as a fabric (centred)       │
 *   │     left para            right para        │
 *   └────────────────────────────────────────────┘
 */
export default function CultureSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — heading | intro */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[1016fr_904fr]">
        <div className="px-24 pt-48 md:px-40 md:py-64 xl:pt-150 xl:pr-0 xl:pb-104 xl:pl-154">
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-196 xl:pr-144 xl:pb-0 xl:pl-0">
          <p data-reveal className={cn(t.body, "xl:max-w-760")}>
            {d.intro}
          </p>
        </div>
      </div>

      {/* row 2 — centred lead */}
      <div className="border-b px-24 py-40 text-center md:px-40 md:py-56 xl:py-96">
        <p data-reveal className={t.intro}>
          {d.lead}
        </p>
      </div>

      {/* row 3 — two calendars (image + text, so not a PairImageRow) */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        {d.calendars.map((c, i) => (
          <div
            key={i}
            className={cn(
              "p-16 pb-40 md:p-24 md:pb-56 xl:px-52 xl:pt-52 xl:pb-96",
              i > 0 && "border-t md:border-t-0 md:border-l",
            )}
          >
            <Media
              media={c.image}
              className="aspect-[856/1000] h-auto xl:aspect-auto xl:h-1000"
              sizes="(max-width: 767px) 100vw, 45vw"
            />

            <IndexTag
              index={i}
              suffix={c.tag}
              className={cn(t.tag, "mt-24 uppercase tracking-[0.08em] xl:mt-54")}
            />

            <p data-reveal className={cn(t.body, "mt-12 xl:mt-32 xl:max-w-710")}>
              <Accented parts={c.text} />
            </p>
          </div>
        ))}
      </div>

      {/* row 4 — fabric heading + two paragraphs */}
      <div className="border-b px-24 py-56 md:px-40 md:py-72 xl:pt-150 xl:pr-270 xl:pb-150 xl:pl-274">
        <p
          data-reveal
          className="text-center text-[length:clamp(30px,6vw,46px)] leading-[1.2] tracking-[0.02em] xl:text-[length:max(30px,calc(var(--spacing)*76))]"
        >
          <Lines lines={d.fabric} />
        </p>

        <div className="mt-32 grid grid-cols-1 gap-24 md:mt-48 md:grid-cols-2 md:gap-40 xl:mt-100 xl:grid-cols-[758fr_618fr] xl:gap-0">
          <p data-reveal className={cn(t.body, "xl:max-w-600")}>
            <Accented parts={d.fabricLeft} />
          </p>
          <p data-reveal className={cn(t.body, "xl:mt-30 xl:max-w-618")}>
            {d.fabricRight}
          </p>
        </div>
      </div>
    </section>
  );
}
