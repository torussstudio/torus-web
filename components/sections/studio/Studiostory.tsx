"use client";

import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { cardss } from "@/lib/constants";

export default function StudioStory() {
  return (
    <section className="relative w-full overflow-hidden bg-[#141412]">
      {/* MAX-WIDTH WRAPPER — same container convention as StudioHero, so
          this section lines up edge-to-edge with the hero above it. */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-10 lg:pt-14 pb-20 sm:pb-24 lg:pb-28">
        {/* ============ TOP: heading + paragraphs / hero image ============ */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20 items-start justify-center max-w-[1120px] mx-auto">
          <div className="lg:max-w-[560px] flex flex-col">
            <h1 className="font-display text-white text-[1.9rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] leading-[1.3] tracking-[0.005em] lg:-ml-8 xl:-ml-26">
              THE STORY
              <br />
              OF THE STUDIO
            </h1>

            <div className="mt-8 sm:mt-9 flex  gap-10 sm:gap-22">
              <div className="h-60 w-px shrink-0 bg-white/80" />
              <div className="flex flex-col mt-10 gap-5 max-w-[320px] sm:max-w-[360px]">
                <p className="font-think text-[12.5px] sm:text-[13.5px] leading-[1.7] text-white/55">
                  Toruss was never built around the idea of becoming the largest
                  studio. It was built around the idea of staying close to the
                  work.
                </p>
                <p className="font-think text-[12.5px] sm:text-[13.5px] leading-[1.7] text-white/55">
                  What began as an independent design practice slowly evolved
                  into something more layered over time — through branding
                  projects, digital systems, conversations, artistic
                  explorations, workshops, films, travel, books, collaborations,
                  and years of observing how people emotionally experience
                  businesses, spaces, and culture.
                </p>
              </div>
            </div>
          </div>

          {/* Fixed max-width instead of a fractional grid column — a 3:4
              image tied to a 1/3-width column blows up on wide screens
              (e.g. ~550px column -> 733px tall). Capping it keeps the image
              at the same modest, "framed" size the reference shows. */}
          <div className="w-full max-w-[380px] sm:max-w-[420px] xl:max-w-[460px] lg:ml-4 xl:ml-17 shrink-0">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/artwork1.avif"
                alt="Toruss studio team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ============ MARQUEE — scrolling category words with a fixed
            spotlight window that reveals the same text in green ============ */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <StoryCards />
        </div>

        {/* ============ BOTTOM: two b/w images + closing paragraphs ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          <div className="lg:col-span-6 flex items-end gap-4 sm:gap-5 lg:ml-10 xl:ml-16">
            <div className="relative w-[34%] aspect-[4/3] self-end overflow-hidden grayscale">
              <Image
                src="/images/footer.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-[62%] aspect-[3/4] overflow-hidden grayscale">
              <Image
                src="/images/studio.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 55vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-7 pb-1 sm:pb-2">
            <p className="font-think text-[13px] sm:text-[14px] leading-[1.75] text-white/55">
              Somewhere along the way, the studio stopped feeling like a service
              provider and started feeling more like a creative practice.
            </p>
            <p className="font-think text-[13px] sm:text-[14px] leading-[1.75] text-white/55">
              Today, Toruss works with businesses, founders, institutions,
              cultural initiatives, and emerging ideas across different parts of
              the world — while continuing to remain deeply rooted in a quieter
              and slower environment in Palakkad, Kerala.
            </p>
            <p className="font-think text-[13px] sm:text-[14px] leading-[1.75] text-white/55">
              We&apos;ve found that meaningful work does not necessarily require
              noise or scale. Only clarity, intent, and enough care to think
              deeply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryCards() {
  const [active, setActive] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!cardRefs.current.length) return;

    gsap.set(wrapperRef.current, { perspective: 1200 });
    cardRefs.current.forEach((el) => {
      gsap.set(el, { transformStyle: "preserve-3d", backfaceVisibility: "hidden" });
    });

    const initialPositions = [
      { x: 0, scale: 1, opacity: 1, zIndex: 40, filter: "blur(0px)" },
      { x: 32, scale: 0.985, opacity: 0.65, zIndex: 30, filter: "blur(0.8px)" },
      { x: -32, scale: 0.97, opacity: 0.45, zIndex: 20, filter: "blur(1.2px)" },
      { x: 60, scale: 0.955, opacity: 0.25, zIndex: 10, filter: "blur(1.6px)" },
    ];

    cardRefs.current.forEach((el, i) => {
      gsap.set(el, { ...initialPositions[i], rotationY: 0 });
    });
  }, []);

  const animateCards = (activeIndex: number, prevIndex: number) => {
    const order = [
      activeIndex,
      (activeIndex + 1) % cardss.length,
      (activeIndex + 2) % cardss.length,
      (activeIndex + 3) % cardss.length,
    ];

    const positions = [
      { x: 0, scale: 1, opacity: 1, filter: "blur(0px)", zIndex: 40 },
      { x: 32, scale: 0.985, opacity: 0.65, filter: "blur(.8px)", zIndex: 30 },
      { x: -32, scale: 0.97, opacity: 0.45, filter: "blur(1.2px)", zIndex: 20 },
      { x: 60, scale: 0.955, opacity: 0.25, filter: "blur(1.6px)", zIndex: 10 },
    ];

    const targets: Record<number, (typeof positions)[number]> = {};
    order.forEach((cardIdx, posIdx) => {
      targets[cardIdx] = positions[posIdx];
    });

    cardss.forEach((_, idx) => {
      const el = cardRefs.current[idx];
      const target = targets[idx];
      if (!el || !target) return;

      const isOutgoing = idx === prevIndex;
      const isIncoming = idx === activeIndex;

      if (isOutgoing || isIncoming) {
        const exitRotation = isOutgoing ? -100 : 100;
        const enterRotation = isOutgoing ? 100 : -100;

        const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

        tl.to(el, {
          rotationY: exitRotation,
          opacity: 0,
          duration: 0.3,
          zIndex: isIncoming ? 40 : target.zIndex,
        })
          .set(el, {
            rotationY: enterRotation,
            x: target.x,
            scale: target.scale,
          })
          .to(el, {
            rotationY: 0,
            opacity: target.opacity,
            filter: target.filter,
            duration: 0.35,
            ease: "power2.out",
          });
      } else {
        gsap.to(el, {
          x: target.x,
          scale: target.scale,
          opacity: target.opacity,
          filter: target.filter,
          zIndex: target.zIndex,
          duration: 0.8,
          ease: "power3.inOut",
        });
      }
    });

    const frontEl = cardRefs.current[order[0]];
    if (frontEl) {
      gsap.fromTo(
        frontEl.querySelector("h3"),
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.35,
        }
      );
    }
  };

  const changeCard = (next: number) => {
    if (next === active) return;
    const prev = active;
    setActive(next);
    animateCards(next, prev);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto h-[130px] w-full max-w-[1180px] overflow-visible"
    >
      {cardss.map((card, index) => {
        const position = (index - active + cardss.length) % cardss.length;

        return (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className={`
              absolute left-1/2 top-0
              flex h-full w-[82%] -translate-x-1/2 items-center justify-between
              border border-white/15 bg-[#262626]/90
              px-8 backdrop-blur-md
              will-change-transform
              ${position === 0 ? "pointer-events-auto" : "pointer-events-none"}
            `}
          >
            <h3 className="max-w-[70%] font-display text-[26px] leading-none tracking-[-0.02em] text-[#7fa86d]">
              {card.title}
            </h3>

            {position === 0 && (
             <button
                type="button"
                onClick={() => changeCard((active + 1) % cardss.length)}
                aria-label="Next"
                className="relative h-[34px] w-[26px] shrink-0 cursor-pointer"
              >
                <span className="absolute top-0 left-0 h-[11px] w-[11px] bg-white/70" />
                <span className="absolute bottom-0 left-0 h-[11px] w-[11px] bg-white/70" />
                <span className="absolute top-1/2 right-0 h-[11px] w-[11px] -translate-y-1/2 bg-white" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}