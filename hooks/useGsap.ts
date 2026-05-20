import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useGsap(
  callback: (gsap: typeof import("gsap").gsap) => void,
  deps: React.DependencyList = []
) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(gsap);
    });

    return () => {
      ctx.current?.revert();
    };
  }, deps);
}