import { cn } from "@/lib/utils";
import { exultImpact as d } from "@/lib/constants";
import { t } from "../styles";

export default function ImpactSection() {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]")}>
      <div className={cn(t.sideLabel, "xl:pt-118")}>
        <span className={t.label}>{d.label}</span>
      </div>

      <div className="px-24 pt-16 pb-48 md:px-40 md:pb-64 xl:pt-92 xl:pr-0 xl:pb-107 xl:pl-247">
        <p
          data-reveal
          className="text-[length:clamp(40px,11vw,64px)] leading-[1.1] tracking-[0.05em] md:text-[length:7.4vw] md:leading-[1.2] md:whitespace-nowrap xl:text-[length:max(40px,calc(var(--spacing)*120))]"
        >
          {d.stat}
        </p>
        <p data-reveal className={cn(t.body, "mt-20 md:max-w-[760px] xl:mt-52 xl:max-w-895")}>
          {d.body}
        </p>
      </div>
    </section>
  );
}
