// "use client";

// import Image from "next/image";

// export default function ReflectionsSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* ============ TOP — TWO-IMAGE ROW, FULL SCREEN WIDTH ============ */}
//       <div className="relative w-full flex flex-col sm:flex-row h-[280px] sm:h-[340px] lg:h-[380px] xl:h-[420px] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
//         <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden bg-[#dedcdc]">
//           <Image
//             src="/images/spanish-alchemist-main.jpg"
//             alt="Man sketching architectural drawings at a desk by daylight"
//             fill
//             sizes="(max-width: 640px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </div>

//         <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden bg-[#1a1a1a]">
//           <Image
//             src="/images/objects.avif"
//             alt="Man working at a desk lit by a lamp at night"
//             fill
//             sizes="(max-width: 640px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* ============ BOTTOM — REFLECTIONS CONTENT, LIGHT-GRAY BG ============ */}
//       <div className="relative w-full bg-[#EAE9E9]">
//         <div className="max-w-[1728px] mx-auto px-[16px] sm:px-[28px] md:px-[40px] lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-32 pb-28 sm:pb-32 lg:pb-40">
//           {/* HEADING + RIGHT-COLUMN PARAGRAPH — SAME ROW */}
//           <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
//             <h2 className="font-recife text-[2.4rem] sm:text-[2.8rem] lg:text-[3.8rem] text-[#181818] ml-12 sm:ml-16 lg:ml-24">
//               Reflections
//             </h2>

//             <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[350px] ml-8 sm:ml-0 sm:mr-12 lg:mr-24 mt-2 sm:mt-4">
//               The Spanish Alchemist became an exploration into freshness,
//               sensory experience, intentional consumption, and the relationship
//               between science and ritual, rather than just a skincare identity.
//             </p>
//           </div>

//           {/* CLOSING STATEMENT BLOCK */}
//           <div className="mt-16 sm:mt-20 lg:mt-24 ml-12 sm:ml-16 lg:ml-24">
//             <p className="font-nixie text-[12px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[380px]">
//               For us, the project represented the kind of work we are most drawn
//               to,
//             </p>

//             <p className="font-nixie text-[2rem] sm:text-[2.6rem] lg:text-[3.6rem] leading-[1.35] text-[#afafaf] mt-4 sm:mt-5 max-w-[960px]">
//               where branding becomes a way of shaping not just perception, but{" "}
//               <span className="text-[#80c46c]">
//                 philosophy, behavior, and experience.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ReflectionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const img1WrapRef = useRef<HTMLDivElement | null>(null);
  const img1InnerRef = useRef<HTMLDivElement | null>(null);
  const img2WrapRef = useRef<HTMLDivElement | null>(null);
  const img2InnerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const rightParaRef = useRef<HTMLParagraphElement | null>(null);
  const closingSmallRef = useRef<HTMLParagraphElement | null>(null);
  const closingBigRef = useRef<HTMLParagraphElement | null>(null);

  useGsap((gsap) => {
    // TOP TWO-IMAGE ROW — split reveal, opposite directions + parallax
    gsap.fromTo(
      img1WrapRef.current,
      { clipPath: "inset(0% 100% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.6,
        ease: "power4.inOut",
        scrollTrigger: { trigger: img1WrapRef.current, start: "top 95%" },
      }
    );
    gsap.fromTo(
      img1InnerRef.current,
      { scale: 1.3, xPercent: -6 },
      {
        scale: 1,
        xPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: img1WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      img2WrapRef.current,
      { clipPath: "inset(0% 0% 0% 100%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.6,
        ease: "power4.inOut",
        delay: 0.15,
        scrollTrigger: { trigger: img2WrapRef.current, start: "top 95%" },
      }
    );
    gsap.fromTo(
      img2InnerRef.current,
      { scale: 1.3, xPercent: 6 },
      {
        scale: 1,
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: img2WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // HEADING — heavy masked rise
    gsap.fromTo(
      headingRef.current,
      { yPercent: 130, opacity: 0, skewY: 5 },
      {
        yPercent: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      }
    );

    // RIGHT PARAGRAPH — delayed rise
    gsap.fromTo(
      rightParaRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.25,
        scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
      }
    );

    // CLOSING SMALL LINE — heavy rise
    gsap.fromTo(
      closingSmallRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: closingSmallRef.current, start: "top 88%" },
      }
    );

    // CLOSING BIG STATEMENT — dramatic masked rise with rotation settle
    gsap.fromTo(
      closingBigRef.current,
      { yPercent: 60, opacity: 0, rotate: -1.5, transformOrigin: "left top" },
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.7,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: { trigger: closingBigRef.current, start: "top 85%" },
      }
    );

    ScrollTrigger.refresh();
  }, sectionRef);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* ============ TOP — TWO-IMAGE ROW, FULL SCREEN WIDTH ============ */}
      <div className="relative w-full flex flex-col sm:flex-row h-[280px] sm:h-[340px] lg:h-[380px] xl:h-[420px] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
        <div
          ref={img1WrapRef}
          className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden bg-[#dedcdc]"
        >
          <div ref={img1InnerRef} className="relative w-full h-full">
            <Image
              src="/images/spanish-alchemist-main.jpg"
              alt="Man sketching architectural drawings at a desk by daylight"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          ref={img2WrapRef}
          className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden bg-[#1a1a1a]"
        >
          <div ref={img2InnerRef} className="relative w-full h-full">
            <Image
              src="/images/objects.avif"
              alt="Man working at a desk lit by a lamp at night"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ============ BOTTOM — REFLECTIONS CONTENT, LIGHT-GRAY BG ============ */}
      <div className="relative w-full bg-[#EAE9E9]">
        <div className="max-w-[1728px] mx-auto px-[16px] sm:px-[28px] md:px-[40px] lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-32 pb-28 sm:pb-32 lg:pb-40">
          {/* HEADING + RIGHT-COLUMN PARAGRAPH — SAME ROW */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
            <h2
              ref={headingRef}
              className="font-recife text-[2.4rem] sm:text-[2.8rem] lg:text-[3.8rem] text-[#181818] ml-12 sm:ml-16 lg:ml-24 overflow-hidden"
            >
              Reflections
            </h2>

            <p
              ref={rightParaRef}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[350px] ml-8 sm:ml-0 sm:mr-12 lg:mr-24 mt-2 sm:mt-4"
            >
              The Spanish Alchemist became an exploration into freshness,
              sensory experience, intentional consumption, and the relationship
              between science and ritual, rather than just a skincare identity.
            </p>
          </div>

          {/* CLOSING STATEMENT BLOCK */}
          <div className="mt-16 sm:mt-20 lg:mt-24 ml-12 sm:ml-16 lg:ml-24">
            <p
              ref={closingSmallRef}
              className="font-nixie text-[12px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[380px]"
            >
              For us, the project represented the kind of work we are most drawn
              to,
            </p>

            <p
              ref={closingBigRef}
              className="font-nixie text-[2rem] sm:text-[2.6rem] lg:text-[3.6rem] leading-[1.35] text-[#afafaf] mt-4 sm:mt-5 max-w-[960px] overflow-hidden"
            >
              where branding becomes a way of shaping not just perception, but{" "}
              <span className="text-[#80c46c]">
                philosophy, behavior, and experience.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}