// lib/gsap.ts

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    CustomEase
  );

  CustomEase.create(
    "smoothReveal",
    "0.87,0,0.13,1"
  );
}

gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  start: "top 85%",
});

export { gsap, ScrollTrigger };

export default gsap;