"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function TSABrandMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      tl.fromTo(
        bgImageRef.current,
        { autoAlpha: 0, scale: 1.08 },
        { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          cardRef.current,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          logoRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          descRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.25"
        );
    },
    sectionRef
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div
        className="
          w-full
          px-[16px]
          sm:px-[28px]
          md:px-[40px]
          lg:px-10
          xl:px-14
          pt-0
          pb-12
          sm:pb-16
          lg:pb-20
        "
      >
        {/* IMAGE + OVERLAY CARD */}
        <div
          ref={bgImageRef}
          className="
            relative
            w-full
            h-[420px]
            sm:h-[560px]
            lg:h-[640px]
            xl:h-[720px]
            overflow-hidden
            bg-[#dedcdc]
          "
        >
          <Image
            src="/images/spanish-alchemist-main.jpg"
            alt="People gathered in a warmly lit lounge space"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            ref={cardRef}
            className="
              absolute
              bottom-[14px]
              left-[14px]
              right-[14px]
              w-auto
              h-[250px]
              max-[390px]:bottom-[10px]
              max-[390px]:left-[10px]
              max-[390px]:right-[10px]
              max-[390px]:h-[245px]
              sm:bottom-10
              sm:right-10
              sm:left-auto
              sm:w-[68%]
              sm:h-[360px]
              lg:bottom-12
              lg:right-12
              lg:w-[54%]
              xl:w-[52%]
              lg:h-[400px]
              bg-[#EAE9E9]/90
              backdrop-blur-sm
              px-[18px]
              py-[20px]
              sm:px-10
              sm:py-10
              lg:px-12
              lg:py-12
              flex
              flex-col
              justify-end
              overflow-hidden
            "
          >
            {/* TSA LOGO */}
            <div
              ref={logoRef}
              className="
                relative
                w-full
                h-[42px]
                mb-[12px]
                max-[390px]:h-[38px]
                max-[390px]:mb-[10px]
                sm:ml-6
                sm:h-auto
                sm:w-auto
                sm:mb-0
              "
            >
              <div
                className="
                  absolute
                  left-0
                  bottom-0
                  sm:-top-1
                  sm:left-4
                "
              >
                <Image
                  src="/images/tsa.png"
                  alt="TSA signature logo"
                  width={500}
                  height={140}
                  className="
                    w-[105px]
                    max-[390px]:w-[95px]
                    sm:w-[130px]
                    lg:w-[145px]
                    h-auto
                    object-contain
                  "
                />
              </div>

              <div
                className="
                  hidden
                  sm:block
                  w-[130px]
                  lg:w-[145px]
                  aspect-[500/140]
                  invisible
                "
              />
            </div>

            {/* DESCRIPTION */}
            <p
              ref={descRef}
              className="
                font-nixie
                text-[11.5px]
                leading-[1.65]
                text-[#6b6b6b]
                mt-0
                ml-0
                max-w-full
                max-[390px]:text-[11px]
                max-[390px]:leading-[1.6]
                sm:text-[14px]
                sm:leading-[1.8]
                sm:mt-7
                sm:ml-40
                sm:max-w-[320px]
                lg:text-[14px]
                lg:ml-24
                lg:max-w-[320px]
              "
            >
              Instead of creating a purely corporate skincare logo, we
              developed a handcrafted signature-style mark. It gave the
              brand the feeling of a real presence behind the product, the
              Alchemist, someone involved in the making, testing, and care
              behind each formulation. This thinking extended into the
              packaging language as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}