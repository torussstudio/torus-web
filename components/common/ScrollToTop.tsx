"use client";

import { useEffect, useState } from "react";
import type Lenis from "lenis";
import { HiArrowLongUp } from "react-icons/hi2";
import { cn } from "@/lib/utils";

/**
 * Minimal "back to top" button, bottom right on every page. It appears once the page has been
 * scrolled past one screen height and glides back up through Lenis, so the return matches the
 * site's smooth scrolling (instant when the visitor prefers reduced motion).
 * Same square, hairline-bordered look as the carousel / flip-book arrows.
 */
export default function ScrollToTop({ getLenis }: { getLenis: () => Lenis | undefined }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Lenis moves the real window scroll, so the native scroll event is enough
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2, immediate: reduce, force: true });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={toTop}
      className={cn(
        // same 1px spacing unit the archive pages and footer use, so the sizes below mean px
        "[--spacing:1px] xl:[--spacing:min(1.3333px,calc(100vw/1920))] fixed right-16 bottom-16 z-40 inline-flex size-44 cursor-pointer items-center justify-center border border-[#38362e]/25 bg-[#f9f8f2]/90 text-[#38362e] backdrop-blur-sm transition-[opacity,translate,border-color] duration-300 ease-out hover:border-[#38362e] md:right-24 md:bottom-24 xl:right-40 xl:bottom-40 xl:size-[max(44px,calc(var(--spacing)*56))]",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <HiArrowLongUp aria-hidden="true" className="size-18 xl:size-[max(18px,calc(var(--spacing)*24))]" />
    </button>
  );
}
