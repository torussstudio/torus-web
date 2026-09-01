"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LivingBrandEcosystem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const para1Ref = useRef<HTMLParagraphElement | null>(null);
  const para2Ref = useRef<HTMLParagraphElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2WrapRef = useRef<HTMLDivElement | null>(null);
  const img2InnerRef = useRef<HTMLDivElement | null>(null);
  const captionRef = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);
  const img4Ref = useRef<HTMLDivElement | null>(null);
  const img5Ref = useRef<HTMLDivElement | null>(null);
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);

  useGsap((gsap) => {
    // PARAGRAPH 1 — heavy rise
    gsap.fromTo(
      para1Ref.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: para1Ref.current, start: "top 90%" },
      }
    );

    // PARAGRAPH 2 — delayed heavy rise with slight rotation settle
    gsap.fromTo(
      para2Ref.current,
      { y: 80, opacity: 0, rotate: -1.5, transformOrigin: "left top" },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: para2Ref.current, start: "top 88%" },
      }
    );

    // DESKTOP SCATTERED GALLERY — each tile pops in with its own delay/direction
    gsap.fromTo(
      img1Ref.current,
      { yPercent: 20, opacity: 0, scale: 1.2 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      img2WrapRef.current,
      { yPercent: 30, opacity: 0, scale: 1.2, rotate: -3 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.12,
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      }
    );
    gsap.fromTo(
      captionRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: { trigger: galleryRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      img3Ref.current,
      { yPercent: -25, opacity: 0, scale: 1.2 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.24,
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      img4Ref.current,
      { yPercent: 25, opacity: 0, scale: 1.2, rotate: 3 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.36,
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      img5Ref.current,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 0.48,
        scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
      }
    );

    // Subtle parallax drift for the whole gallery on scroll
    gsap.to(galleryRef.current, {
      yPercent: -4,
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // MOBILE STACKED COLUMN — staggered heavy rise
    gsap.fromTo(
      mobileWrapRef.current?.children ?? [],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: mobileWrapRef.current, start: "top 90%" },
      }
    );

    ScrollTrigger.refresh();
  }, sectionRef);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full overflow-x-hidden overflow-y-visible bg-white"
    >
      <div className="relative w-full px-[16px] sm:px-[28px] md:px-[40px] lg:px-10 xl:px-14 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        {/* PARAGRAPH 1 */}
        <p
          ref={para1Ref}
          className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[400px]"
        >
          The work has also continued beyond the initial launch system. As the
          brand grows, we continue to support TSA across content, campaigns,
          digital communication, lead-generation, and new customer experiences,
          strengthening the brand&apos;s presence across different touchpoints.
        </p>

        {/* PARAGRAPH 2 — offset right */}
        <p
          ref={para2Ref}
          className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[400px] mt-16 sm:mt-20 lg:mt-24 lg:ml-[54%] xl:ml-[52%]"
        >
          What has been built so far is a living brand ecosystem; it is a
          foundation that keeps expanding with the brand, shaped by new ideas,
          market responses, and the opportunities that continue to emerge.
        </p>

        {/* ============ DESKTOP/TABLET — scattered gallery ============ */}
        <div
          ref={galleryRef}
          className="hidden sm:block relative w-full mt-16 sm:mt-20 lg:mt-24 aspect-[814/340] mb-24 sm:mb-28 lg:mb-32"
        >
          <div
            ref={img1Ref}
            className="absolute left-[-16px] sm:left-[-28px] md:left-[-40px] lg:left-[-40px] xl:left-[-56px] top-[38%] w-[16%] aspect-[134/166] overflow-hidden bg-[#1a1a1a]"
          >
            <Image
              src="/images/collage-1.jpg"
              alt="Hand sketching on paper"
              fill
              sizes="16vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-[20.5%] top-[65%] w-[13.6%] aspect-[112/122]">
            <div
              ref={img2WrapRef}
              className="w-full h-full overflow-hidden bg-[#dedcdc]"
            >
              <div ref={img2InnerRef} className="relative w-full h-full">
                <Image
                  src="/images/collage-2.jpg"
                  alt="Hand placing orange tape on a wall"
                  fill
                  sizes="14vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              ref={captionRef}
              className="absolute top-full left-full mt-4 w-[240%] z-10"
            >
              <p className="font-nixie text-[16px] text-[#181818] tracking-wide">
                Fig 01
              </p>
              <p className="font-nixie text-[16px] leading-[1.6] text-[#181818] mt-1">
                Most decisions happen through conversation.
              </p>
            </div>
          </div>

          <div
            ref={img3Ref}
            className="absolute left-[42.6%] top-[19%] w-[12.7%] aspect-[103/126] overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/collage-3.jpg"
              alt="People sitting outdoors near a cafe"
              fill
              sizes="13vw"
              className="object-cover"
            />
          </div>

          <div
            ref={img4Ref}
            className="absolute left-[65.3%] top-[38.5%] w-[18%] aspect-[147/196] overflow-hidden bg-[#dedcdc]"
          >
            <Image
              src="/images/collage-4.jpg"
              alt="Group of people sitting on a sunlit floor"
              fill
              sizes="18vw"
              className="object-cover"
            />
          </div>

          <div
            ref={img5Ref}
            className="
              absolute top-[22%] left-[92.5%] bottom-[45%]
              overflow-hidden bg-[#dedcdc]
              right-[calc(-16px-((100vw-min(100vw,1728px))/2))]
              md:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              lg:right-[calc(-40px-((100vw-min(100vw,1728px))/2))]
              xl:right-[calc(-56px-((100vw-min(100vw,1728px))/2))]
            "
          >
            <Image
              src="/images/collage-5.jpg"
              alt="People playing sports on a court"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ============ MOBILE — simple stacked column ============ */}
        <div ref={mobileWrapRef} className="flex sm:hidden flex-col gap-4 mt-12">
          {[
            { src: "/images/collage-1.jpg", alt: "Hand sketching on paper" },
            {
              src: "/images/collage-2.jpg",
              alt: "Hand placing orange tape on a wall",
            },
            {
              src: "/images/collage-3.jpg",
              alt: "People sitting outdoors near a cafe",
            },
            {
              src: "/images/collage-4.jpg",
              alt: "Group of people sitting on a sunlit floor",
            },
            {
              src: "/images/collage-5.jpg",
              alt: "People playing sports on a court",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[220px] overflow-hidden bg-[#dedcdc]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          <div>
            <p className="font-nixie text-[11px] text-[#181818] tracking-wide">
              Fig 01
            </p>
            <p className="font-nixie text-[12px] leading-[1.6] text-[#181818] mt-1">
              Most decisions happen through conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}