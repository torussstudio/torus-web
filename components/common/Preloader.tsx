"use client";

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

type Props = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGsap(
    (gsap) => {
      document.body.style.overflow = "hidden";

      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(containerRef.current, { autoAlpha: 0 });
        document.body.style.overflow = "";
        onComplete?.();
        return;
      }

      // Initial states
      gsap.set(textRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.82,
        filter: "blur(12px)",
      });

      gsap.set(subTextRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Reveal
      tl.to(glowRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
      })

        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
          },
          "-=1.2"
        )

        .to(
          subTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=1"
        )

        // Hold
        .to({}, { duration: 0.45 })

        // Cinematic zoom
        .to(
          textRef.current,
          {
            scale: 1.18,
            duration: 2.2,
            ease: "power2.inOut",
          },
          "-=0.1"
        )

        .to(
          glowRef.current,
          {
            scale: 1.4,
            opacity: 0.7,
            duration: 2.2,
            ease: "power2.inOut",
          },
          "<"
        )

        .to(
          subTextRef.current,
          {
            opacity: 0.5,
            duration: 1.5,
          },
          "<"
        )

        // Exit
        .to(
          textRef.current,
          {
            opacity: 0,
            scale: 1.32,
            filter: "blur(14px)",
            duration: 1.1,
            ease: "power3.inOut",
          },
          "-=0.3"
        )

        .to(
          subTextRef.current,
          {
            opacity: 0,
            y: -8,
            duration: 0.7,
          },
          "<"
        )

        .to(
          glowRef.current,
          {
            opacity: 0,
            scale: 1.6,
            duration: 1,
          },
          "<"
        )

        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => {
              document.body.style.overflow = "";
              onComplete?.();
            },
          },
          "-=0.45"
        );
    },
    containerRef,
    [onComplete]
  );

  return (
    <div
      ref={containerRef}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden bg-black
      "
    >
      {/* cinematic background glow */}
      <div
        ref={glowRef}
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(6,180,9,0.16),transparent_65%)]
        "
      />

      {/* premium grain */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0.5px, transparent 0.5px),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "8px 8px",
        }}
      />

      {/* subtle vignette */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.65))]
        "
      />

      {/* content */}
      <div className="relative flex flex-col items-center">
        <div
          ref={textRef}
          className="
            font-serif
            text-center
            uppercase
            font-light
            leading-none
            select-none
            will-change-transform

            text-[30px]
            sm:text-[42px]
            md:text-[52px]
            lg:text-[64px]

            tracking-[0.18em]
            sm:tracking-[0.22em]
            md:tracking-[0.26em]

            text-[#06b409]

            drop-shadow-[0_0_24px_rgba(6,180,9,0.22)]
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          TORUSS
        </div>

        <div
          ref={subTextRef}
          className="
            mt-5
            text-white/40
            uppercase
            tracking-[0.35em]
            text-[10px]
            sm:text-xs
            font-medium
          "
        >
          Creative Development Studio
        </div>
      </div>

      {/* top left */}
      <div
        className="
          absolute top-6 left-6
          text-white/20
          text-[10px]
          tracking-[0.22em]
          uppercase
        "
      >
        Studio
      </div>

      {/* top right */}
      <div
        className="
          absolute top-6 right-6
          text-white/20
          text-[10px]
          tracking-[0.22em]
          uppercase
        "
      >
        © {new Date().getFullYear()}
      </div>

      {/* bottom left */}
      <div
        className="
          absolute bottom-6 left-6
          text-white/20
          text-[10px]
          tracking-[0.22em]
          uppercase
        "
      >
        Toruss
      </div>

      {/* bottom right */}
      <div
        className="
          absolute bottom-6 right-6
          text-white/20
          text-[10px]
          tracking-[0.22em]
          uppercase
        "
      >
        Est. 2014
      </div>
    </div>
  );
}



