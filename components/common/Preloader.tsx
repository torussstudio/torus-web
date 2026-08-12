// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { useGsap } from "@/hooks/useGsap";

// type Props = {
//   onComplete?: () => void;
// };

// const NODES = Array.from({ length: 28 }, (_, i) => ({
//   id: i,
//   x: 8 + ((i * 137.508) % 84),
//   y: 6 + ((i * 97.3) % 88),
//   r: 1 + (i % 3) * 0.6,
// }));

// const CHARS  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// const TARGET = "TORUSS";

// export default function Preloader({ onComplete }: Props) {
//   const containerRef   = useRef<HTMLDivElement>(null);
//   const gridRef        = useRef<HTMLDivElement>(null);
//   const scanRef        = useRef<HTMLDivElement>(null);
//   const nodesRef       = useRef<HTMLDivElement>(null);
//   const lettersWrapRef = useRef<HTMLDivElement>(null);
//   const subRef         = useRef<HTMLDivElement>(null);
//   const cornersTL      = useRef<HTMLDivElement>(null);
//   const cornersTR      = useRef<HTMLDivElement>(null);
//   const cornersBL      = useRef<HTMLDivElement>(null);
//   const cornersBR      = useRef<HTMLDivElement>(null);
//   const progressRef    = useRef<HTMLDivElement>(null);
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const wipeTopRef     = useRef<HTMLDivElement>(null);
//   const wipeBotRef     = useRef<HTMLDivElement>(null);
//   const letterRefs     = useRef<(HTMLSpanElement | null)[]>([]);
//   const rafRefs        = useRef<number[]>([]);
//   const timeoutRefs    = useRef<ReturnType<typeof setTimeout>[]>([]);

//   const decodeChar = (el: HTMLSpanElement, target: string, duration: number) => {
//     let start: number | null = null;
//     const tick = (ts: number) => {
//       if (!start) start = ts;
//       const p = Math.min((ts - start) / duration, 1);
//       if (p < 1) {
//         el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
//         const id = requestAnimationFrame(tick);
//         rafRefs.current.push(id);
//       } else {
//         el.textContent = target;
//       }
//     };
//     const id = requestAnimationFrame(tick);
//     rafRefs.current.push(id);
//   };

//   // Body scroll lock + raf/timeout cleanup — kept OUTSIDE gsap.context
//   // because gsap.context ignores the callback's return value, so a
//   // cleanup returned from inside useGsap's callback never actually runs.
//   // A plain effect here gets a real, React-guaranteed cleanup instead.
//   useLayoutEffect(() => {
//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = prevOverflow;
//       rafRefs.current.forEach(cancelAnimationFrame);
//       rafRefs.current = [];
//       timeoutRefs.current.forEach(clearTimeout);
//       timeoutRefs.current = [];
//     };
//   }, []);

//   useGsap(
//     (gsap) => {
//       const reduceMotion =
//         typeof window !== "undefined" &&
//         window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//       if (reduceMotion) {
//         gsap.set(containerRef.current, { autoAlpha: 0 });
//         onComplete?.();
//         return;
//       }

//       gsap.set([
//         gridRef.current,
//         scanRef.current,
//         nodesRef.current,
//         subRef.current,
//         progressRef.current,
//         cornersTL.current,
//         cornersTR.current,
//         cornersBL.current,
//         cornersBR.current,
//       ], { autoAlpha: 0 });

//       gsap.set(wipeTopRef.current, { scaleY: 1, transformOrigin: "top center" });
//       gsap.set(wipeBotRef.current, { scaleY: 1, transformOrigin: "bottom center" });
//       gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left center" });
//       gsap.set(lettersWrapRef.current, { opacity: 1 });

//       letterRefs.current.forEach((el) => {
//         if (!el) return;
//         el.style.opacity = "0";
//         el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
//       });

