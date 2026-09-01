"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SensoryLayerSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const bigTextRef = useRef<HTMLParagraphElement | null>(null);
  const smallTextRef = useRef<HTMLParagraphElement | null>(null);
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
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
      }
    );

    // DIVIDER LINE — grows vertically like a drawn stroke
    gsap.fromTo(
      dividerRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
      }
    );

    // BIG STATEMENT TEXT — heavy rise with rotation settle
    gsap.fromTo(
      bigTextRef.current,
      { y: 100, opacity: 0, rotate: -2, transformOrigin: "left top" },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: { trigger: bigTextRef.current, start: "top 88%" },
      }
    );

    // SMALL PARAGRAPH — delayed rise
    gsap.fromTo(
      smallTextRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: { trigger: bigTextRef.current, start: "top 80%" },
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
      <div className="w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="font-recife text-[1.9rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[2.4rem] xl:text-[3.8rem] leading-[1.2] tracking-[0.01em] text-[#181818] max-w-[620px] overflow-hidden"
        >
          <span className="block">The Sensory Layer</span>
          <span className="block">of the Brand</span>
        </h2>

        {/* DIVIDER + TEXT ROW */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex items-start gap-8 sm:gap-10 lg:gap-12">
          <div
            ref={dividerRef}
            className="hidden sm:block w-px bg-black/80 shrink-0 h-[200px] ml-[14%] lg:ml-[18%]"
          />

          <div className="flex flex-col gap-6 sm:gap-7 lg:ml-[21%] xl:ml-[19%] mt-16 sm:mt-20">
            <p
              ref={bigTextRef}
              className="font-nixie text-[1.3rem] sm:text-[1.5rem] lg:text-[2.3rem] leading-[1.35] text-[#181818] max-w-[480px]"
            >
              Material direction shaped how TSA felt across both physical and
              digital touchpoints.
            </p>

            <p
              ref={smallTextRef}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[520px]"
            >
              Glass, texture, depth, light, and subtle sensory cues informed the
              bottle, packaging, website, social content, and digital assets.
              The same feeling of tactility was carried from the product in hand
              to the way it appeared on screen. This helped the brand feel
              consistent across every interaction.
            </p>
          </div>
        </div>

        {/* LARGE IMAGE — right side full-bleed to screen edge */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14 h-[200px] sm:h-[280px] lg:h-[320px] xl:h-[350px]">
          <div
            ref={imageWrapRef}
            className="
              absolute top-0 left-0 h-full overflow-hidden bg-[#dedcdc]
              right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
              sm:right-[calc(-28px-((100vw-min(100vw,1728px))/2))]
              md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
            "
          >
            <div ref={imageInnerRef} className="relative w-full h-full">
              <Image
                src="/images/strategy.avif"
                alt="Man sitting in a chair against a stone wall, hands clasped"
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