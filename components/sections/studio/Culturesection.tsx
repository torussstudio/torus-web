"use client";

import { useRef } from "react";
import Image from "next/image";
import { cultureGridImages } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function CultureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const introParaRef = useRef<HTMLParagraphElement>(null);
  const gridWrapRef = useRef<HTMLDivElement>(null);
  const gridItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const belowParaRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const smallThingsLabelRef = useRef<HTMLParagraphElement>(null);
  const smallThingsParaRef = useRef<HTMLParagraphElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const rhythmParaRef = useRef<HTMLParagraphElement>(null);

  const closingImgRef = useRef<HTMLDivElement>(null);
  const closingQuoteRef = useRef<HTMLParagraphElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const reveal = (
        target: gsap.TweenTarget,
        trigger: Element | null,
        vars: gsap.TweenVars = {}
      ) => {
        if (!trigger) return;
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 30, ...vars.from },
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
            ...vars.to,
          }
        );
      };

      // ---- Heading + intro paragraph ----
      reveal(headingRef.current, headingRef.current);
      reveal(introParaRef.current, introParaRef.current, {
        to: { delay: 0.15 },
      });

      // ---- 3-image grid, staggered ----
      gsap.fromTo(
        gridItemRefs.current,
        { autoAlpha: 0, y: 30, scale: 1.05 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridWrapRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Paragraph below grid ----
      reveal(belowParaRef.current, belowParaRef.current);

      // ---- Divider line draw ----
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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- "Even small things matter" block ----
      reveal(smallThingsLabelRef.current, smallThingsLabelRef.current);
      reveal(smallThingsParaRef.current, smallThingsParaRef.current, {
        to: { delay: 0.1 },
      });

      reveal(img1Ref.current, img1Ref.current, {
        from: { x: -30, y: 0 },
        to: { x: 0 },
      });
      reveal(img2Ref.current, img2Ref.current, {
        from: { x: 30, y: 0 },
        to: { x: 0 },
      });
      reveal(rhythmParaRef.current, rhythmParaRef.current, {
        to: { delay: 0.2 },
      });

      // ---- Closing image + quote ----
      reveal(closingImgRef.current, closingImgRef.current, {
        from: { x: -30, y: 0 },
        to: { x: 0 },
      });
      reveal(closingQuoteRef.current, closingQuoteRef.current, {
        to: { delay: 0.15 },
      });
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#161616]"
    >
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-28">
        {/* ============ HEADING + INTRO PARAGRAPH ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8">
          <h2
            ref={headingRef}
            className="
              lg:col-span-6 lg:col-start-2
              font-recife
              text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.8rem] xl:text-[3.2rem] 2xl:text-[3.4rem]
              leading-[1.15] tracking-[0.01em]
              text-white
            "
          >
            THE CULTURE OF
            <br />
            THE STUDIO
          </h2>

          <p
            ref={introParaRef}
            className="lg:col-span-3 lg:col-start-6 lg:row-start-2 font-nixie text-[14px] sm:text-[16px] leading-[1.75] text-white max-w-[300px] mt-2 lg:mt-4"
          >
            The culture of the studio has evolved slowly through shared
            habits more than formal policies.
          </p>
        </div>

        {/* ============ 3-IMAGE GRID ============ */}
        <div
          ref={gridWrapRef}
          className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-3 gap-3 sm:gap-4">
            {cultureGridImages.map((img, i) => (
              <div
                key={img.src}
                ref={(el) => {
                  gridItemRefs.current[i] = el;
                }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ============ PARAGRAPH BELOW IMAGES ============ */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12">
          <p
            ref={belowParaRef}
            className="lg:col-span-7 lg:col-start-6 font-nixie text-[13px] sm:text-[16px] leading-[1.85] text-white max-w-[640px]"
          >
            Through films watched together on Saturdays. Through
            conversations about books, architecture, psychology, cinema,
            philosophy, music, and business. Through workshops and creative
            experiments. Through travel. Through observing spaces, cities,
            and people. Through long discussions that quietly reshape the
            way we think.
          </p>
        </div>

        {/* ============ DIVIDER ============ */}
        <div
          ref={dividerRef}
          className="mt-14 lg:mt-20 h-px bg-white/50 origin-left"
        />

        {/* ============ "EVEN SMALL THINGS MATTER" ============ */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <p
            ref={smallThingsLabelRef}
            className="font-nixie text-[15px] sm:text-[18px] leading-[1.6] text-[#6b6b6b]"
          >
            Even small things matter to us:
          </p>
          <p
            ref={smallThingsParaRef}
            className="mt-4 font-nixie text-[13px] sm:text-[16px] leading-[1.85] text-white max-w-[400px]"
          >
            how the studio feels, how objects are arranged, how
            respectfully people collaborate, how clearly things are
            communicated, and whether the environment itself supports
            thoughtful work.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20 items-start">
            {/* Image 1 */}
            <div
              ref={img1Ref}
              className="relative w-full sm:w-[240px] lg:w-[260px] aspect-[3/4.4] overflow-hidden shrink-0"
            >
              <Image
                src="/images/creative.avif"
                alt="Studio wall with planning notes"
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>

            {/* Image 2 + paragraph */}
            <div className="flex flex-col gap-6 max-w-[620px] sm:ml-10 lg:ml-16 mt-18">
              <div
                ref={img2Ref}
                className="relative w-[260px] sm:w-[320px] lg:w-[420px] aspect-[16/9] overflow-hidden"
              >
                <Image
                  src="/images/communication.avif"
                  alt="Close-up of a hands-on studio detail"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

              <p
                ref={rhythmParaRef}
                className="font-nixie text-[13px] sm:text-[16px] leading-[1.85] text-white"
              >
                Over time, certain practices naturally became part of the
                studio rhythm:
                <br />
                <br /> morning meditation sessions, collective screenings,
                shared meals, quiet working hours, creative discussions, and
                an ongoing effort to keep both the workspace and our
                thinking clear and intentional.
              </p>
            </div>
          </div>
        </div>

        {/* ============ CLOSING ============ */}
        <div className="mt-14 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div
            ref={closingImgRef}
            className="relative lg:col-span-8 lg:col-start-1 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[3/2] overflow-hidden"
          >
            <Image
              src="/images/artwork1.avif"
              alt="Studio team collaborating in the workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover"
            />
          </div>

          <p
            ref={closingQuoteRef}
            className="lg:col-span-4 lg:col-start-9 lg:self-start font-nixie text-[14px] sm:text-[16px] leading-[1.85] text-white max-w-[280px]"
          >
            We don&apos;t see creativity as something that exists separately
            from life. The way we work, observe, rest, learn, speak, listen,
            and collaborate, all slowly shape the work itself.
          </p>
        </div>
      </div>
    </section>
  );
}