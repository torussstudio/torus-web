"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function PersonalIdentitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closingRef = useRef<HTMLParagraphElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      // ---- Heading ----
      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Intro paragraph ----
      gsap.fromTo(
        introRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Three-image row, staggered ----
      gsap.fromTo(
        imgRefs.current,
        { autoAlpha: 0, y: 30, scale: 1.05 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: imgRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Closing paragraph ----
      gsap.fromTo(
        closingRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    sectionRef
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div
        className="
          w-full
          px-[18px]
          max-[390px]:px-[16px]
          sm:px-[28px]
          md:px-[40px]
          lg:pl-10
          lg:pr-14
          xl:pl-14
          xl:pr-16
          pt-10
          sm:pt-14
          lg:pt-16
          pb-12
          sm:pb-16
          lg:pb-20
        "
      >
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="
            font-recife
            text-[1.55rem]
            max-[390px]:text-[1.45rem]
            sm:text-[2.1rem]
            md:text-[2.4rem]
            lg:text-[2.4rem]
            xl:text-[3rem]
            leading-[1.15]
            tracking-[0.01em]
            text-[#181818]
            uppercase
            max-w-[720px]
            mx-auto
            text-center
            sm:text-left
            sm:mx-0
            lg:ml-[12%]
            xl:ml-[14%]
          "
        >
          <span className="block">A personal identity with</span>
          <span className="block">a proof system.</span>
        </h2>

        {/* INTRO PARAGRAPH */}
        <p
          ref={introRef}
          className="
            font-nixie
            text-[13px]
            sm:text-[16px]
            leading-[1.75]
            text-[#181818]
            max-w-[340px]
            mt-8
            sm:mt-10
            mx-auto
            text-center
            sm:mx-0
            sm:text-left
            lg:ml-[12%]
            xl:ml-[14%]
          "
        >
          The identity was built to feel both human and trustworthy. The
          brand did not have to look purely clinical. It also did not have
          to look overly soft, beige, or generic. TSA could sit in a more
          ownable space: freshly prepared skincare from its lab in Alicante,
          Spain, shaped with Mediterranean warmth.
        </p>

        {/* THREE-IMAGE ROW */}
        <div
          className="
            mt-10
            sm:mt-12
            lg:mt-14
            flex
            flex-col
            items-center
            gap-5
            sm:flex-row
            sm:items-stretch
            sm:gap-3
            lg:gap-4
            lg:ml-[12%]
            xl:ml-[14%]
            lg:mr-[-3.5rem]
            xl:mr-[-4rem]
          "
        >
          <div
            ref={(el) => {
              imgRefs.current[0] = el;
            }}
            className="
              relative
              w-full
              max-w-[420px]
              sm:max-w-none
              sm:w-[300px]
              lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/tsa-meeting.jpg"
              alt="Founder presenting during a working session"
              fill
              sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
              className="object-cover"
            />
          </div>

          <div
            ref={(el) => {
              imgRefs.current[1] = el;
            }}
            className="
              relative
              w-full
              max-w-[420px]
              sm:max-w-none
              sm:w-[300px]
              lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/tsa-installation.jpg"
              alt="Person seated watching a video installation"
              fill
              sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
              className="object-cover"
            />
          </div>

          <div
            ref={(el) => {
              imgRefs.current[2] = el;
            }}
            className="relative w-full max-w-[420px] sm:max-w-none sm:w-[300px] lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/tsa-field.jpg"
              alt="Person standing in a field looking outward"
              fill
              sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
              className="object-cover"
            />
          </div>
        </div>

        {/* CLOSING PARAGRAPH */}
        <p
          ref={closingRef}
          className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[360px] mt-10 sm:mt-12 lg:mt-14 mx-auto text-center sm:mx-0 sm:text-left lg:ml-[12%] xl:ml-[14%]"
        >
          The challenge was to create an identity that could work across
          bottles, boxes, stickers, seals, tissue paper, social posts,
          website pages, printed inserts, and emailers. TSA needed a
          flexible identity system.
        </p>
      </div>
    </section>
  );
}