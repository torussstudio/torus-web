"use client";

import { useRef } from "react";
import Image from "next/image";
import { bullets } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

function DotGridIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <rect x="0" y="0" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="0" y="10" width="4" height="4" fill="currentColor" opacity="0.5" />
      <rect x="10" y="5" width="4" height="4" fill="currentColor" />
    </svg>
  );
}

export default function StudioHowWeThink() {
  const sectionRef = useRef<HTMLElement>(null);

  const gridImg1Ref = useRef<HTMLDivElement>(null);
  const gridImg2Ref = useRef<HTMLDivElement>(null);
  const gridImg3Ref = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  const objectsImgRef = useRef<HTMLDivElement>(null);
  const paraColRef = useRef<HTMLDivElement>(null);
  const bulletRefs = useRef<(HTMLDivElement | null)[]>([]);

  const closingHeadingRef = useRef<HTMLHeadingElement>(null);
  const closingTextRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      // ---- 3-image grid: staggered fade/scale in ----
      gsap.fromTo(
        [gridImg1Ref.current, gridImg2Ref.current, gridImg3Ref.current],
        { autoAlpha: 0, y: 30, scale: 1.05 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridImg1Ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Green quote: simple fade/rise, slightly delayed after col 2 image ----
      gsap.fromTo(
        quoteRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.25,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Objects image + paragraph column ----
      gsap.fromTo(
        objectsImgRef.current,
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: objectsImgRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        paraColRef.current,
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paraColRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Bullets: stagger in one by one ----
      gsap.fromTo(
        bulletRefs.current,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: bulletRefs.current[0],
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Closing statement ----
      gsap.fromTo(
        closingHeadingRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closingHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        closingTextRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: closingTextRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#EAE7E2]"
    >
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2 sm:pt-3 lg:pt-4 pb-14 sm:pb-16 lg:pb-24">
        {/* ============ HEADING ============ */}
        <div className="lg:max-w-[80%] xl:max-w-[68%] 2xl:max-w-[62%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-6">
          <h2 className="lg:col-span-6 font-recife text-[2.1rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[3.4rem] xl:text-[3.6rem] leading-[1.05] tracking-[0.01em] text-[#181818]">
            HOW
            <br />
            WE THINK
          </h2>

          <p className="lg:col-span-4 lg:col-start-9 self-start pt-2 font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] text-left lg:text-right">
            We believe good design often <br />
            behaves quietly.
          </p>
        </div>

        {/* ============ 3-IMAGE GRID + GREEN QUOTE ============ */}
        <div className="mt-10 sm:mt-12 lg:mt-16 lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6 items-start">
          <div
            ref={gridImg1Ref}
            className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden"
          >
            <Image
              src="/images/artwork1.avif"
              alt="How we think"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 h-full">
            <div
              ref={gridImg2Ref}
              className="relative w-full h-[190px] sm:h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden"
            >
              <Image
                src="/images/curiosity.avif"
                alt="How we think"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p
              ref={quoteRef}
              className="font-nixie text-[18px] sm:text-[16px] md:text-[18px] lg:text-[21px] xl:text-[25px] leading-[1.6] text-[#80c46c] max-w-[340px] sm:max-w-none xl:max-w-[200px] mx-auto text-start"
            >
              Like good architecture. Or good editing in cinema. Or a
              well-written sentence that does not need to explain itself twice.
            </p>
          </div>

          <div
            ref={gridImg3Ref}
            className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[310px] overflow-hidden"
          >
            <Image
              src="/images/digital.avif"
              alt="How we think"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ============ IMAGE + PARAGRAPH/BULLETS ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 -mx-5 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          <div
            ref={objectsImgRef}
            className="lg:col-span-6 relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden"
          >
            <Image
              src="/images/objects.avif"
              alt="How we think"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div
            ref={paraColRef}
            className="lg:col-span-5 lg:col-start-7 flex flex-col pl-5 sm:pl-8 md:pl-12 lg:pl-0 pr-5 sm:pr-8 md:pr-12 lg:pr-10 xl:pr-20"
          >
            <p className="font-nixie text-[14px] sm:text-[16px] leading-[1.75] text-[#181818]">
              We&apos;re interested in the invisible layers surrounding
              experiences: emotional tone, pacing, atmosphere, clarity,
              behaviour, and coherence.
            </p>
            <p className="font-nixie text-[14px] sm:text-[16px] leading-[1.75] text-[#181818] mt-5">
              Often, these subtleties influence perception far more than loud
              visuals alone.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col">
              {bullets.map((text, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    bulletRefs.current[i] = el;
                  }}
                  className="flex items-start gap-4 py-4 sm:py-5 border-b border-black/50 first:border-t"
                >
                  <DotGridIcon className="mt-3 shrink-0 text-[#181818]" />
                  <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.6] text-[#181818]">
                    {text.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {/* designed line breaks only on large screens */}
                        {j < text.split("\n").length - 1 && (
                          <>
                            {" "}
                            <br className="hidden xl:inline" />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-nixie text-[14px] sm:text-[16px] text-[#181818] mt-8 sm:mt-10">
              These invisible signals matter deeply to us.
            </p>
          </div>
        </div>

        {/* ============ CLOSING STATEMENT ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <h3
            ref={closingHeadingRef}
            className="lg:col-span-7 lg:ml-6 xl:ml-20 font-recife text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.4rem] leading-[1.3] tracking-normal text-[#6b6b6b]"
          >
            So much of our work <br /> involves observing:{" "}
            <span className="text-[#80c46c]">
              how <br />
              people move through <br />
              interfaces
            </span>
          </h3>

          <div
            ref={closingTextRef}
            className="lg:col-span-4 lg:col-start-9 lg:-ml-8 xl:-ml-10 mt-8 lg:mt-12 flex flex-col gap-4 pt-2"
          >
            <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
              We think of branding less as <br /> decoration and more as
              direction.
            </p>
            <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
              Less about creating noise. More about <br /> creating clarity
              people can quietly feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}