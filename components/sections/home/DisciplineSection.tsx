"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  "A positioning problem can become a communication problem.",
  "A communication problem can become a website problem.",
  "A website problem can become a trust problem.",
];

export default function DisciplineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arcRef = useRef<SVGPathElement>(null);
  const pointsRef = useRef<(HTMLLIElement | null)[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // =========================================================
      // ARC
      // =========================================================
      // Arc stays permanently visible.
      // No strokeDash animation.
      // =========================================================

      if (arcRef.current) {
        gsap.set(arcRef.current, {
          autoAlpha: 1,
        });
      }

      // =========================================================
      // TITLE
      // =========================================================

      tl.fromTo(
        titleRef.current,
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
        }
      );

      // =========================================================
      // POINTS
      // =========================================================

      tl.fromTo(
        pointsRef.current,
        {
          autoAlpha: 0,
          x: 18,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.12,
        },
        "-=0.35"
      );

      // =========================================================
      // DESCRIPTION
      // =========================================================

      tl.fromTo(
        descriptionRef.current,
        {
          autoAlpha: 0,
          y: 15,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        bg-[#f9f8f2]
        text-[#38362e]
      "
    >
      {/* =========================================================
          WHOLE COMPONENT
      ========================================================= */}

      <div
        className="
          w-full
          max-w-[1728px]
          mx-auto
        "
      >
        {/* =======================================================
            MAIN SECTION
        ======================================================= */}

        <div
          className="
            relative
            grid
            grid-cols-[47%_53%]

            h-[560px]

            border-t
            border-b
            border-black/25

            max-[1200px]:
              h-[510px]

            max-[900px]:
              grid-cols-1
              h-auto
          "
        >
          {/* =====================================================
              CENTER DIVIDER
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              top-0
              bottom-0
              left-[47%]
              w-px
              bg-black/25
              pointer-events-none
              z-30

              max-[900px]:hidden
            "
          />

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div
            className="
              relative
              h-[560px]
              overflow-hidden

              flex
              items-center

              px-[72px]

              max-[1200px]:
                h-[510px]
                px-[55px]

              max-[900px]:
                h-[390px]
                px-[40px]
            "
          >
            {/* ===================================================
                SEMI-CIRCLE / ARC
            =================================================== */}

            <svg
              aria-hidden="true"
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
                z-0
              "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                ref={arcRef}
                d="
                  M 57 0
                  C 81 0, 100 22.4, 100 50
                  C 100 77.6, 81 100, 57 100
                "
                fill="none"
                stroke="#6f6d67"
                strokeOpacity="0.72"
                strokeWidth="0.62"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                shapeRendering="geometricPrecision"
              />
            </svg>

            {/* ===================================================
                TITLE
            =================================================== */}

            <h2
              ref={titleRef}
              className="
                relative
                z-10

                m-0
                max-w-[350px]

                font-trial
                text-[50px]
                leading-[1.01]
                tracking-[-0.045em]

                text-[#38362f]

                translate-x-[105px]

                max-[1200px]:
                  max-w-[320px]
                  text-[36px]
                  translate-x-[20px]

                max-[900px]:
                  max-w-[360px]
                  text-[38px]
                  translate-x-0
              "
            >
              One problem
              <br />
              rarely belongs to
              <br />
              one discipline.
            </h2>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div
            className="
              h-[560px]

              flex
              flex-col
              justify-center

              px-[70px]

              translate-x-[45px]
              translate-y-[65px]

              max-[1200px]:
                h-[510px]
                px-[55px]
                translate-x-[18px]
                translate-y-[20px]

              max-[900px]:
                h-auto
                min-h-[360px]

                px-[40px]
                py-[60px]

                translate-x-0
                translate-y-0

                justify-start
            "
          >
            {/* ===================================================
                POINTS
            =================================================== */}

            <ul
              className="
                m-0
                p-0
                list-none

                flex
                flex-col
                gap-[25px]
              "
            >
              {points.map((point, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    pointsRef.current[index] = el;
                  }}
                  className="
                    flex
                    items-start
                    gap-[22px]

                    font-clash
                    text-[20px]
                    leading-[1.25]

                    text-[#38362e]

                    max-[1200px]:
                      gap-[18px]
                      text-[12px]

                    max-[900px]:
                      gap-[16px]
                      text-[13px]
                  "
                >
                  {/* SQUARE BULLET */}

                  <span
                    aria-hidden="true"
                    className="
                      mt-[5px]

                      w-[8px]
                      h-[8px]

                      shrink-0

                      bg-[#38362e]
                    "
                  />

                  {/* POINT TEXT */}

                  <span
                    className="
                      max-w-[310px]

                      max-[1200px]:
                        max-w-[280px]

                      max-[900px]:
                        max-w-[360px]
                    "
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p
              ref={descriptionRef}
              className="
                m-0
                mt-[38px]

                max-w-[380px]

                font-clash
                text-[20px]
                leading-[1.25]

                text-[#38362e]

                max-[1200px]:
                  mt-[32px]
                  max-w-[300px]
                  text-[12px]

                max-[900px]:
                  mt-[38px]
                  max-w-[380px]
                  text-[13px]
              "
            >
              Keeping strategy, design, digital, communication, and art close
              together allows us to see the larger system, and build solutions
              that work coherently across it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}