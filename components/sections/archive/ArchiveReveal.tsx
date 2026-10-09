"use client";

import { useRef, type ReactNode } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

/**
 * Page wrapper for the archive page.
 * - sets the design unit (see styles.ts), colours and font
 * - fades up every [data-reveal] element as it scrolls into view
 *   (text slides up, images unmask from the top)
 *
 * Uses ScrollTrigger.batch so all elements are measured together
 * in one pass (instead of one trigger per element), which avoids
 * long forced reflows on load.
 */
export default function ArchiveReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const text = gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal='media'])");
      const media = gsap.utils.toArray<HTMLElement>("[data-reveal='media']");

      // hidden start state (set once, before any measuring)
      gsap.set(text, { autoAlpha: 0, y: 28 });
      gsap.set(media, { autoAlpha: 0, clipPath: "inset(0 0 12% 0)" });

      ScrollTrigger.batch(text, {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });

      ScrollTrigger.batch(media, {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }),
      });
    },
    rootRef,
  );

  return (
    <div
      ref={rootRef}
      className="overflow-x-clip bg-[#fafaf4] font-clash text-[#38362e] [--spacing:1px] xl:[--spacing:min(1.3333px,calc(100vw/1920))]"
    >
      {children}
    </div>
  );
}
