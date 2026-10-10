import { cn } from "@/lib/utils";
import { tsaIdentity as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function IdentitySection() {
  return (
    <section className={cn(t.inner, "border-b px-24 py-48 md:px-40 md:py-64 xl:px-152 xl:pt-113 xl:pb-127")}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 xl:gap-0 xl:grid-cols-[893fr_723fr]">
        <div>
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="pt-24 md:pt-36 xl:max-w-724 xl:pt-71">
          {d.body.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-49")}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <Media
        media={d.image}
        className="mt-32 aspect-[1616/1034] h-auto md:mt-48 xl:mt-110 xl:aspect-auto xl:h-1034"
        sizes="(max-width: 1023px) 100vw, 85vw"
      />
    </section>
  );
}
