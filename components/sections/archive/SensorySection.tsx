import { cn } from "@/lib/utils";
import { archiveSensory as d } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

export default function SensorySection() {
  return (
    <section className={cn(t.inner, "border-b px-16 py-48 md:px-24 md:py-64 xl:px-50 xl:pt-109 xl:pb-93")}>
      <span data-reveal className={cn(t.label, "pl-8 md:pl-16 xl:pl-0")}>
        {d.label}
      </span>

      <Media
        media={d.image}
        className="mt-16 aspect-[1820/1736] h-auto md:mt-24 md:aspect-[1820/1300] xl:mt-53 xl:aspect-auto xl:h-1736"
        sizes="(max-width: 1023px) 100vw, 95vw"
      />

      {/* beige card overlapping the bottom of the photo */}
      <div
        data-reveal
        className="relative -mt-48 ml-24 bg-[#e9e5db] px-24 py-32 md:-mt-160 md:ml-[30%] md:mr-[6%] md:p-48 xl:mr-0 xl:-mt-474 xl:ml-596 xl:w-1120 xl:pt-107 xl:pr-100 xl:pb-96 xl:pl-130"
      >
        <h2 className={cn(t.h2, "xl:-ml-9")}>{d.heading}</h2>
        <div className="mt-18 xl:mt-50 xl:max-w-715">
          {d.body.map((text, i) => (
            <p key={i} className={cn(t.body, i > 0 && "mt-14 xl:mt-32")}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
