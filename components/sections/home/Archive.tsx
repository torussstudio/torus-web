"use client";

import { works } from "@/lib/constants";
import Image from "next/image";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArchiveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerTitleRef = useRef<HTMLHeadingElement>(null);
  const headerTagRef = useRef<HTMLSpanElement>(null);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const tagsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // header entrance
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          headerTitleRef.current,
          { autoAlpha: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9 }
        )
        .fromTo(
          headerTagRef.current,
          { autoAlpha: 0, x: 14 },
          { autoAlpha: 1, x: 0, duration: 0.6 },
          "-=0.5"
        );

      // each row scroll-triggered reveal
      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power4.out" },
        });

        tl.fromTo(
          imageWrapRefs.current[index],
          { autoAlpha: 0, scale: 1.15, clipPath: "inset(0 0 100% 0)" },
          {
            autoAlpha: 1,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.out",
          },
          0
        )
          .fromTo(
            metaRefs.current[index],
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.7 },
            0.2
          )
          .fromTo(
            titleRefs.current[index],
            { autoAlpha: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
            {
              autoAlpha: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 0.9,
              ease: "power3.out",
            },
            0.3
          )
          .fromTo(
            shapeRefs.current[index],
            { autoAlpha: 0, scale: 0.3, rotate: -30 },
            { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.7, ease: "back.out(1.7)" },
            0.45
          )
          .fromTo(
            descRefs.current[index],
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.7 },
            0.55
          )
          .fromTo(
            tagsRefs.current[index],
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            0.68
          )
          .fromTo(
            ctaRefs.current[index],
            { autoAlpha: 0, x: -14 },
            { autoAlpha: 1, x: 0, duration: 0.6 },
            0.75
          );

        // subtle parallax on the image while scrolling through
        const img = imageWrapRefs.current[index];
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ebe9e6] border-t border-black/20 overflow-hidden"
    >
      {/* HEADER */}
      <div
        className="
          h-[88px]
          border-b
          border-black/20
          flex
          items-center
          justify-between
          px-[72px]
          max-md:h-auto
          max-md:px-5
          max-md:py-5
        "
      >
        <h2
          ref={headerTitleRef}
          className="
            text-[56px]
            leading-none
            tracking-[-0.05em]
            uppercase
            text-[#181818]           
            font-recife
            max-md:text-[30px]
          "
        >
          THE ARCHIVE
        </h2>

        <span
          ref={headerTagRef}
          className="
            text-[15px]
            tracking-[0.26em]
            uppercase
            text-[#181818]
            font-nixie
            mt-[4px]

            max-md:text-[9px]
          "
        >
          SELECTED WORKS
        </span>
      </div>

      {/* ROWS */}
      {works.map((work, index) => (
        <div
          key={index}
          ref={(el) => {
            rowRefs.current[index] = el;
          }}
          className="
            grid
            grid-cols-[560px_1fr]
            border-b
            border-black/50
            h-[520px]

            max-lg:grid-cols-1
            max-lg:h-auto
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              border-r
              border-black/20
              flex
              items-start
              justify-center
              pt-[38px]
              pr-[20px]

              max-lg:border-r-0
              max-lg:border-b
              max-lg:pb-8
              max-lg:pt-8
            "
          >
            <div
              ref={(el) => {
                imageWrapRefs.current[index] = el;
              }}
              className="
                relative
                w-[380px]
                h-[440px]
                overflow-hidden

                max-md:w-[88vw]
                max-md:h-[420px]
              "
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              px-[28px]
              pt-[28px]
              pb-[22px]
              flex
              flex-col

              max-md:px-5
              max-md:pt-6
              max-md:pb-6
            "
          >
            {/* TOP META */}
            <div
              ref={(el) => {
                metaRefs.current[index] = el;
              }}
              className="flex items-center gap-[18px]"
            >
              <span
                className="
                  text-[16px]
                  uppercase
                  tracking-[0.18em]
                  text-[#181818]
                  font-nixie
                  max-md:text-[12px]
                "
              >
                {work.year}
              </span>

              <div className="w-[5px] h-[5px] bg-black" />

              <span
                className="
                  text-[16px]
                  uppercase
                  tracking-[0.18em]
                  text-[#181818]
                  font-nixie
                  
                  max-md:text-[12px]
                "
              >
                {work.country}
              </span>
            </div>

            {/* TITLE */}
            <h3
              ref={(el) => {
                titleRefs.current[index] = el;
              }}
              className="
                mt-[18px]
                text-[44px]
                leading-[0.95]
                tracking-[-0.04em]
                uppercase
                text-[#181818]
                font-nixie
                max-w-[680px]
                
                max-md:text-[30px]
                max-md:leading-[0.95]
              "
            >
              {work.title}
            </h3>

            {/* SHAPE */}
            <div
              ref={(el) => {
                shapeRefs.current[index] = el;
              }}
              className="
                absolute
                top-[65px]
                right-[80px]

                max-md:top-[24px]
                max-md:right-[20px]
              "
            >
              {work.shape === "circle" ? (
                <div
                  className="
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-[#80c46c]

                    max-md:w-[22px]
                    max-md:h-[22px]
                  "
                />
              ) : (
                <div
                  className="
                    w-[40px]
                    h-[40px]
                    bg-[#80c46c]

                    max-md:w-[22px]
                    max-md:h-[22px]
                  "
                />
              )}
            </div>

            {/* BOTTOM AREA */}
            <div className="mt-auto max-lg:mt-10">
              {/* DESCRIPTION */}
              <p
                ref={(el) => {
                  descRefs.current[index] = el;
                }}
                className="
                  max-w-[280px]
                  text-[16px]
                  leading-[1.25]
                  text-[#181818]
                  font-nixie

                  max-md:text-[14px]
                  max-md:max-w-full
                  
                "
              >
                {work.desc}
              </p>

              {/* FOOT */}
              <div
                className="
                  mt-[26px]
                  flex
                  items-center
                  justify-between

                  max-md:flex-col
                  max-md:items-start
                  max-md:gap-7
                  
                "
              >
                {/* TAGS */}
                <div
                  ref={(el) => {
                    tagsRefs.current[index] = el;
                  }}
                  className="
                    flex
                    items-center
                    gap-[24px]

                    max-md:flex-wrap
                    max-md:gap-[16px]
                  "
                >
                  {work.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-[8px]
                      "
                    >
                      <div className="flex items-center gap-[5px]">
                        {/* LEFT 2 */}
                        <div className="flex flex-col gap-[5px]">
                          <span className="w-[5px] h-[5px] bg-[#181818] block" />
                          <span className="w-[5px] h-[5px] bg-[#181818] block" />
                        </div>

                        {/* RIGHT CENTER */}
                        <div className="flex items-center h-[11px]">
                          <span className="w-[5px] h-[5px] bg-[#181818] block" />
                        </div>
                      </div>

                      <span
                        className="
                          text-[16px]
                          text-[#181818]
                          font-nixie

                          max-md:text-[14px]
                        "
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  ref={(el) => {
                    ctaRefs.current[index] = el;
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-[6px]
                    text-[#80c46c]
                    mr-[18px]
                    cursor-pointer

                    max-md:mr-0
                  "
                >
                  <HiArrowTurnDownRight
                    className="
                      text-[24px]
                      stroke-[0.2]
                      mb-[8px]
                      transition-transform
                      duration-500
                      group-hover:translate-x-[5px]

                      max-md:text-[20px]
                    "
                  />

                  <span
                    className="
                      text-[15px]
                      uppercase
                      tracking-[0.08em]
                      font-nixie
                      mr-[30px]

                      max-md:mr-0
                    "
                  >
                    SEE PORTFOLIO
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}