import { cn } from "@/lib/utils";
import { medtechProcess as d } from "@/lib/constants";
import Media from "../Media";
import { t } from "../styles";

/**
 * MedTech "Process"
 *   ┌──────┬──────────────────────────────────────┐
 *   │ label│ heading                              │
 *   │      │ left paras        colour + swatches  │
 *   ├──────┴──────────────────────────────────────┤
 *   │ [ image              ] [ image          ]   │
 *   ├──────────────────────┬──────────────────────┤
 *   │ typography           │ statement            │
 *   └──────────────────────┴──────────────────────┘
 */
export default function ProcessSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — label | heading + two columns */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className={cn(t.sideLabel, "xl:pt-160")}>
          <span className={t.label}>{d.label}</span>
        </div>

        <div className="px-24 pt-14 pb-48 md:px-40 md:pt-20 md:pb-64 xl:pt-140 xl:pr-160 xl:pb-105 xl:pl-98">
          <h2 data-reveal className={t.h2}>
            {d.heading}
          </h2>

          <div className="mt-28 grid grid-cols-1 gap-32 md:grid-cols-2 md:gap-40 xl:mt-74 xl:grid-cols-[771fr_619fr] xl:gap-0">
            <div className="xl:max-w-666">
              {d.left.map((text, i) => (
                <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-32")}>
                  {text}
                </p>
              ))}
            </div>

            <div className="xl:max-w-674">
              <p data-reveal className={t.body}>
                {d.colour}
              </p>

              {/* colour swatches */}
              <div data-reveal className="mt-24 grid grid-cols-5 xl:mt-45">
                {d.swatches.map((s) => (
                  <div
                    key={s.name}
                    className={cn(
                      "flex h-96 items-end px-8 pb-10 xl:h-150 xl:px-18 xl:pb-24",
                      !s.dark && "border border-black/15",
                    )}
                    style={{ backgroundColor: s.hex }}
                  >
                    <span
                      className={cn(
                        "text-[9px] leading-[1.25] uppercase tracking-[0.08em] xl:text-[length:max(9px,calc(var(--spacing)*16))]",
                        s.dark ? "text-white/85" : "text-[#38362e]/80",
                      )}
                    >
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* row 2 — two images */}
      <div className="grid grid-cols-1 gap-16 border-b p-16 md:grid-cols-[983fr_785fr] md:gap-24 md:p-24 xl:gap-38 xl:px-52 xl:py-45">
        {d.images.map((img, i) => (
          <Media
            key={i}
            media={img}
            className="aspect-[983/814] h-auto md:aspect-auto md:h-full md:min-h-400 xl:h-814"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ))}
      </div>

      {/* row 3 — typography | statement */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[955fr_965fr]">
        <div className="px-24 py-36 md:px-40 md:py-56 xl:pt-124 xl:pr-0 xl:pb-126 xl:pl-155">
          <p data-reveal className={cn(t.body, "xl:max-w-714")}>
            {d.typography}
          </p>
        </div>

        <div className="border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-56 xl:pt-124 xl:pr-0 xl:pb-126 xl:pl-148">
          <p data-reveal className={cn(t.lead, "xl:max-w-640")}>
            {d.statement}
          </p>
        </div>
      </div>
    </section>
  );
}