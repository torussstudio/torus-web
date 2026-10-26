import Image from "next/image";
import { cn } from "@/lib/utils";
import { cards } from "@/lib/constants";
import Lines from "@/components/sections/archive/Lines";
import { LongArrow, TurnLink } from "./Icons";
import { h } from "./styles";

const ids = ["creative", "editions", "cohort"];

export default function CreativeGrid() {
  return (
    <section
      className={cn(
        h.inner,
        "border-b px-24 pt-48 pb-64 md:px-40 md:pb-96 xl:px-128 xl:pt-0 xl:pb-145",
      )}
    >
      <div data-fx="cards" className="grid grid-cols-1 gap-y-40 md:grid-cols-2 md:gap-x-24 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-0 xl:gap-x-25">
        {cards.map((card, i) => (
          <article
            key={card.number}
            id={ids[i]}
            className="grid scroll-mt-120 border md:max-lg:last:col-span-2 lg:row-span-6 lg:grid-rows-subgrid"
          >
            {/* HEADER */}
            <div className="flex h-56 items-stretch border-b bg-[#eae6dc] xl:h-72">
              <h3 className="flex flex-1 items-center pl-20 font-trial text-[22px] tracking-normal xl:pl-35 xl:text-[length:max(20px,calc(var(--spacing)*32))]">
                {card.category}
              </h3>
              <span className="flex w-64 items-center justify-center border-l font-trial text-[22px] tracking-normal xl:w-89 xl:text-[length:max(20px,calc(var(--spacing)*32))]">
                {card.number}
              </span>
            </div>

            {/* TITLE */}
            <div className="flex min-h-120 items-center border-b px-20 py-20 xl:min-h-170 xl:px-35 xl:py-0">
              <h4 className="font-trial text-[24px] leading-[1.2] tracking-normal xl:text-[length:max(22px,calc(var(--spacing)*36))]">
                <Lines lines={card.titleLines} />
              </h4>
            </div>

            {/* IMAGE */}
            <div data-fx="parallax" className="border-b px-20 py-24 xl:px-34 xl:py-40">
              <div
                data-reveal="media"
                className="relative aspect-[468/258] w-full overflow-hidden bg-[#eae6dc]"
              >
                <Image
                  src={card.image}
                  alt={card.category}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* LIST */}
            <ul className="flex flex-col justify-center space-y-14 border-b px-20 py-28 xl:space-y-0 xl:px-34 xl:pt-37 xl:pb-48">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-12 text-[15px] leading-[1.4] tracking-[0.05em] xl:h-50 xl:items-center xl:leading-normal xl:gap-15 xl:text-[length:max(14px,calc(var(--spacing)*24))]"
                >
                  <LongArrow className="mt-[0.45em] w-18 opacity-70 xl:mt-0 xl:w-22" />
                  {item}
                </li>
              ))}
            </ul>

            {/* STAT */}
            <div className="flex min-h-80 items-stretch border-b xl:min-h-105">
              {card.footerTitle && (
                <span className="flex w-110 shrink-0 items-center justify-center border-r text-[28px] text-[#171717] xl:w-167 xl:text-[length:max(24px,calc(var(--spacing)*40.8))]">
                  {card.footerTitle}
                </span>
              )}
              <p
                className={cn(
                  "flex items-center py-16 pr-20 pl-20 text-[14px] leading-[1.25] tracking-[0.05em] xl:pr-20 xl:text-[length:max(13px,calc(var(--spacing)*24))] xl:leading-[1.15]",
                  card.footerTitle ? "xl:pl-38" : "xl:pl-35",
                )}
              >
                {card.footerDesc}
              </p>
            </div>

            {/* EXPLORE */}
            <div className="flex h-56 items-center justify-center xl:h-72">
              <TurnLink href={card.href}>Explore</TurnLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}