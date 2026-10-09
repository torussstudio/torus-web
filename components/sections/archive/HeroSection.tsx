import { cn } from "@/lib/utils";
import { archiveHero as p } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

export default function HeroSection() {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-2")}>
      <div className="border-b p-16 md:border-r md:border-b-0 md:p-24 xl:border-r xl:border-b-0 xl:px-42 xl:pt-37 xl:pb-42">
        <Media
          media={p.heroImage}
          className="aspect-[876/862] h-auto xl:aspect-auto xl:h-862"
          sizes="(max-width: 1023px) 100vw, 46vw"
          priority
        />
      </div>

      <div className="grid xl:grid-rows-[573fr_135fr_98fr_135fr]">
        <div className="px-24 py-40 md:px-40 md:py-48 xl:pt-158 xl:pr-58 xl:pb-0 xl:pl-62">
          <div
            data-reveal
            className="flex items-center gap-10 text-[12px] leading-[1.2] tracking-[0.1em] uppercase text-[#999688] xl:gap-12 xl:text-[length:max(11px,calc(var(--spacing)*17.6))]"
          >
            <span>{p.index}</span>
            <span aria-hidden="true" className="h-px w-40 bg-[#999588] xl:w-53" />
            <span>Archive</span>
          </div>

          <h1 data-reveal className={cn(t.h2, "mt-20 xl:mt-40 xl:-ml-8")}>
            {p.title}
          </h1>

          <p data-reveal className={cn(t.body, "mt-20 xl:mt-40 xl:max-w-590")}>
            {p.intro}
          </p>
        </div>

        <div className="border-t px-24 py-20 md:px-40 xl:px-58 xl:pt-36 xl:pb-0">
          <p className={t.body}>
            {p.services.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-2 border-t">
          <div className={cn(t.body, "flex items-center px-24 py-20 md:px-40 xl:px-58 xl:py-0")}>
            {p.location}
          </div>
          <div className={cn(t.body, "flex items-center border-l px-24 py-20 md:px-40 xl:py-0 xl:pr-58 xl:pl-66")}>
            {p.period}
          </div>
        </div>

        <div className="border-t px-24 py-20 md:px-40 xl:px-58 xl:pt-36 xl:pb-0">
          <p className={cn(t.body, "xl:max-w-680")}>{p.team}</p>
        </div>
      </div>
    </section>
  );
}
