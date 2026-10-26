
// lib/gsap.ts — core matram, ella pages-ilum venda ondu
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

  CustomEase.create("smoothReveal", "0.87,0,0.13,1");
}

gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  start: "top 85%",
});

export { gsap, ScrollTrigger, SplitText };
export default gsap;


