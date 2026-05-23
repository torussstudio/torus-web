// hooks/useGsap.ts

import {
  DependencyList,
  RefObject,
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "@/lib/gsap";

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
      callback(gsap);
    }, scope);

    return () => {
      ctx.current?.revert();
    };
  }, deps);
}