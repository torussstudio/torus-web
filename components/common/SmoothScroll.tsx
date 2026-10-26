"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | undefined>(undefined);

  useEffect(() => {
    // Every page opens at the top (also on back / forward), instead of the
    // browser restoring an old position.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    // Lenis runs on GSAP's ticker (one shared animation loop) and tells
    // ScrollTrigger about every smooth-scroll step, so scrub / parallax
    // animations stay in sync instead of running on a separate loop.
    const tick = (time: number) => {
      lenisRef.current?.raf(time * 1000); // gsap ticker time is in seconds
    };

    const init = () => {
      // lerp (not a fixed duration): every wheel tick eases toward the
      // target at the same rate, so long / fast scrolls glide evenly
      // instead of speeding up and stopping in steps.
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
      });
      lenisRef.current = lenis;

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
      lenisRef.current?.destroy();
      lenisRef.current = undefined;
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

  // New page -> jump to the top. Lenis keeps its own (animated) scroll
  // position, so without this it carried the old page's position over and
  // the new page opened in the middle or at the bottom.
  useLayoutEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.stop(); // cancel any smooth scroll still running
      lenis.scrollTo(0, { immediate: true, force: true });
      lenis.start();
    }
    window.scrollTo(0, 0);

    // new page's ScrollTriggers measure from the top
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
