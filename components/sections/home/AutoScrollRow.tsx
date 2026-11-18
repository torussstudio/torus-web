"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** scroll speed in px per second at 1920 wide (scales with the screen) */
  speed?: number;
};

/**
 * Horizontal row that scrolls by itself in an endless loop.
 * - the items are rendered twice; when the first set has scrolled out,
 *   the row jumps back by one set width (looks seamless)
 * - pauses on hover / touch / drag / keyboard focus and when off screen,
 *   then resumes ~2s after the user lets go
 * - still swipeable / scrollable by hand
 * - no auto-scroll for users who prefer reduced motion
 */
export default function AutoScrollRow({ children, className, speed = 50 }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    const copy = copyRef.current;
    if (!row || !copy) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = row.scrollLeft;
    let last = 0;
    let raf = 0;
    let visible = false;
    let hovering = false;
    let userUntil = 0; // paused until this time after a manual scroll
    let half = 0;
    let scale = 1;

    // width of one set = where the copy starts, relative to the first item
    const setWidth = () => {
      const first = row.firstElementChild as HTMLElement | null;
      const copyFirst = copy.firstElementChild as HTMLElement | null;
      return first && copyFirst ? copyFirst.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;

      if (!visible || hovering || now < userUntil) {
        pos = row.scrollLeft; // follow manual scrolling while paused
        return;
      }

      if (!half) return;

      // scale with the screen, but keep phones from crawling
      pos += (speed * scale * dt) / 1000 || 0;
      if (pos >= half) pos -= half;
      row.scrollLeft = pos;
    };

    const pauseForUser = () => {
      userUntil = performance.now() + 2000;
    };
    // only a sideways wheel / trackpad swipe counts — page scrolling doesn't
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) pauseForUser();
    };
    const onEnter = () => (hovering = true);
    const onLeave = () => {
      hovering = false;
      pos = row.scrollLeft;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncLoop();
    });
    const syncLoop = () => {
      if (visible && !document.hidden && !raf) {
        last = 0;
        pos = row.scrollLeft;
        raf = requestAnimationFrame(tick);
      } else if (!visible || document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const measure = () => {
      half = setWidth();
      scale = Math.max(window.innerWidth / 1920, 0.6);
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(row);
    if (row.firstElementChild) resizeObserver.observe(row.firstElementChild);
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", syncLoop);
    measure();
    io.observe(row);

    row.addEventListener("pointerenter", onEnter);
    row.addEventListener("pointerleave", onLeave);
    row.addEventListener("pointerdown", pauseForUser);
    row.addEventListener("touchstart", pauseForUser, { passive: true });
    row.addEventListener("wheel", onWheel, { passive: true });
    row.addEventListener("focusin", onEnter);
    row.addEventListener("focusout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", syncLoop);
      row.removeEventListener("pointerenter", onEnter);
      row.removeEventListener("pointerleave", onLeave);
      row.removeEventListener("pointerdown", pauseForUser);
      row.removeEventListener("touchstart", pauseForUser);
      row.removeEventListener("wheel", onWheel);
      row.removeEventListener("focusin", onEnter);
      row.removeEventListener("focusout", onLeave);
    };
  }, [speed]);

  return (
    <div
      ref={rowRef}
      className={cn(
        "flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
      {/* second copy for the seamless loop — hidden from screen readers / tab order */}
      <div ref={copyRef} aria-hidden="true" inert className="contents">
        {children}
      </div>
    </div>
  );
}
