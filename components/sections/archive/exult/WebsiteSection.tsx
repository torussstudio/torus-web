import { cn } from "@/lib/utils";
import { exultWebsite as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function WebsiteSection() {
  return (
    <section className={cn(t.inner, "border-b px-24 py-48 md:px-40 md:py-64 xl:px-152 xl:pt-113 xl:pb-138")}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 xl:grid-cols-[893fr_723fr] xl:gap-0">
        <div>
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            <Lines lines={d.heading} />
          </h2>
        </div>

        <div className="pt-24 md:pt-36 xl:max-w-728 xl:pt-71">
          {d.body.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-44")}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <Media
        media={d.image}
        className="mt-32 aspect-[1616/1036] h-auto md:mt-48 xl:mt-110 xl:aspect-auto xl:h-1036"
        sizes="(max-width: 1023px) 100vw, 85vw"
      />

      <div className="mt-32 grid grid-cols-1 gap-18 md:mt-48 md:grid-cols-2 md:gap-40 xl:mt-88 xl:grid-cols-[842fr_774fr] xl:gap-0">
        <p data-reveal className={cn(t.lead, "xl:max-w-665")}>
          {d.lead}
        </p>
        <p data-reveal className={cn(t.body, "xl:mt-5 xl:max-w-784")}>
          {d.note}
        </p>
      </div>
    </section>
  );
}
