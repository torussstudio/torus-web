// "use client";

// import { useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { GoArrowRight } from "react-icons/go";
// import { valuess } from "@/lib/constants";
// import { futureImages } from "@/lib/constants";


// export default function WhatWeValue() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [dividerRightGap, setDividerRightGap] = useState(0);

//   const dividerWrapRef = useRef<HTMLDivElement>(null);
//   const tabsRowRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     function measure() {
//       if (window.innerWidth < 1024) {
//         setDividerRightGap(0);
//         return;
//       }
//       if (dividerWrapRef.current && tabsRowRef.current) {
//         const wrapRight = dividerWrapRef.current.getBoundingClientRect().right;
//         const rowRight = tabsRowRef.current.getBoundingClientRect().right;
//         setDividerRightGap(Math.max(0, wrapRight - rowRight));
//       }
//     }
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
//       <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 sm:pt-4 lg:pt-6 pb-10 sm:pb-14 lg:pb-20">
//         {/* ============ TOP DIVIDER — full-bleed both edges ============ */}
//         <div className="relative h-px">
//           <div className="absolute top-0 left-0 right-0 h-px bg-black/50" />
//         </div>

//         {/* ============ HEADING ============ */}
//         <h2
//           className="
//             font-display
//             text-[1.7rem] sm:text-[2.1rem] md:text-[2.3rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]
//             leading-[1.15] tracking-[0.01em] text-black
//             mt-8 sm:mt-10 lg:mt-12
//           "
//         >
//           WHAT WE VALUE
//         </h2>

//         {/* ============ 01 / 02 / 03 TABS ROW + ARROW — exact hero pattern, left-aligned ============ */}
//         <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//           <div
//             ref={tabsRowRef}
//             className="lg:col-span-9 lg:col-start-1 flex flex-col items-start gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-x-42 lg:gap-x-58 sm:gap-y-10 lg:ml-32 xl:ml-40"
//           >
//             {valuess.map((value, i) => (
//               <div
//                 key={value.number}
//                 className="inline-flex flex-col items-start gap-3 w-fit"
//               >
//                 <button
//                   onClick={() => setActiveIndex(i)}
//                   className={`font-think text-[16px] sm:text-[20px] cursor-pointer uppercase tracking-[0.1em] transition-colors ${
//                     activeIndex === i ? "text-black" : "text-black/35 hover:text-black/60"
//                   }`}
//                 >
//                   — {value.number}
//                 </button>

//                 <span
//                   className={`font-think text-[13px] sm:text-[16px] uppercase tracking-[0.06em] leading-[1.5] text-left transition-colors ${
//                     activeIndex === i ? "text-black/55" : "text-black/35"
//                   }`}
//                 >
//                   {value.lines[0]}
//                   <br />
//                   {value.lines[1]}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <button
//             aria-label="Next"
//             className="cursor-pointer flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center bg-white border border-black/30 text-black/60 hover:bg-black hover:text-white hover:border-black transition-colors self-center sm:self-end lg:self-auto lg:col-span-1 lg:col-start-12 mx-auto sm:mx-0 sm:ml-auto lg:ml-auto"
//           >
//             <GoArrowRight size={20} />
//           </button>
//         </div>

//         {/* ============ DIVIDER — left edge full-bleeds; right edge measured to match the tabs row's right boundary ============ */}
//          <div ref={dividerWrapRef} className="mt-10 lg:mt-14 relative h-px">
//           <div
//             className="absolute top-0 h-px bg-black/50"
//             style={{ left: 0, right: dividerRightGap }}
//           />
//         </div>

//         {/* ============ QUOTE + ICON, right-aligned, then link below ============ */}
//          <div className="mt-10 lg:mt-14 flex flex-col items-end pr-35 lg:pr-68 xl:pr-88">
//           <div className="flex items-center gap-5 sm:gap-6">
//             <p className="font-rethink text-[13px] sm:text-[16px] leading-[1.75] text-black/50 max-w-[220px] sm:max-w-[280px] lg:max-w-[360px] text-right">
//               We value businesses that care deeply about what they are
//               building. And people who understand that meaningful creative
//               work is rarely rushed into existence.
//             </p>
 
//            <svg
//               width="48"
//               height="48"
//               viewBox="0 0 52 52"
//               fill="none"
//               className="shrink-0 text-black/30 sm:w-[56px] sm:h-[56px] lg:w-[65px] lg:h-[65px]"
//             >
//               <path
//                 d="M46 6 L6 46"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//               <path
//                 d="M6 24 L6 46 L28 46"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
 
//           <a
//             href="#"
//             className="group mt-6 sm:mt-8 mr-14 sm:mr-22 inline-flex items-center gap-2 w-fit font-think text-[16px] uppercase tracking-[0.12em] text-[#80AD76]"
//           >
//             <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
//               ↳
//             </span>
//             VIEW OUR PROJECTS
//           </a>
//         </div>

