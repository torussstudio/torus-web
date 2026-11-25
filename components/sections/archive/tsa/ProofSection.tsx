import { cn } from "@/lib/utils";
import { tsaProof as d } from "@/lib/constants";
import Lines from "../Lines";
import IndexTag from "../IndexTag";
import LoopingImageCarousel from "../LoopingImageCarousel";
import { t } from "../styles";

export default function ProofSection() {
  return (
    <section className={cn(t.inner, "pt-48 pb-0 md:pt-64 md:pb-0 xl:pt-134 xl:pb-0")}>
      <div className="grid grid-cols-1 px-24 md:grid-cols-2 md:gap-48 md:px-40 xl:gap-0 xl:grid-cols-[1007fr_607fr] xl:px-152">
        <div>
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
          <p data-reveal className={cn(t.body, "mt-18 xl:mt-42 xl:max-w-760")}>
            {d.body}
          </p>
        </div>

        <ul className="mt-32 self-start border-t md:mt-48 xl:mt-76">
          {d.points.map((point, i) => (
            <li
              key={point}
              data-reveal
              className="flex h-60 items-center justify-between border-b xl:h-92.5"
            >
              <span className="text-[18px] leading-[1.2] tracking-[0.05em] xl:text-[length:max(18px,calc(var(--spacing)*36))]">
                {point}
              </span>
              <IndexTag index={i} className={t.tagList} />
            </li>
          ))}
        </ul>
      </div>

      <p
        data-reveal
        className="mt-48 px-24 text-[length:clamp(34px,8vw,64px)] leading-[1.1] tracking-[0.05em] md:mt-64 md:px-40 md:text-[length:6.8vw] md:leading-[1.2] md:whitespace-nowrap xl:mt-175 xl:pr-0 xl:pl-152 xl:text-[length:max(40px,calc(var(--spacing)*120))] xl:leading-[1.2] xl:whitespace-nowrap"
      >
        {d.statement}
      </p>

      <div className="mt-20 grid grid-cols-1 gap-18 px-24 md:mt-28 md:grid-cols-2 md:gap-48 md:px-40 xl:mt-70 xl:grid-cols-[822fr_736fr] xl:gap-0 xl:pr-0 xl:pl-152">
        <p data-reveal className={cn(t.body, "xl:max-w-512")}>
          {d.statementNote}
        </p>
        <p data-reveal className={cn(t.body, "xl:max-w-588")}>
          {d.summary}
        </p>
      </div>

      <LoopingImageCarousel items={d.images} />
    </section>
  );
}
