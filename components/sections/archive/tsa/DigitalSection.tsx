import { cn } from "@/lib/utils";
import { tsaDigital as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
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

        <div className="px-24 pt-24 pb-48 md:border-l md:px-40 md:pt-12 md:pb-64 xl:border-l xl:pt-115 xl:pr-0 xl:pb-103 xl:pl-112">
          {d.body.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, "xl:max-w-654", i > 0 && "mt-18 xl:mt-59")}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="border-b p-16 md:p-24 xl:px-50 xl:pt-47 xl:pb-40">
        <Media
          media={d.wide}
          className="aspect-[1820/1052] h-auto xl:aspect-auto xl:h-1052"
          sizes="(max-width: 1023px) 100vw, 95vw"
        />
      </div>

      <div className="grid grid-cols-1 border-b md:grid-cols-3 xl:grid-cols-[642fr_636fr_642fr]">
        {d.trio.map((img, i) => (
          <div
            key={i}
            className={cn(
              "p-16 md:p-20 xl:px-44 xl:py-42",
              i === 0 && "xl:pl-50",
              i === d.trio.length - 1 && "xl:pr-50",
              i > 0 && "border-t md:border-t-0 md:border-l",
            )}
          >
            <Media
              media={img}
              className="aspect-[548/694] h-auto xl:aspect-auto xl:h-694"
              sizes="(max-width: 1023px) 100vw, 29vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
