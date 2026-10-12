"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

/**
 * Looping, muted background video that only loads when it gets near the
 * viewport and only plays while it is on screen. Three autoplaying loops
 * kept decoding frames the whole time (even far off screen), which
 * competed with scrolling for the CPU / GPU.
 */
export default function LazyVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // no IntersectionObserver (very old browser) -> just play
    if (!("IntersectionObserver" in window)) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    // start fetching a little before it scrolls into view
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.src = src;
        video.load();
        loader.disconnect();
      },
      { rootMargin: "600px 0px" },
    );

    // play only while visible
    const player = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 },
    );

    loader.observe(video);
    player.observe(video);
    return () => {
      loader.disconnect();
      player.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
