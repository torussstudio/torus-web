"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExtendingBeyondPackagingSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const para1Ref = useRef<HTMLParagraphElement | null>(null);
  const para2Ref = useRef<HTMLParagraphElement | null>(null);
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

    // BODY PARAGRAPHS — staggered heavy rise
    gsap.fromTo(
      [para1Ref.current, para2Ref.current],
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
        scrollTrigger: { trigger: para1Ref.current, start: "top 88%" },
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
        {/* HEADING + BODY */}
        <div className="ml-0 sm:ml-[10%] md:ml-[20%] lg:ml-[28%] xl:ml-[32%]">
          <h2
            ref={headingRef}
            className="font-recife text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem] lg:text-[2.7rem] xl:text-[3.8rem] leading-[1.2] tracking-[0.01em] text-[#181818] max-w-[600px] overflow-hidden"
          >
            <span className="block">Extending TSA</span>
            <span className="block">beyond packaging.</span>
          </h2>

          {/* BODY TEXT */}
          <div className="mt-8 sm:mt-9 lg:mt-10 flex flex-col gap-6 sm:gap-7 max-w-[550px]">
            <p
              ref={para1Ref}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]"
            >
              We extended the same system into a successful e-commerce
              website, digital assets, social media design, email marketing,
              and content direction. The red bottle, TSA seal, lab-inspired
              typography, square brackets, handwritten labels, product
              codes, molecular graphics, playful print pieces, and Spanish
              cues became repeated memory markers across every platform.
            </p>

            <p
              ref={para2Ref}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]"
            >
              On social media, freshness was also communicated and shown
              through culture, lifestyle, science, and everyday freshness
              cues: flowers, bread, apples, sea, sunlight, skin, laboratory
              details, and the atmosphere of Alicante. This gave the brand
              more room to speak. TSA could talk about skincare but also
              about time, preparation, freshness, routine, and care without
              sounding repetitive.
            </p>
          </div>
        </div>

        {/* LARGE IMAGE */}
        <div
          ref={imageWrapRef}
          className="relative mt-10 sm:mt-12 lg:mt-14 h-[320px] sm:h-[460px] md:h-[540px] lg:h-[600px] xl:h-[660px] w-full overflow-hidden bg-[#dedcdc]"
        >
          <div ref={imageInnerRef} className="relative w-full h-full">
            <Image
              src="/images/communication.avif"
              alt="Overhead view of a workspace with fabric swatches, print samples, and a hand arranging material boards"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}