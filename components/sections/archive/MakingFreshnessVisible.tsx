"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MakingFreshnessVisible() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraWrapRef = useRef<HTMLDivElement | null>(null);
  const image1OuterRef = useRef<HTMLDivElement | null>(null);
  const image1InnerRef = useRef<HTMLDivElement | null>(null);
  const heading2Ref = useRef<HTMLHeadingElement | null>(null);
  const para2Ref = useRef<HTMLParagraphElement | null>(null);
  const image2OuterRef = useRef<HTMLDivElement | null>(null);
  const image2InnerRef = useRef<HTMLDivElement | null>(null);
  const overlayHeading1Ref = useRef<HTMLHeadingElement | null>(null);
  const overlayHeading2Ref = useRef<HTMLHeadingElement | null>(null);
  const overlayParaRef = useRef<HTMLParagraphElement | null>(null);

  useGsap((gsap) => {
    // HEADING — heavy reveal, clip + rise
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

    // PARAGRAPHS — staggered rise
    gsap.fromTo(
      paraWrapRef.current?.children ?? [],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: { trigger: paraWrapRef.current },
      }
    );

    // IMAGE 1 — reveal via clip + scale settle, plus parallax scrub
    gsap.fromTo(
      image1OuterRef.current,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.6,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image1OuterRef.current, start: "top 90%" },
      }
    );
    gsap.fromTo(
      image1InnerRef.current,
      { scale: 1.35, yPercent: -8 },
      {
        scale: 1,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: image1OuterRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // "LINES LIKE..." HEADING — heavy mask reveal
    gsap.fromTo(
      heading2Ref.current,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: heading2Ref.current },
      }
    );
    gsap.fromTo(
      para2Ref.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: { trigger: heading2Ref.current },
      }
    );

    // IMAGE 2 (large overlay image) — heavy clip reveal + parallax
    gsap.fromTo(
      image2OuterRef.current,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: { trigger: image2OuterRef.current, start: "top 85%" },
      }
    );
    gsap.fromTo(
      image2InnerRef.current,
      { scale: 1.4, yPercent: -10 },
      {
        scale: 1,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: image2OuterRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // OVERLAY TEXT — heavy staggered rise, delayed after image starts revealing
    gsap.fromTo(
      overlayHeading1Ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: { trigger: image2OuterRef.current, start: "top 60%" },
      }
    );
    gsap.fromTo(
      overlayHeading2Ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.15,
        scrollTrigger: { trigger: image2OuterRef.current, start: "top 55%" },
      }
    );
    gsap.fromTo(
      overlayParaRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: { trigger: image2OuterRef.current, start: "top 50%" },
      }
    );

    ScrollTrigger.refresh();
  }, sectionRef);

  return (
    <section
      ref={sectionRef as RefObjectCompat}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* CONTENT */}
      <div className="relative w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="font-recife text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3rem] xl:text-[3.8rem] leading-[1.15] tracking-[0.01em] text-[#181818]"
        >
          Making &ldquo;
          <span className="text-[#181818] font-serendipity">
            made fresh
          </span>
          &rdquo; visible.
        </h2>

        {/* PARAGRAPHS */}
        <div
          ref={paraWrapRef}
          className="mt-10 sm:mt-12 lg:mt-14 flex flex-col gap-6 sm:gap-8 lg:ml-[46%] xl:ml-[44%] max-w-[360px]"
        >
          <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
            In skincare, freshness is usually hidden inside production
            cycles, batch records, and expiry dates. For TSA, we brought
            those details forward.
          </p>
          <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
            Manufacturing dates, batch codes, handwritten freshness labels,
            and product codes became part of the brand story and the
            customer experience rather than being treated as boring
            mandatory information.
          </p>
        </div>

        {/* LARGE IMAGE — full-bleed to the right screen edge */}
       <div className="relative mt-10 sm:mt-12 lg:mt-14 h-[220px] sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[400px]">
  <div
    ref={image1OuterRef}
    className="
      absolute top-0 h-full overflow-hidden bg-[#dedcdc]
      left-[-16px] right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
      sm:left-[-28px] sm:right-[calc(-28px-((100vw-min(100vw,1728px))/2))]
      md:left-[-40px] md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
      lg:left-[-40px] lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
      xl:left-[-56px] xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
    "
  >
    <div ref={image1InnerRef} className="relative w-full h-full">
      <Image
        src="/images/alchemist-desk-overhead.jpg"
        alt="Hand reviewing sketches inside an open cardboard box"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
          </div>
        </div>

        {/* ============ "LINES LIKE..." SECTION ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3
            ref={heading2Ref}
            className="font-nixie text-[1.9rem] sm:text-[2.3rem] md:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.2rem] leading-[1.3] text-[#181818] max-w-[880px]"
          >
            Lines like &ldquo;
            <span className="text-[#80c46c]">Made Fresh Just For You</span>
            &rdquo; became a simple expression of this world.
          </h3>

          <p
            ref={para2Ref}
            className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[460px] mt-8 sm:mt-10"
          >
            Together, these details made the brand&apos;s freshness process
            more visible to the customer. The freshness, timing, and care
            behind each product were made visible through a language of
            dates, codes, and labels. The narrative, proof points, and
            visual language helped make the fresh manufacturing concept
            clearly felt.
          </p>
        </div>

        {/* ============ IMAGE WITH TEXT OVERLAYS ============ */}
        {/* ============ IMAGE WITH TEXT OVERLAYS ============ */}
<div className="relative mt-16 sm:mt-20 lg:mt-24 h-[720px] sm:h-[900px] lg:h-[1000px] xl:h-[1080px]">
  <div
    ref={image2OuterRef}
    className="
      absolute top-0 h-full overflow-hidden bg-[#2a2422]
      left-[-16px] right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
      sm:left-[-28px] sm:right-[calc(-28px-((100vw-min(100vw,1728px))/2))]
      md:left-[-40px] md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
      lg:left-[-40px] lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
      xl:left-[-56px] xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
    "
  >
    <div ref={image2InnerRef} className="relative w-full h-full">
      <Image
        src="/images/alchemist-desk-overhead.jpg"
        alt="Hand reviewing sketches inside an open cardboard box"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>

    {/* Top-left overlay heading */}
    <h3
      ref={overlayHeading1Ref}
      className="absolute top-8 sm:top-12 lg:top-32 left-6 sm:left-10 lg:left-18 font-recife text-[1.5rem] sm:text-[1.9rem] lg:text-[2.6rem] leading-[1.25] text-white max-w-[360px]"
    >
      Making the product instantly recognisable.
    </h3>

    {/* Lower-left overlay heading + paragraph */}
    <div className="absolute bottom-24 sm:bottom-32 lg:bottom-40 left-6 sm:left-10 lg:left-18">
      <h3
        ref={overlayHeading2Ref}
        className="font-recife text-[1.4rem] sm:text-[1.7rem] lg:text-[2.6em] leading-[1.25] text-white max-w-[360px]"
      >
        The red bottle, the code, and the shelf memory.
      </h3>

      <p
        ref={overlayParaRef}
        className="font-nixie text-[12px] sm:text-[16px] leading-[1.7] text-white/70 mt-4 sm:mt-6 max-w-[400px]"
      >
        One of the strongest visual decisions was the translucent
        red bottle that extended the alchemist world into the
        product itself. Its colour drew from the idea of the
        Philosopher&apos;s Stone, reflecting subtle cues of
        intensity, transformation, and potency. It made the product
        feel active, alive, and instantly recognisable.
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

type RefObjectCompat = React.RefObject<HTMLElement>;