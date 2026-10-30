import { cn } from "@/lib/utils";
import { exultContent as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { TextColumnsRow } from "../ImageRows";
import IndexTag from "../IndexTag";
import { t } from "../styles";

export default function ContentSection() {
  return (
    <section className={t.inner}>
      <div className="border-b py-48 md:py-64 xl:pt-134 xl:pb-61">
        <div className="grid grid-cols-1 px-24 md:grid-cols-2 md:gap-48 md:px-40 xl:grid-cols-[1007fr_607fr] xl:gap-0 xl:px-152">
          <div>
            <span data-reveal className={t.label}>
              {d.label}
            </span>
            <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
              <Lines lines={d.heading} />
            </h2>
            <p data-reveal className={cn(t.body, "mt-18 xl:mt-42 xl:max-w-743")}>
              {d.body}
            </p>
          </div>

          <ul className="mt-32 self-start border-t md:mt-48 xl:mt-76">
            {d.points.map((point, i) => (
              <li
                key={point}
                data-reveal
                className="flex h-60 items-center justify-between border-b xl:h-92.5"
              >
                <span className="text-[18px] leading-[1.2] tracking-[0.05em] xl:text-[length:max(18px,calc(var(--spacing)*36))]">
                  {point}
                </span>
                <IndexTag index={i} className={t.tagList} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-40 grid grid-cols-1 gap-24 px-24 md:mt-56 md:grid-cols-3 md:gap-20 md:px-40 xl:mt-163 xl:gap-44 xl:px-50">
          {d.images.map((img, i) => (
            <Media
              key={i}
              media={img}
              className="aspect-[577/708] h-auto xl:aspect-auto xl:h-708"
              sizes="(max-width: 1023px) 100vw, 30vw"
            />
          ))}
        </div>
      </div>

      <TextColumnsRow
        left={d.left}
        right={d.right}
        className="xl:pt-151 xl:pb-131"
        leftClassName="xl:pl-154 xl:*:max-w-553"
        rightClassName="xl:pl-158 xl:*:max-w-614"
      />
    </section>
  );
}
