"use client";

import Image from "next/image";
import { HiArrowRight, HiArrowTurnDownRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e9e8e6] border-t border-black/40">
      {/* TOP GRID */}
      <div className="grid grid-cols-[96px_1fr] border-b border-black/40">
        {/* LEFT VERTICAL */}
        <div className="border-r border-black/40 flex items-center justify-center">
          <span
            className="
              text-[28px]
              tracking-[0.22em]
              uppercase
              text-black/40
              font-think
              font-normal
            "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Get In Touch
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HERO AREA */}
          <div className="grid grid-cols-[0.78fr_1.22fr] border-b border-black/40">
            {/* IMAGE */}
            <div className="relative h-[420px] border-r border-black/40">
              <Image
                src="/footer-phone.jpg"
                alt="Footer"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* TEXT */}
            <div className="px-[42px] pt-[120px]">
              <h2
                className="
                  text-[60px]
                  leading-[0.92]
                  tracking-[-0.03em]
                  uppercase
                  text-[#111]
                  font-display
                "
              >
                LET'S SHAPE WHAT'S NEXT.
              </h2>

              <p
                className="
                  mt-[34px]
                  max-w-[520px]
                  text-[17px]
                  leading-[1.25]
                  text-black/60
                  font-rethink
                "
              >
                If you're building, rethinking, or evolving something
                meaningful, we'd love to understand where you are headed. No
                pitch. No rush. Just a light conversation to begin with.
              </p>
            </div>
          </div>

          {/* SOCIAL ROW */}
          <div className="grid grid-cols-[1fr_620px]">
            {/* SOCIALS */}
            <div
              className="
                h-[104px]
                border-r
                border-black/40
                flex
                items-center
                px-[72px]
              "
            >
              <div className="flex items-center gap-[72px]">
                {["INSTAGRAM", "BEHANCE", "LINKEDIN", "PINTEREST"].map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        text-[20px]
                        tracking-[0.18em]
                        uppercase
                        text-black/45
                        font-think
                        cursor-pointer
                        hover:text-black
                        transition-colors
                      "
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                h-[104px]
                flex
                items-center
                justify-center
              "
            >
              <button
                className="
    group
    flex
    items-center
    gap-2
    hover:gap-4
    transition-all
    duration-300
    text-[#8BAF72]
    mr-[55px]
    cursor-pointer
  "
              >
                <HiArrowTurnDownRight
                  className="
    text-[24px]
    stroke-[0.2]
    mb-[8px]
    transition-transform
    duration-300
    group-hover:translate-x-[4px]
  "
                />

                <span
                  className="
                    text-[20px]
                    tracking-[0.04em]
                    uppercase
                    font-rethink
                  "
                >
                  Start A Conversation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="grid grid-cols-2 border-b border-black/40">
        {/* LEFT */}
        <div className="px-[94px] py-[54px]">
          <div
            className="
              flex
              items-center
              gap-[48px]
              text-[20px]
              tracking-[0.16em]
              uppercase
              text-black/80
              font-think
            "
          >
            <span>10°46'41.5"N</span>

            <span className="text-black/40">|</span>

            <span>76°39'22.0"E</span>
          </div>

          <h1
            className="
              mt-[32px]
              text-[100px]
              leading-none
              tracking-[0.08em]
              uppercase
              text-black/10
              font-display
              whitespace-nowrap
            "
          >
            TORUSS STUDIO
          </h1>
        </div>

        {/* RIGHT */}
        <div
          className="
            px-[90px]
            py-[54px]
            flex
            flex-col
            gap-[38px]
            ml-[160px]
          "
        >
          <span
            className="
              text-[18px]
              tracking-[0.12em]
              uppercase
              text-black/80
              font-think
            "
          >
            +91-81296 75834
          </span>

          <span
            className="
              text-[18px]
              tracking-[0.12em]
              uppercase
              text-black/80
              font-think
            "
          >
            INFO@TORUSS.STUDIO
          </span>

          <span
            className="
              text-[18px]
              tracking-[0.12em]
              uppercase
              text-black/80
              font-think
              whitespace-nowrap
            "
          >
            PALAKKAD, KERALA, INDIA - 678001
          </span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="
          h-[94px]
          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            text-[20px]
            tracking-[0.16em]
            uppercase
            text-black/70
            font-think
          "
        >
          © 2026 TORUSS STUDIO. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
