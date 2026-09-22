// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const points = [
//   "A positioning problem can become a communication problem.",
//   "A communication problem can become a website problem.",
//   "A website problem can become a trust problem.",
// ];

// export default function DisciplineSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const circleRef = useRef<HTMLDivElement>(null);
//   const pointsRef = useRef<(HTMLLIElement | null)[]>([]);
//   const descriptionRef = useRef<HTMLParagraphElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//         defaults: {
//           ease: "power3.out",
//         },
//       });

//       timeline.fromTo(
//         circleRef.current,
//         {
//           autoAlpha: 0,
//           scale: 0.92,
//         },
//         {
//           autoAlpha: 1,
//           scale: 1,
//           duration: 1,
//         }
//       );

//       timeline.fromTo(
//         titleRef.current,
//         {
//           autoAlpha: 0,
//           y: 30,
//           clipPath: "inset(0 0 100% 0)",
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           clipPath: "inset(0 0 0% 0)",
//           duration: 0.8,
//         },
//         "-=0.55"
//       );

//       timeline.fromTo(
//         pointsRef.current,
//         {
//           autoAlpha: 0,
//           x: 20,
//         },
//         {
//           autoAlpha: 1,
//           x: 0,
//           duration: 0.55,
//           stagger: 0.12,
//         },
//         "-=0.35"
//       );

//       timeline.fromTo(
//         descriptionRef.current,
//         {
//           autoAlpha: 0,
//           y: 15,
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.6,
//         },
//         "-=0.25"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         w-full
//         overflow-hidden
//         bg-[#f7f6f0]
//         text-[#34332f]
//       "
//     >
//       {/* =========================================================
//           WHOLE COMPONENT
//       ========================================================= */}

//       <div className="w-full max-w-[1728px] mx-auto">
//         <div
//           className="
//             relative
//             grid
//             grid-cols-2
//             min-h-[372px]

//             border-b
//             border-black/25

//             max-md:grid-cols-1
//             max-md:min-h-0
//           "
//         >
//           {/* =====================================================
//               CENTER DIVIDER
//           ===================================================== */}

//           <div
//             aria-hidden="true"
//             className="
//               absolute
//               top-0
//               bottom-0
//               left-1/2
//               w-px
//               -translate-x-1/2
//               bg-black/25
//               pointer-events-none
//               z-20

//               max-md:hidden
//             "
//           />

//           {/* =====================================================
//               LEFT SIDE
//           ===================================================== */}

//           <div
//             className="
//               relative
//               min-h-[372px]
//               overflow-hidden

//               flex
//               items-center

//               px-[90px]

//               max-[1200px]:px-[60px]

//               max-md:
//                 min-h-[360px]
//                 px-[40px]
//             "
//           >
//             {/* LARGE CIRCLE / ARC */}

//             <div
//               ref={circleRef}
//               aria-hidden="true"
//               className="
//                 absolute

//                 w-[690px]
//                 h-[690px]

//                 rounded-full

//                 border
//                 border-black/30

//                 /*
//                   Position the circle so only the right
//                   half/arc is visible inside the left panel.
//                 */
//                 left-[calc(50%-345px)]
//                 top-1/2
//                 -translate-y-1/2

//                 pointer-events-none

//                 max-[1200px]:
//                   w-[590px]
//                   h-[590px]
//                   left-[calc(50%-295px)]

//                 max-md:
//                   w-[620px]
//                   h-[620px]
//                   left-[calc(50%-310px)]
//             "
//             />

//             {/* HEADING */}

//             <h2
//               ref={titleRef}
//               className="
//                 relative
//                 z-10

//                 m-0
//                 max-w-[390px]

//                 font-trial
//                 text-[35px]
//                 leading-[1.02]
//                 tracking-[-0.035em]

//                 text-[#38362f]

//                 max-[1200px]:
//                   max-w-[330px]
//                   text-[30px]

//                 max-md:
//                   max-w-[350px]
//                   text-[40px]
//             "
//             >
//               One problem
//               <br />
//               rarely belongs to
//               <br />
//               one discipline.
//             </h2>
//           </div>

//           {/* =====================================================
//               RIGHT SIDE
//           ===================================================== */}

//           <div
//             className="
//               min-h-[372px]

//               px-[78px]
//               py-[76px]

//               flex
//               flex-col
//               justify-center

//               max-[1200px]:
//                 px-[55px]
//                 py-[55px]

