"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis | undefined;

    // Lenis runs on GSAP's ticker (one shared animation loop) and tells
    // ScrollTrigger about every smooth-scroll step, so scrub / parallax
    // animations stay in sync instead of running on a separate loop.
    const tick = (time: number) => {
      lenis?.raf(time * 1000); // gsap ticker time is in seconds
    };

    const init = () => {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);
      // prioritize = true: Lenis scrolls at the START of each GSAP tick,
      // before tweens write styles. Added at the end (the default), its
      // scrollTo ran right after those writes and forced a layout every
      // frame while scrolling, which kept the main thread busy and delayed
      // wheel input.
      gsap.ticker.add(tick, false, true);
      gsap.ticker.lagSmoothing(0);
    };

    const cleanup = () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33); // GSAP default
      lenis?.destroy();
      lenis = undefined;
    };

    // Idle time-il init cheyyuka, main thread block cheyyathe
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(init);
      return () => {
        window.cancelIdleCallback(idleId);
        cleanup();
      };
    }

    // Fallback (Safari support illa requestIdleCallback-inu)
    const timeoutId = setTimeout(init, 200);
    return () => {
      clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  return null;
}
