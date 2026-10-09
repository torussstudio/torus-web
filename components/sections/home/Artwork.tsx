"use client";

import Image from "next/image";
import { spaces, stats } from "@/lib/constants";

export default function StudioSpaces() {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-[#f9f8f2] text-[#38362e] py-[50px] sm:py-[65px] md:py-[75px] lg:py-[90px]">
      <div className="w-full max-w-full min-w-0">
        {/* ================= IMAGE GRID ================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-[35px] px-5 sm:gap-[27px] sm:px-8 md:grid-cols-3 md:px-0 lg:gap-[27px]">
          {spaces.map((space, index) => (
            <div key={space.title} className="group min-w-0 w-full">
              {/* IMAGE */}
              <div
                className="
                  relative
                  w-full
                  h-[300px]
                  sm:h-[360px]
                  md:h-[380px]
                  lg:h-[435px]
                  overflow-hidden
                "
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* LABEL */}
              <div className="relative flex items-center mt-[13px]">
                {/* SMALL SQUARE */}
                <span className="absolute left-0 top-[5px] w-[7px] h-[7px] bg-[#343431]" />

                <span
                  className="
                    w-full
                    text-center
                    font-clash
                    text-[16px]
                    sm:text-[17px]
                    md:text-[17px]
                    lg:text-[18px]
                    leading-none
                    text-[#38362e]
                  "
                >
                  {space.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOWER CONTENT ================= */}

        <div
          className="
            grid
            grid-cols-1
            mt-[65px]
            sm:mt-[75px]
            md:grid-cols-3
            md:mt-[95px]
          "
        >
          {/* DESCRIPTION */}
          <div
            className="
              md:col-span-1
              px-5
              sm:px-8
              md:px-0
              md:pl-[103px]
            "
          >
            <p
              className="
                w-full
                max-w-[380px]
                font-clash
                text-[17px]
                sm:text-[18px]
                md:text-[19px]
                lg:text-[20px]
                leading-[1.35]
                text-[#38362e]
              "
            >
              Palakkad, India, working with clients across India, Europe, North
              America, Australia, and the Middle East.
            </p>
          </div>

          {/* EMPTY SPACE */}
          <div className="hidden md:block" />

          {/* EMPTY SPACE */}
          <div className="hidden md:block" />
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-[50px]
            mt-[65px]
            sm:mt-[75px]
            md:grid-cols-[0.8fr_0.85fr_1fr]
            md:gap-0
            md:mt-[90px]
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="
                flex
                flex-col
                items-center
                md:items-start
                md:pl-[250px]
              "
            >
              <div
                className="
                  text-[48px]
                  sm:text-[52px]
                  md:text-[58px]
                  lg:text-[60px]
                  leading-[0.9]
                  tracking-[-0.045em]
                  font-clash
                  text-[#38362e]
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-[12px]
                  font-clash
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  leading-[1.15]
                  text-[#38362e]
                  text-center
                  md:text-left
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}