import { cn } from "@/lib/utils";
import { tsaNaming as n } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function NamingSection() {
  return (
    <section className={cn(t.inner, "border-b px-24 py-48 text-center md:px-40 md:py-64 xl:px-152 xl:pt-99 xl:pb-107")}>
      <span data-reveal className={t.label}>
        {n.label}
      </span>

      <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-15")}>
        <Lines lines={n.heading} />
      </h2>

      <p data-reveal className={cn(t.body, "mx-auto mt-24 md:max-w-[760px] xl:mt-73 xl:max-w-1110")}>
        {n.body}
      </p>

      <div className="mt-32 grid grid-cols-1 gap-12 md:mt-48 md:grid-cols-3 md:gap-16 xl:mt-91 xl:grid-cols-3 xl:gap-26">
        {n.images.map((img, i) => (
          <Media
            key={i}
            media={img}
            className="aspect-[522/646] h-auto xl:aspect-auto xl:h-646"
            sizes="(max-width: 1023px) 100vw, 28vw"
          />
        ))}
      </div>
    </section>
  );
}
