"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { number: "01", label: "CREATIVE" },
  { number: "02", label: "EDITIONS" },
  { number: "03", label: "COHORT" },
];

const socials = [
  FaInstagram,
  FaPinterest,
  FaTwitter,
];

export default function StudioHero() {
  return (
    <section className="relative h-auto lg:h-[750px] w-full overflow-hidden bg-[#e7e5e1]">
      {/* HERO */}
      <div
        className="
          relative
          grid
          grid-cols-1
          lg:grid-cols-[0.78fr_1.22fr]
          min-h-0
          lg:min-h-screen
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
          {/* Vertical Label — desktop only, untouched */}
          <div
            className="
              hidden
              lg:flex
              absolute
              left-8
              top-[20%]
              -translate-y-1/2
              flex-col
              items-center
            "
          >
            <div className="h-6 w-px bg-black/30 mb-4 ml-[5px] -mt-16" />
            <span
              className="
                font-think
                text-[16px]
                uppercase
                tracking-[0.18em]
                text-black/50
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

          <div className="max-w-[980px] mt-0 lg:mt-[-85px]">

            {/* HEADING */}
            <h1
              className="
                font-display
                origin-left
                text-[1.65rem]
                sm:text-[2rem]
                md:text-[2.7rem]
                lg:text-[3rem]
                xl:text-[3.3rem]
                leading-[0.99]
                tracking-[0.03em]
                text-black
                pl-[15px]
                sm:pl-[22px]
                lg:pl-[30px]
                whitespace-normal
                lg:whitespace-nowrap
              "
            >
              A MULTIDIMENSIONAL
              <br />
              STUDIO SHAPING BRANDS,
              <br />
              CULTURE, AND CREATIVE
              <br />
              EXPRESSION.
            </h1>

            {/* TEXT */}
            <p
              className="
                mt-8
                lg:mt-10
                max-w-[480px]
                text-[15px]
                md:text-[17px]
                leading-[1.7]
                font-[400]
                tracking-[0.01em]
                text-black/50
                pl-[15px]
                sm:pl-[22px]
                lg:pl-[30px]
                font-rethink
              "
            >
              Toruss works across branding, identity systems, digital
              experiences, objects, artistic explorations, and collective
              initiatives, building ideas that are clear, enduring, and deeply
              considered.
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
                    group
                    flex
                    items-center
                    justify-start
                    border-b
                    border-[#1d1d1d]
                    pt-[14px]
                    pb-[11px]
                    lg:pt-[18px]
                    lg:pb-[13px]
                    cursor-pointer
                  "
                >
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-[90px] sm:gap-[130px] lg:gap-[170px]">
                    <span
                      className="
                        text-[22px]
                        lg:text-[28px]
                        leading-none
                        font-light
                        text-[#1d1d1d]
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
                        text-[14px]
                        lg:text-[18px]
                        leading-none
                        font-think
                        uppercase
                        tracking-[0.12em]
                        text-[#80AD76]
                        translate-x-[-15px]
                      "
                    >
                      {link.number}
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <span
                    className="
                      text-[14px]
                      lg:text-[18px]
                      leading-none
                      font-think
                      uppercase
                      tracking-[0.08em]
                      text-[#80AD76]
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
                pl-[15px]
                sm:pl-[22px]
                pb-2
              "
            >
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-black/35 hover:text-black transition-colors"
                >
                  <Icon className="text-[22px]" />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE — hidden on mobile, visible tablet+, desktop untouched */}
        <div
          className="
            hidden
            md:flex
            items-center
            justify-center
            py-8
            pr-8
            mb-0
            translate-x-0
            lg:justify-end
            lg:py-16
            lg:pr-20
            lg:mb-[80px]
            lg:-translate-x-[10px]
          "
        >
          <div
            className="
              relative
              h-[360px]
              w-[360px]
              md:h-[400px]
              md:w-[400px]
              lg:h-[620px]
              lg:w-[620px]
              overflow-hidden
            "
          >
            <Image
              src="/trust-hero.jpg"
              alt="Studio Hero"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* SOCIALS — desktop only, completely untouched */}
        <div
          className="
            hidden
            lg:flex
            absolute
            right-10
            top-150
            -translate-y-1/2
            flex-col
            gap-6
          "
        >
          {socials.map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="
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
    </section>
  );
}