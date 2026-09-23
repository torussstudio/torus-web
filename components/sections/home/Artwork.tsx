"use client";

import Image from "next/image";
import { spaces,stats } from "@/lib/constants";


export default function StudioSpaces() {
  return (
    <section className="w-full bg-[#f9f8f2] text-[#38362e] py-[90px]">
      <div className="w-full">
        {/* ================= IMAGE GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
          {spaces.map((space, index) => (
            <div key={space.title} className="group">
              {/* IMAGE */}
              <div className="relative w-full h-[435px] overflow-hidden">
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
                    text-[18px]
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

        <div className="grid grid-cols-1 md:grid-cols-3 mt-[95px]">
          {/* DESCRIPTION */}
          <div className="md:col-span-1 pl-[103px]">
            <p
              className="
                max-w-[380px]
                font-clash
                text-[20px]
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

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_0.85fr_1fr] mt-[90px]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center md:items-start md:pl-[250px]"
            >
              <div
                className="
                  text-[58px]
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
                  text-[16px]
                  leading-[1.15]
                  text-[#38362e]
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
