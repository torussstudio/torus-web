"use client";

import { useRef } from "react";
import Image from "next/image";
import { project } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function ArchiveSidebar({ data = project }: { data?: typeof project }) {
  const sidebarLines = data.title.split(" ");

  const sidebarTitleRef = useRef<HTMLHeadingElement>(null);
  const sidebarRuleRef = useRef<HTMLDivElement>(null);
  const sidebarThumbRef = useRef<HTMLDivElement>(null);
  const sidebarMetaRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useScrollTrigger((gsap) => {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(sidebarTitleRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .fromTo(sidebarRuleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left center" }, "-=0.3")
      .fromTo(sidebarThumbRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .fromTo(sidebarMetaRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
  }, wrapperRef);

  return (
    // Outer wrapper: NO sticky, NO fixed height, NO border here.
    // This div stretches to match the content column's height automatically (flex default).
   <div className="lg:w-[280px] lg:shrink-0 lg:border-r lg:border-b border-black/60 bg-[#f4f4f2]">
      {/* Inner element: THIS is what actually sticks to the viewport */}
     <div
  ref={wrapperRef}
  className="lg:sticky lg:top-[var(--header-height,0px)] lg:h-[calc(100vh-var(--header-height,0px))] pl-12 pr-6 sm:pl-16 sm:pr-8 lg:pl-14 lg:pr-8 py-8 sm:py-10 flex flex-row lg:flex-col gap-8 lg:gap-0 items-start"
>
        <div className="flex flex-col shrink-0">
          <h2
            ref={sidebarTitleRef}
            className="font-nova text-[1.4rem] sm:text-[1.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase"
          >
            {sidebarLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <div ref={sidebarRuleRef} className="h-px w-10 bg-black/70 mt-4 mb-6 lg:mb-8 origin-left" />

          <div
            ref={sidebarThumbRef}
            className="relative w-[150px] h-[195px] sm:w-[170px] sm:h-[220px] overflow-hidden bg-[#F4F3F1]"
          >
            <Image src={data.thumbImage} alt={data.thumbImageAlt} fill sizes="200px" className="object-cover" />
          </div>
        </div>

        <div
          ref={sidebarMetaRef}
          className="font-nixie text-[14px] sm:text-[16px] leading-[1.6] text-[#181818] lg:mt-8 ml-auto lg:ml-0 self-end lg:self-start"
        >
          <p>{data.location}</p>
          <p>{data.period}</p>
        </div>
      </div>
    </div>
  );
}