// "use client";

// import Image from "next/image";
// import { narrative } from "@/lib/constants";

// type Narrative = {
//   heading: string; 
//   body: string;
//   eyebrow: string;
//   statement: string; 
//   detailImage: string;
//   detailImageAlt: string;
//   detailCaption: string;
//   studioImage: string;
//   studioImageAlt: string;
//   closingCaption: string;
// };

// export default function ProjectNarrative({ data = narrative }: { data?: Narrative }) {
//   const headingLines = data.heading.split(". ").map((l, i, arr) => (i < arr.length - 1 ? l + "." : l));

//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* MAX-WIDTH WRAPPER — same 1728px freeze as the rest of the page. */}
//      <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0">
//         {/* ============ FRAME — no outer borders ============ */}
//         <div className="relative lg:flex">
//           {/* ============ SIDEBAR — white, empty, grid-consistency ============ */}
//           <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black/85" />

//           {/* ============ CONTENT — light-gray panel ============ */}
//           <div className="flex-1 bg-[#EAE9E9] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16">
//             <h2 className="font-nova text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase max-w-[600px]">
//               {headingLines.map((line, i) => (
//                 <span key={i} className="block">
//                   {line}
//                 </span>
//               ))}
//             </h2>

//             <p className="font-nixie text-[14px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[420px] mt-8 sm:mt-10">
//               {data.body}
//             </p>

//             <p className="font-nixie text-[14px] sm:text-[16px] text-[#181818] mt-16 sm:mt-20 lg:mt-24">
//               {data.eyebrow}
//             </p>

//             <p className="font-nixie text-[1.7rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2] text-[#181818] mt-4 sm:mt-6 max-w-[750px]">
//               {data.statement}
//             </p>

//             {/* DETAIL IMAGE + CAPTION ROW */}
//             <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
//               <div className="relative w-full sm:w-[280px] lg:w-[300px] h-[220px] sm:h-[230px] shrink-0 overflow-hidden bg-[#dedcdc]">
//                 <Image
//                   src={data.detailImage}
//                   alt={data.detailImageAlt}
//                   fill
//                   sizes="(max-width: 640px) 100vw, 300px"
//                   className="object-cover"
//                 />
//               </div>
//               <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[320px] sm:pt-2">
//                 {data.detailCaption}
//               </p>
//             </div>

//             {/* HAIRLINE DIVIDER */}
//             <div className="h-px bg-black/15 mt-10 sm:mt-12 lg:mt-14" />

//             {/* LARGE STUDIO IMAGE */}
//             <div className="relative w-full mt-10 sm:mt-12 lg:mt-14 h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-[#dedcdc]">
//               <Image
//                 src={data.studioImage}
//                 alt={data.studioImageAlt}
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 900px"
//                 className="object-cover"
//               />
//             </div>

//             {/* CLOSING CAPTION — right-aligned, indented from the left */}
//             <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[320px] text-right ml-auto mt-6 sm:mt-8">
//               {data.closingCaption}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Image from "next/image";
import { narrative } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

type Narrative = {
  heading: string;
  body: string;
  eyebrow: string;
  statement: string;
  detailImage: string;
  detailImageAlt: string;
  detailCaption: string;
  studioImage: string;
  studioImageAlt: string;
  closingCaption: string;
};

export default function ProjectNarrative({ data = narrative }: { data?: Narrative }) {
  const headingLines = data.heading.split(". ").map((l, i, arr) => (i < arr.length - 1 ? l + "." : l));

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const detailImgRef = useRef<HTMLDivElement>(null);
  const detailCaptionRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const studioImgRef = useRef<HTMLDivElement>(null);
  const closingCaptionRef = useRef<HTMLParagraphElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const reveal = (
        target: gsap.TweenTarget,
        trigger: Element | null,
        vars: gsap.TweenVars = {}
      ) => {
        if (!trigger) return;
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            ...vars,
          }
        );
      };

      reveal(headingRef.current, headingRef.current);
      reveal(bodyRef.current, bodyRef.current, { delay: 0.1 });
      reveal(eyebrowRef.current, eyebrowRef.current);
      reveal(statementRef.current, statementRef.current, { delay: 0.1 });

      reveal(detailImgRef.current, detailImgRef.current, {
        ease: "power2.out",
      });
      reveal(detailCaptionRef.current, detailCaptionRef.current, {
        delay: 0.15,
      });

      // ---- Hairline divider draw ----
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Large studio image (bigger scale-settle since it's the visual centerpiece) ----
      gsap.fromTo(
        studioImgRef.current,
        { autoAlpha: 0, scale: 1.06 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: studioImgRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      reveal(closingCaptionRef.current, closingCaptionRef.current, {
        delay: 0.15,
      });
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0">
        <div className="relative lg:flex">
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black/85" />

          <div className="flex-1 bg-[#EAE9E9] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16">
            <h2
              ref={headingRef}
              className="font-nova text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase max-w-[600px]"
            >
              {headingLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p
              ref={bodyRef}
              className="font-nixie text-[14px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[420px] mt-8 sm:mt-10"
            >
              {data.body}
            </p>

            <p
              ref={eyebrowRef}
              className="font-nixie text-[14px] sm:text-[16px] text-[#181818] mt-16 sm:mt-20 lg:mt-24"
            >
              {data.eyebrow}
            </p>

            <p
              ref={statementRef}
              className="font-nixie text-[1.7rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2] text-[#181818] mt-4 sm:mt-6 max-w-[750px]"
            >
              {data.statement}
            </p>

            {/* DETAIL IMAGE + CAPTION ROW */}
            <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
              <div
                ref={detailImgRef}
                className="relative w-full sm:w-[280px] lg:w-[300px] h-[220px] sm:h-[230px] shrink-0 overflow-hidden bg-[#dedcdc]"
              >
                <Image
                  src={data.detailImage}
                  alt={data.detailImageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <p
                ref={detailCaptionRef}
                className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[320px] sm:pt-2"
              >
                {data.detailCaption}
              </p>
            </div>

            {/* HAIRLINE DIVIDER */}
            <div
              ref={dividerRef}
              className="h-px bg-black/15 mt-10 sm:mt-12 lg:mt-14 origin-left"
            />

            {/* LARGE STUDIO IMAGE */}
            <div
              ref={studioImgRef}
              className="relative w-full mt-10 sm:mt-12 lg:mt-14 h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-[#dedcdc]"
            >
              <Image
                src={data.studioImage}
                alt={data.studioImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            {/* CLOSING CAPTION */}
            <p
              ref={closingCaptionRef}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[320px] text-right ml-auto mt-6 sm:mt-8"
            >
              {data.closingCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}