import { cn } from "@/lib/utils";
import { medtechReflections as d } from "@/lib/constants";
import Accented from "../Accented";
import Statement from "../Statement";
import { t } from "../styles";

/**
 * MedTech "Reflections" (MedTech-only layout — not the shared ../ReflectionsSection)
 *   ┌─────────────(─┬────────────────────────────┐
 *   │ Reflections  )│ lead + note                │
 *   ├───────────────┼────────────────────────────┤
 *   │ team          │ leadIn + statement         │
 *   └───────────────┴────────────────────────────┘
 */
export default function ReflectionsSection() {
  return (
    <section className={cn(t.inner, "border-b")}>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] xl:grid-cols-[698fr_1222fr]">
        {/* row 1, left — heading inside a half circle */}
        <div className="relative flex items-center px-24 pt-48 md:min-h-480 md:px-40 md:py-0 xl:min-h-782 xl:pl-168">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden rounded-r-full border border-l-0 md:block"
          />
          <h2 data-reveal className={cn(t.h2, "relative")}>
            {d.heading}
          </h2>
        </div>

        {/* row 1, right */}
        <div className="px-24 pt-24 pb-48 md:border-l md:px-40 md:py-64 xl:pt-174 xl:pr-80 xl:pb-178 xl:pl-122">
          <p data-reveal className={cn(t.lead, "xl:max-w-960 xl:text-[length:max(22px,calc(var(--spacing)*42))]")}>
            {d.lead}
          </p>
          <p data-reveal className={cn(t.body, "mt-24 xl:mt-74 xl:max-w-780")}>
            <Accented parts={d.note} />
          </p>
        </div>

        {/* row 2, left */}
        <div className="border-t px-24 py-36 md:px-40 md:py-56 xl:pt-132 xl:pr-60 xl:pb-136 xl:pl-168">
          <p data-reveal className={cn(t.body, "xl:max-w-450")}>
            {d.team}
          </p>
        </div>

        {/* row 2, right */}
        <div className="border-t px-24 py-36 md:border-l md:px-40 md:py-56 xl:pt-132 xl:pr-80 xl:pb-136 xl:pl-122">
          <p data-reveal className={cn(t.body, "text-[#999688]")}>
            {d.leadIn}
          </p>
          <Statement lines={d.statement} className={cn(t.statement, "mt-20 xl:mt-68")} />
        </div>
      </div>
    </section>
  );
}
