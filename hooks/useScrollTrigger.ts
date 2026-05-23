// hooks/useScrollTrigger.ts

import {
  DependencyList,
  RefObject,
  useLayoutEffect,
  useRef,
} from "react";

import {
  gsap,
  ScrollTrigger,
} from "@/lib/gsap";

type Scope = RefObject<HTMLElement | null>;

export function useScrollTrigger(
  callback: (
    gsap: typeof import("gsap").gsap,
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger
  ) => void,
  scope?: Scope,
  deps: DependencyList = []
) {
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, scope);

    return () => {
      ctx.current?.revert();
    };
  }, deps);
}