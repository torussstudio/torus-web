import { cn } from "@/lib/utils";
import { archivePackaging as d } from "@/lib/constants";
import Lines from "./Lines";
import Media from "./Media";
import { t } from "./styles";

export default function PackagingSection() {
  return (
    <section className={t.inner}>
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className={cn(t.sideLabel, "xl:pt-100")}>
          <span className={t.label}>{d.label}</span>
        </div>

        <div className="px-24 pt-12 pb-48 md:px-40 md:pb-64 xl:pt-78 xl:pr-0 xl:pb-90 xl:pl-89">
          <h2 data-reveal className={t.h2}>
            <Lines lines={d.heading} />
          </h2>

          <div className="mt-24 grid grid-cols-1 gap-18 md:mt-36 md:grid-cols-2 md:gap-40 xl:mt-90 xl:grid-cols-[767fr_792fr] xl:gap-0">
            <p data-reveal className={cn(t.body, "xl:max-w-630")}>
              {d.left}
            </p>
            <div className="xl:max-w-637">
              {d.right.map((text, i) => (
                <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-34")}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b p-16 md:p-24 xl:px-50 xl:pt-44 xl:pb-41">
        <Media
          media={d.wide}
          className="aspect-[1820/1052] h-auto xl:aspect-auto xl:h-1052"
          sizes="(max-width: 1023px) 100vw, 95vw"
        />
      </div>

      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        {d.pair.map((img, i) => (
          <div
            key={i}
            className={cn(
              "p-16 md:p-24 xl:pt-49 xl:pb-50",
              i === 0
                ? "xl:pr-52 xl:pl-50"
                : "border-t md:border-t-0 md:border-l xl:pr-50 xl:pl-52",
            )}
          >
            <Media
              media={img}
              className="aspect-[858/1086] h-auto xl:aspect-auto xl:h-1086"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
