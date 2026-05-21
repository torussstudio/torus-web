"use client";

import Image from "next/image";
import { HiArrowTurnDownRight } from "react-icons/hi2";

const works = [
  {
    year: "2026",
    country: "SPAIN",
    title: "THE SPANISH ALCHEMIST",
    image: "/Trust-hero.jpg",
    desc: "Building a skincare brand rooted in freshness, performance, and cultural identity.",
    tags: ["Brand Identity", "Packaging", "Digital"],
    shape: "circle",
  },
  {
    year: "2025",
    country: "INDIA",
    title: "THE INVISIBLE MUSEUM",
    image: "/Trust-hero.jpg",
    desc: "Reimagining heritage discovery through public interaction and spatial storytelling.",
    tags: ["Spatial Experience", "Cultural Initiative"],
    shape: "square",
  },
];

export default function ArchiveSection() {
  return (
    <section className="w-full bg-[#e9e8e6] border-t border-black/20">
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
           grid-cols-[470px_1fr]
            border-b
            border-black/20
            h-[520px]
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
  "
          >
            <div
              className="
                relative
           w-[320px]
h-[440px]
                overflow-hidden
              "
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover grayscale"
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
              "
            >
              {work.title}
            </h3>

            {/* SHAPE */}
            <div className="absolute top-[65px] right-[72px]">
              {work.shape === "circle" ? (
                <div className="w-[40px] h-[40px] rounded-full bg-[#84A96E]" />
              ) : (
                <div className="w-[40px] h-[40px] bg-[#84A96E]" />
              )}
            </div>

            {/* BOTTOM AREA */}
            <div className="mt-auto">
              {/* DESCRIPTION */}
              <p
                className="
                  max-w-[250px]
                  text-[15px]
                  leading-[1.25]
                  text-black/45
                  font-rethink
                "
              >
                {work.desc}
              </p>

              {/* FOOT */}
              <div className="mt-[26px] flex items-center justify-between">
                {/* TAGS */}
                <div className="flex items-center gap-[24px]">
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
  "
                  />
                  <span
                    className="
                      text-[13px]
                      uppercase
                      tracking-[0.08em]
                      font-rethink
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