//               max-md:
//                 min-h-[340px]
//                 px-[40px]
//                 py-[50px]
//             "
//           >
//             {/* =================================================
//                 POINTS
//             ================================================= */}

//             <ul
//               className="
//                 m-0
//                 p-0
//                 list-none

//                 flex
//                 flex-col
//                 gap-[24px]

//                 max-[1200px]:gap-[20px]
//             "
//             >
//               {points.map((point, index) => (
//                 <li
//                   key={index}
//                   ref={(el) => {
//                     pointsRef.current[index] = el;
//                   }}
//                   className="
//                     flex
//                     items-start
//                     gap-[24px]

//                     font-clash
//                     text-[13px]
//                     leading-[1.25]

//                     text-[#4b4943]

//                     max-[1200px]:
//                       gap-[18px]
//                       text-[12px]

//                     max-md:
//                       gap-[16px]
//                       text-[13px]
//                 "
//                 >
//                   {/* SQUARE BULLET */}

//                   <span
//                     aria-hidden="true"
//                     className="
//                       mt-[5px]
//                       w-[6px]
//                       h-[6px]
//                       shrink-0
//                       bg-[#34332f]
//                     "
//                   />

//                   <span className="max-w-[300px]">
//                     {point}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================= */}

//             <p
//               ref={descriptionRef}
//               className="
//                 m-0
//                 mt-[38px]

//                 max-w-[335px]

//                 font-clash
//                 text-[13px]
//                 leading-[1.25]

//                 text-[#4b4943]

//                 max-[1200px]:
//                   mt-[32px]
//                   max-w-[300px]
//                   text-[12px]

//                 max-md:
//                   mt-[38px]
//                   max-w-[380px]
//                   text-[13px]
//             "
//             >
//               Keeping strategy, design, digital, communication, and art close
//               together allows us to see the larger system, and build solutions
//               that work coherently across it.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
      // Keep the arc visible continuously.
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
        },
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
        "-=0.35",
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
        "-=0.2",
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
        bg-[#f7f6f0]
        text-[#34332f]
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

            h-[490px]

            border-t
            border-b
            border-black/25

            max-[1200px]:
              h-[450px]

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

              h-[490px]

              overflow-hidden

              flex
              items-center

              px-[72px]

              max-[1200px]:
                h-[450px]
                px-[55px]

              max-[900px]:
                h-[390px]
                px-[40px]
            "
          >
            {/* ===================================================
                SEMI-CIRCLE / ARC

                IMPORTANT:

                The path itself (M 0 0 C 57 0, 100 22, 100 50 C 100 78,
                57 100, 0 100) is already a correct half-circle inside
                a 100x100 square viewBox.

                The previous bug was in how that square viewBox got
                mapped: it was stretched (preserveAspectRatio="none")
                across the FULL rectangular box (wide, short — and
                even more extreme at the stacked mobile breakpoint),
                which warped the circle into a flattened, inconsistent
                curve that changed shape at every breakpoint.

                Fix: keep the <svg> itself perfectly square (h-full +
                aspect-square), pinned to the right edge (the divider)
                and vertically centered. A square viewBox mapped onto
                a square element is never distorted, so this stays a
                true semicircle at every screen size, always meeting
                the divider at the vertical middle.
            =================================================== */}

            <svg
              aria-hidden="true"
              className="
                absolute

                top-0
                right-0

                h-full
                aspect-square

                pointer-events-none

                z-0

                overflow-visible
              "
              viewBox="0 0 100 100"
            >
              <path
                ref={arcRef}
                d="M 0 0 A 100 50 0 0 1 100 50 A 100 50 0 0 1 0 100"
                fill="none"
                stroke="#6f6d67"
                strokeOpacity="0.65"
                strokeWidth="1"
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

                text-[42px]
                leading-[1.01]
                tracking-[-0.045em]

                text-[#38362f]

                max-[1200px]:
                  max-w-[320px]
                  text-[36px]

                max-[900px]:
                  max-w-[360px]
                  text-[38px]
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
              h-[490px]

              flex
              flex-col
              justify-center

              px-[70px]

              max-[1200px]:
                h-[450px]
                px-[55px]

              max-[900px]:
                h-auto
                min-h-[360px]

                px-[40px]
                py-[60px]

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

                    text-[13px]
                    leading-[1.25]

                    text-[#4b4943]

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

                      w-[6px]
                      h-[6px]

                      shrink-0

                      bg-[#34332f]
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

                max-w-[350px]

                font-clash

                text-[13px]
                leading-[1.25]

                text-[#4b4943]

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