//         {/* ============ THREE IMAGES ROW ============ */}
//        <div className="mt-14 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row gap-2 sm:gap-2 lg:gap-3 sm:pr-24 lg:pr-40 xl:pr-56">
//           {futureImages.map((img) => (
//             <div
//               key={img.src}
//               className="relative w-full sm:flex-1 sm:min-w-0 h-[400px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 sizes="(max-width: 640px) 100vw, 33vw"
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* ============ "THE FUTURE OF TORUSS" HEADING + SIDE NOTE ============ */}
//         <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
//            <h2
//             className="
//               sm:col-span-1
//               font-display
//               text-[2.1rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] xl:text-[2.9rem]
//               leading-[1.15] tracking-[0.01em] text-black
//             "
//           >
//             THE FUTURE OF
//             <br />
//             TORUSS
//           </h2>

//            <div className="sm:col-start-3 sm:col-span-1 sm:-ml-8 lg:-ml-12 xl:-ml-16">
//             <p className="font-rethink text-[13px] sm:text-[16px] leading-[1.75] text-black/50">
//               We&apos;re interested in slowly building <br /> a studio that can move
//               fluidly <br /> between:
//             </p>
//           </div>
//         </div>


//         {/* ============ BIG DISCIPLINE LIST ============ */}
//       <p
//           className="
//             font-display
//             text-[1.6rem] sm:text-[1.9rem] md:text-[2.1rem] lg:text-[2.2rem] xl:text-[2.4rem]
//             leading-[1.5] tracking-[0.01em]
//             mt-10 sm:mt-12 lg:mt-14
//           "
//         >
//           <span className="text-[#80AD76]">branding,</span>{" "}
//           <span className="text-black/30">
//             digital systems, culture, education, art, public initiatives, storytelling, creative technology, and collective exploration.
//           </span>
//         </p>

//         {/* ============ BOTTOM DIVIDER — full-bleed both edges ============ */}
//         <div className="mt-10 sm:mt-12 lg:mt-14 relative h-px">
//           <div className="absolute top-0 left-0 right-0 h-px bg-black/50" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { valuess } from "@/lib/constants";
import { futureImages } from "@/lib/constants";

