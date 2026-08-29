"use client";

import Image from "next/image";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const leftVerticalRef = useRef<HTMLSpanElement>(null);
  const mobileLabelRef = useRef<HTMLSpanElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const coordsRef = useRef<HTMLDivElement>(null);
 const studioTitleRef = useRef<HTMLDivElement>(null);
  const infoRightRef = useRef<HTMLDivElement>(null);

  const copyrightRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // helper: skip the tween instead of erroring when a target is
      // null/undefined (e.g. hidden on the current breakpoint)
      const safeFromTo = (
        tl: gsap.core.Timeline,
        target: any,
        from: gsap.TweenVars,
        to: gsap.TweenVars,
        position: number
      ) => {
        if (!target || (Array.isArray(target) && target.length === 0)) {
          return tl;
        }
        return tl.fromTo(target, from, to, position);
      };

      // HERO AREA — scroll triggered
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroImgRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      safeFromTo(
        heroTl,
        [leftVerticalRef.current, mobileLabelRef.current],
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1 },
        0
      );
      safeFromTo(
        heroTl,
        heroImgRef.current,
        { autoAlpha: 0, scale: 1.15, clipPath: "inset(0 0 100% 0)" },
        { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 1.8 },
        0.1
      );
      safeFromTo(
        heroTl,
        heroTitleRef.current,
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 1.6 },
        0.4
      );
      safeFromTo(
        heroTl,
        heroDescRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.2 },
        0.9
      );
      safeFromTo(
        heroTl,
        socialsRef.current ? Array.from(socialsRef.current.children) : null,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
        1.1
      );
      safeFromTo(
        heroTl,
        ctaRef.current,
        { autoAlpha: 0, x: -16 },
        { autoAlpha: 1, x: 0, duration: 1 },
        1.3
      );

      // INFO SECTION — scroll triggered
      const infoTl = gsap.timeline({
        scrollTrigger: {
          trigger: studioTitleRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      safeFromTo(
        infoTl,
        coordsRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1 },
        0
      );
      safeFromTo(
        infoTl,
        studioTitleRef.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1.6 },
        0.2
      );
      safeFromTo(
        infoTl,
        infoRightRef.current ? Array.from(infoRightRef.current.children) : null,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.15 },
        0.4
      );

      // COPYRIGHT
      safeFromTo(
        gsap.timeline({
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top 95%",
            once: true,
          },
        }),
        copyrightRef.current,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
        0
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={cn(
        "w-full",
        "bg-[#e9e8e6]",
        "border-t",
        "border-black/40"
      )}
    >
      {/* TOP GRID */}
      <div
        className={cn(
          "grid",
          "grid-cols-[96px_1fr]",
          "md:grid-cols-[96px_1fr]",
          "border-b",
          "border-black/40",
          "max-md:grid-cols-1"
        )}
      >
        {/* LEFT VERTICAL */}
        <div
          className={cn(
            "border-r",
            "border-black/40",
            "flex",
            "items-center",
            "justify-center",
            "max-md:hidden"
          )}
        >
          <span
            ref={leftVerticalRef}
            className={cn(
              "text-[28px]",
              "tracking-[0.22em]",
              "uppercase",
              "text-[#181818]",
              "font-nixie",
              
            )}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Get In Touch
          </span>
        </div>

        {/* MOBILE LABEL */}
        <div
          className={cn(
            "hidden",
            "max-md:flex",
            "items-center",
            "justify-center",
            "h-[52px]",
            "border-b",
            "border-black/40"
          )}
        >
          <span
            ref={mobileLabelRef}
            className={cn(
              "text-[16px]",
              "tracking-[0.22em]",
              "uppercase",
              "text-black/40",
              "font-nixie",
              "font-normal"
            )}
          >
            Get In Touch
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HERO AREA */}
          <div
            className={cn(
              "grid",
              "grid-cols-[0.78fr_1.22fr]",
              "border-b",
              "border-black/40",
              "max-md:grid-cols-1"
            )}
          >
            {/* IMAGE */}
            <div
              ref={heroImgRef}
              className={cn(
                "relative",
                "h-[420px]",
                "border-r",
                "border-black/40",
                "max-md:h-[260px]",
                "max-md:border-r-0",
                "max-md:border-b",
                "max-md:border-black/40"
              )}
            >
              <Image
                src="/images/footer.avif"
                alt="Footer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>

            {/* TEXT */}
            <div
              className={cn(
                "px-[42px]",
                "pt-[120px]",
                "max-md:px-[24px]",
                "max-md:pt-[40px]",
                "max-md:pb-[40px]"
              )}
            >
              <h2
                ref={heroTitleRef}
                className={cn(
                  "text-[70px]",
                  "leading-[0.92]",
                  "tracking-[-0.03em]",
                  "uppercase",
                  "text-[#181818]",
                  "font-nova",
                  "md:text-[58px]",
                  "max-md:text-[46px]",
                  "max-md:leading-[1]"
                )}
              >
                LET'S SHAPE WHAT'S NEXT.
              </h2>

              <p
                ref={heroDescRef}
                className={cn(
                  "mt-[34px]",
                  "max-w-[460px]",
                  "text-[17px]",
                  "leading-[1.25]",
                  "text-[#181818]",
                  "font-nixie",
                  "max-md:mt-[20px]",
                  "max-md:text-[15px]"
                )}
              >
                If you're building, rethinking, or evolving something
                meaningful, we'd love to understand where you are headed. No
                pitch. No rush. Just a light conversation to begin with.
              </p>
            </div>
          </div>

          {/* SOCIAL ROW */}
          <div
            className={cn(
              "grid",
              "grid-cols-[1fr_620px]",
              "max-md:grid-cols-1",
              "max-lg:grid-cols-1"
            )}
          >
            {/* SOCIALS */}
            <div
              className={cn(
                "h-[104px]",
                "border-r",
                "border-black/50",
                "flex",
                "items-center",
                "px-[72px]",
                "max-lg:border-r-0",
                "max-lg:border-b",
                "max-lg:border-black/40",
                "max-md:h-auto",
                "max-md:px-[24px]",
                "max-md:py-[28px]",
                "max-md:justify-center"
              )}
            >
              <div
                ref={socialsRef}
                className={cn(
                  "flex",
                  "items-center",
                  "gap-[72px]",
                  "max-md:gap-[28px]",
                  "max-md:flex-wrap",
                  "max-md:justify-center"
                )}
              >
                {[
                  "INSTAGRAM",
                  "BEHANCE",
                  "LINKEDIN",
                  "PINTEREST",
                ].map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "text-[20px]",
                      "tracking-[0.18em]",
                      "uppercase",
                      "text-[#181818]",
                      "font-nixie",
                      "cursor-pointer",
                      "hover:text-[#6b6b6b]",
                      "transition-colors",
                      "max-md:text-[13px]",
                      "max-md:tracking-[0.12em]"
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className={cn(
                "h-[104px]",
                "flex",
                "items-center",
                "justify-center",
                "max-md:h-[80px]"
              )}
            >
              <button
                ref={ctaRef}
                className={cn(
                  "group",
                  "flex",
                  "items-center",
                  "gap-2",
                  "hover:gap-4",
                  "transition-all",
                  "duration-300",
                  "text-[#80c46c]",
                  "mr-[55px]",
                  "cursor-pointer",
                  "max-md:mr-0"
                )}
              >
                <HiArrowTurnDownRight
                  className={cn(
                    "text-[24px]",
                    "stroke-[0.2]",
                    "mb-[8px]",
                    "transition-transform",
                    "duration-300",
                    "group-hover:translate-x-[4px]",
                    "max-md:text-[20px]"
                  )}
                />

                <span
                  className={cn(
                    "text-[20px]",
                    "tracking-[0.04em]",
                    "uppercase",
                    "font-nixie",
                    "max-md:text-[16px]"
                  )}
                >
                  Start A Conversation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div
        className={cn(
          "grid",
          "grid-cols-2",
          "border-b",
          "border-black/40",
          "max-md:grid-cols-1"
        )}
      >
        {/* LEFT */}
        <div
          className={cn(
            "px-[94px]",
            "py-[54px]",
            "max-md:px-[24px]",
            "max-md:py-[36px]",
            "max-md:border-b",
            "max-md:border-black/40"
          )}
        >
          <div
            ref={coordsRef}
            className={cn(
              "flex",
              "items-center",
              "gap-[48px]",
              "text-[20px]",
              "tracking-[0.16em]",
              "uppercase",
              "text-[#181818]",
              "font-nixie",
              "max-md:gap-[24px]",
              "max-md:text-[15px]"
            )}
          >
            <span>10°46'41.5"N</span>

            <span className="text-black/50">|</span>

            <span>76°39'22.0"E</span>
          </div>

         <div
  ref={studioTitleRef}
  className={cn(
    "relative",
    "mt-[32px]",
    "w-full",
    "max-md:mt-[20px]"
  )}
>
  <Image
    src="/images/TORUSS STUDIO LOGO PNG.png"
    alt="Toruss Studio"
    width={1020}
    height={150}
    priority
    className="h-auto w-full"
  />
</div>
        </div>

        {/* RIGHT */}
        <div
          ref={infoRightRef}
          className={cn(
            "px-[90px]",
            "py-[54px]",
            "flex",
            "flex-col",
            "gap-[38px]",
            "ml-[160px]",
            "max-lg:ml-0",
            "max-lg:px-[48px]",
            "max-md:px-[24px]",
            "max-md:py-[36px]",
            "max-md:gap-[24px]"
          )}
        >
          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-[#181818]",
              "font-nixie",
              "max-md:text-[15px]"
            )}
          >
            +91-81296 75834
          </span>

          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-[#181818] ",
              "font-nixie",
              "max-md:text-[15px]"
            )}
          >
            INFO@TORUSS.STUDIO
          </span>

          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-[#181818] ",
              "font-nixie",
              "whitespace-nowrap",
              "max-md:text-[15px]",
              "max-md:whitespace-normal"
            )}
          >
            PALAKKAD, KERALA, INDIA - 678001
          </span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className={cn(
          "h-[94px]",
          "flex",
          "items-center",
          "justify-center",
          "max-md:h-auto",
          "max-md:py-[28px]",
          "max-md:px-[16px]"
        )}
      >
        <span
          ref={copyrightRef}
          className={cn(
            "text-[20px]",
            "tracking-[0.16em]",
            "uppercase",
            "text-[#181818] ",
            "font-nixie",
            "max-md:text-[12px]",
            "max-md:tracking-[0.10em]",
            "max-md:text-center"
          )}
        >
          © 2026 TORUSS STUDIO. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}