//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       tl.to([wipeTopRef.current, wipeBotRef.current], {
//         scaleY: 0,
//         duration: 1.05,
//         ease: "expo.inOut",
//       })
//       .to(gridRef.current, { autoAlpha: 1, duration: 0.6, ease: "power2.out" }, "-=0.55")
//       .to(scanRef.current, { autoAlpha: 0.7, duration: 0.12 }, "-=0.15")
//       .to(scanRef.current, { top: "100%", duration: 0.85, ease: "none" })
//       .to(scanRef.current, { autoAlpha: 0, duration: 0.15 }, "-=0.1")
//       .to(nodesRef.current, { autoAlpha: 1, duration: 0.45 }, "-=0.75")
//       .to(
//         [cornersTL.current, cornersTR.current, cornersBL.current, cornersBR.current],
//         { autoAlpha: 1, duration: 0.35, stagger: 0.07 },
//         "-=0.4"
//       )
//       .to(progressRef.current, { autoAlpha: 1, duration: 0.25 }, "<+0.1")
//       .to(progressBarRef.current, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, "<")
//       .add(() => {
//         letterRefs.current.forEach((el, i) => {
//           if (!el) return;
//           const id = setTimeout(() => {
//             el.style.opacity = "1";
//             decodeChar(el, TARGET[i], 280 + i * 35);
//           }, i * 100);
//           timeoutRefs.current.push(id);
//         });
//       }, "-=0.25")
//       .to({}, { duration: 0.9 })
//       .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" })
//       .to({}, { duration: 0.65 })
//       .to(lettersWrapRef.current, { scale: 1.14, duration: 2.0, ease: "power2.inOut" })
//       .to(gridRef.current, { scale: 1.08, duration: 2.0, ease: "power2.inOut" }, "<")
//       .to(nodesRef.current, { scale: 1.12, opacity: 0.35, duration: 2.0, ease: "power2.inOut" }, "<")
//       .to(lettersWrapRef.current, { opacity: 0, filter: "blur(18px)", scale: 1.26, duration: 0.85, ease: "power3.in" }, "-=0.45")
//       .to(subRef.current, { opacity: 0, y: -8, duration: 0.45 }, "<")
//       .to(
//         [cornersTL.current, cornersTR.current, cornersBL.current, cornersBR.current, progressRef.current],
//         { autoAlpha: 0, duration: 0.35 },
//         "<"
//       )
//       .to([gridRef.current, nodesRef.current], { opacity: 0, duration: 0.55 }, "<+0.1")
//       .to([wipeTopRef.current, wipeBotRef.current], {
//         scaleY: 1,
//         duration: 0.72,
//         ease: "expo.inOut",
//         onComplete: () => {
//           onComplete?.();
//         },
//       }, "-=0.05");
//     },
//     containerRef,
//     [onComplete]
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-[9999] overflow-hidden bg-[#080808]"
//       aria-hidden="true"
//     >
//       {/* ── wipe panels ───────────────────────────────────────────────── */}
//       <div ref={wipeTopRef} className="absolute inset-x-0 top-0 h-1/2 z-20 bg-[#080808]" />
//       <div ref={wipeBotRef} className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-[#080808]" />

//       {/* ── coordinate grid ───────────────────────────────────────────── */}
//       <div
//         ref={gridRef}
//         className="absolute inset-0 z-0 will-change-transform"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(6,180,9,0.055) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(6,180,9,0.055) 1px, transparent 1px),
//             linear-gradient(rgba(6,180,9,0.022) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(6,180,9,0.022) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
//         }}
//       />

//       {/* ── vignette + glow ───────────────────────────────────────────── */}
//       <div
//         className="absolute inset-0 z-[1] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(6,180,9,0.09) 0%, transparent 70%), radial-gradient(circle at center, transparent 42%, rgba(0,0,0,0.82) 100%)",
//         }}
//       />

//       {/* ── scan line ─────────────────────────────────────────────────── */}
//       <div
//         ref={scanRef}
//         className="absolute inset-x-0 z-[2] h-[2px] pointer-events-none"
//         style={{
//           top: "-2px",
//           background:
//             "linear-gradient(90deg, transparent 0%, rgba(6,180,9,0) 12%, rgba(6,180,9,0.9) 47%, rgba(6,180,9,1) 50%, rgba(6,180,9,0.9) 53%, rgba(6,180,9,0) 88%, transparent 100%)",
//           boxShadow: "0 0 18px 4px rgba(6,180,9,0.35)",
//         }}
//       />

//       {/* ── particle nodes ────────────────────────────────────────────── */}
//       <div
//         ref={nodesRef}
//         className="absolute inset-0 z-[2] pointer-events-none will-change-transform"
//       >
//         {NODES.map((n) => (
//           <div
//             key={n.id}
//             className="absolute rounded-full"
//             style={{
//               left: `${n.x}%`,
//               top: `${n.y}%`,
//               width: `${n.r * 2}px`,
//               height: `${n.r * 2}px`,
//               background:
//                 n.id % 4 === 0
//                   ? "rgba(6,180,9,0.65)"
//                   : n.id % 4 === 1
//                   ? "rgba(6,180,9,0.28)"
//                   : "rgba(255,255,255,0.12)",
//               boxShadow: n.id % 5 === 0 ? "0 0 6px 2px rgba(6,180,9,0.28)" : "none",
//             }}
//           />
//         ))}
//       </div>

//       {/* ── corner brackets ───────────────────────────────────────────── */}
//       <div ref={cornersTL} className="absolute top-6 left-6 z-10 pointer-events-none">
//         <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//           <path d="M0 14 L0 0 L14 0" stroke="rgba(6,180,9,0.5)" strokeWidth="1.2" />
//         </svg>
//       </div>
//       <div ref={cornersTR} className="absolute top-6 right-6 z-10 pointer-events-none">
//         <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//           <path d="M4 0 L18 0 L18 14" stroke="rgba(6,180,9,0.5)" strokeWidth="1.2" />
//         </svg>
//       </div>
//       <div ref={cornersBL} className="absolute bottom-6 left-6 z-10 pointer-events-none">
//         <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//           <path d="M0 4 L0 18 L14 18" stroke="rgba(6,180,9,0.5)" strokeWidth="1.2" />
//         </svg>
//       </div>
//       <div ref={cornersBR} className="absolute bottom-6 right-6 z-10 pointer-events-none">
//         <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//           <path d="M4 18 L18 18 L18 4" stroke="rgba(6,180,9,0.5)" strokeWidth="1.2" />
//         </svg>
//       </div>

//       {/* ── progress bar ──────────────────────────────────────────────── */}
//       <div
//         ref={progressRef}
//         className="absolute bottom-[52px] left-1/2 -translate-x-1/2 z-10 w-[120px] pointer-events-none"
//       >
//         <div className="w-full h-px overflow-hidden bg-[rgba(6,180,9,0.15)]">
//           <div
//             ref={progressBarRef}
//             className="h-full will-change-transform bg-gradient-to-r from-[rgba(6,180,9,0.4)] to-[#06b409]"
//             style={{ boxShadow: "0 0 6px rgba(6,180,9,0.5)" }}
//           />
//         </div>
//       </div>

//       {/* ── wordmark centre ───────────────────────────────────────────── */}
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
//         <div
//           ref={lettersWrapRef}
//           className="flex items-center will-change-transform [backface-visibility:hidden] [letter-spacing:0.45em]"
//         >
//           {TARGET.split("").map((char, i) => (
//             <span
//               key={i}
//               ref={(el) => { letterRefs.current[i] = el; }}
//               className="
//                 font-nixie
//                 select-none
//                 leading-none
//                 inline-block
//                 text-center
//                 text-[#06b409]
//                 text-[40px]
//                 sm:text-[56px]
//                 md:text-[72px]
//                 lg:text-[88px]
//                 min-w-[0.78em]
//               "
//               style={{
//                 fontWeight: 200,
//                 textShadow: "0 0 32px rgba(6,180,9,0.22), 0 0 60px rgba(6,180,9,0.08)",
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </div>

//         <div
//           ref={subRef}
//           className="flex items-center gap-3 mt-[22px] translate-y-[6px]"
//         >
//           <div className="w-[22px] h-px bg-white/[0.18]" />
//           <span className="text-white/30 text-[9px] sm:text-[10px] font-nova uppercase tracking-[0.42em]">
//             Creative Development Studio
//           </span>
//           <div className="w-[22px] h-px bg-white/[0.18]" />
//         </div>
//       </div>

//       {/* ── corner meta labels ────────────────────────────────────────── */}
//       <div className="absolute top-[38px] left-[34px] z-10 pointer-events-none text-white/[0.16] text-[9px] tracking-[0.24em] uppercase">
//         Studio
//       </div>
//       <div className="absolute top-[38px] right-[34px] z-10 pointer-events-none text-white/[0.16] text-[9px] tracking-[0.24em] uppercase">
//         © {new Date().getFullYear()}
//       </div>
//       <div className="absolute bottom-[36px] left-[34px] z-10 pointer-events-none text-white/[0.16] text-[9px] tracking-[0.24em] uppercase">
//         Toruss
//       </div>
//       <div className="absolute bottom-[36px] right-[34px] z-10 pointer-events-none text-white/[0.16] text-[9px] tracking-[0.24em] uppercase">
//         Est. 2014
//       </div>
//     </div>
//   );
// }



"use client";

import { useLayoutEffect, useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

type Props = {
  onComplete?: () => void;
};

const NODES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: 8 + ((i * 137.508) % 84),
  y: 6 + ((i * 97.3) % 88),
  r: 1 + (i % 3) * 0.6,
}));

