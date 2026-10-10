"use client";

import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardss } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function StudioStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const paraWrapRef = useRef<HTMLDivElement>(null);
  const heroImageWrapRef = useRef<HTMLDivElement>(null);
  const bottomImagesRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — split into two lines, each masked and slid up
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll("span[data-line]");
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Vertical divider line — draws downward
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.1,
            ease: "power3.inOut",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Paragraphs — fade up, staggered
      if (paraWrapRef.current) {
        gsap.fromTo(
          paraWrapRef.current.querySelectorAll("p"),
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: paraWrapRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Hero image — clip reveal + subtle scale settle
      if (heroImageWrapRef.current) {
        const img = heroImageWrapRef.current.querySelector("img");
        gsap.fromTo(
          heroImageWrapRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: heroImageWrapRef.current,
              start: "top 80%",
            },
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.25 },
            {
              scale: 1,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heroImageWrapRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // Parallax drift while scrolling
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroImageWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Bottom two images — staggered clip reveal
      if (bottomImagesRef.current) {
        const boxes = bottomImagesRef.current.querySelectorAll("[data-reveal-box]");
        gsap.fromTo(
          boxes,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.inOut",
            stagger: 0.15,
            scrollTrigger: {
              trigger: bottomImagesRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Bottom closing paragraphs — fade up staggered
      if (bottomTextRef.current) {
        gsap.fromTo(
          bottomTextRef.current.querySelectorAll("p"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: bottomTextRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#141412]"
    >
      {/* MAX-WIDTH WRAPPER — same container convention as StudioHero, so
          this section lines up edge-to-edge with the hero above it. */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-10 lg:pt-14 pb-20 sm:pb-24 lg:pb-28">
        {/* ============ TOP: heading + paragraphs / hero image ============ */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20 items-start justify-center max-w-[1120px] mx-auto">
          <div className="lg:max-w-[560px] flex flex-col">
            <h1
              ref={headingRef}
              className="font-recife text-white text-[1.9rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] leading-[1.3] tracking-[0.005em] lg:-ml-8 xl:-ml-26"
            >
              <span className="block overflow-hidden">
                <span data-line className="block">THE STORY</span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="block">OF THE STUDIO</span>
              </span>
            </h1>

            <div className="mt-8 sm:mt-9 flex gap-10 sm:gap-22">
              <div
                ref={dividerRef}
                className="h-60 w-px shrink-0 bg-white/80"
              />
              <div
                ref={paraWrapRef}
                className="flex flex-col mt-10 gap-5 max-w-[320px] sm:max-w-[360px]"
              >
                <p className="font-nixie text-[12.5px] sm:text-[16px] leading-[1.7] text-white/70">
                  Toruss was never built around the idea of becoming the largest
                  studio. It was built around the idea of staying close to the
                  work.
                </p>
                <p className="font-nixie text-[12.5px] sm:text-[16px] leading-[1.7] text-white/70">
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
            <div
              ref={heroImageWrapRef}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/artwork1.avif"
                alt="Toruss studio team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover will-change-transform"
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
          <div
            ref={bottomImagesRef}
            className="lg:col-span-6 flex items-end gap-4 sm:gap-5 lg:ml-10 xl:ml-16"
          >
            <div
              data-reveal-box
              className="relative w-[34%] aspect-[4/3] self-end overflow-hidden grayscale"
            >
              <Image
                src="/images/footer.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
            <div
              data-reveal-box
              className="relative w-[62%] aspect-[3/4] overflow-hidden grayscale"
            >
              <Image
                src="/images/studio.avif"
                alt=""
                fill
                sizes="(max-width: 1024px) 55vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            ref={bottomTextRef}
            className="lg:col-span-5 lg:col-start-8 w-full max-w-[460px] flex flex-col gap-7"
          >
            <p className="font-nixie text-[16px] sm:text-[16px] leading-[1.75] text-white/70">
              Somewhere along the way, the studio stopped feeling like a service
              provider and started feeling more like a creative practice.
            </p>
            <p className="font-nixie text-[16px] sm:text-[16px] leading-[1.75] text-white/70">
              Today, Toruss works with businesses, founders, institutions,
              cultural initiatives, and emerging ideas across different parts of
              the world — while continuing to remain deeply rooted in a quieter
              and slower environment in Palakkad, Kerala.
            </p>
            <p className="font-nixie text-[16px] sm:text-[16px] leading-[1.75] text-white/70">
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
              absolute inset-x-0 top-0 mx-auto
              flex h-full w-[90%] sm:w-[82%] items-center justify-between gap-4
              border border-white/15 bg-[#262626]/90
              px-5 sm:px-8 backdrop-blur-md
              will-change-transform
              ${position === 0 ? "pointer-events-auto" : "pointer-events-none"}
            `}
          >
            <h3 className="max-w-[80%] sm:max-w-[70%] font-recife text-[18px] sm:text-[22px] lg:text-[26px] leading-[1.15] lg:leading-none tracking-[-0.02em] text-[#7fa86d]">
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