export default function WhatWeValue() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dividerRightGap, setDividerRightGap] = useState(0);

  const dividerWrapRef = useRef<HTMLDivElement>(null);
  const tabsRowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function measure() {
      if (window.innerWidth < 1024) {
        setDividerRightGap(0);
        return;
      }
      if (dividerWrapRef.current && tabsRowRef.current) {
        const wrapRight = dividerWrapRef.current.getBoundingClientRect().right;
        const rowRight = tabsRowRef.current.getBoundingClientRect().right;
        setDividerRightGap(Math.max(0, wrapRight - rowRight));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      <div className="relative max-w-[1728px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 sm:pt-4 lg:pt-6 pb-10 sm:pb-14 lg:pb-20">
        {/* ============ TOP DIVIDER — full-bleed both edges ============ */}
        <div className="relative h-px">
          <div className="absolute top-0 left-0 right-0 h-px bg-black/50" />
        </div>

        {/* ============ HEADING ============ */}
        <h2
          className="
            font-display
            text-[1.6rem] sm:text-[2.1rem] md:text-[2.3rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]
            leading-[1.15] tracking-[0.01em] text-black
            mt-8 sm:mt-10 lg:mt-12
          "
        >
          WHAT WE VALUE
        </h2>

        {/* ============ 01 / 02 / 03 TABS ROW + ARROW — exact hero pattern, left-aligned ============ */}
        {/* "gap-x-42" / "gap-x-58" Tailwind default scale-il illa — CSS generate
            aakathe silently ignored aayirunnu. Bracket arbitrary values aakki
            (same intended pixel value: 42*4px=168px, 58*4px=232px), plus a
            smoother md step for the left margin instead of a sudden jump at lg. */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div
            ref={tabsRowRef}
            className="lg:col-span-9 lg:col-start-1 flex flex-col items-center sm:items-start gap-8 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-x-[168px] lg:gap-x-[232px] sm:gap-y-10 md:ml-16 lg:ml-32 xl:ml-40 w-full sm:w-auto"
          >
            {valuess.map((value, i) => (
              <div
                key={value.number}
                className="inline-flex flex-col items-center sm:items-start gap-3 w-fit"
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`font-think text-[16px] sm:text-[20px] cursor-pointer uppercase tracking-[0.1em] transition-colors ${
                    activeIndex === i ? "text-black" : "text-black/35 hover:text-black/60"
                  }`}
                >
                  — {value.number}
                </button>

                <span
                  className={`font-think text-[13px] sm:text-[16px] uppercase tracking-[0.06em] leading-[1.5] text-center sm:text-left transition-colors ${
                    activeIndex === i ? "text-black/55" : "text-black/35"
                  }`}
                >
                  {value.lines[0]}
                  <br />
                  {value.lines[1]}
                </span>
              </div>
            ))}
          </div>

          <button
            aria-label="Next"
            className="cursor-pointer flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center bg-white border border-black/30 text-black/60 hover:bg-black hover:text-white hover:border-black transition-colors self-center sm:self-end lg:self-auto lg:col-span-1 lg:col-start-12 mx-auto sm:mx-0 sm:ml-auto lg:ml-auto"
          >
            <GoArrowRight size={20} />
          </button>
        </div>

        {/* ============ DIVIDER — left edge full-bleeds; right edge measured to match the tabs row's right boundary ============ */}
        <div ref={dividerWrapRef} className="mt-10 lg:mt-14 relative h-px">
          <div
            className="absolute top-0 h-px bg-black/50"
            style={{ left: 0, right: dividerRightGap }}
          />
        </div>

        {/* ============ QUOTE + ICON, right-aligned, then link below ============ */}
        {/* "pr-35 / pr-68 / pr-88" and "mr-22" ivayum non-standard scale values
            aayirunnu, CSS generate aavathe — quote section already right-padding
            illathe aayirunnu ella screen-ilum. Bracket values aakki, mobile-il
            chെറiya standard padding vecho overflow varathe. */}
        <div className="mt-10 lg:mt-14 flex flex-col items-end pr-4 sm:pr-[140px] lg:pr-[272px] xl:pr-[352px]">
          <div className="flex items-center gap-4 sm:gap-6">
            <p className="font-rethink text-[13px] sm:text-[16px] leading-[1.75] text-black/50 max-w-[200px] sm:max-w-[280px] lg:max-w-[360px] text-right">
              We value businesses that care deeply about what they are
              building. And people who understand that meaningful creative
              work is rarely rushed into existence.
            </p>

            <svg
              width="40"
              height="40"
              viewBox="0 0 52 52"
              fill="none"
              className="shrink-0 text-black/30 sm:w-[56px] sm:h-[56px] lg:w-[65px] lg:h-[65px]"
            >
              <path d="M46 6 L6 46" stroke="currentColor" strokeWidth="1" />
              <path
                d="M6 24 L6 46 L28 46"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <a
            href="#"
            className="group mt-6 sm:mt-8 mr-6 sm:mr-[88px] inline-flex items-center gap-2 w-fit font-think text-[14px] sm:text-[16px] uppercase tracking-[0.12em] text-[#80AD76]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↳
            </span>
            VIEW OUR PROJECTS
          </a>
        </div>

        {/* ============ THREE IMAGES ROW ============ */}
        <div className="mt-14 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row gap-2 sm:gap-2 lg:gap-3 sm:pr-24 lg:pr-40 xl:pr-56">
          {futureImages.map((img) => (
            <div
              key={img.src}
              className="relative w-full sm:flex-1 sm:min-w-0 h-[280px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* ============ "THE FUTURE OF TORUSS" HEADING + SIDE NOTE ============ */}
        {/* Side-note-le hard <br/> tags oru narrow (1/3 width) column-inu vendi
            tuned aayirunnu. Mobile-il (grid-cols-1) ee paragraph full-width
            aavumbol aa breaks weird short lines aakkum — so mobile-il matram
            natural wrap allow cheythu. */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          <h2
            className="
              sm:col-span-1
              font-display
              text-[1.9rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] xl:text-[2.9rem]
              leading-[1.15] tracking-[0.01em] text-black
            "
          >
            THE FUTURE OF
            <br />
            TORUSS
          </h2>

          <div className="sm:col-start-3 sm:col-span-1 sm:-ml-8 lg:-ml-12 xl:-ml-16">
            <p className="font-rethink text-[13px] sm:text-[16px] leading-[1.75] text-black/50">
              We&apos;re interested in slowly building
              <span className="hidden sm:inline">
                {" "}
                <br />
              </span>{" "}
              a studio that can move
              <span className="hidden sm:inline">
                {" "}
                <br />
              </span>{" "}
              fluidly
              <span className="hidden sm:inline">
                {" "}
                <br />
              </span>{" "}
              between:
            </p>
          </div>
        </div>

        {/* ============ BIG DISCIPLINE LIST ============ */}
        <p
          className="
            font-display
            text-[1.4rem] sm:text-[1.9rem] md:text-[2.1rem] lg:text-[2.2rem] xl:text-[2.4rem]
            leading-[1.5] tracking-[0.01em]
            mt-10 sm:mt-12 lg:mt-14
          "
        >
          <span className="text-[#80AD76]">branding,</span>{" "}
          <span className="text-black/30">
            digital systems, culture, education, art, public initiatives,
            storytelling, creative technology, and collective exploration.
          </span>
        </p>

        {/* ============ BOTTOM DIVIDER — full-bleed both edges ============ */}
        <div className="mt-10 sm:mt-12 lg:mt-14 relative h-px">
          <div className="absolute top-0 left-0 right-0 h-px bg-black/50" />
        </div>
      </div>
    </section>
  );
}