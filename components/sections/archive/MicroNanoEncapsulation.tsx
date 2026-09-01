"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MicroNanoEncapsulation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const image1WrapRef = useRef<HTMLDivElement | null>(null);
  const image1InnerRef = useRef<HTMLDivElement | null>(null);
  const captionRef = useRef<HTMLParagraphElement | null>(null);
  const image2WrapRef = useRef<HTMLDivElement | null>(null);
  const image2InnerRef = useRef<HTMLDivElement | null>(null);

  useGsap((gsap) => {
    // INTRO PARAGRAPH — heavy masked line rise with slight rotation settle
    gsap.fromTo(
      introRef.current,
      { y: 90, opacity: 0, rotate: -1.5, transformOrigin: "left top" },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: { trigger: introRef.current, start: "top 90%" },
      }
    );

    // IMAGE 1 — dramatic clip reveal from center + scale punch, plus rotation settle
    gsap.fromTo(
      image1WrapRef.current,
      { clipPath: "inset(50% 50% 50% 50%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image1WrapRef.current, start: "top 88%" },
      }
    );
    gsap.fromTo(
      image1InnerRef.current,
      { scale: 1.5, yPercent: -12, rotate: -3 },
      {
        scale: 1,
        yPercent: 12,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image1WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      }
    );

    // CAPTION TEXT — heavy staggered word-block rise with skew
    gsap.fromTo(
      captionRef.current,
      { y: 80, opacity: 0, skewY: 5 },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.25,
        scrollTrigger: { trigger: image1WrapRef.current, start: "top 75%" },
      }
    );

    // LARGE IMAGE — heavy diagonal clip reveal + strong parallax + subtle rotation drift
    gsap.fromTo(
      image2WrapRef.current,
      { clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)" },
      {
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image2WrapRef.current, start: "top 85%" },
      }
    );
    gsap.fromTo(
      image2InnerRef.current,
      { scale: 1.45, yPercent: -14, rotate: 2 },
      {
        scale: 1,
        yPercent: 14,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image2WrapRef.current,
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
        {/* INTRO PARAGRAPH */}
        <p
          ref={introRef}
          className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[520px]"
        >
          Micro and nano encapsulation technologies also became important
          visual and communication anchors. They helped bring out the
          brand&apos;s focus on potency, formulation precision, laboratory
          testing, and controlled active delivery. We translated this into
          soft molecular graphics inspired by capsules, cells, bubbles, and
          active delivery systems. These forms helped the science feel
          understandable without making the brand feel clinical or
          intimidating.
        </p>

        {/* IMAGE + RIGHT CAPTION ROW */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8 lg:gap-10">
          <div
            ref={image1WrapRef}
            className="relative w-full sm:w-[500px] lg:w-[540px] xl:w-[580px] h-[320px] sm:h-[340px] lg:h-[360px] shrink-0 overflow-hidden bg-[#dedcdc]"
          >
            <div ref={image1InnerRef} className="relative w-full h-full">
              <Image
                src="/images/strategy.avif"
                alt="Two people reviewing something on a phone in a studio"
                fill
                sizes="(max-width: 640px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          <p
            ref={captionRef}
            className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[320px] ml-8 sm:ml-12"
          >
            Small details like structured typography, handwritten labels,
            seals, product codes, molecular graphics, batch information, and
            lab-inspired layouts played an important role too. Together,
            they made the brand feel precise, personal, credible, and
            considered.
          </p>
        </div>

        {/* LARGE IMAGE */}
        <div
          ref={image2WrapRef}
          className="relative w-full mt-10 sm:mt-12 lg:mt-14 h-[320px] sm:h-[440px] lg:h-[500px] xl:h-[540px] overflow-hidden bg-[#dedcdc]"
        >
          <div ref={image2InnerRef} className="relative w-full h-full">
            <Image
              src="/images/studio.avif"
              alt="Hand drawing sketches at a desk"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}