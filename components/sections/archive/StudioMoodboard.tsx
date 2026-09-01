"use client";

import { useRef } from "react";
import Image from "next/image";
import { images } from "@/lib/constants";
import { mobileAspects } from "@/lib/constants";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function StudioMoodboard() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopImgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileImgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const validDesktop = desktopImgRefs.current.filter(Boolean);
      const validMobile = mobileImgRefs.current.filter(Boolean);

      if (validDesktop.length) {
        gsap.fromTo(
          validDesktop,
          { autoAlpha: 0, y: 30, scale: 1.04 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: validDesktop[0],
            },
          }
        );
      }

      if (validMobile.length) {
        gsap.fromTo(
          validMobile,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: validMobile[0],
            },
          }
        );
      }
    },
    sectionRef
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div
        className="
          w-full
          px-[18px]
          max-[390px]:px-[16px]
          sm:px-[28px]
          md:px-[40px]
          lg:px-10
          xl:px-14
          pt-10
          sm:pt-14
          lg:pt-16
          pb-0
        "
      >
        {/* DESKTOP / TABLET */}
        {/* Left border acts as the vertical divider seen in the reference layout */}
        <div
  className="
    hidden
    sm:block
    relative
    w-full
    aspect-[673/1400]
    border-[#dedcdc]
  "
>
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                desktopImgRefs.current[i] = el;
              }}
              className={`
                absolute
                overflow-hidden
                bg-[#dedcdc]
                ${img.className}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 40vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div
          className="
            flex
            sm:hidden
            flex-col
            items-center
            gap-[16px]
            w-full
            pb-8
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                mobileImgRefs.current[i] = el;
              }}
              className={`
                relative
                w-full
                max-w-[520px]
                overflow-hidden
                bg-[#dedcdc]
                ${mobileAspects[i]}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="calc(100vw - 32px)"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}