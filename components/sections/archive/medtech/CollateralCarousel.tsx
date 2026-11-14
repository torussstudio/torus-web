"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
 */
export default function CollateralCarousel({ items }: { items: CarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft - slides[0].offsetLeft - left);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setIndex(nearest);
    setEdge({ start: left <= 2, end: left >= el.scrollWidth - el.clientWidth - 2 });
  }, []);

  // Free scrolling (no CSS snap: with mixed widths the browser's snap points were unreliable). When the
  // scroll comes to rest, ease to the nearest position that shows an image in full: left edge at the
  // left gap, or right edge at the right gap.
  const timer = useRef<number | undefined>(undefined);
  const touching = useRef(false);

  const settle = useCallback(() => {
    const el = trackRef.current;
    if (!el || touching.current) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const box = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const left = el.scrollLeft;
    const view = el.clientWidth;
    const max = el.scrollWidth - view;
    let best = left;
    let bestD = Infinity;
    slides.forEach((s) => {
      const r = s.getBoundingClientRect();
      const l = r.left - box.left + left;
      [l - padL, l + r.width + padR - view].forEach((c) => {
        const x = Math.min(max, Math.max(0, c));
        const d = Math.abs(x - left);
        if (d < bestD) {
          bestD = d;
          best = x;
        }
      });
    });
    if (bestD > 2) el.scrollTo({ left: best, behavior: "smooth" });
  }, []);

  const queueSettle = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(settle, 140);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const box = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const left = el.scrollLeft;
    const view = el.clientWidth;
    const max = el.scrollWidth - view;
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
      else target = max;
    } else {
      // last slide that is cut off on the left -> bring it fully into view (left edge at the left padding)
      const cut = [...edges].reverse().find((e) => e.l < left - 2);
      target = cut ? cut.l - padL : 0;
    }
    el.scrollTo({ left: Math.min(max, Math.max(0, target)), behavior: "smooth" });
  };

  const arrow =
    "inline-flex size-44 items-center justify-center border border-[#38362e]/25 text-[#38362e] transition-colors duration-200 hover:border-[#38362e] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#38362e]/25 xl:size-[max(44px,calc(var(--spacing)*64))]";

  return (
    <div className={cn(t.inner, "border-b py-16 md:py-24 xl:pt-43 xl:pb-44")}>
      <div
        ref={trackRef}
        onScroll={() => {
          measure();
          queueSettle();
        }}
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
        {items.map((img, i) => (
          <div
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="h-[420px] shrink-0 md:h-[460px] xl:h-691"
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
          >
            <Media media={img} sizes={img.width > img.height ? "(max-width: 1023px) 90vw, 48vw" : "(max-width: 1023px) 70vw, 29vw"} />
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 px-16 md:mt-20 md:px-24 xl:mt-28 xl:gap-12 xl:px-51">
        <button type="button" aria-label="Previous image" disabled={edge.start} onClick={() => go(-1)} className={arrow}>
          <HiArrowLeft className="size-16 xl:size-[calc(var(--spacing)*22)]" />
        </button>
        <button type="button" aria-label="Next image" disabled={edge.end} onClick={() => go(1)} className={arrow}>
          <HiArrowRight className="size-16 xl:size-[calc(var(--spacing)*22)]" />
        </button>
      </div>
    </div>
  );
}
