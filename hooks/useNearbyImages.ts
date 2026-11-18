"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Warm only the current and neighbouring pages, once the book is nearby.
 * Do not compete with the route's hero by decoding the whole book on mount. */
export function useNearbyImages(
  container: RefObject<HTMLElement | null>,
  items: { src?: string }[],
  index: number,
) {
  const warmed = useRef(new Set<string>());

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let cancelled = false;
    const warm = async () => {
      const nearby = items.slice(Math.max(0, index - 2), index + 4);
      // Sequential decoding avoids a burst of image work on the main thread.
      for (const item of nearby) {
        if (cancelled) break;
        if (!item.src || warmed.current.has(item.src)) continue;
        const image = new window.Image();
        image.decoding = "async";
        image.fetchPriority = "low";
        image.src = item.src;
        try {
          await image.decode();
          warmed.current.add(item.src);
        } catch { /* The visible page can retry a failed image request. */ }
      }
    };
    if (!("IntersectionObserver" in window)) {
      void warm();
      return () => { cancelled = true; };
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      void warm();
    }, { rootMargin: "600px 0px" });
    observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [container, items, index]);
}
