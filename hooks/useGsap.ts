// hooks/useGsap.ts

import {
  DependencyList,
  RefObject,
  useLayoutEffect,
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
  ) => void | (() => void),
  scope?: Scope,
  deps: DependencyList = []
) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, scope);
    // Re-enter the context in the deferred callback: otherwise GSAP cannot
    // collect its animations/ScrollTriggers for cleanup on navigation.
    const frame = requestAnimationFrame(() => {
      ctx.add(() => callback(gsap));
    });

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, deps);
}
