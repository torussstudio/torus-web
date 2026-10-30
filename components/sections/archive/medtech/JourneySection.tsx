import { cn } from "@/lib/utils";
import { medtechJourney as d } from "@/lib/constants";
import Lines from "../Lines";
import { WideImageRow } from "../ImageRows";
import { t } from "../styles";

/**
 * MedTech "The Narrative"
 *   ┌───────────────┬──────────────────────────┐
 *   │ label         │ body / highlight / after │
 *   │ heading       │                          │
 *   ├───────────────┴──────────────────────────┤
 *   │                 wide image               │
 *   ├──────────────┬──────────────┬────────────┤
 *   │ column 1     │ column 2     │ column 3   │
 *   └──────────────┴──────────────┴────────────┘
 */
export default function JourneySection() {
  return (
    <section className={cn(t.inner, "border-b")}>
      {/* row 1 — heading + story */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[822fr_1098fr]">
        <div className="px-24 pt-48 md:px-40 md:py-64 xl:pt-120 xl:pr-0 xl:pb-0 xl:pl-160">
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-120 xl:pr-160 xl:pb-110 xl:pl-0">
          <div className="xl:max-w-950">
            {d.body.map((text, i) => (
              <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-32")}>
                {text}
              </p>
            ))}

            <p data-reveal className={cn(t.lead, "mt-32 xl:mt-56")}>
              {d.highlight.text} <span className={t.accent}>{d.highlight.accent}</span>
            </p>

            <p data-reveal className={cn(t.body, "mt-28 xl:mt-56")}>
              {d.after}
            </p>
          </div>
        </div>
      </div>

      {/* row 2 — wide image */}
      <WideImageRow
        media={d.image}
        className="border-t xl:p-56"
        aspect="aspect-[1808/945]"
        imageClassName="xl:h-945"
      />

      {/* row 3 — three equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {d.columns.map((text, i) => (
          <div
            key={i}
            className={cn(
              "px-24 py-36 md:px-32 md:py-48 xl:px-105 xl:pt-135 xl:pb-160",
              i > 0 && "border-t md:border-t-0 md:border-l",
            )}
          >
            <p data-reveal className={cn(t.body, "xl:max-w-445")}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
