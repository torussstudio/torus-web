"use client";

import { works } from "@/lib/constants";
import Image from "next/image";
import { HiArrowTurnDownRight } from "react-icons/hi2";



export default function ArchiveSection() {
  return (
    <section className="w-full bg-[#ebe9e6] border-t border-black/20 overflow-hidden">
      
      {/* HEADER */}
      <div
        className="
          h-[88px]
          border-b
          border-black/20
          flex
          items-center
          justify-between
          px-[72px]

          max-md:h-auto
          max-md:px-5
          max-md:py-5
        "
      >
        <h2
          className="
            text-[56px]
            leading-none
            tracking-[-0.05em]
            uppercase
            text-[#151515]
            font-display

            max-md:text-[30px]
          "
        >
          THE ARCHIVE
        </h2>

        <span
          className="
            text-[11px]
            tracking-[0.26em]
            uppercase
            text-black/40
            font-think
            mt-[4px]

            max-md:text-[9px]
          "
        >
          SELECTED WORKS
        </span>
      </div>

      {/* ROWS */}
      {works.map((work, index) => (
        <div
          key={index}
          className="
            grid
            grid-cols-[560px_1fr]
            border-b
            border-black/20
            h-[520px]

            max-lg:grid-cols-1
            max-lg:h-auto
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              border-r
              border-black/20
              flex
              items-start
              justify-center
              pt-[38px]
              pr-[20px]

              max-lg:border-r-0
              max-lg:border-b
              max-lg:pb-8
              max-lg:pt-8
            "
          >
            <div
              className="
                relative
                w-[380px]
                h-[440px]
                overflow-hidden

                max-md:w-[88vw]
                max-md:h-[420px]
              "
            >
              <Image
  src={work.image}
  alt={work.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              px-[28px]
              pt-[28px]
              pb-[22px]
              flex
              flex-col

              max-md:px-5
              max-md:pt-6
              max-md:pb-6
            "
          >
            {/* TOP META */}
            <div className="flex items-center gap-[18px]">
              <span
                className="
                  text-[16px]
                  uppercase
                  tracking-[0.18em]
                  text-black/75
                  font-think
                 
                  max-md:text-[12px]
                "
              >
                {work.year}
              </span>

              <div className="w-[5px] h-[5px] bg-black" />

              <span
                className="
                  text-[16px]
                  uppercase
                  tracking-[0.18em]
                  text-black/75
                  font-think
                  
                  max-md:text-[12px]
                "
              >
                {work.country}
              </span>
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-[18px]
                text-[44px]
                leading-[0.95]
                tracking-[-0.04em]
                uppercase
                text-[#151515]
                font-display
                max-w-[680px]
                
                max-md:text-[30px]
                max-md:leading-[0.95]
              "
            >
              {work.title}
            </h3>

            {/* SHAPE */}
            <div
              className="
                absolute
                top-[65px]
                right-[80px]

                max-md:top-[24px]
                max-md:right-[20px]
              "
            >
              {work.shape === "circle" ? (
                <div
                  className="
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-[#84A96E]

                    max-md:w-[22px]
                    max-md:h-[22px]
                  "
                />
              ) : (
                <div
                  className="
                    w-[40px]
                    h-[40px]
                    bg-[#84A96E]

                    max-md:w-[22px]
                    max-md:h-[22px]
                  "
                />
              )}
            </div>

            {/* BOTTOM AREA */}
            <div className="mt-auto max-lg:mt-10">
              
              {/* DESCRIPTION */}
              <p
                className="
                  max-w-[250px]
                  text-[15px]
                  leading-[1.25]
                  text-black/45
                  font-rethink

                  max-md:text-[14px]
                  max-md:max-w-full
                  
                "
              >
                {work.desc}
              </p>

              {/* FOOT */}
              <div
                className="
                  mt-[26px]
                  flex
                  items-center
                  justify-between

                  max-md:flex-col
                  max-md:items-start
                  max-md:gap-7
                  
                "
              >
                {/* TAGS */}
                <div
                  className="
                    flex
                    items-center
                    gap-[24px]

                    max-md:flex-wrap
                    max-md:gap-[16px]
                  "
                >
                  {work.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-[8px]
                      "
                    >
                      <div className="flex items-center gap-[5px]">
                        
                        {/* LEFT 2 */}
                        <div className="flex flex-col gap-[5px]">
                          <span className="w-[5px] h-[5px] bg-black block" />
                          <span className="w-[5px] h-[5px] bg-black block" />
                        </div>

                        {/* RIGHT CENTER */}
                        <div className="flex items-center h-[11px]">
                          <span className="w-[5px] h-[5px] bg-black block" />
                        </div>
                      </div>

                      <span
                        className="
                          text-[16px]
                          text-black/70
                          font-rethink

                          max-md:text-[14px]
                        "
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="
                    group
                    flex
                    items-center
                    gap-[6px]
                    text-[#84A96E]
                    mr-[18px]
                    cursor-pointer

                    max-md:mr-0
                  "
                >
                  <HiArrowTurnDownRight
                    className="
                      text-[24px]
                      stroke-[0.2]
                      mb-[8px]
                      transition-transform
                      duration-500
                      group-hover:translate-x-[5px]

                      max-md:text-[20px]
                    "
                  />

                  <span
                    className="
                      text-[13px]
                      uppercase
                      tracking-[0.08em]
                      font-rethink
                      mr-[30px]

                      max-md:mr-0
                    "
                  >
                    SEE PORTFOLIO
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}