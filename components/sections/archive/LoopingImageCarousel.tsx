"use client";

import { useCallback, useEffect, useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

const COPIES = 3;

export default function LoopingImageCarousel({ items }: { items: (ArchiveMedia & { width: number; height: number })[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const touching = useRef(false);
  const n = items.length;
  const loop = Array.from({ length: COPIES }, () => items).flat();

  const period = useCallback(() => {
    const el = trackRef.current;
    if (!el || !n) return 0;
    const slides = el.children as HTMLCollectionOf<HTMLElement>;
    return slides[n].offsetLeft - slides[0].offsetLeft;
  }, [n]);

  const recenter = useCallback(() => {
    const el = trackRef.current;
    const p = period();
    if (!el || !p) return;
    if (el.scrollLeft < p * 0.5) el.scrollTo({ left: el.scrollLeft + p, behavior: "instant" });
    else if (el.scrollLeft >= p * 1.5) el.scrollTo({ left: el.scrollLeft - p, behavior: "instant" });
  }, [period]);

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
    let bestDistance = Infinity;
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideLeft = rect.left - box.left + left;
      [slideLeft - padL, slideLeft + rect.width + padR - view].forEach((candidate) => {
        const distance = Math.abs(candidate - left);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = candidate;
        }
      });
    });
    if (bestDistance > 2) el.scrollTo({ left: best, behavior: "smooth" });
  }, [recenter]);

  const queueSettle = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(settle, 140);
  }, [settle]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: period(), behavior: "instant" });
    const observer = new ResizeObserver(recenter);
    observer.observe(el);
    return () => observer.disconnect();
  }, [period, recenter]);

  const go = (direction: 1 | -1) => {
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
    const edges = slides.map((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideLeft = rect.left - box.left + left;
      return { left: slideLeft, right: slideLeft + rect.width };
    });
    let target = left;
    if (direction === 1) {
      const cut = edges.find((edge) => edge.right > left + view + 2);
      if (cut) target = cut.right + padR - view <= cut.left - padL ? cut.right + padR - view : cut.left - padL;
    } else {
      const cut = [...edges].reverse().find((edge) => edge.left < left - 2);
      if (cut) target = cut.left - padL;
    }
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const arrow =
    "inline-flex size-44 items-center justify-center border border-[#38362e]/25 text-[#38362e] transition-colors duration-200 hover:border-[#38362e] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#38362e]/25 xl:size-[max(44px,calc(var(--spacing)*64))]";

  if (!n) return null;

  return (
    <div className={cn(t.inner, "py-12 md:py-16 xl:py-24")}>
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
        aria-label="TSA freshness and product images"
        className="flex gap-12 overflow-x-auto scroll-smooth px-16 [scrollbar-width:none] md:gap-16 md:px-24 xl:gap-24 xl:px-51 [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((image, index) => (
          <div
            key={`${index}-${image.src}`}
            aria-hidden={index < n || index >= 2 * n ? true : undefined}
            aria-roledescription="slide"
            aria-label={`${(index % n) + 1} of ${n}`}
            className="h-[420px] shrink-0 md:h-[460px] xl:h-[691px]"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Media
              media={image}
              fit="cover"
              position="top"
              className="bg-[var(--page-paper)]"
              sizes="(max-width: 767px) 85vw, (max-width: 1279px) 363px, 545px"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-8 px-16 md:mt-16 md:px-24 xl:mt-20 xl:gap-12 xl:px-51">
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
