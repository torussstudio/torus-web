"use client";

import { useEffect, useRef, type RefObject } from "react";
import { getResponsiveImageUrl } from "@/lib/imageLoader";

/** Warm only the current and neighbouring pages, once the book is nearby.
 * Do not compete with the route's hero by decoding the whole book on mount. */
export function useNearbyImages(
  container: RefObject<HTMLElement | null>,
  items: { src?: string }[],
  index: number,
  displayScale = 1,
) {
  const warmed = useRef(new Set<string>());

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let cancelled = false;
    const warm = async () => {
      const nearby = items.slice(Math.max(0, index - 2), index + 4);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.min(
        1920,
        Math.max(256, Math.ceil(element.clientWidth * displayScale * pixelRatio)),
      );
      // Sequential decoding avoids a burst of image work on the main thread.
      for (const item of nearby) {
        if (cancelled) break;
        if (!item.src) continue;
        const src = getResponsiveImageUrl(item.src, targetWidth);
        if (warmed.current.has(src)) continue;
        const image = new window.Image();
        image.decoding = "async";
        image.fetchPriority = "low";
        image.src = src;
        try {
          await image.decode();
          warmed.current.add(src);
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
  }, [container, items, index, displayScale]);
}
