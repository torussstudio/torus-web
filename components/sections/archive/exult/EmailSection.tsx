import { cn } from "@/lib/utils";
import { exultEmail as d } from "@/lib/constants";
import Lines from "../Lines";
import { LabeledImageRow, PairImageRow, WideImageRow } from "../ImageRows";
import { t } from "../styles";

export default function EmailSection() {
  return (
    <section className={t.inner}>
      <div className="border-b px-24 py-48 md:px-40 md:py-64 xl:px-154 xl:pt-101 xl:pb-101">
        <p
          data-reveal
          className="text-[length:clamp(30px,7vw,48px)] leading-[1.15] tracking-[0.05em] md:text-[length:5.4vw] xl:text-[length:max(36px,calc(var(--spacing)*95))] xl:leading-[1.2]"
        >
          <Lines lines={d.statement} />
        </p>

        <div className="mt-28 grid grid-cols-1 gap-18 md:mt-40 md:grid-cols-2 md:gap-48 xl:mt-86 xl:grid-cols-[1030fr_582fr] xl:gap-0">
          <p data-reveal className={cn(t.body, "xl:max-w-770")}>
            {d.left}
          </p>
          <p data-reveal className={cn(t.body, "xl:max-w-591")}>
            {d.right}
          </p>
        </div>
      </div>

      <WideImageRow media={d.wide} className="xl:pt-44 xl:pb-52" imageClassName="xl:h-1050" />
      <PairImageRow items={d.pair} />
      <LabeledImageRow media={d.showcase} />
    </section>
  );
}
