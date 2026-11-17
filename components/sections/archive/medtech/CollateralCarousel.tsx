"use client";

import { useCallback, useEffect, useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "../Media";
import { t } from "../styles";

export type CarouselItem = ArchiveMedia & { width: number; height: number };

/**
 * Horizontal carousel with a common height. Every slide takes the exact shape of its own image
 * (width = height × the image's ratio), so a landscape image sits at its true width beside
 * portrait ones and nothing is cropped. Swipe / scroll, or use the arrows.
 *
 * It loops: the slides are laid out three times over and the view lives in the middle set.
 * Whenever the scroll comes to rest in the first or last set it is moved, instantly, by exactly
 * one set's width — the same picture, so the jump can't be seen — and the track never runs out.
 */
const COPIES = 3;

export default function CollateralCarousel({ items }: { items: CarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const n = items.length;
  const loop = Array.from({ length: COPIES }, () => items).flat();

  // width of one full set of slides, gaps included
  const period = useCallback(() => {
    const el = trackRef.current;
    if (!el || !n) return 0;
    const slides = el.children as HTMLCollectionOf<HTMLElement>;
    return slides[n].offsetLeft - slides[0].offsetLeft;
  }, [n]);

  // keep the view inside the middle set (instant, invisible jump)
  const recenter = useCallback(() => {
    const el = trackRef.current;
    const p = period();
    if (!el || !p) return;
    const left = el.scrollLeft;
    let next = left;
    if (left < p * 0.5) next = left + p;
    else if (left >= p * 1.5) next = left - p;
    if (next !== left) el.scrollTo({ left: next, behavior: "instant" });
  }, [period]);

  // Free scrolling (no CSS snap: with mixed widths the browser's snap points were unreliable). When the
  // scroll comes to rest, ease to the nearest position that shows an image in full: left edge at the
  // left gap, or right edge at the right gap.
  const timer = useRef<number | undefined>(undefined);
  const touching = useRef(false);

  const settle = useCallback(() => {
    const el = trackRef.current;
    if (!el || touching.current) return;
    recenter();
    const slides = Array.from(el.children) as HTMLElement[];
    const box = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const left = el.scrollLeft;
    const view = el.clientWidth;
    let best = left;
    let bestD = Infinity;
    slides.forEach((s) => {
      const r = s.getBoundingClientRect();
      const l = r.left - box.left + left;
      [l - padL, l + r.width + padR - view].forEach((x) => {
        const d = Math.abs(x - left);
        if (d < bestD) {
          bestD = d;
          best = x;
        }
      });
    });
    if (bestD > 2) el.scrollTo({ left: best, behavior: "smooth" });
  }, [recenter]);

  const queueSettle = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(settle, 140);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // start on the first slide of the middle set, and stay in the middle set across resizes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: period(), behavior: "instant" });
    const ro = new ResizeObserver(recenter);
    ro.observe(el);
    return () => ro.disconnect();
  }, [period, recenter]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    recenter();
    const slides = Array.from(el.children) as HTMLElement[];
    const box = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const left = el.scrollLeft;
    const view = el.clientWidth;
    // each slide's edges in the track's own scroll coordinates
    const edges = slides.map((s) => {
      const r = s.getBoundingClientRect();
      const l = r.left - box.left + left;
      return { l, r: l + r.width };
    });
    let target = left;
    if (dir === 1) {
      // first slide that is cut off on the right -> bring it fully into view (right edge at the right padding)
      const cut = edges.find((e) => e.r > left + view + 2);
      if (cut) target = cut.r + padR - view <= cut.l - padL ? cut.r + padR - view : cut.l - padL;
    } else {
      // last slide that is cut off on the left -> bring it fully into view (left edge at the left padding)
      const cut = [...edges].reverse().find((e) => e.l < left - 2);
      if (cut) target = cut.l - padL;
    }
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const arrow =
    "inline-flex size-44 items-center justify-center border border-[#38362e]/25 text-[#38362e] transition-colors duration-200 hover:border-[#38362e] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#38362e]/25 xl:size-[max(44px,calc(var(--spacing)*64))]";

  return (
    <div className={cn(t.inner, "border-b py-16 md:py-24 xl:pt-43 xl:pb-44")}>
      <div
        ref={trackRef}
        onScroll={queueSettle}
        onTouchStart={() => {
          touching.current = true;
        }}
        onTouchEnd={() => {
          touching.current = false;
          queueSettle();
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Collateral and events"
        className="flex gap-12 overflow-x-auto scroll-smooth px-16 [scrollbar-width:none] md:gap-16 md:px-24 xl:gap-24 xl:px-51 [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((img, i) => (
          <div
            key={i}
            // only the middle set is announced; the copies either side are for the loop
            aria-hidden={i < n || i >= 2 * n ? true : undefined}
            aria-roledescription="slide"
            aria-label={`${(i % n) + 1} of ${n}`}
            className="h-[420px] shrink-0 md:h-[460px] xl:h-691"
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
          >
            <Media media={img} sizes={img.width > img.height ? "(max-width: 1023px) 90vw, 48vw" : "(max-width: 1023px) 70vw, 29vw"} />
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 px-16 md:mt-20 md:px-24 xl:mt-28 xl:gap-12 xl:px-51">
        <button type="button" aria-label="Previous image" onClick={() => go(-1)} className={arrow}>
          <HiArrowLeft className="size-16 xl:size-[calc(var(--spacing)*22)]" />
        </button>
        <button type="button" aria-label="Next image" onClick={() => go(1)} className={arrow}>
          <HiArrowRight className="size-16 xl:size-[calc(var(--spacing)*22)]" />
        </button>
      </div>
    </div>
  );
}
