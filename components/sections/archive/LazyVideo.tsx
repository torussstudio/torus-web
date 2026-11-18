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

    let visible = false;
    let loaded = false;
    const syncPlayback = () => {
      if (visible && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };
    const load = () => {
      if (loaded) return;
      loaded = true;
      if (poster) video.poster = poster;
      video.preload = "auto";
      video.src = src;
      video.load();
    };
    const cleanup = () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      video.removeEventListener("canplay", syncPlayback);
      video.pause();
      video.removeAttribute("src");
      video.removeAttribute("poster");
      video.load();
    };
    document.addEventListener("visibilitychange", syncPlayback);
    video.addEventListener("canplay", syncPlayback);

    if (!("IntersectionObserver" in window)) {
      visible = true;
      load();
      syncPlayback();
      return cleanup;
    }

    // start fetching a little before it scrolls into view
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        load();
        loader.disconnect();
      },
      { rootMargin: "600px 0px" },
    );

    // play only while visible
    const player = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) load();
        syncPlayback();
      },
      { threshold: 0.05 },
    );

    loader.observe(video);
    player.observe(video);
    return () => {
      loader.disconnect();
      player.disconnect();
      cleanup();
    };
  }, [src, poster]);

  return (
    <video
      ref={ref}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
