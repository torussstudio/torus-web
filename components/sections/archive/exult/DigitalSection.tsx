import { cn } from "@/lib/utils";
import { exultDigital as d } from "@/lib/constants";
import Lines from "../Lines";
import { TextColumnsRow, TrioImageRow, WideImageRow } from "../ImageRows";
import { t } from "../styles";

export default function DigitalSection() {
  return (
    <section className={t.inner}>
      <div className="grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[272fr_725fr_923fr]">
        <div className={cn(t.sideLabel, "md:col-span-2 xl:col-span-1 xl:pt-118")}>
          <span className={t.label}>{d.label}</span>
        </div>

        <h2 data-reveal className={cn(t.h2, "px-24 pt-12 md:px-40 xl:pt-93 xl:pr-0 xl:pl-85")}>
          <Lines lines={d.heading} />
        </h2>

        <div className="px-24 pt-24 pb-48 md:border-l md:px-40 md:pt-12 md:pb-64 xl:border-l xl:pt-95 xl:pr-0 xl:pb-95 xl:pl-112 xl:*:max-w-680">
          <p data-reveal className={t.body}>
            {d.leadIn}
          </p>
          <p data-reveal className={cn(t.lead, "mt-16 xl:mt-41")}>
            {d.highlight}
          </p>
          <p data-reveal className={cn(t.body, "mt-16 xl:mt-40 xl:max-w-655!")}>
            {d.body}
          </p>
        </div>
      </div>

      <WideImageRow media={d.wide} className="xl:pt-48 xl:pb-52" imageClassName="xl:h-1050" />
      <TextColumnsRow left={d.left} right={d.right} />
      <TrioImageRow items={d.trio} />
    </section>
  );
}
