import { cn } from "@/lib/utils";
import { medtechPartnership as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import SideLabel from "../SideLabel";
import Statement from "../Statement";
import { t } from "../styles";

/**
 * MedTech "The Direction"
 *   ┌──────┬──────────────────────┬──────────────┐
 *   │      │ heading       intro  │              │
 *   │ label├──────────────────────┼──────────────┤
 *   │      │ image                │ body         │
 *   ├──────┴──────────────────────┴──────────────┤
 *   │        balance line + maroon statement     │
 *   └────────────────────────────────────────────┘
 */
export default function PartnershipSection() {
  return (
    <section className={cn(t.inner, "border-b")}>
      <div className="grid grid-cols-1 xl:grid-cols-[272fr_1648fr]">
        {/* vertical side label, spans rows 1 + 2 */}
        <SideLabel label={d.label} />

        <div>
          {/* row 1 — heading + intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center xl:min-h-427 xl:grid-cols-[858fr_790fr]">
            <h2 data-reveal className={cn(t.h2, "px-24 pt-14 md:px-40 md:py-48 xl:py-0 xl:pr-0 xl:pl-97")}>
              <Lines lines={d.heading} />
            </h2>

            <p
              data-reveal
              className={cn(t.body, "px-24 pt-24 pb-48 md:px-40 md:py-48 xl:max-w-650 xl:p-0")}
            >
              {d.intro}
            </p>
          </div>

          {/* row 2 — image + body */}
          <div className="grid grid-cols-1 border-t md:grid-cols-2 xl:grid-cols-[949fr_699fr]">
            <div className="p-16 md:p-24 xl:px-40 xl:py-44">
              <Media
                media={d.image}
                className="aspect-[876/632] h-auto xl:aspect-auto xl:h-632"
                sizes="(max-width: 767px) 100vw, 45vw"
              />
            </div>

            <div className="flex items-center border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-48 xl:py-0 xl:pr-80 xl:pl-81">
              <p data-reveal className={cn(t.body, "xl:max-w-484")}>
                {d.body}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* row 3 — full width, centred */}
      <div className="border-t px-24 py-56 text-center md:px-40 md:py-72 xl:pt-140 xl:pb-160">
        <p
          data-reveal
          className="text-[14px] leading-[1.4] tracking-[0.05em] text-[#999688] xl:text-[length:max(13px,calc(var(--spacing)*22))]"
        >
          {d.balance}
        </p>

        <Statement
          lines={d.statement}
          className={cn(t.statement, t.accent, "mx-auto mt-24 max-w-[22ch] md:max-w-none xl:mt-48")}
        />
      </div>
    </section>
  );
}
