import { cn } from "@/lib/utils";
import { medtechTouchpoints as d } from "@/lib/constants";
import Lines from "../Lines";
import { PairImageRow, TextColumnsRow, WideImageRow } from "../ImageRows";
import SideLabel from "../SideLabel";
import { t } from "../styles";

/**
 * MedTech "Touchpoints"
 *   ┌──────┬──────────────┬─────────────────────┐
 *   │ label│ heading      │ body paras          │
 *   ├──────┴──────────────┴─────────────────────┤
 *   │               website image               │
 *   ├─────────────────────┬─────────────────────┤
 *   │ social              │ aligned             │
 *   ├─────────────────────┼─────────────────────┤
 *   │ [ landscape ]       │ [ landscape ]       │
 *   └─────────────────────┴─────────────────────┘
 */
export default function TouchpointsSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — label | heading | body */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label={d.label} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[727fr_921fr]">
          <div className="px-24 pt-14 md:px-40 md:py-64 xl:pt-115 xl:pr-0 xl:pb-113 xl:pl-98">
            <h2 data-reveal className={t.h2}>
              <Lines lines={d.heading} />
            </h2>
          </div>

          <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-125 xl:pr-117 xl:pb-113 xl:pl-0">
            <div className="xl:max-w-804">
              {d.body.map((text, i) => (
                <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-31")}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* row 2 — website image */}
      <WideImageRow
        media={d.website}
        className="xl:px-48 xl:py-46"
        aspect="aspect-[1824/1000]"
        imageClassName="xl:h-1000"
      />

      {/* row 3 — social | aligned */}
      <TextColumnsRow
        left={d.social}
        right={d.aligned}
        className="md:py-56 xl:pt-127 xl:pb-127"
        leftClassName="xl:pl-151 xl:*:max-w-690"
        rightClassName="xl:pl-146 xl:*:max-w-605"
      />

      {/* row 4 — two landscape images, one per half */}
      <PairImageRow
        items={d.posts}
        className="xl:px-50 xl:py-46"
        aspect="aspect-[860/560]"
        imageClassName="xl:h-560"
      />
    </section>
  );
}
