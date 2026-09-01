"use client";

import { useRef } from "react";
import Image from "next/image";
import { overview } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

type Overview = {
  statement: string;
  location: string;
  period: string;
  services: string[];
  image: string;
  imageAlt: string;
};

export default function ProjectOverview({ data = overview }: { data?: Overview }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const metaRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
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

      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 1.06 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        metaRefs.current,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: metaRefs.current[0],
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
      className="relative w-full overflow-hidden bg-[#f4f4f2]"
    >
      {/* HERO — statement heading, full viewport height, vertically centered */}
      <div className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-10 xl:px-14">
        <h1
          ref={headingRef}
          className="
            font-recife mx-auto text-center
            text-[1.7rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[2.5rem] xl:text-[2.9rem] 2xl:text-[3.1rem]
            leading-[1.25]
            tracking-[0.005em]
            text-[#181818]
            max-w-[860px]
          "
        >
          <span className="block leading-[1.1]">
            Turning a{" "}
            <span className="font-serendipity text-[1.3em] sm:text-[1.35em] leading-none inline-block">
              fresh skincare idea
            </span>
          </span>
          <span className="block">from Alicante into a launch-ready</span>
          <span className="block">brand, packaging, e-commerce,</span>
          <span className="block">and digital system.</span>
        </h1>
      </div>

      {/* HERO IMAGE + META — separate block below, own padding */}
      <div className="w-full px-6 sm:px-10 lg:px-10 xl:px-14 pb-16 sm:pb-20 lg:pb-24">
        <div
          ref={imageRef}
          className="relative w-full h-[220px] sm:h-[340px] md:h-[400px] lg:h-[420px] xl:h-[460px] overflow-hidden bg-[#F4F3F1]"
        >
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>

        {/* META ROW */}
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 lg:gap-14">
          <p
            ref={(el) => {
              metaRefs.current[0] = el;
            }}
            className="font-nixie text-[13px] sm:text-[16px] uppercase tracking-[0.06em] text-[#181818] shrink-0"
          >
            {data.location}
          </p>
          <p
            ref={(el) => {
              metaRefs.current[1] = el;
            }}
            className="font-nixie text-[13px] sm:text-[16px] uppercase tracking-[0.06em] text-[#181818] shrink-0"
          >
            {data.period}
          </p>
          <p
            ref={(el) => {
              metaRefs.current[2] = el;
            }}
            className="font-nixie text-[13px] sm:text-[16px] uppercase tracking-[0.06em] text-[#181818] max-w-[480px]"
          >
            {data.services.join(" / ")}
          </p>
        </div>
      </div>
    </section>
  );
}