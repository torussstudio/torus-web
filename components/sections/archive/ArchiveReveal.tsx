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

      // Hidden start state comes from CSS (.reveal-armed in globals.css),
      // not gsap.set. gsap.set on every element made GSAP parse each
      // element's transform (getComputedStyle + offsetParent, plus a
      // temporary style write for hidden ones) one by one, forcing ~60
      // style recalcs on load. Now GSAP only touches an element when its
      // batch enters the viewport.
      const root = rootRef.current;
      root?.classList.add("reveal-armed");

      ScrollTrigger.batch(text, {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(els, { autoAlpha: 0, y: 28 }, {
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
          gsap.fromTo(els, { autoAlpha: 0, clipPath: "inset(0% 0% 12% 0%)" }, {
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }),
      });

      return () => root?.classList.remove("reveal-armed");
    },
    rootRef,
  );

  return (
    <div
      ref={rootRef}
      className="overflow-x-clip bg-[#f9f8f2] font-clash text-[#38362e] [--spacing:1px] xl:[--spacing:min(1.3333px,calc(100vw/1920))]"
    >
      {children}
    </div>
  );
}
