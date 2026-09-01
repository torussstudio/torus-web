"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function ProjectQuestionAndNaming() {
  const section1Ref = useRef<HTMLElement>(null);
  const introParaRef = useRef<HTMLParagraphElement>(null);
  const questionRef = useRef<HTMLParagraphElement>(null);

  const section2Ref = useRef<HTMLElement>(null);
  const vLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollTrigger((gsap, ScrollTrigger) => {
    gsap.fromTo(
      introParaRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: introParaRef.current,
        },
      },
    );

    gsap.fromTo(
      questionRef.current,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.15,
        scrollTrigger: {
          trigger: questionRef.current,
        },
      },
    );
  }, section1Ref);

  useScrollTrigger((gsap, ScrollTrigger) => {
    gsap.fromTo(
      vLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.9,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: vLineRef.current,
        },
      },
    );

    gsap.fromTo(
      headingRef.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
        },
      },
    );

    gsap.fromTo(
      textBlockRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.15,
        scrollTrigger: {
          trigger: textBlockRef.current,
        },
      },
    );

    gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, scale: 1.06 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: imageRef.current,
        },
      },
    );
  }, section2Ref);

  return (
    <>
      {/* ============ SECTION 1 ============ */}
      <section
        ref={section1Ref}
        className="relative w-full overflow-hidden bg-white"
      >
        <div className="w-full bg-[#EAE9E9] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16">
          <p
            ref={introParaRef}
            className="font-nixie  text-[13px] sm:text-[16px] md:text-[16px] leading-[1.7] sm:leading-[1.75] text-[#181818] w-full max-w-[420px]"
          >
            From naming and identity to packaging, e-commerce, social media,
            email marketing, digital assets, and content direction, the project
            became a full launch-ready brand system built around one question:
          </p>

          <p
            ref={questionRef}
            className="
              font-nixie
              text-[1.75rem]
              sm:text-[2.1rem]
              md:text-[2.8rem]
              lg:text-[2.8rem]
              xl:text-[2.9rem]
              leading-[1.18]
              sm:leading-[1.2]
              text-[#181818]
              mt-7
              sm:mt-9
              md:mt-10
              lg:mt-8
              w-full
              max-w-[780px]
            "
          >
            How do we make freshness feel real to the customer?
          </p>
        </div>
      </section>

      {/* ============ SECTION 2 ============ */}
      <section
        ref={section2Ref}
        className="relative w-full overflow-hidden bg-[#191919]"
      >
        <div className="w-full px-[18px] max-[390px]:px-[16px] sm:px-[24px] md:px-[32px] lg:px-10 xl:px-14 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
          <div className="relative pl-0 sm:pl-3 md:pl-4 lg:pl-5">
           <div
  ref={vLineRef}
  className="
    hidden
    min-[480px]:block
    absolute
    w-px
    bg-white/25
    h-[270px]
    sm:h-[270px]
    md:h-[300px]
    top-[225px]
    sm:top-[225px]
    md:top-[240px]
    left-[16px]
    sm:left-[16px]
    md:left-[20px]
    lg:h-62
    lg:top-60
    lg:left-15
    xl:top-58
    xl:left-22
  "
/>

            <div className="flex-1">
              <h2
                ref={headingRef}
                className="
                  mt-3
                  sm:mt-5
                  lg:mt-8
                  font-recife
                  text-[1.45rem]
                  sm:text-[1.7rem]
                  md:text-[2.4rem]
                  lg:text-[2.5rem]
                  xl:text-[2.9rem]
                  leading-[1.15]
                  tracking-[0.01em]
                  text-white
                  uppercase
                  max-w-[660px]
                "
              >
                <span className="block">NAMING the</span>
                <span className="block">world before</span>
                <span className="block">desgning it.</span>
              </h2>

              <div
                className="
                  mt-9
                  sm:mt-12
                  md:mt-14
                  lg:mt-16
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-start
                  gap-8
                  sm:gap-10
                  md:gap-12
                  lg:gap-16
                  xl:gap-20
                "
              >
                <div
  ref={textBlockRef}
  className="
    flex
    flex-col
    gap-5
    sm:gap-6
    w-full
    max-w-[680px]
    lg:max-w-[360px]
    xl:max-w-[360px]
    shrink-0
    lg:ml-32
    xl:ml-40
  "
>
  <p
    className="
      font-nixie
      text-[12.5px]
      sm:text-[16px]
      md:text-[16px]
      leading-[1.7]
      sm:leading-[1.75]
      text-white
    "
  >
    The name &apos;The Spanish Alchemist&apos; was finalized
    after exploring multiple naming directions. It gave the
    brand a world that could hold both science and emotion. The
    idea of the alchemist brought in a strong creative base,
    hands-on experimentation, transformation, natural
    ingredients, ritual, precision, and the search for something
    rare.
  </p>

  <p
    className="
      font-nixie
      text-[12.5px]
      sm:text-[13px]
      md:text-[16px]
      leading-[1.7]
      sm:leading-[1.75]
      text-white
    "
  >
    It also allowed us to build symbolic references, including
    the idea of the Philosopher&apos;s Stone, helping us move
    away from the usual skincare language and build a brand that
    felt more distinct.
  </p>
</div>
                <div
                  ref={imageRef}
                  className="
    lg:absolute
    lg:top-16
    xl:top-20
    lg:left-[520px]
    xl:left-[600px]
    relative
    w-full
    h-[300px]
    sm:h-[380px]
    md:h-[440px]
    lg:w-[340px]
    xl:w-[380px]
    lg:h-[480px]
    shrink-0
    overflow-hidden
    bg-[#2a2a2a]
    rounded-[4px]
    sm:rounded-[6px]
    lg:rounded-none
  "
                >
                  <Image
                    src="/images/spanish-alchemist-main.jpg"
                    alt="Team working together in a bright studio"
                    fill
                    sizes="
      (max-width: 639px) 100vw,
      (max-width: 1023px) 90vw,
      380px
    "
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
