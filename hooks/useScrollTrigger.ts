import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useScrollTrigger(
  callback: (ST: typeof ScrollTrigger) => void,
  deps: React.DependencyList = []
) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(ScrollTrigger);
    });

    return () => {
      ctx.current?.revert();
    };
  }, deps);
}