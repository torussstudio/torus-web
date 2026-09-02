"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function StudioIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      // ---- Image ----
      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 1.08 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Paragraphs, staggered ----
      gsap.fromTo(
        paraRefs.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: paraRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Heading (payoff line, comes in after paragraphs) ----
      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Divider draw ----
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    sectionRef
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-[#EAE7E2]">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT — gallery image */}
          <div className="lg:col-span-7">
            <div
              ref={imageRef}
              className="relative w-full aspect-[8/9] overflow-hidden"
            >
              <Image
                src="/images/artwork1.avif"
                alt="Visitor seated on a bench viewing paintings in a gallery"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — text column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12 lg:gap-0">
            <div className="flex flex-col gap-8 sm:gap-10 max-w-[380px]">
              <p
                ref={(el) => {
                  paraRefs.current[0] = el;
                }}
                className="font-nixie text-[15px] sm:text-[16px] leading-[1.75] text-[#181818]"
              >
                A practice where business thinking and cultural thinking can
                coexist naturally.
              </p>

              <p
                ref={(el) => {
                  paraRefs.current[1] = el;
                }}
                className="font-nixie text-[15px] sm:text-[16px] leading-[1.75] text-[#181818] "
              >
                Over time, we hope Toruss evolves into more than a studio
                alone, perhaps into a broader ecosystem of: creative
                practice, education, publishing, archives, objects, cultural
                initiatives, and shared learning.
              </p>
            </div>

            <h2
              ref={headingRef}
              className="font-recife text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[2.8rem] xl:text-[2.8rem] 2xl:text-[3rem] leading-[1.15] tracking-[0.01em] text-[#80c46c]"
            >
              Quietly global.
              <br />
              Deeply human.
              <br />
              Rooted in curiosity.
            </h2>
          </div>
        </div>

        <div
          ref={dividerRef}
          className="mt-16 sm:mt-20 lg:mt-24 h-px bg-black/50 origin-left"
        />
      </div>
    </section>
  );
}