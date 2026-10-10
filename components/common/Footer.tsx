import Image from "next/image";
import Link from "next/link";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { footerContent as f } from "@/lib/constants";
import Media from "@/components/sections/archive/Media";
import Lines from "@/components/sections/archive/Lines";
import { t } from "@/components/sections/archive/styles";

/**
 * Site footer (home page design).
 * Uses the same design unit as the archive/home pages:
 * on xl every number is a px value of the 1920px artboard.
 */
export default function Footer() {
  return (
    <footer className="overflow-x-clip bg-[#f9f8f2] font-clash text-[#38362e] [--spacing:1px] xl:[--spacing:min(1.3333px,calc(100vw/1920))]">
      <div className={t.inner}>
        {/* ===== CONTACT BOX ===== */}
        <div className="grid grid-cols-1 border-y md:grid-cols-[64px_1fr] xl:grid-cols-[152fr_1768fr]">
          {/* vertical label */}
          <div className="hidden items-center justify-center border-r md:flex">
            <span className="rotate-180 font-clashlight text-[28px] tracking-[0.1em] whitespace-nowrap text-[#898a8a] uppercase [writing-mode:vertical-rl] xl:text-[length:max(28px,calc(var(--spacing)*46.8))]">
              {f.sideLabel}
            </span>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] xl:h-594 xl:grid-cols-[664fr_1104fr]">
              <Media
                media={{ ...f.image, tone: "dark" }}
                className="aspect-[664/595] h-auto xl:aspect-auto xl:h-full [&_img]:grayscale"
                sizes="(max-width: 767px) 100vw, 35vw"
              />

              <div className="flex flex-col justify-center px-24 py-48 md:px-40 md:py-56 xl:p-0 xl:pr-60 xl:pl-131">
                <h2 className={t.h2}>{f.title}</h2>

                {f.paragraphs.map((lines, i) => (
                  <p
                    key={i}
                    className={cn(
                      "font-clashlight text-[16px] leading-[1.4] tracking-[0.02em] text-[#171717] xl:text-[length:max(15px,calc(var(--spacing)*24))] xl:leading-[1.17]",
                      i === 0 ? "mt-20 xl:mt-34" : "mt-14 xl:mt-30",
                    )}
                  >
                    <Lines lines={lines} />
                  </p>
                ))}

                <Link
                  href={f.cta.href}
                  className="group mt-32 inline-flex items-center gap-8 self-start text-[14px] leading-[1.3] tracking-[0.05em] text-[#3da32e] uppercase xl:mt-60 xl:gap-13 xl:text-[length:max(14px,calc(var(--spacing)*25.2))]"
                >
                  <HiArrowTurnDownRight
                    aria-hidden="true"
                    className="-mt-4 size-14 transition-transform duration-300 group-hover:translate-x-4 xl:-mt-8 xl:size-[max(14px,calc(var(--spacing)*24))]"
                  />
                  <span>{f.cta.label}</span>
                </Link>
              </div>
            </div>

            {/* socials */}
            <ul className="grid grid-cols-2 border-t md:flex md:items-center md:justify-between md:px-40 xl:h-124 xl:px-134">
              {f.socials.map((s, i) => (
                <li
                  key={s.label}
                  className={cn(
                    "border-[#d4d1c8] md:border-0",
                    i % 2 === 0 && "border-r",
                    i < 2 && "border-b",
                  )}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-20 text-center font-clashlight text-[16px] tracking-[0.1em] text-[#898a8a] uppercase transition-colors xl:tracking-[0.135em] duration-200 hover:text-[#38362e] md:py-28 md:text-[20px] xl:py-0 xl:text-[length:max(18px,calc(var(--spacing)*35.2))]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== CONTACT DETAILS + COPYRIGHT ===== */}
        <div className="flex flex-col gap-32 px-24 pt-40 md:flex-row md:justify-between md:px-40 md:pt-56 xl:gap-0 xl:px-0 xl:pt-0">
          <ul className="space-y-12 font-clashlight text-[16px] tracking-[0.05em] text-[#171717] xl:space-y-38 xl:pt-83 xl:pl-152 xl:text-[length:max(15px,calc(var(--spacing)*27))] xl:leading-[1.11]">
            {f.contact.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="transition-opacity duration-200 hover:opacity-60">
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </li>
            ))}
          </ul>

          <p className="font-clashlight text-[14px] leading-[1.6] tracking-[0.1em] text-[#898a8a] uppercase md:text-right xl:w-503 xl:pt-101 xl:text-left xl:text-[length:max(14px,calc(var(--spacing)*28))] xl:leading-[1.786]">
            {f.copyright.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* ===== WORDMARK ===== */}
        <div className="px-24 pt-48 pb-32 md:px-40 md:pt-64 md:pb-40 xl:px-0 xl:pt-85 xl:pb-60 xl:pl-152">
          <Image
            src="/images/TORUSS STUDIO LOGO PNG.png"
            alt="Toruss Studio"
            width={3669}
            height={222}
            sizes="(max-width: 1279px) 100vw, 85vw"
            className="h-auto w-full xl:w-1633"
          />
        </div>
      </div>
    </footer>
  );
}
