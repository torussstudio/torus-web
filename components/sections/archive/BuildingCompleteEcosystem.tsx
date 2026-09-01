// "use client";

// import Image from "next/image";

// export default function BuildingCompleteEcosystem() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       <div className="relative w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
//         {/* HEADING */}
//         <h2 className="font-recife text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem] lg:text-[2.7rem] xl:text-[3.8rem] leading-[1.2] tracking-[0.01em] text-[#181818] max-w-[560px]">
//           <span className="block">Building a complete</span>
//           <span className="block">brand ecosystem.</span>
//         </h2>

//         {/* PARAGRAPHS — pushed right, same offset pattern as MakingFreshnessVisible */}
//         <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col gap-6 sm:gap-8 lg:ml-[44%] xl:ml-[38%] max-w-[360px]">
//           <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
//             The Spanish Alchemist started as a fresh skincare concept. It
//             became a complete brand system built across name, identity,
//             packaging, website, content, social media, email, and customer
//             experience.
//           </p>

//           <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
//             Together, these choices helped TSA enter the market with a clear
//             identity, a distinct visual presence, a strong product language,
//             and a brand experience that made freshness feel visible,
//             personal, and easy to trust.
//           </p>
//         </div>

//         {/* LARGE IMAGE — full-bleed to true screen edge */}
//         <div className="relative mt-10 sm:mt-12 lg:mt-14 h-[280px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px]">
//   <div
//     className="
//       absolute top-0 h-full overflow-hidden bg-[#dedcdc]
//       left-[-16px] right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
//       sm:left-[-28px] sm:right-[calc(-28px-((100vw-min(100vw,1728px))/2))]
//       md:left-[-40px] md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
//       lg:left-[-40px] lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
//       xl:left-[-56px] xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
//     "
//   >
//     <Image
//       src="/images/creative.avif"
//       alt="Behind the scenes photo shoot in a studio with crew and lighting equipment"
//       fill
//       sizes="100vw"
//       className="object-cover"
//     />
//   </div>
// </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BuildingCompleteEcosystem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraWrapRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const imageInnerRef = useRef<HTMLDivElement | null>(null);

  useGsap((gsap) => {
    // HEADING — heavy masked line-by-line rise with skew settle
    gsap.fromTo(
      headingRef.current?.children ?? [],
      { yPercent: 130, opacity: 0, skewY: 5 },
      {
        yPercent: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
      }
    );

    // PARAGRAPHS — staggered heavy rise
    gsap.fromTo(
      paraWrapRef.current?.children ?? [],
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: { trigger: paraWrapRef.current, start: "top 88%" },
      }
    );

    // LARGE IMAGE — dramatic diagonal clip reveal + strong parallax + rotation drift
    gsap.fromTo(
      imageWrapRef.current,
      { clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)" },
      {
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: { trigger: imageWrapRef.current, start: "top 88%" },
      }
    );
    gsap.fromTo(
      imageInnerRef.current,
      { scale: 1.45, yPercent: -14, rotate: 2 },
      {
        scale: 1,
        yPercent: 14,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      }
    );

    ScrollTrigger.refresh();
  }, sectionRef);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="font-recife text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem] lg:text-[2.7rem] xl:text-[3.8rem] leading-[1.2] tracking-[0.01em] text-[#181818] max-w-[560px] overflow-hidden"
        >
          <span className="block">Building a complete</span>
          <span className="block">brand ecosystem.</span>
        </h2>

        {/* PARAGRAPHS — pushed right, same offset pattern as MakingFreshnessVisible */}
        <div
          ref={paraWrapRef}
          className="mt-10 sm:mt-12 lg:mt-14 flex flex-col gap-6 sm:gap-8 lg:ml-[44%] xl:ml-[38%] max-w-[360px]"
        >
          <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
            The Spanish Alchemist started as a fresh skincare concept. It
            became a complete brand system built across name, identity,
            packaging, website, content, social media, email, and customer
            experience.
          </p>

          <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
            Together, these choices helped TSA enter the market with a clear
            identity, a distinct visual presence, a strong product language,
            and a brand experience that made freshness feel visible,
            personal, and easy to trust.
          </p>
        </div>

        {/* LARGE IMAGE — full-bleed to true screen edge */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14 h-[280px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px]">
          <div
            ref={imageWrapRef}
            className="
              absolute top-0 h-full overflow-hidden bg-[#dedcdc]
              left-[-16px] right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
              sm:left-[-28px] sm:right-[calc(-28px-((100vw-min(100vw,1728px))/2))]
              md:left-[-40px] md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              lg:left-[-40px] lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              xl:left-[-56px] xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
            "
          >
            <div ref={imageInnerRef} className="relative w-full h-full">
              <Image
                src="/images/creative.avif"
                alt="Behind the scenes photo shoot in a studio with crew and lighting equipment"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}