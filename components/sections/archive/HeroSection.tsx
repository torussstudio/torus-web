import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

export type HeroData = {
  title: string;
  intro: string;
  /** one entry per line; 3+ lines -> taller, centred services row (MedTech) */
  services: string[];
  /** 2 items -> left-aligned halves (TSA), 3 items -> centred thirds (Exult) */
  meta: string[];
  /** "wide-last" -> 3rd meta cell wider, every item on one line (MedTech) */
  metaLayout?: "wide-last";
  team: string;
  heroImage: ArchiveMedia;
};

export default function HeroSection({ data: p, index }: { data: HeroData; index: string }) {
  const thirds = p.meta.length >= 3;
  // 3 lines of services don't fit the 135 row, so that row takes 60 units
  // from the top row (total stays 941 = the image column's height)
  const tallServices = p.services.length >= 3;
  // a long meta item (e.g. "Healthcare Solutions Providers") gets the wide 3rd column
  const wideLast = p.metaLayout === "wide-last" || p.meta.some((m) => m.length > 24);

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

      <div
        className={cn(
          "grid",
          tallServices
            ? "xl:grid-rows-[513fr_195fr_98fr_135fr]"
            : "xl:grid-rows-[573fr_135fr_98fr_135fr]",
        )}
      >
        <div className="px-24 py-40 md:px-40 md:py-48 xl:pt-158 xl:pr-58 xl:pb-0 xl:pl-62">
          <div
            data-reveal
            className="flex items-center gap-10 text-[12px] leading-[1.2] tracking-[0.1em] uppercase text-[#999688] xl:gap-12 xl:text-[length:max(11px,calc(var(--spacing)*17.6))]"
          >
            <span>{index}</span>
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

        <div
          className={cn(
            "border-t px-24 py-20 md:px-40 xl:px-58",
            tallServices ? "xl:flex xl:items-center xl:py-0" : "xl:pt-36 xl:pb-0",
          )}
        >
          <p className={t.body}>
            {p.services.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div
          className={cn(
            "grid border-t",
            thirds
              ? cn(
                  "grid-cols-3",
                  wideLast
                    ? "xl:grid-cols-[164fr_195fr_321fr]"
                    : "xl:grid-cols-[326fr_334fr_300fr]",
                )
              : "grid-cols-2",
          )}
        >
          {p.meta.map((item, i) => (
            <div
              key={i}
              className={cn(
                t.body,
                "flex items-center py-20 xl:py-0",
                i > 0 && "border-l",
                wideLast && "xl:whitespace-nowrap",
                thirds
                  ? "justify-center px-8 text-center md:px-16"
                  : i === 0
                    ? "px-24 md:px-40 xl:px-58"
                    : "px-24 md:px-40 xl:pr-58 xl:pl-66",
                // MedTech: line the first item up with the services / team text
                wideLast && i === 0 && "xl:justify-start xl:pl-58 xl:text-left",
              )}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="border-t px-24 py-20 md:px-40 xl:px-58 xl:pt-36 xl:pb-0">
          <p className={cn(t.body, "xl:max-w-720")}>{p.team}</p>
        </div>
      </div>
    </section>
  );
}