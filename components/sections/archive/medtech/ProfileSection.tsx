import { cn } from "@/lib/utils";
import { medtechProfile as d } from "@/lib/constants";
import Lines from "../Lines";
import { TextColumnsRow } from "../ImageRows";
import { t } from "../styles";

/**
 * MedTech "Company Profile"
 *   ┌──────┬────────────────────┬──────────────┐
 *   │ label│ heading + intro    │ body         │
 *   ├──────┴────────────────────┴──────────────┤
 *   │ statement                                │
 *   │ [01] [02] [03] [04]                      │
 *   │ [05] [06] [07] [08]                      │
 *   ├─────────────────────┬────────────────────┤
 *   │ left                │ right              │
 *   └─────────────────────┴────────────────────┘
 */
export default function ProfileSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — label | heading + intro | body */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className="flex items-center px-24 pt-48 md:px-40 md:pt-64 xl:justify-center xl:border-r xl:p-0">
          <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
            {d.label}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[852fr_796fr]">
          <div className="px-24 pt-14 md:px-40 md:py-64 xl:pt-146 xl:pr-0 xl:pb-146 xl:pl-98">
            <h2 data-reveal className={t.h2}>
              <Lines lines={d.heading} />
            </h2>
            <p
              data-reveal
              className="mt-24 text-[19px] leading-[1.35] tracking-[0.05em] xl:mt-70 xl:max-w-610 xl:text-[length:max(17px,calc(var(--spacing)*34))]"
            >
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

      {/* row 2 — statement + 4 x 2 grid */}
      <div className="border-b px-24 py-48 md:px-40 md:py-64 xl:px-152 xl:pt-124 xl:pb-120">
        <p data-reveal className={cn(t.lead, "xl:max-w-1090 xl:text-[length:max(20px,calc(var(--spacing)*38))]")}>
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
              <span className="block text-[10px] tracking-[0.05em] text-[#999688] whitespace-pre xl:text-[length:max(10px,calc(var(--spacing)*18))]">
                {`[ ${String(i + 1).padStart(2, "0")} ]`}
              </span>
              <p className="mt-16 text-[16px] leading-[1.35] tracking-[0.05em] xl:mt-84 xl:max-w-340 xl:text-[length:max(15px,calc(var(--spacing)*30))]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom two-column row */}
      <TextColumnsRow
        left={d.left}
        right={d.right}
        className="xl:pt-151 xl:pb-131"
        leftClassName="xl:pl-154 xl:*:max-w-553"
        rightClassName="xl:pl-158 xl:*:max-w-614"
      />
    </section>
  );
}