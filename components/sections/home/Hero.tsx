import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/lib/constants";
import ContactIcons from "./ContactIcons";
import Lines from "@/components/sections/archive/Lines";
import Media from "@/components/sections/archive/Media";
import { LongArrow, TurnLink } from "./Icons";
import { h } from "./styles";
import HeroIntro from "./HeroIntro";

const heading = [
  "A multidimensional",
  "studio shaping brands,",
  "culture, and creative",
  "expression.",
];

export default function StudioHero() {
  return (
    <section
      className={cn(
        h.inner,
        "grid grid-cols-1 border-b md:grid-cols-[1.3fr_1fr] xl:grid-cols-[1026fr_742fr_152fr]",
      )}
    >
      {/* page load-in: band → full cover → photo flies in → text rises */}
      <HeroIntro />

      {/* TEXT */}
      <div data-fx="hero-text" className="px-24 pt-40 md:px-40 md:py-56 xl:pt-44 xl:pr-40 xl:pb-0 xl:pl-152">
        <h1 data-intro="title" className={h.h2}>
          <Lines lines={heading} />
        </h1>

        <p data-intro="item" className={cn(h.body, "mt-20 xl:mt-55 xl:max-w-700")}>
          We work with businesses, founders, and institutions across branding,
          strategy, digital experiences, communication, art, and creative
          direction, bringing different disciplines together to solve complex
          creative problems with clarity.
        </p>

        <ul className="mt-32 max-w-[409px] xl:mt-39 xl:max-w-409">
          {links.map((link) => (
            <li key={link.number} data-intro="item" className="border-b">
              <Link
                href={link.href}
                className={cn(h.body, "group flex h-56 items-center xl:h-72")}
              >
                <LongArrow className="ml-20 transition-transform duration-300 group-hover:translate-x-6 xl:ml-36" />
                <span className="ml-auto xl:ml-173">{link.number}</span>
                <span className="mr-auto ml-12 w-90 xl:mr-0 xl:ml-22">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div data-intro="item" className="mt-36 xl:mt-73">
          <TurnLink href="/studio">Explore the studio</TurnLink>
        </div>
      </div>

      {/* IMAGE */}
      <div data-fx="hero-media" className="px-24 pt-40 pb-40 md:px-40 md:py-56 xl:p-0 xl:pt-59 xl:pb-84">
        <Media
          media={{ src: "/optimized/hero-studio-5fde54d001a9.avif", alt: "Inside the Toruss studio" }}
          className="aspect-[4/3] h-auto md:aspect-[742/822] xl:aspect-auto xl:h-822"
          sizes="(max-width: 767px) 100vw, 40vw"
          priority
        />
      </div>

      <ContactIcons />
    </section>
  );
}
