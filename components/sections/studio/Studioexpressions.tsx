"use client";

import { useRef } from "react";
import Image from "next/image";
import { expressions } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

function CornerArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        className="corner-arrow-diag"
        d="M2 46 L46 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        className="corner-arrow-hook"
        d="M10 2 H46 V38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

function DotBullet({ className = "" }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 9 9"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="3" height="3" fill="currentColor pb-2" />
      <rect x="0" y="6" width="3" height="3" fill="currentColor pb-2" />
      <rect x="6" y="3" width="3" height="3" fill="currentColor pb-2" />
    </svg>
  );
}

export default function StudioExpressions() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;

        gsap.fromTo(
          row,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const img = imageRefs.current[i];
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, filter: "grayscale(1)" },
            {
              scale: 1,
              filter: "grayscale(0.4)",
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        const arrow = row.querySelector(".corner-arrow-diag, .corner-arrow-hook");
        if (arrow) {
          const paths = row.querySelectorAll(
            ".corner-arrow-diag, .corner-arrow-hook"
          );
          paths.forEach((path) => {
            const length = (path as SVGPathElement).getTotalLength();
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            });
          });
        }
      });
    },
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#EAE7E2]"
    >
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 sm:pt-24 lg:pt-20 pb-24 sm:pb-28 lg:pb-20">
        {/* ============ HEADING ============ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 max-w-[1180px] mx-auto">
          <h2 className="font-recife text-[#181818] text-[1.9rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] leading-[1.15] tracking-[0.005em]">
            THE THREE<br /> EXPRESSIONS
            <br />
            OF TORUSS
          </h2>

          <p className="font-nixie text-[12.5px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[220px] sm:max-w-[220px] lg:text-right relative lg:-left-35 lg:-top-10">
            Three expressions that define how we think, create, and contribute
          </p>
        </div>

        {/* ============ ROWS ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 max-w-[1180px] mx-auto flex flex-col">
          {expressions.map((exp, i) => (
            <div key={exp.index}>
              <div
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10 xl:gap-14 py-10 sm:py-12 lg:py-14"
              >
                {/* Label + list */}
                <div className="w-full lg:w-[230px] xl:w-[260px] shrink-0 flex flex-col">
                  <span className="font-nixie text-[#181818] text-[30px] tracking-[0.02em]">
                    — {exp.index}
                  </span>
                  <h3 className="mt-2 font-nixie text-[#181818] text-[1.8rem] sm:text-[2.5rem] tracking-[-0.01em]">
                    {exp.name}
                  </h3>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {exp.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3.5 font-nixie text-[15px] sm:text-[16px] leading-[1.6] text-[#181818]"
                      >
                        <DotBullet className="mt-[8px] shrink-0 text-[#181818]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div
                  className={`w-full sm:w-[70%] md:w-[55%] lg:w-[280px] xl:w-[320px] lg:ml-auto shrink-0 ${
                    i === 0 || i === 2 ? "lg:h-[400px]" : "lg:h-[300px]"
                  }`}
                >
                  <div
                    ref={(el) => {
                      imageRefs.current[i] = el;
                    }}
                    className="relative h-full w-full overflow-hidden"
                  >
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      fill
                      sizes="(max-width: 1024px) 70vw, 320px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Arrow + description */}
                <div className="flex-1 flex flex-col justify-between min-h-[120px] lg:min-h-0 lg:ml-auto">
                  <CornerArrow className="w-14 h-14 sm:w-16 sm:h-16 text-[#181818] shrink-0" />
                  <p className="mt-8 lg:mt-0 font-nixie text-[15px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[300px]">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-black/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}