// "use client";

// import Image from "next/image";
// import { project } from "@/lib/constants";

// type Project = {
//   title: string;
//   location: string;
//   period: string;
//   projectLead: string;
//   contributors: string[];
//   heroImage: string;
//   heroImageAlt: string;
//   thumbImage: string;
//   thumbImageAlt: string;
// };


// export default function ProjectDetail({ data = project }: { data?: Project }) {
//   const sidebarLines = data.title.split(" ");

//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//      <div className="relative max-w-[1728px] mx-auto pl-0 pr-5 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 pt-0 pb-0">
//         {/* ============ CARD — border-b only, bleeds left, right AND top ============ */}
//         <div className="relative bg-white lg:flex">
//           {/* ============ SIDEBAR ============ */}
//           <div className="lg:w-[280px] lg:shrink-0 lg:border-r border-black/85 pl-12 pr-6 sm:pl-16 sm:pr-8 lg:pl-14 lg:pr-8 py-8 sm:py-10 flex flex-row lg:flex-col gap-8 lg:gap-0 items-start">
//             <div className="flex flex-col shrink-0">
//               <h2 className="font-nova text-[1.4rem] sm:text-[1.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase">
//                 {sidebarLines.map((line, i) => (
//                   <span key={i} className="block">
//                     {line}
//                   </span>
//                 ))}
//               </h2>

//               <div className="h-px w-10 bg-black/70 mt-4 mb-6 lg:mb-8" />

//               <div className="relative w-[150px] h-[195px] sm:w-[170px] sm:h-[220px] overflow-hidden bg-[#F4F3F1]">
//                 <Image
//                   src={data.thumbImage}
//                   alt={data.thumbImageAlt}
//                   fill
//                   sizes="200px"
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             <div className="font-nixie text-[14px] sm:text-[16px] leading-[1.6] text-[#181818] lg:mt-8 ml-auto lg:ml-0 self-end lg:self-start">
//               <p>{data.location}</p>
//               <p>{data.period}</p>
//             </div>
//           </div>

//           {/* ============ MAIN CONTENT ============ */}
//           <div className="flex-1 pl-10 pr-6 sm:pl-16 sm:pr-10 lg:pl-24 lg:pr-12 py-8 sm:py-10 lg:py-12">
//             <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
//               {/* HERO IMAGE */}
//               <div className="relative w-full lg:w-[42%] xl:w-[41%] h-[280px] sm:h-[420px] lg:h-auto lg:min-h-[520px] xl:min-h-[600px] shrink-0 overflow-hidden bg-[#F4F3F1]">
//                 <Image
//                   src={data.heroImage}
//                   alt={data.heroImageAlt}
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 42vw"
//                   className="object-cover"
//                 />
//               </div>

//               {/* TEXT COLUMN — heading/owner pinned top, lead/contributors
//                   pinned bottom, matching the image's height on desktop */}
//               <div className="flex-1 flex flex-col justify-between gap-10 lg:min-h-[520px] xl:min-h-[600px]">
//                 <div>
//                   <h1 className="font-nova text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.08] tracking-[0.01em] text-[#181818] uppercase">
//                     {sidebarLines.map((line, i) => (
//                       <span key={i} className="block">
//                         {line}
//                       </span>
//                     ))}
//                   </h1>
//                 </div>

//                 <div className="flex flex-col items-start lg:items-end gap-8 sm:gap-10 text-left lg:text-right">
//                   <div>
//                     <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
//                       Project Lead
//                     </p>
//                     <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818]">
//                       {data.projectLead}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
//                       Studio Contributors
//                     </p>
//                     <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818] max-w-[280px] lg:ml-auto">
//                       {data.contributors.join(", ")}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import Image from "next/image";
import { project } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

type Project = {
  title: string;
  location: string;
  period: string;
  projectLead: string;
  contributors: string[];
  heroImage: string;
  heroImageAlt: string;
  thumbImage: string;
  thumbImageAlt: string;
};

