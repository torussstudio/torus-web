import { cn } from "@/lib/utils";
import { exultIdentity as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function IdentitySection() {
  return (
    <section className={cn(t.inner, "border-b px-24 py-48 md:px-40 md:py-64 xl:px-152 xl:pt-98 xl:pb-108")}>
      <div className="text-center">
        <span data-reveal className={t.label}>
          {d.label}
        </span>
        <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-15")}>
          <Lines lines={d.heading} />
        </h2>
        <div className="mx-auto mt-24 md:max-w-[760px] xl:mt-74 xl:max-w-1110">
          {d.intro.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-32")}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 gap-12 md:mt-48 md:grid-cols-3 md:gap-16 xl:mt-123 xl:gap-26">
        {d.images.map((img, i) => (
          <Media
            key={i}
            media={img}
            className="aspect-[522/646] h-auto xl:aspect-auto xl:h-646"
            sizes="(max-width: 1023px) 100vw, 28vw"
          />
        ))}
      </div>

      <div className="mt-32 grid grid-cols-1 gap-18 md:mt-48 md:grid-cols-2 md:gap-40 xl:mt-88 xl:grid-cols-[893fr_723fr] xl:gap-0">
        <p data-reveal className={cn(t.body, "xl:max-w-728")}>
          {d.left}
        </p>
        <div className="xl:max-w-728">
          {d.right.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-16 xl:mt-34")}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
