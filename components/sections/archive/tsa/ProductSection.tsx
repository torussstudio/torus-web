import { cn } from "@/lib/utils";
import { tsaProduct as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function ProductSection() {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b px-24 py-48 md:grid-cols-2 md:gap-40 md:px-40 md:py-64 xl:grid-cols-[812fr_723fr] xl:gap-81 xl:px-152 xl:pt-106 xl:pb-130")}>
      {/* sticky on md+ (two columns): stays in view while the right column scrolls */}
      <div className="md:sticky md:top-96 md:self-start xl:top-110">
        <span data-reveal className={t.label}>
          {d.label}
        </span>
        <Media
          media={d.imageMain}
          className="mt-16 aspect-[812/1150] h-auto xl:mt-52 xl:aspect-auto xl:h-1150"
          sizes="(max-width: 1023px) 100vw, 43vw"
        />
      </div>

      <div className="pt-32 md:pt-36 xl:pt-65">
        <h2 data-reveal className={t.h2}>
          <Lines lines={d.heading} />
        </h2>

        {/* design uses Clash Grotesk Medium, which isn't in the project yet —
            a hairline stroke stands in until the Medium font file is added */}
        <p data-reveal className={cn(t.body, "mt-16 [-webkit-text-stroke:0.35px_currentColor] xl:mt-51")}>
          {d.subheading}
        </p>

        <div className="mt-16 xl:mt-41 xl:max-w-718">
          {d.body.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-47")}>
              {text}
            </p>
          ))}
        </div>

        <Media
          media={d.imageSecondary}
          className="mt-32 aspect-[724/666] h-auto xl:mt-82 xl:aspect-auto xl:h-666"
          sizes="(max-width: 1023px) 100vw, 38vw"
        />
      </div>
    </section>
  );
}