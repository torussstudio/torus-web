import { cn } from "@/lib/utils";
import Media from "@/components/sections/archive/Media";
import Lines from "@/components/sections/archive/Lines";
import { TurnLink } from "./Icons";
import { h } from "./styles";

export default function StudioNote() {
  return (
    <section
      className={cn(
        h.inner,
        "grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-[812fr_1108fr] xl:py-141",
      )}
    >
      <div className="md:py-56 xl:py-0">
        <Media
          media={{ src: "/images/home/inside-studio.avif", alt: "Inside the Toruss studio" }}
          className="aspect-[4/3] h-auto md:aspect-[812/1054] xl:aspect-auto xl:h-1054"
          sizes="(max-width: 767px) 100vw, 42vw"
        />
      </div>

      <div className="flex flex-col justify-center px-24 py-48 md:px-40 md:py-56 xl:p-0 xl:pr-80 xl:pl-134">
        <p data-reveal className={cn(h.label, "text-[#38362e]")}>
          Inside the Studio
        </p>

        <h2 data-reveal className={cn(h.h2, "mt-20 xl:mt-38")}>
          <Lines
            lines={["We like working with people", "who care deeply about", "what they’re building."]}
          />
        </h2>

        <p data-reveal className={cn(h.body, "mt-28 xl:mt-67")}>
          <Lines
            lines={[
              "Our best collaborations are built around curiosity, trust, clear thinking,",
              "and a willingness to question the obvious.",
            ]}
          />
        </p>
        <p data-reveal className={cn(h.body, "mt-16 xl:mt-28")}>
          <Lines
            lines={[
              "We stay deliberately close to the work, collaborate across disciplines,",
              "and take on a limited number of projects at a time.",
            ]}
          />
        </p>

        <div data-reveal className="mt-32 xl:mt-67">
          <TurnLink href="/studio">Inside Toruss</TurnLink>
        </div>
      </div>
    </section>
  );
}
