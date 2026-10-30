import { cn } from "@/lib/utils";
import { medtechProfile as d } from "@/lib/constants";
import IndexTag from "../IndexTag";
import Lines from "../Lines";
import Media from "../Media";
import { PairImageRow } from "../ImageRows";
import SideLabel from "../SideLabel";
import { t } from "../styles";

/**
 * MedTech "Company Profile"
 *   ┌──────┬────────────────────┬──────────────┐
 *   │ label│ heading + intro    │ body         │
 *   ├──────┴────────────────────┴──────────────┤
 *   │ [ image ]   [ image ]   [ image ]        │
 *   │ statement                                │
 *   │ [01] [02] [03] [04]                      │
 *   │ [05] [06] [07] [08]                      │
 *   ├─────────────────────┬────────────────────┤
 *   │ image               │ image              │
 *   ├─────────────────────┴────────────────────┤
 *   │ THE INTENTION        paragraph           │
 *   └──────────────────────────────────────────┘
 */
export default function ProfileSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — label | heading + intro | body */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label={d.label} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[852fr_796fr]">
          <div className="px-24 pt-14 md:px-40 md:py-64 xl:pt-146 xl:pr-0 xl:pb-146 xl:pl-98">
            <h2 data-reveal className={t.h2}>
              <Lines lines={d.heading} />
            </h2>
            <p data-reveal className={cn(t.intro, "mt-24 xl:mt-70 xl:max-w-610")}>
              {d.intro}
            </p>
          </div>

          <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 md:self-end xl:pt-0 xl:pr-160 xl:pb-116 xl:pl-0">
            <p data-reveal className={cn(t.body, "xl:max-w-600")}>
              {d.body}
            </p>
          </div>
        </div>
      </div>

      {/* row 2 — images, statement, 4 x 2 grid */}
      <div className="border-b py-48 md:py-64 xl:pt-110 xl:pb-120">
        {/* three images, same as Exult's content row */}
        <div className="grid grid-cols-1 gap-24 px-24 md:grid-cols-3 md:gap-20 md:px-40 xl:gap-44 xl:px-50">
          {d.gallery.map((img, i) => (
            <Media
              key={i}
              media={img}
              className="aspect-[577/708] h-auto xl:aspect-auto xl:h-708"
              sizes="(max-width: 1023px) 100vw, 30vw"
            />
          ))}
        </div>

        <div className="mt-40 px-24 md:mt-56 md:px-40 xl:mt-124 xl:px-152">
          <p data-reveal className={cn(t.lead, "xl:max-w-1300")}>
            {d.statement}
          </p>

          <ul className="mt-32 grid grid-cols-2 border-t md:mt-48 md:grid-cols-4 xl:mt-88">
            {d.points.map((point, i) => (
              <li
                key={point}
                data-reveal
                className={cn(
                  "border-b py-20 pr-12 md:pt-24 md:pb-32 xl:min-h-256 xl:pt-52 xl:pr-40 xl:pb-48",
                  // phone/tablet: 2 columns
                  i % 2 === 1 ? "border-l pl-16" : "pl-0",
                  // md+: 4 columns
                  i % 4 === 0 ? "md:border-l-0 md:pl-0" : "md:border-l md:pl-24 xl:pl-38",
                )}
              >
                <IndexTag index={i} className={t.tag} />
                <p className="mt-16 text-[16px] leading-[1.35] tracking-[0.05em] xl:mt-84 xl:max-w-340 xl:text-[length:max(15px,calc(var(--spacing)*30))]">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* row 3 — two images side by side */}
      <PairImageRow
        items={d.images}
        className="xl:p-52"
        aspect="aspect-[856/1000]"
        imageClassName="xl:h-1000"
      />

      {/* row 4 — THE INTENTION */}
      <div className="grid grid-cols-1 border-b px-24 py-48 md:grid-cols-[1fr_2fr] md:px-40 md:py-64 xl:grid-cols-[824fr_1096fr] xl:px-0 xl:pt-116 xl:pb-124">
        <span data-reveal className={cn(t.label, "xl:pl-154")}>
          {d.intentionLabel}
        </span>
        <p data-reveal className={cn(t.body, "mt-16 md:mt-0 xl:max-w-860")}>
          {d.intention}
        </p>
      </div>
    </section>
  );
}
