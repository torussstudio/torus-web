"use client";

import { useRef } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { socialss } from "@/lib/constants";
import { links } from "@/lib/constants";
import { useGsap } from "@/hooks/useGsap";
import { HiArrowTurnDownRight } from "react-icons/hi2";

// Heading split into lines here (instead of <br/>) so each line can get
// its own overflow-hidden mask wrapper.
const HEADING_LINES = [
  "A MULTIDIMENSIONAL",
  "STUDIO SHAPING BRANDS,",
  "CULTURE, AND CREATIVE",
  "EXPRESSION.",
];

export default function StudioHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(
    (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "smoothReveal" },
      });

      // 1. Heading lines mask-reveal one after another (the "premium" beat).
      tl.set(".hero-heading-line-inner", { yPercent: 120 })
        .set(".hero-image-wrap", { clipPath: "inset(100% 0% 0% 0%)" })
        .set(".hero-image-el", { scale: 1.25 })
        .set(".hero-paragraph", { y: 30, opacity: 0 })
        .set(".hero-link-row", { y: 24, opacity: 0 })
        .set(".hero-link-border", { scaleX: 0 })
        .set(".hero-social-mobile, .hero-social-desktop", {
          y: 16,
          opacity: 0,
        });

      tl.to(".hero-heading-line-inner", {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.12,
      })
        // 2. Image reveals via clip-path wipe while it settles from a slight
        // zoom — overlaps the tail end of the heading reveal.
        .to(
          ".hero-image-wrap",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=0.6",
        )
        .to(
          ".hero-image-el",
          {
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          "<",
        )

        // 3. Paragraph fades/slides up.
        .to(
          ".hero-paragraph",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=1.1",
        )

        // 4. Link rows stagger in, each with its underline drawing in sync.
        .to(
          ".hero-link-row",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.5",
        )
        .to(
          ".hero-link-border",
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "<",
        )

        // 5. Socials settle in last, on both mobile and desktop.
        .to(
          ".hero-social-mobile, .hero-social-desktop",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3",
        );
    },
    sectionRef,
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f9f8f2]"
    >
      {/* MAX-WIDTH WRAPPER */}
      <div className="hero-scale-wrap relative max-w-[1728px] mx-auto origin-center">
        {/* HERO */}
        <div
          className="
            relative
            grid
            grid-cols-1
            md:grid-cols-[0.9fr_1.1fr]
            lg:grid-cols-[0.78fr_1.22fr]
            min-h-0
            md:min-h-[650px]
            lg:min-h-[750px]
          "
        >
          {/* LEFT */}
          <div
            className="
              hero-left-content
              relative
              flex
              flex-col
              justify-center
              px-5
              sm:px-8
              md:px-10
              lg:px-20
              py-8
              sm:py-10
              md:py-12
              lg:py-16
            "
          >
            <div className="max-w-[680px] mt-0">
              {/* HEADING */}
              <h1
                className="
                  font-trial
                  origin-left
                  text-[1.25rem]
                  sm:text-[1.55rem]
                  md:text-[1.9rem]
                  lg:text-[2.6rem]
                  xl:text-[2.9rem]
                  leading-[0.98]
                  tracking-[0.01em]
                  text-[#38362e]
                  pl-[4px]
                  sm:pl-[10px]
                  md:pl-[12px]
                  lg:pl-[30px]
                  whitespace-normal
                  lg:whitespace-nowrap
                "
              >
                {HEADING_LINES.map((line, i) => (
                  <span
                    key={i}
                    className="hero-heading-line block overflow-hidden"
                  >
                    <span className="hero-heading-line-inner block">
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              {/* TEXT */}
              <p
                className="
                  hero-paragraph
                  mt-6
                  sm:mt-7
                  md:mt-8
                  lg:mt-10
                  max-w-[560px]
                  text-[15px]
                  sm:text-[16px]
                  md:text-[18px]
                  lg:text-[20px]
                  leading-[1.65]
                  md:leading-[1.7]
                  font-[400]
                  tracking-[0.01em]
                  text-[#38362e]
                  pl-[4px]
                  sm:pl-[10px]
                  md:pl-[12px]
                  lg:pl-[30px]
                  font-clash
                "
              >
                We work with businesses, founders, and institutions across
                branding, strategy, digital experiences, communication, art, and
                creative direction, bringing di erent disciplines together to
                solve complex creative problems with clarity.
              </p>

              {/* LINKS */}
              <div
                className="
                  mt-6
                  sm:mt-7
                  md:mt-8
                  lg:mt-[38px]
                  flex
                  w-full
                  lg:w-[423px]
                  flex-col
                  ml-0
                  lg:ml-[21px]
                "
              >
                {links.map((link) => (
                  <div
                    key={link.number}
                    className="
                      hero-link-row
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      md:justify-start
                      pt-[12px]
                      pb-[10px]
                      sm:pt-[14px]
                      sm:pb-[11px]
                      lg:pt-[18px]
                      lg:pb-[13px]
                      cursor-pointer
                    "
                  >
                    <span className="hero-link-border absolute bottom-0 left-0 h-px w-full origin-left bg-[#1d1d1d]" />

                    {/* LEFT SIDE */}
                    <div
                      className="
                        flex
                        items-center
                        gap-[20px]
                        sm:gap-[45px]
                        md:gap-[65px]
                        lg:gap-[170px]
                        shrink-0
                      "
                    >
                      <span
                        className="
                          hero-link-arrow
                          text-[20px]
                          sm:text-[22px]
                          md:text-[24px]
                          lg:text-[28px]
                          leading-none
                          font-light
                          text-[#181818]
                          transition-transform
                          duration-300
                          group-hover:translate-x-[4px]
                          pl-[4px]
                          sm:pl-[12px]
                          md:pl-[18px]
                          lg:pl-[50px]
                        "
                      >
                        →
                      </span>

                      <span
                        className="
                          hero-link-number
                          text-[13px]
                          sm:text-[14px]
                          md:text-[15px]
                          lg:text-[18px]
                          leading-none
                          font-nixie
                          uppercase
                          tracking-[0.12em]
                          text-[#38362e]
                          translate-x-[-5px]
                          md:translate-x-[-10px]
                          lg:translate-x-[-15px]
                        "
                      >
                        {link.number}
                      </span>
                    </div>

                    {/* RIGHT SIDE */}
                    <span
                      className="
                        hero-link-label
                        text-[13px]
                        sm:text-[14px]
                        md:text-[15px]
                        lg:text-[20px]
                        leading-none
                        font-clash
                        tracking-[0.08em]
                        text-[#38362e]
                        mr-0
                        sm:mr-[4px]
                        md:mr-[8px]
                        lg:mr-[25px]
                        text-right
                        whitespace-nowrap
                      "
                    >
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* EXPLORE THE STUDIO BUTTON */}
              <div
                className="
                  mt-6
                  sm:mt-7
                  md:mt-9
                  lg:mt-[64px]
                  pl-[4px]
                  sm:pl-[10px]
                  md:pl-[12px]
                  lg:pl-[30px]
                "
              >
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[12px]
                    sm:text-[13px]
                    md:text-[15px]
                    lg:text-[20px]
                    font-clash
                    uppercase
                    tracking-[0.1em]
                    text-[#80c46c]
                    hover:opacity-80
                    transition-opacity
                  "
                >
                  <span className="text-[16px] sm:text-[18px] lg:text-[20px] leading-none">
                    <HiArrowTurnDownRight
                      style={{
                        fontSize: "24px",
                        strokeWidth: "0.2",
                        marginBottom: "8px",
                      }}
                    />
                  </span>
                  Explore the studio
                </a>
              </div>

              {/* SOCIALS — mobile & tablet only */}
              <div
                className="
                  flex
                  lg:hidden
                  gap-5
                  sm:gap-6
                  mt-7
                  sm:mt-8
                  pl-[4px]
                  sm:pl-[8px]
                  pb-2
                "
              >
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      hero-social-mobile
                      text-[#181818]
                      hover:text-black
                      transition-colors
                    "
                  >
                    <Icon className="text-[20px] sm:text-[22px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE — mobile hidden, tablet+ visible */}
          <div
            className="
              hero-right-content
              hidden
              md:flex
              items-center
              justify-center
              gap-6
              py-8
              pr-4
              md:pr-8
              lg:pr-10
              lg:justify-end
            "
          >
            <div
              className="
                hero-image-wrap
                relative
                h-[360px]
                w-[360px]
                md:h-[400px]
                md:w-[400px]
                lg:h-[560px]
                lg:w-[560px]
                xl:h-[620px]
                xl:w-[620px]
                overflow-hidden
              "
            >
              <Image
                src="/images/heroimage.avif"
                alt="Studio Hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="hero-image-el object-cover grayscale"
              />
            </div>

            {/* SOCIALS — desktop only */}
            <div
              className="
                hidden
                lg:flex
                flex-col
                gap-6
                mt-[502px]
              "
            >
              {socialss.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    hero-social-desktop
                    text-black/35
                    hover:text-black
                    transition-colors
                  "
                >
                  <Icon className="text-[22px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="w-full h-px bg-[#1d1d1d]" />
    </section>
  );
}