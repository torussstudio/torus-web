"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PackagingConversation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const image1WrapRef = useRef<HTMLDivElement | null>(null);
  const image1InnerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const image2WrapRef = useRef<HTMLDivElement | null>(null);
  const image2InnerRef = useRef<HTMLDivElement | null>(null);

  useGsap((gsap) => {
    // SMALL IMAGE — heavy clip reveal + parallax scrub
    gsap.fromTo(
      image1WrapRef.current,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image1WrapRef.current, start: "top 90%" },
      }
    );
    gsap.fromTo(
      image1InnerRef.current,
      { scale: 1.3, yPercent: -8 },
      {
        scale: 1,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: image1WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // ROW TEXT — heavy rise
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: image1WrapRef.current, start: "top 85%" },
      }
    );

    // HEADING — heavy mask reveal
    gsap.fromTo(
      headingRef.current,
      { yPercent: 120, opacity: 0, skewY: 4 },
      {
        yPercent: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: headingRef.current },
      }
    );

    // PARAGRAPH — heavy rise
    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: { trigger: paraRef.current },
      }
    );

    // LARGE IMAGE — heavy clip reveal + parallax scrub
    gsap.fromTo(
      image2WrapRef.current,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.7,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image2WrapRef.current, start: "top 88%" },
      }
    );
    gsap.fromTo(
      image2InnerRef.current,
      { scale: 1.35, yPercent: -10 },
      {
        scale: 1,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: image2WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
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
      <div className="w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        {/* SMALL IMAGE + TEXT ROW */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
          <div
            ref={image1WrapRef}
            className="relative w-full sm:w-[340px] lg:w-[380px] xl:w-[420px] h-[300px] sm:h-[320px] lg:h-[340px] shrink-0 overflow-hidden bg-[#dedcdc]"
          >
            <div ref={image1InnerRef} className="relative w-full h-full">
              <Image
                src="/images/digital.avif"
                alt="People gathered inside a warmly lit restaurant"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          <p
            ref={textRef}
            className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#5c5c5c] max-w-[400px] -mt-2 sm:-mt-2"
          >
            However, the product line also needed clear navigation, helping
            customers understand the range while keeping the brand visually
            unified. So instead of changing the entire bottle colour for
            every product, the geometric pattern inspired by the
            Philosopher&apos;s Stone was carried into a smaller coding
            system of circles, squares, accent colours, and simple visual
            markers.
          </p>
        </div>

        {/* HEADING */}
        <h2
          ref={headingRef}
          className="font-recife text-[1.9rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[2.4rem] xl:text-[3.7rem] leading-[1.2] tracking-[0.01em] text-[#181818] mt-10 sm:mt-12 lg:mt-14 max-w-[600px]"
        >
          <span className="block">Packaging as</span>
          <span className="block">the first conversation.</span>
        </h2>

        {/* PARAGRAPH */}
        <p
          ref={paraRef}
          className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] mt-6 sm:mt-8 max-w-[760px]"
        >
          The packaging system was designed as the customer&apos;s first
          physical conversation with the brand. Each panel had a clear role,
          from introducing the promise and explaining the formulation to
          showcasing the product line, skin concerns, ingredients, usage, QR
          codes, batch details, and a freshness message.
        </p>

        {/* LARGE IMAGE */}
        <div
          ref={image2WrapRef}
          className="relative mt-10 sm:mt-12 lg:mt-14 w-full sm:w-[95%] lg:w-[90%] h-[300px] sm:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-[#dedcdc]"
        >
          <div ref={image2InnerRef} className="relative w-full h-full">
            <Image
              src="/images/creativedirection.avif"
              alt="Row of skincare bottle mockups beside a model's profile"
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}