const CHARS  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const TARGET = "TORUSS";

// Site palette — keep this in sync with the rest of the app
const BG      = "#e7e5e1"; // site bg
const INK     = "#181818"; // site text
const ACCENT  = "#80c46c"; // site link/number accent

export default function Preloader({ onComplete }: Props) {
  const containerRef   = useRef<HTMLDivElement>(null);
  const gridRef        = useRef<HTMLDivElement>(null);
  const scanRef        = useRef<HTMLDivElement>(null);
  const nodesRef       = useRef<HTMLDivElement>(null);
  const lettersWrapRef = useRef<HTMLDivElement>(null);
  const subRef         = useRef<HTMLDivElement>(null);
  const cornersTL      = useRef<HTMLDivElement>(null);
  const cornersTR      = useRef<HTMLDivElement>(null);
  const cornersBL      = useRef<HTMLDivElement>(null);
  const cornersBR      = useRef<HTMLDivElement>(null);
  const progressRef    = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const wipeTopRef     = useRef<HTMLDivElement>(null);
  const wipeBotRef     = useRef<HTMLDivElement>(null);
  const letterRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRefs        = useRef<number[]>([]);
  const timeoutRefs    = useRef<ReturnType<typeof setTimeout>[]>([]);

  const decodeChar = (el: HTMLSpanElement, target: string, duration: number) => {
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      if (p < 1) {
        el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
        const id = requestAnimationFrame(tick);
        rafRefs.current.push(id);
      } else {
        el.textContent = target;
      }
    };
    const id = requestAnimationFrame(tick);
    rafRefs.current.push(id);
  };

  // Body scroll lock + raf/timeout cleanup — kept OUTSIDE gsap.context
  // because gsap.context ignores the callback's return value, so a
  // cleanup returned from inside useGsap's callback never actually runs.
  // A plain effect here gets a real, React-guaranteed cleanup instead.
  useLayoutEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      rafRefs.current.forEach(cancelAnimationFrame);
      rafRefs.current = [];
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, []);

  useGsap(
    (gsap) => {
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(containerRef.current, { autoAlpha: 0 });
        onComplete?.();
        return;
      }

      gsap.set([
        gridRef.current,
        scanRef.current,
        nodesRef.current,
        subRef.current,
        progressRef.current,
        cornersTL.current,
        cornersTR.current,
        cornersBL.current,
        cornersBR.current,
      ], { autoAlpha: 0 });

      gsap.set(wipeTopRef.current, { scaleY: 1, transformOrigin: "top center" });
      gsap.set(wipeBotRef.current, { scaleY: 1, transformOrigin: "bottom center" });
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(lettersWrapRef.current, { opacity: 1 });

      letterRefs.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "0";
        el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to([wipeTopRef.current, wipeBotRef.current], {
        scaleY: 0,
        duration: 1.05,
        ease: "expo.inOut",
      })
      .to(gridRef.current, { autoAlpha: 1, duration: 0.6, ease: "power2.out" }, "-=0.55")
      .to(scanRef.current, { autoAlpha: 0.7, duration: 0.12 }, "-=0.15")
      .to(scanRef.current, { top: "100%", duration: 0.85, ease: "none" })
      .to(scanRef.current, { autoAlpha: 0, duration: 0.15 }, "-=0.1")
      .to(nodesRef.current, { autoAlpha: 1, duration: 0.45 }, "-=0.75")
      .to(
        [cornersTL.current, cornersTR.current, cornersBL.current, cornersBR.current],
        { autoAlpha: 1, duration: 0.35, stagger: 0.07 },
        "-=0.4"
      )
      .to(progressRef.current, { autoAlpha: 1, duration: 0.25 }, "<+0.1")
      .to(progressBarRef.current, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, "<")
      .add(() => {
        letterRefs.current.forEach((el, i) => {
          if (!el) return;
          const id = setTimeout(() => {
            el.style.opacity = "1";
            decodeChar(el, TARGET[i], 280 + i * 35);
          }, i * 100);
          timeoutRefs.current.push(id);
        });
      }, "-=0.25")
      .to({}, { duration: 0.9 })
      .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" })
      .to({}, { duration: 0.65 })
      .to(lettersWrapRef.current, { scale: 1.14, duration: 2.0, ease: "power2.inOut" })
      .to(gridRef.current, { scale: 1.08, duration: 2.0, ease: "power2.inOut" }, "<")
      .to(nodesRef.current, { scale: 1.12, opacity: 0.35, duration: 2.0, ease: "power2.inOut" }, "<")
      .to(lettersWrapRef.current, { opacity: 0, filter: "blur(18px)", scale: 1.26, duration: 0.85, ease: "power3.in" }, "-=0.45")
      .to(subRef.current, { opacity: 0, y: -8, duration: 0.45 }, "<")
      .to(
        [cornersTL.current, cornersTR.current, cornersBL.current, cornersBR.current, progressRef.current],
        { autoAlpha: 0, duration: 0.35 },
        "<"
      )
      .to([gridRef.current, nodesRef.current], { opacity: 0, duration: 0.55 }, "<+0.1")
      .to([wipeTopRef.current, wipeBotRef.current], {
        scaleY: 1,
        duration: 0.72,
        ease: "expo.inOut",
        onComplete: () => {
          onComplete?.();
        },
      }, "-=0.05");
    },
    containerRef,
    [onComplete]
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ backgroundColor: BG }}
      aria-hidden="true"
    >
      {/* ── wipe panels ───────────────────────────────────────────────── */}
      <div ref={wipeTopRef} className="absolute inset-x-0 top-0 h-1/2 z-20" style={{ backgroundColor: BG }} />
      <div ref={wipeBotRef} className="absolute inset-x-0 bottom-0 h-1/2 z-20" style={{ backgroundColor: BG }} />

      {/* ── coordinate grid ───────────────────────────────────────────── */}
      <div
        ref={gridRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24,24,24,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24,24,24,0.07) 1px, transparent 1px),
            linear-gradient(rgba(24,24,24,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24,24,24,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
        }}
      />

      {/* ── vignette + glow ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(128,196,108,0.12) 0%, transparent 70%), radial-gradient(circle at center, transparent 42%, rgba(24,24,24,0.05) 100%)",
        }}
      />

      {/* ── scan line ─────────────────────────────────────────────────── */}
      <div
        ref={scanRef}
        className="absolute inset-x-0 z-[2] h-[2px] pointer-events-none"
        style={{
          top: "-2px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(128,196,108,0) 12%, rgba(128,196,108,0.9) 47%, rgba(128,196,108,1) 50%, rgba(128,196,108,0.9) 53%, rgba(128,196,108,0) 88%, transparent 100%)",
          boxShadow: "0 0 18px 4px rgba(128,196,108,0.35)",
        }}
      />

      {/* ── particle nodes ────────────────────────────────────────────── */}
      <div
        ref={nodesRef}
        className="absolute inset-0 z-[2] pointer-events-none will-change-transform"
      >
        {NODES.map((n) => (
          <div
            key={n.id}
            className="absolute rounded-full"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.r * 2}px`,
              height: `${n.r * 2}px`,
              background:
                n.id % 4 === 0
                  ? "rgba(128,196,108,0.75)"
                  : n.id % 4 === 1
                  ? "rgba(128,196,108,0.35)"
                  : "rgba(24,24,24,0.14)",
              boxShadow: n.id % 5 === 0 ? "0 0 6px 2px rgba(128,196,108,0.3)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── corner brackets ───────────────────────────────────────────── */}
      <div ref={cornersTL} className="absolute top-6 left-6 z-10 pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M0 14 L0 0 L14 0" stroke="rgba(24,24,24,0.45)" strokeWidth="1.2" />
        </svg>
      </div>
      <div ref={cornersTR} className="absolute top-6 right-6 z-10 pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 0 L18 0 L18 14" stroke="rgba(24,24,24,0.45)" strokeWidth="1.2" />
        </svg>
      </div>
      <div ref={cornersBL} className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M0 4 L0 18 L14 18" stroke="rgba(24,24,24,0.45)" strokeWidth="1.2" />
        </svg>
      </div>
      <div ref={cornersBR} className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 18 L18 18 L18 4" stroke="rgba(24,24,24,0.45)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* ── progress bar ──────────────────────────────────────────────── */}
      <div
        ref={progressRef}
        className="absolute bottom-[52px] left-1/2 -translate-x-1/2 z-10 w-[120px] pointer-events-none"
      >
        <div className="w-full h-px overflow-hidden" style={{ backgroundColor: "rgba(24,24,24,0.12)" }}>
          <div
            ref={progressBarRef}
            className="h-full will-change-transform"
            style={{
              background: `linear-gradient(90deg, rgba(128,196,108,0.5), ${ACCENT})`,
              boxShadow: "0 0 6px rgba(128,196,108,0.6)",
            }}
          />
        </div>
      </div>

      {/* ── wordmark centre ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div
          ref={lettersWrapRef}
          className="flex items-center will-change-transform [backface-visibility:hidden] [letter-spacing:0.45em]"
        >
          {TARGET.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => { letterRefs.current[i] = el; }}
              className="
                font-nixie
                select-none
                leading-none
                inline-block
                text-center
                text-[40px]
                sm:text-[56px]
                md:text-[72px]
                lg:text-[88px]
                min-w-[0.78em]
              "
              style={{
                color: INK,
                fontWeight: 200,
                textShadow: "0 0 32px rgba(128,196,108,0.28), 0 0 60px rgba(128,196,108,0.12)",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div
          ref={subRef}
          className="flex items-center gap-3 mt-[22px] translate-y-[6px]"
        >
          <div className="w-[22px] h-px" style={{ backgroundColor: "rgba(24,24,24,0.18)" }} />
          <span
            className="text-[9px] sm:text-[10px] font-nova uppercase tracking-[0.42em]"
            style={{ color: "rgba(24,24,24,0.45)" }}
          >
            Creative Development Studio
          </span>
          <div className="w-[22px] h-px" style={{ backgroundColor: "rgba(24,24,24,0.18)" }} />
        </div>
      </div>

      {/* ── corner meta labels ────────────────────────────────────────── */}
      <div
        className="absolute top-[38px] left-[34px] z-10 pointer-events-none text-[9px] tracking-[0.24em] uppercase"
        style={{ color: "rgba(24,24,24,0.25)" }}
      >
        Studio
      </div>
      <div
        className="absolute top-[38px] right-[34px] z-10 pointer-events-none text-[9px] tracking-[0.24em] uppercase"
        style={{ color: "rgba(24,24,24,0.25)" }}
      >
        © {new Date().getFullYear()}
      </div>
      <div
        className="absolute bottom-[36px] left-[34px] z-10 pointer-events-none text-[9px] tracking-[0.24em] uppercase"
        style={{ color: "rgba(24,24,24,0.25)" }}
      >
        Toruss
      </div>
      <div
        className="absolute bottom-[36px] right-[34px] z-10 pointer-events-none text-[9px] tracking-[0.24em] uppercase"
        style={{ color: "rgba(24,24,24,0.25)" }}
      >
        Est. 2014
      </div>
    </div>
  );
}