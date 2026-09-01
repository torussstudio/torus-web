"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function BuildingAlchemistWorld() {
  const sectionRef = useRef<HTMLElement>(null);

  // Desktop refs
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const largeImgRef = useRef<HTMLDivElement>(null);
  const smallImgRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  // Mobile refs
  const headingMobileRef = useRef<HTMLHeadingElement>(null);
  const introMobileRef = useRef<HTMLParagraphElement>(null);
  const largeImgMobileRef = useRef<HTMLDivElement>(null);
  const smallImgMobileRef = useRef<HTMLDivElement>(null);
  const closingMobileRef = useRef<HTMLDivElement>(null);

  useScrollTrigger((gsap, ScrollTrigger) => {
    const reveal = (
      targets: (Element | null)[],
      trigger: Element | null,
      vars: gsap.TweenVars = {},
    ) => {
      const valid = targets.filter(Boolean) as Element[];
      if (!valid.length || !trigger) return;
      gsap.fromTo(
        valid,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          ...vars,
        },
      );
    };

    reveal([headingRef.current, headingMobileRef.current], sectionRef.current);
    reveal([introRef.current, introMobileRef.current], sectionRef.current, {
      delay: 0.1,
    });

    reveal(
      [largeImgRef.current, largeImgMobileRef.current],
      sectionRef.current,
      { delay: 0.15, ease: "power2.out" },
    );
    reveal(
      [smallImgRef.current, smallImgMobileRef.current],
      sectionRef.current,
      { delay: 0.25, ease: "power2.out" },
    );
    reveal([closingRef.current, closingMobileRef.current], sectionRef.current, {
      delay: 0.3,
    });
  }, sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="w-full px-[18px] max-[390px]:px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-14 sm:pt-24 lg:pt-40 xl:pt-48 pb-12 sm:pb-16 lg:pb-20">
        {/* ============ DESKTOP / TABLET ============ */}
        <div className="hidden sm:block relative w-full aspect-[967/810]">
          <h2
            ref={headingRef}
            className="absolute left-[1%] top-0 w-[34%] font-recife text-[1.7rem] md:text-[2rem] lg:text-[2.1rem] xl:text-[3.8rem] leading-[1.15] tracking-[0.01em] text-[#181818]"
          >
            <span className="block">Building</span>
            <span className="block">the world</span>
            <span className="block">of the</span>
            <span className="block font-serendipity text-6xl sm:text-7xl lg:text-7xl">
              alchemist.
            </span>
          </h2>

          <p
            ref={introRef}
            className="absolute left-[46%] top-[1%] w-[26%] font-nixie text-[13px] lg:text-[16px] leading-[1.6] text-[#181818]"
          >
            We created a flexible <br /> identity system with three <br /> key
            layers:
          </p>

          <div
            ref={largeImgRef}
            className="absolute left-[46%] top-[16.5%] w-[50%] h-[57%] overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/alchemist-desk-overhead.jpg"
              alt="Overhead view of a person writing at a rug-covered desk with a cat nearby"
              fill
              sizes="44vw"
              className="object-cover"
            />
          </div>

         <div
  ref={smallImgRef}
  className="absolute left-[25%] top-[48.5%] w-[17.5%] h-[25.5%] overflow-hidden bg-[#dedcdc]"
>
            <Image
              src="/images/alchemist-workshop.jpg"
              alt="Craftsman working in a small workshop"
              fill
              sizes="18vw"
              className="object-cover"
            />
          </div>

          <div
            ref={closingRef}
            className="absolute left-[25%] top-[76%] w-[35%] flex flex-col gap-4"
          >
            <p className="font-nixie text-[13px] lg:text-[16px] leading-[1.75] text-[#181818]">
              The full The Spanish Alchemist logo, the shorter TSA signature,
              and the circular TSA seal. Each had a specific role.
            </p>

            <p className="font-nixie text-[13px] lg:text-[16px] leading-[1.75] text-[#181818]">
              The full logo created brand presence. The TSA signature worked
              across smaller moments. The seal acted like a freshness stamp, a
              mark of trust, approval, and authenticity.
            </p>
          </div>
        </div>

        {/* ============ MOBILE ============ */}
        <div className="flex sm:hidden flex-col items-center w-full gap-7 pb-4">
          <h2
            ref={headingMobileRef}
            className="w-full max-w-[420px] font-nova text-[1.65rem] max-[390px]:text-[1.5rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase text-center"
          >
            <span className="block">BUILDING</span>
            <span className="block">THE WORLD</span>
            <span className="block">OF THE</span>
            <span className="block">ALCHEMIST.</span>
          </h2>

          <p
            ref={introMobileRef}
            className="w-full max-w-[420px] font-nixie text-[13px] leading-[1.7] text-[#5c5c5c] text-center"
          >
            We created a flexible identity system with three key layers:
          </p>

          <div
            ref={largeImgMobileRef}
            className="relative w-full max-w-[520px] h-[300px] max-[390px]:h-[270px] overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/alchemist-desk-overhead.jpg"
              alt="Overhead view of a person writing at a rug-covered desk with a cat nearby"
              fill
              sizes="calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          <div
            ref={smallImgMobileRef}
            className="relative w-full max-w-[520px] h-[220px] max-[390px]:h-[200px] overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/alchemist-workshop.jpg"
              alt="Craftsman working in a small workshop"
              fill
              sizes="calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          <div
            ref={closingMobileRef}
            className="w-full max-w-[420px] flex flex-col gap-4 text-center"
          >
            <p className="font-nixie text-[13px] leading-[1.75] text-[#5c5c5c]">
              The full The Spanish Alchemist logo, the shorter TSA signature,
              and the circular TSA seal. Each had a specific role.
            </p>

            <p className="font-nixie text-[13px] leading-[1.75] text-[#5c5c5c]">
              The full logo created brand presence. The TSA signature worked
              across smaller moments. The seal acted like a freshness stamp, a
              mark of trust, approval, and authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
