// hooks/useGsap.ts

import {
  DependencyList,
  RefObject,
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger register cheyyunnu (already lib/gsap.ts-il cheythittundenkil
// ith safe aayi skip aavum, gsap duplicate register handle cheyyum)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Scope = RefObject<HTMLElement | null>;

export function useGsap(
  callback: (
    gsap: typeof import("gsap").gsap
  ) => void,
  scope?: Scope,
  deps: DependencyList = []
) {
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      // Refresh ScrollTrigger-inte measurements next paint-inu shesham
      requestAnimationFrame(() => {
        callback(gsap);
      });
    }, scope);

    return () => {
      ctx.current?.revert();
    };
  }, deps);
}