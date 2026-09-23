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
  const headerDescRef = useRef<HTMLParagraphElement>(null);

  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const imageWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const tagsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================================================
      // HEADER ANIMATION
      // =========================================================

      const headerTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      headerTimeline
        .fromTo(
          headerTitleRef.current,
          {
            autoAlpha: 0,
            y: 25,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.8,
          },
        )
        .fromTo(
          headerDescRef.current,
          {
            autoAlpha: 0,
            y: 15,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.45",
        );

      // =========================================================
      // PROJECT ROW ANIMATIONS
      // =========================================================

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        // IMAGE
        timeline.fromTo(
          imageWrapRefs.current[index],
          {
            autoAlpha: 0,
            scale: 1.08,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            autoAlpha: 1,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
          },
          0,
        );

        // META
        timeline.fromTo(
          metaRefs.current[index],
          {
            autoAlpha: 0,
            y: 15,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          0.15,
        );

        // TITLE
        timeline.fromTo(
          titleRefs.current[index],
          {
            autoAlpha: 0,
            y: 25,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.8,
          },
          0.25,
        );

        // DESCRIPTION
        timeline.fromTo(
          descRefs.current[index],
          {
            autoAlpha: 0,
            y: 15,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          0.4,
        );

        // TAGS
        timeline.fromTo(
          tagsRefs.current[index],
          {
            autoAlpha: 0,
            y: 15,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          0.5,
        );

        // CTA
        timeline.fromTo(
          ctaRefs.current[index],
          {
            autoAlpha: 0,
            x: -12,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
          },
          0.65,
        );

        // =======================================================
        // IMAGE PARALLAX
        // =======================================================

        const image = imageWrapRefs.current[index];

        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: -3,
            },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#f9f8f2]
        text-[#38362e]
        border-t
        border-black/30
        overflow-hidden
      "
    >
      {/* =========================================================
          WHOLE COMPONENT
      ========================================================= */}

      <div className="w-full max-w-[1728px] mx-auto">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div
          className="
            min-h-[120px]
            border-b
            border-black/30
            px-[88px]
            flex
            items-center
            justify-between
            gap-10

            max-[1100px]:px-[50px]

            max-md:min-h-[100px]
            max-md:px-[24px]
            max-md:py-[24px]
            max-md:items-start
            max-md:flex-col
            max-md:gap-4
          "
        >
          <h2
            ref={headerTitleRef}
            className="
              m-0
              font-trial
              text-[48px]
              leading-none
              tracking-[-0.035em]
              text-[#35322e]

              max-[1100px]:text-[42px]
              max-md:text-[28px]
            "
          >
            Selected Archive
          </h2>

          <p
            ref={headerDescRef}
            className="
              m-0
              max-w-[370px]
              font-clash
              text-[20px]
              leading-[1.2]
              text-[#35322e]

              max-[1100px]:max-w-[320px]
              max-[1100px]:text-[16px]

              max-md:max-w-[340px]
              max-md:text-[12px]
            "
          >
            A selection of identities, digital experiences, campaigns, cultural
            initiatives, artworks, and experiments from across the studio.
          </p>
        </div>

        {/* =======================================================
            PROJECT ROWS
        ======================================================= */}

        <div className="w-full">
          {works.map((work, index) => (
            <article
              key={index}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              className="
                relative
                grid
                grid-cols-2
                min-h-[586px]
                border-b
                border-black/30

                max-[1100px]:min-h-[500px]

                max-md:grid-cols-1
                max-md:min-h-0
              "
            >
              {/* =================================================
                  CENTER DIVIDER
                  =================================================

                  This is intentionally absolute so the line is
                  independent from either column's content.
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  top-0
                  bottom-0
                  left-1/2
                  w-px
                  -translate-x-1/2
                  bg-black/30
                  pointer-events-none
                  z-10

                  max-md:hidden
                "
              />

              {/* =================================================
                  LEFT IMAGE COLUMN
              ================================================= */}

              <div
                className="
                  flex
                  items-center

                  pl-[142px]
                  pr-[72px]
                  py-[61px]

                  max-[1500px]:pl-[90px]
                  max-[1500px]:pr-[55px]

                  max-[1100px]:pl-[55px]
                  max-[1100px]:pr-[40px]
                  max-[1100px]:py-[45px]

                  max-md:
                    border-b
                    px-[24px]
                    py-[28px]
                    justify-center
                "
              >
                <div
                  ref={(el) => {
                    imageWrapRefs.current[index] = el;
                  }}
                  className="
                    relative
                    w-full
                    max-w-[646px]
                    aspect-[646/459]
                    overflow-hidden
                    shrink-0

                    max-[1500px]:max-w-[560px]

                    max-[1100px]:max-w-[500px]

                    max-md:
                      max-w-[420px]
                      aspect-[646/459]
                  "
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    priority={index === 0}
                    sizes="
                      (max-width: 768px) 90vw,
                      (max-width: 1100px) 55vw,
                      (max-width: 1500px) 42vw,
                      646px
                    "
                    className="object-cover"
                  />
                </div>
              </div>

              {/* =================================================
                  RIGHT CONTENT COLUMN
              ================================================= */}

              <div
                className="
                  px-[70px]
                  py-[67px]
                  flex
                  flex-col
                  justify-between

                  max-[1500px]:px-[55px]
                  max-[1500px]:py-[55px]

                  max-[1100px]:px-[40px]
                  max-[1100px]:py-[45px]

                  max-md:
                    px-[24px]
                    py-[35px]
                    min-h-[400px]
                "
              >
                {/* =================================================
                    TOP CONTENT
                ================================================= */}

                <div>
                  {/* META */}

                  <div
                    ref={(el) => {
                      metaRefs.current[index] = el;
                    }}
                    className="
                      flex
                      items-center
                      gap-[18px]
                      font-clash
                      text-[20px]
                      uppercase
                      tracking-[0.04em]
                      text-[#38362e]

                      max-[1100px]:text-[17px]
                      max-md:text-[15px]
                    "
                  >
                    <span>{work.year}</span>

                    <span
                      className="
                        w-[7px]
                        h-[7px]
                        bg-[#34332f]
                        shrink-0
                      "
                    />

                    <span>{work.country}</span>
                  </div>

                  {/* TITLE */}

                  <h3
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                    className="
                      m-0
                      mt-[42px]
                      max-w-[720px]
                      font-clash
                      text-[52px]
                      leading-[0.98]
                      tracking-[-0.045em]
                      text-[#38362e]

                      max-[1500px]:text-[44px]

                      max-[1100px]:
                        mt-[30px]
                        text-[36px]

                      max-md:
                        mt-[24px]
                        text-[30px]
                    "
                  >
                    {work.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    ref={(el) => {
                      descRefs.current[index] = el;
                    }}
                    className="
                      m-0
                      mt-[34px]
                      max-w-[300px]
                      font-clash
                      text-[20px]
                      leading-[1.35]
                      text-[#38362e]

                      max-[1500px]:
                        mt-[28px]
                        max-w-[430px]
                        text-[14px]

                      max-[1100px]:
                        mt-[24px]
                        max-w-[380px]
                        text-[13px]

                      max-md:
                        mt-[20px]
                        max-w-[400px]
                        text-[12px]
                    "
                  >
                    {work.desc}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}

                <div className="mt-[40px]">
                  {/* TAGS */}

                  <div
                    ref={(el) => {
                      tagsRefs.current[index] = el;
                    }}
                    className="
                      flex
                      flex-wrap
                      gap-x-[10px]
                      gap-y-[4px]
                      max-w-[760px]
                    "
                  >
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="
                          font-clash
                          text-[34px]
                          leading-[1.2]
                          text-[#38362e]

                          max-[1500px]:text-[21px]

                          max-[1100px]:text-[18px]

                          max-md:text-[16px]
                        "
                      >
                        {tag}

                        {tagIndex < work.tags.length - 1 && (
                          <span className="ml-[10px]">/</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* VIEW PROJECT */}

                  <button
                    ref={(el) => {
                      ctaRefs.current[index] = el;
                    }}
                    type="button"
                    className="
                      group
                      mt-[48px]
                      flex
                      items-center
                      gap-[7px]
                      border-0
                      bg-transparent
                      p-0
                      cursor-pointer

                      font-clash
                      text-[20px]
                      uppercase
                      text#38362e]

                      transition-colors
                      duration-300
                      hover:text-[#80c46c]

                      max-[1100px]:
                        mt-[35px]
                        text-[13px]

                      max-md:
                        mt-[28px]
                        text-[11px]
                    "
                  >
                    <HiArrowTurnDownRight
                      className="
                        text-[22px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-[4px]

                        max-[1100px]:text-[18px]

                        max-md:text-[15px]
                      "
                    />

                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            COMPLETE ARCHIVE CTA
        ========================================================= */}

        <div
          className="
    h-[184px]
    w-full
    flex
    items-center
    justify-center
    border-b
    border-black/30

    max-md:h-[140px]
  "
        >
          <button
            type="button"
            className="
      group
      flex
      items-center
      gap-[7px]

      border-0
      bg-transparent
      p-0
      m-0

      cursor-pointer

      font-clash
      text-[20px]
      leading-none
      uppercase
      tracking-[0.04em]

      text-[#80c46c]

      transition-all
      duration-300
      hover:gap-[11px]
    "
          >
            <HiArrowTurnDownRight
              className="
        shrink-0
        text-[20px]
        transition-transform
        duration-300
        group-hover:translate-x-[3px]
      "
            />

            <span>Explore the complete archive</span>
          </button>
        </div>
      </div>
    </section>
  );
}