export default function ProjectDetail({ data = project }: { data?: Project }) {
  const sidebarLines = data.title.split(" ");

  const sectionRef = useRef<HTMLElement>(null);
  const sidebarTitleRef = useRef<HTMLHeadingElement>(null);
  const sidebarRuleRef = useRef<HTMLDivElement>(null);
  const sidebarThumbRef = useRef<HTMLDivElement>(null);
  const sidebarMetaRef = useRef<HTMLDivElement>(null);

  const heroImgRef = useRef<HTMLDivElement>(null);
  const mainHeadingLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const leadRef = useRef<HTMLDivElement>(null);
  const contributorsRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap) => {
      // ---- Load-in sequence (above-the-fold, not scroll-tied) ----
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        sidebarTitleRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          sidebarRuleRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left center" },
          "-=0.3"
        )
        .fromTo(
          sidebarThumbRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          sidebarMetaRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          heroImgRef.current,
          { autoAlpha: 0, scale: 1.06 },
          { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          mainHeadingLineRefs.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, ease: "smoothReveal", stagger: 0.08 },
          "-=0.8"
        )
        .fromTo(
          leadRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          contributorsRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative max-w-[1728px] mx-auto pl-0 pr-5 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 pt-0 pb-0">
        {/* ============ CARD ============ */}
        <div className="relative bg-white lg:flex">
          {/* ============ SIDEBAR ============ */}
          <div className="lg:w-[280px] lg:shrink-0 lg:border-r border-black/85 pl-12 pr-6 sm:pl-16 sm:pr-8 lg:pl-14 lg:pr-8 py-8 sm:py-10 flex flex-row lg:flex-col gap-8 lg:gap-0 items-start">
            <div className="flex flex-col shrink-0">
              <h2
                ref={sidebarTitleRef}
                className="font-nova text-[1.4rem] sm:text-[1.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase"
              >
                {sidebarLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <div
                ref={sidebarRuleRef}
                className="h-px w-10 bg-black/70 mt-4 mb-6 lg:mb-8 origin-left"
              />

              <div
                ref={sidebarThumbRef}
                className="relative w-[150px] h-[195px] sm:w-[170px] sm:h-[220px] overflow-hidden bg-[#F4F3F1]"
              >
                <Image
                  src={data.thumbImage}
                  alt={data.thumbImageAlt}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              ref={sidebarMetaRef}
              className="font-nixie text-[14px] sm:text-[16px] leading-[1.6] text-[#181818] lg:mt-8 ml-auto lg:ml-0 self-end lg:self-start"
            >
              <p>{data.location}</p>
              <p>{data.period}</p>
            </div>
          </div>

          {/* ============ MAIN CONTENT ============ */}
          <div className="flex-1 pl-10 pr-6 sm:pl-16 sm:pr-10 lg:pl-24 lg:pr-12 py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
              {/* HERO IMAGE */}
              <div
                ref={heroImgRef}
                className="relative w-full lg:w-[42%] xl:w-[41%] h-[280px] sm:h-[420px] lg:h-auto lg:min-h-[520px] xl:min-h-[600px] shrink-0 overflow-hidden bg-[#F4F3F1]"
              >
                <Image
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* TEXT COLUMN */}
              <div className="flex-1 flex flex-col justify-between gap-10 lg:min-h-[520px] xl:min-h-[600px]">
                <div>
                  <h1 className="font-nova text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.08] tracking-[0.01em] text-[#181818] uppercase">
                    {sidebarLines.map((line, i) => (
                      <span key={i} className="block overflow-hidden">
                        <span
                          ref={(el) => {
                            mainHeadingLineRefs.current[i] = el;
                          }}
                          className="block"
                        >
                          {line}
                        </span>
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-8 sm:gap-10 text-left lg:text-right">
                  <div ref={leadRef}>
                    <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                      Project Lead
                    </p>
                    <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818]">
                      {data.projectLead}
                    </p>
                  </div>

                  <div ref={contributorsRef}>
                    <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                      Studio Contributors
                    </p>
                    <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818] max-w-[280px] lg:ml-auto">
                      {data.contributors.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}