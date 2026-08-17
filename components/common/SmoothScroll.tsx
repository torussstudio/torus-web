// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// }

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis;
    let rafId: number;

    const init = () => {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    // Idle time-il init cheyyuka, main thread block cheyyathe
    if ("requestIdleCallback" in window) {
      const idleId = (window as any).requestIdleCallback(init);
      return () => {
        (window as any).cancelIdleCallback(idleId);
        lenis?.destroy();
        cancelAnimationFrame(rafId);
      };
    } else {
      // Fallback (Safari support illa requestIdleCallback-inu)
      const timeoutId = setTimeout(init, 200);
      return () => {
        clearTimeout(timeoutId);
        lenis?.destroy();
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  return null;
}