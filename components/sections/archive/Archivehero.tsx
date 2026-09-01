"use client";

import { useRef } from "react";
import Image from "next/image";
import { project } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

type Project = {
  title: string;
  projectLead: string;
  contributors: string[];
  heroImage: string;
  heroImageAlt: string;
};

export default function ProjectDetail({ data = project }: { data?: Project }) {
  const headingLines = data.title.split(" ");

  const sectionRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const mainHeadingLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const leadRef = useRef<HTMLDivElement>(null);
  const contributorsRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap) => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        heroImgRef.current,
        { autoAlpha: 0, scale: 1.06 },
        { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          mainHeadingLineRefs.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, ease: "smoothReveal", stagger: 0.08 },
          "-=0.5"
        )
        .fromTo(
          leadRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          contributorsRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f4f4f2]"
    >
      {/* ============ MAIN CONTENT (sidebar now lives in ArchiveSidebar) ============ */}
      <div className="w-full pl-6 pr-5 sm:pl-8 sm:pr-8 md:pl-10 md:pr-12 lg:pl-10 lg:pr-16 xl:pl-12 xl:pr-20 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
          {/* HERO IMAGE */}
          <div
            ref={heroImgRef}
            className="relative w-full lg:w-[42%] xl:w-[41%] h-[280px] sm:h-[420px] lg:h-auto lg:min-h-[520px] xl:min-h-[600px] shrink-0 overflow-hidden bg-[#F4F3F1]"
          >
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="flex-1 flex flex-col justify-between gap-10 lg:min-h-[520px] xl:min-h-[600px]">
            <div>
              <h1 className="font-recife text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.08] tracking-[0.01em] text-[#181818] uppercase">
                {headingLines.map((line, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span
                      ref={(el) => {
                        mainHeadingLineRefs.current[i] = el;
                      }}
                      className="block"
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-8 sm:gap-10 text-left lg:text-right">
              <div ref={leadRef}>
                <p className="font-nixie text-[12px] sm:text-[16px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                  Project Lead
                </p>
                <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818]">
                  {data.projectLead}
                </p>
              </div>

              <div ref={contributorsRef}>
                <p className="font-nixie text-[12px] sm:text-[16px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                  Studio Contributors
                </p>
                <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818] max-w-[280px] lg:ml-auto">
                  {data.contributors.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}