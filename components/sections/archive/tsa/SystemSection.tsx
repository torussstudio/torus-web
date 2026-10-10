import { cn } from "@/lib/utils";
import { tsaSystem as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import MarksSection from "../MarksSection";
import { t } from "../styles";

export default function SystemSection() {
  return (
    <section className={t.inner}>
      {/* HEADER */}
      <div className="grid grid-cols-1 border-b pb-48 xl:min-h-342 xl:grid-cols-[272fr_1648fr] xl:pb-0">
        <div className={cn(t.sideLabel, "xl:pt-119")}>
          <span className={t.label}>{d.label}</span>
        </div>

        <div className="grid grid-cols-1 px-24 md:grid-cols-2 md:gap-40 md:px-40 xl:gap-0 xl:grid-cols-[870fr_693fr] xl:pr-0 xl:pl-85">
          <h2 data-reveal className={cn(t.h2, "pt-12 xl:pt-93")}>
            <Lines lines={d.heading} />
          </h2>
          <p data-reveal className={cn(t.body, "pt-20 md:pt-12 xl:max-w-540 xl:pt-114")}>
            {d.intro}
          </p>
        </div>
      </div>

      {/* THREE LAYERS */}
      <div className="grid grid-cols-1 gap-36 border-b px-24 py-32 md:grid-cols-3 md:gap-20 md:px-40 md:py-40 xl:grid-cols-3 xl:gap-44 xl:px-50 xl:pt-51 xl:pb-45">
        {d.layers.map((layer, i) => (
          <div key={i}>
            <Media
              media={layer.image}
              className="aspect-[577/708] h-auto xl:aspect-auto xl:h-708"
              sizes="(max-width: 1023px) 100vw, 30vw"
            />
            <h3 data-reveal className={cn(t.lead, "mt-16 xl:mt-43")}>
              {layer.title}
            </h3>
            <p data-reveal className={cn(t.body, "mt-6 xl:mt-16 xl:max-w-560 xl:pl-10")}>
              <Lines lines={layer.text} />
            </p>
          </div>
        ))}
      </div>

      {/* NOTE */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className={cn(t.sideLabel, "xl:pt-94")}>
          <span className={t.label}>{d.noteLabel}</span>
        </div>
        <p data-reveal className={cn(t.body, "px-24 pt-14 pb-36 md:max-w-[880px] md:px-40 md:pt-20 md:pb-48 xl:max-w-1276 xl:pt-90 xl:pr-0 xl:pb-92 xl:pl-401")}>
          {d.note}
        </p>
      </div>

      {/* SIGNATURE + SEAL */}
      <MarksSection data={d} />
    </section>
  );
}