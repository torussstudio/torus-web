import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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