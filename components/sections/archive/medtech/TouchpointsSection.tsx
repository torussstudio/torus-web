import { cn } from "@/lib/utils";
import { medtechTouchpoints as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

/**
 * MedTech "Touchpoints"
 *   ┌──────┬──────────────┬─────────────────────┐
 *   │ label│ heading      │ body paras          │
 *   ├──────┴──────────────┴─────────────────────┤
 *   │               website image               │
 *   ├─────────────────────┬─────────────────────┤
 *   │ social              │ aligned             │
 *   ├─────────────────────┼─────────────────────┤
 *   │ [ landscape ]       │ [ landscape ]       │
 *   └─────────────────────┴─────────────────────┘
 */
export default function TouchpointsSection() {
  return (
    <section className={t.inner}>
      {/* row 1 — label | heading | body */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className="flex items-center px-24 pt-48 md:px-40 md:pt-64 xl:justify-center xl:border-r xl:p-0">
          <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
            {d.label}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[727fr_921fr]">
          <div className="px-24 pt-14 md:px-40 md:py-64 xl:pt-115 xl:pr-0 xl:pb-113 xl:pl-98">
            <h2 data-reveal className={t.h2}>
              <Lines lines={d.heading} />
            </h2>
          </div>

          <div className="px-24 pt-24 pb-48 md:px-40 md:py-64 xl:pt-125 xl:pr-117 xl:pb-113 xl:pl-0">
            <div className="xl:max-w-804">
              {d.body.map((text, i) => (
                <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-31")}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* row 2 — website image */}
      <div className="border-b p-16 md:p-24 xl:px-48 xl:py-46">
        <Media
          media={d.website}
          className="aspect-[1824/1000] h-auto xl:aspect-auto xl:h-1000"
          sizes="100vw"
        />
      </div>

      {/* row 3 — social | aligned */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        <div className="px-24 py-36 md:px-40 md:py-56 xl:pt-127 xl:pr-80 xl:pb-127 xl:pl-151">
          <p data-reveal className={cn(t.body, "xl:max-w-690")}>
            {d.social}
          </p>
        </div>

        <div className="border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-56 xl:pt-127 xl:pr-80 xl:pb-127 xl:pl-146">
          <p data-reveal className={cn(t.body, "xl:max-w-605")}>
            {d.aligned}
          </p>
        </div>
      </div>

      {/* row 4 — two landscape images, one per half */}
      <div className="grid grid-cols-1 border-b md:grid-cols-2">
        {d.posts.map((img, i) => (
          <div
            key={i}
            className={cn("p-16 md:p-24 xl:px-50 xl:py-46", i > 0 && "border-t md:border-t-0 md:border-l")}
          >
            <Media
              media={img}
              className="aspect-[860/560] h-auto xl:aspect-auto xl:h-560"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}