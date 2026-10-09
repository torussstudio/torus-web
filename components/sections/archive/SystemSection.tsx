import { cn } from "@/lib/utils";
import { archiveSystem as d } from "@/lib/constants";
import Lines from "./Lines";
import Media from "./Media";
import { t } from "./styles";

// small square + centred caption under the signature / seal blocks
const caption = cn(
  t.body,
  "relative mt-14 text-center xl:mt-33",
  "before:absolute before:top-1/2 before:left-0 before:size-7 before:-translate-y-1/2 before:bg-[#38362e] before:content-['']",
  "xl:before:size-[max(7px,calc(var(--spacing)*11))]",
);

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
              {layer.text}
            </p>
          </div>
        ))}
      </div>

      {/* NOTE */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div aria-hidden="true" className="hidden xl:block xl:border-r" />
        <p data-reveal className={cn(t.body, "px-24 py-36 md:max-w-[880px] md:px-40 md:py-48 xl:max-w-1276 xl:pt-90 xl:pr-0 xl:pb-92 xl:pl-401")}>
          {d.note}
        </p>
      </div>

      {/* SIGNATURE + SEAL */}
      <div className="grid grid-cols-1 border-b md:grid-cols-[1.6fr_1fr] xl:grid-cols-[1171fr_749fr]">
        <div className="p-24 md:p-32 xl:pt-49 xl:pr-0 xl:pb-42 xl:pl-50">
          <Media
            media={d.signature.image}
            className="aspect-[1070/878] h-auto xl:aspect-auto xl:h-878 xl:w-1070"
            sizes="(max-width: 1023px) 100vw, 56vw"
          />
          <p className={cn(caption, "xl:w-1070")}>{d.signature.caption}</p>
        </div>

        <div className="border-t p-24 md:border-t-0 md:border-l md:p-32 xl:border-t-0 xl:border-l xl:pt-49 xl:pr-0 xl:pb-42 xl:pl-53">
          <Media
            media={d.seal.image}
            className="aspect-square h-auto xl:aspect-auto xl:h-648 xl:w-646"
            sizes="(max-width: 1023px) 100vw, 34vw"
          />
          <p className={cn(caption, "xl:w-646")}>{d.seal.caption}</p>
        </div>
      </div>
    </section>
  );
}
