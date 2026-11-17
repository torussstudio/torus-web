import Image from "next/image";
import { cn } from "@/lib/utils";
import { medtechProcess as d } from "@/lib/constants";
import Media from "../Media";
import { t } from "../styles";

/**
 * MedTech "Process"
 *   ┌──────┬──────────────────────────────────────┐
 *   │ label│ heading                              │
 *   │      │ left paras        colour + palette   │
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

              {/* colour palette */}
              <Image
                data-reveal
                src={d.palette.src}
                alt={d.palette.alt}
                width={d.palette.width}
                height={d.palette.height}
                unoptimized
                className="mt-24 h-auto w-full max-w-[420px] xl:mt-45 xl:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* row 2 — two images */}
      <div className="grid grid-cols-1 gap-16 border-b p-16 md:grid-cols-2 md:gap-24 md:p-24 xl:gap-38 xl:px-52 xl:py-45">
        {d.images.map((img, i) => (
          <Media
            key={i}
            media={img}
            className="aspect-[4117/3336] h-auto"
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