import { cn } from "@/lib/utils";
import { tsaSensory as d } from "@/lib/constants";
import Lines from "../Lines";
import LoopingImageCarousel from "../LoopingImageCarousel";
import { t } from "../styles";

export default function SensorySection() {
  return (
    <section className={cn(t.inner, "border-b pt-32 md:pt-48 xl:pt-89")}>
      <div className="grid grid-cols-1 gap-24 px-24 md:grid-cols-2 md:gap-48 md:px-40 xl:grid-cols-[812fr_723fr] xl:gap-81 xl:px-152">
        <div>
          <span data-reveal className={t.label}>
            {d.label}
          </span>
          <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
            {d.heading}
          </h2>
        </div>

        <div className="self-end xl:max-w-718">
          {d.body.map((text, i) => (
            <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-32")}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-10 xl:mt-12">
        <LoopingImageCarousel items={d.images} />
      </div>
    </section>
  );
}
