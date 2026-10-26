"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";
import { dropHiddenBreaks } from "@/lib/utils";

/**
 * Home page load-in (hero intro).
 *
 *  1. a dark band fills across the middle of the screen, "Loading" + a
 *     0 → 100 counter riding its edge
 *  2. the band opens up to fill the screen
 *  3. the studio photo appears in the middle, small and tilted in 3D, then
 *     straightens and flies into its real place in the hero
 *  4. the cover fades, the navbar drops in, the heading rises line by line
 *     out of masks and the rest of the hero text follows
 *
 * Safety:
 *  - the cover is server-rendered, so the page never flashes before it
 *  - reduced motion: the cover is hidden by CSS and nothing runs
 *  - if JS never runs, a CSS fail-safe hides the cover after 6s
 *  - page scroll is blocked only while the intro plays
 */

const INK = "#38362e";
const PAPER = "#f9f8f2";

export default function HeroIntro() {
  const coverRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cover = coverRef.current;
    if (!cover) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cover.style.display = "none";
      return;
    }
    cover.style.animation = "none"; // JS is alive – cancel the CSS fail-safe

    const desktop = window.matchMedia("(min-width: 1280px)").matches;
    const k = desktop ? 1 : 0.6;

    // ── block scrolling while it plays (capture phase on window runs before
    //    Lenis' own listeners, so Lenis never sees these either)
    const keys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Spacebar"]);
    const block = (e: Event) => {
      if (e instanceof KeyboardEvent && !keys.has(e.key)) return;
      e.preventDefault();
      e.stopPropagation();
    };
    const opts = { capture: true, passive: false } as const;
    window.addEventListener("wheel", block, opts);
    window.addEventListener("touchmove", block, opts);
    window.addEventListener("keydown", block, opts);
    const unlock = () => {
      window.removeEventListener("wheel", block, opts);
      window.removeEventListener("touchmove", block, opts);
      window.removeEventListener("keydown", block, opts);
    };
    window.scrollTo(0, 0);

    let clone: HTMLImageElement | null = null;
    let split: SplitText | null = null;
    let restoreTitle: (() => void) | null = null;

    const ctx = gsap.context(() => {
      const band = cover.querySelector<HTMLElement>("[data-intro='band']");
      const label = cover.querySelector<HTMLElement>("[data-intro='label']");
      const counter = cover.querySelector<HTMLElement>("[data-intro='counter']");
      const frame = document.querySelector<HTMLElement>("[data-fx='hero-media'] [data-reveal='media']");
      const photo = frame?.querySelector<HTMLImageElement>("img");
      const title = document.querySelector<HTMLElement>("[data-intro='title']");
      const items = gsap.utils.toArray<HTMLElement>("[data-intro='item']");
      const header = document.querySelector<HTMLElement>("header");
      if (!band || !label || !counter) return;

      // hero text waits hidden under the cover
      if (title) {
        restoreTitle = dropHiddenBreaks([title]);
        split = SplitText.create(title, { type: "lines", mask: "lines" });
        gsap.set(split.lines, { yPercent: 110 });
      }
      gsap.set(items, { autoAlpha: 0, y: 30 });
      if (header) gsap.set(header, { yPercent: -100 });

      const W = window.innerWidth;
      const H = window.innerHeight;
      const BAND_H = band.offsetHeight;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          cover.style.display = "none";
          clone?.remove();
          clone = null;
          unlock();
        },
      });

      // 1. band fills left → right, counter rides the edge
      const FILL = desktop ? 1.5 : 1.2;
      const progress = { p: 0 };
      tl.fromTo(band, { scaleX: 0 }, { scaleX: 1, duration: FILL, ease: "power2.inOut" }, 0.15);
      tl.to(
        progress,
        {
          p: 1,
          duration: FILL,
          ease: "power2.inOut",
          onUpdate: () => {
            counter.textContent = `${Math.round(progress.p * 100)}%`;
            // ride the band's edge, but never sit on top of "Loading"
            const minX = label.offsetLeft + label.offsetWidth + 20;
            const x = Math.max(minX, progress.p * W - counter.offsetWidth - 24);
            gsap.set(counter, { x });
          },
        },
        0.15,
      );
      tl.fromTo(label, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0.25);

      // 2. band opens up to cover the screen
      // (explicit times: ">" would mean "after the label fade-in", not after the fill)
      tl.addLabel("open", 0.15 + FILL + 0.1);
      tl.to([label, counter], { autoAlpha: 0, duration: 0.25 }, "open");
      tl.to(band, { scaleY: (H / BAND_H) * 1.02, duration: 0.85, ease: "expo.inOut" }, "open");

      // 3. photo tilts in small, then flies into its real spot.
      //    The spot is measured right before the flight (not at load): the
      //    fixed navbar sets its spacer a moment after load and moves the
      //    hero down, so an early measurement would land in the wrong place.
      if (frame && photo) {
        clone = document.createElement("img");
        clone.alt = "";
        Object.assign(clone.style, {
          position: "fixed",
          objectFit: "cover",
          zIndex: "2",
          pointerEvents: "none",
          visibility: "hidden",
        });
        cover.appendChild(clone);

        let r = frame.getBoundingClientRect();
        const place = () => {
          if (!clone) return;
          r = frame.getBoundingClientRect();
          clone.src = photo.currentSrc || photo.src;
          Object.assign(clone.style, {
            left: `${r.left}px`,
            top: `${r.top}px`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          });
        };
        tl.call(place, [], "open+=0.3");

        tl.fromTo(
          clone,
          {
            x: () => W / 2 - (r.left + r.width / 2),
            y: () => H / 2 - (r.top + r.height / 2),
            scale: () => Math.min((W * 0.32) / r.width, (H * 0.36) / r.height),
            rotationY: -38 * k,
            rotationX: 14 * k,
            rotation: -7 * k,
            transformPerspective: 1400,
            autoAlpha: 0,
          },
          { autoAlpha: 1, duration: 0.35, ease: "power1.out", immediateRender: false },
          "open+=0.6",
        );
        tl.to(
          clone,
          { x: 0, y: 0, scale: 1, rotationY: 0, rotationX: 0, rotation: 0, duration: 1.25, ease: "expo.inOut" },
          ">-0.05",
        );
        // cover fades while the photo is landing
        tl.to([band, cover], { backgroundColor: "rgba(0,0,0,0)", duration: 0.55, ease: "power1.inOut" }, "-=0.55");
      } else {
        tl.to([band, cover], { autoAlpha: 0, duration: 0.5 }, ">");
      }

      // 4. navbar + hero text
      if (header) tl.to(header, { yPercent: 0, duration: 0.8, ease: "expo.out" }, "-=0.2");
      if (split) tl.to(split.lines, { yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.09 }, "<");
      tl.to(items, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06 }, "<0.25");
    });

    return () => {
      ctx.revert();
      split?.revert();
      restoreTitle?.();
      clone?.remove();
      unlock();
    };
  }, []);

  return (
    <div
      ref={coverRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] overflow-hidden motion-reduce:hidden [animation:fx-intro-failsafe_0s_linear_6s_forwards]"
      style={{ backgroundColor: PAPER }}
    >
      <div
        data-intro="band"
        className="absolute left-0 h-[56px] w-full origin-left xl:h-[64px]"
        style={{ top: "calc(50% - 28px)", backgroundColor: INK, transform: "scaleX(0)" }}
      />
      <div
        className="absolute left-0 flex h-[56px] w-full items-center px-24 text-[11px] tracking-[0.18em] uppercase xl:h-[64px] xl:text-[13px]"
        style={{ top: "calc(50% - 28px)", color: PAPER }}
      >
        <span data-intro="label" className="opacity-0">
          Loading
        </span>
        <span data-intro="counter" className="absolute top-1/2 left-0 -translate-y-1/2 tabular-nums">
          0%
        </span>
      </div>
    </div>
  );
}
