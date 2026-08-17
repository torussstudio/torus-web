"use client";

import { useRef } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { socialss } from "@/lib/constants";
import { links } from "@/lib/constants";
import { useGsap } from "@/hooks/useGsap";

// Heading split into lines here (instead of <br/>) so each line can get
// its own overflow-hidden mask wrapper for the reveal animation.
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

      // 1. Vertical "STUDIO" label — line draws + text fades
      tl.from(".hero-label-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.6,
      }).from(
        ".hero-label-text",
        { opacity: 0, y: 12, duration: 0.6 },
        "<0.1"
      );

      // 2. Heading — each line masked, slides up from below its own wrapper
      tl.from(
        ".hero-heading-line-inner",
        {
          yPercent: 115,
          rotateZ: 3,
          duration: 1,
          stagger: 0.08,
        },
        "<"
      );

      // 3. Paragraph — simple fade + rise
      tl.from(
        ".hero-paragraph",
        { opacity: 0, y: 24, duration: 0.9 },
        "-=0.5"
      );

      // 4. Links list — border draws left-to-right, arrow + label fade in, staggered
      tl.from(
        ".hero-link-border",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.7,
          stagger: 0.12,
        },
        "-=0.4"
      ).from(
        ".hero-link-arrow, .hero-link-number, .hero-link-label",
        {
          opacity: 0,
          x: -12,
          duration: 0.6,
          stagger: 0.12,
        },
        "<0.1"
      );

      // 5. Socials (mobile row) — simple fade
      tl.from(
        ".hero-social-mobile",
        { opacity: 0, y: 10, duration: 0.6, stagger: 0.05 },
        "-=0.5"
      );

      // 6. Image — clip-path reveal + slight scale settle, grayscale stays as-is
      tl.from(
        ".hero-image-wrap",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.1,
          ease: "power4.inOut",
        },
        "-=1.1"
      ).from(
        ".hero-image-el",
        { scale: 1.15, duration: 1.3, ease: "power3.out" },
        "<"
      );

      // 7. Desktop socials column — fade in last
      tl.from(
        ".hero-social-desktop",
        { opacity: 0, y: 10, duration: 0.6, stagger: 0.05 },
        "-=0.8"
      );
    },
    sectionRef,
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#e7e5e1]"
    >
      {/* MAX-WIDTH WRAPPER — ithu illathirunnu 1920px+ screens-il content stretch aayi
          random gaps undakiyathu. Ippo content oru upper limit-il centered aayi nilkkum. */}
      <div className="relative max-w-[1728px] mx-auto">
        {/* HERO */}
        <div
          className="
            relative
            grid
            grid-cols-1
            lg:grid-cols-[0.78fr_1.22fr]
            min-h-0
            lg:min-h-[750px]
          "
        >
          {/* LEFT */}
          <div
            className="
              relative
              flex
              flex-col
              justify-center
              px-8
              md:px-16
              lg:px-20
              py-10
              lg:py-16
            "
          >
            {/* Vertical Label — desktop only. */}
            <div
              className="
                hidden
                lg:flex
                absolute
                left-8
                top-1/2
                -translate-y-[170px]
                flex-col
                items-center
              "
            >
              <div className="hero-label-line h-6 w-px bg-black/30 mb-4 ml-[5px]" />
              <span
                className="
                  hero-label-text
                  font-nixie
                  text-[16px]
                  uppercase
                  tracking-[0.18em]
                  text-[#181818]
                  ml-[5px]
                "
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(360deg)",
                }}
              >
                STUDIO
              </span>
            </div>

            <div className="max-w-[680px] mt-0">
              {/* HEADING — each line wrapped for mask reveal */}
              <h1
                className="
                  font-nova
                  origin-left
                  text-[1.45rem]
                  sm:text-[1.75rem]
                  md:text-[2.3rem]
                  lg:text-[2.6rem]
                  xl:text-[2.9rem]
                  leading-[0.98]
                  tracking-[0.01em]
                  text-[#181818]
                  pl-[15px]
                  sm:pl-[22px]
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
                  mt-8
                  lg:mt-10
                  max-w-[480px]
                  text-[16px]
                  md:text-[18px]
                  leading-[1.7]
                  font-[400]
                  tracking-[0.01em]
                  text-[#181818]
                  pl-[15px]
                  sm:pl-[22px]
                  lg:pl-[30px]
                  font-nixie
                "
              >
                Toruss works across branding, identity systems, digital
                experiences, objects, artistic explorations, and collective
                initiatives, building ideas that are clear, enduring, and
                deeply considered.
              </p>

              {/* LINKS */}
              <div
                className="
                  mt-[28px]
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
                      justify-start
                      pt-[14px]
                      pb-[11px]
                      lg:pt-[18px]
                      lg:pb-[13px]
                      cursor-pointer
                    "
                  >
                    {/* animated border instead of the static border-b */}
                    <span className="hero-link-border absolute bottom-0 left-0 h-px w-full bg-[#1d1d1d]" />

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-[90px] sm:gap-[130px] lg:gap-[170px]">
                      <span
                        className="
                          hero-link-arrow
                          text-[22px]
                          lg:text-[28px]
                          leading-none
                          font-light
                          text-[#181818]
                          transition-transform
                          duration-300
                          group-hover:translate-x-[4px]
                          pl-[18px]
                          sm:pl-[32px]
                          lg:pl-[50px]
                        "
                      >
                        →
                      </span>

                      <span
                        className="
                          hero-link-number
                          text-[15px]
                          lg:text-[18px]
                          leading-none
                          font-nixie
                          uppercase
                          tracking-[0.12em]
                          text-[#80c46c]
                          translate-x-[-15px]
                        "
                      >
                        {link.number}
                      </span>
                    </div>

                    {/* RIGHT SIDE */}
                    <span
                      className="
                        hero-link-label
                        text-[15px]
                        lg:text-[19px]
                        leading-none
                        font-nixie
                        uppercase
                        tracking-[0.08em]
                        text-[#80c46c]
                        mr-[12px]
                        lg:mr-[25px]
                      "
                    >
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* SOCIALS — mobile & tablet only */}
              <div
                className="
                  flex
                  lg:hidden
                  gap-6
                  mt-8
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
                    <Icon className="text-[22px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE — hidden on mobile, visible tablet+. */}
          <div
            className="
              hidden
              md:flex
              items-center
              justify-center
              gap-6
              py-8
              pr-8
              md:pr-16
              lg:pr-24
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

            {/* SOCIALS — desktop only. */}
            <div
              className="
                hidden
                lg:flex
                flex-col
                gap-6
                mt-[62px]
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
    </section>
  );
}