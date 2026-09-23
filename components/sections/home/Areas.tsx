"use client";

import { useState } from "react";
import { practices } from "@/lib/constants";


export default function AreasOfPractice() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section className="m-0 w-full bg-[#f9f8f2] text-[#38362e]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1350px]
          -translate-x-[40px]
        "
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <header
          className="
    m-0
    flex
    items-start
    justify-between

    min-h-[340px]

    px-[42px]
    pt-[58px]
    pb-[200px]

    max-[1200px]:
      min-h-[300px]
      px-[34px]
      pt-[52px]
      pb-[165px]

    max-[900px]:
      min-h-[250px]
      px-[26px]
      pt-[44px]
      pb-[125px]

    max-[600px]:
      min-h-[210px]
      px-[20px]
      pt-[38px]
      pb-[100px]
  "
        >
          <h2
            className="
      m-0
      shrink-0
      translate-y-[85px]
      p-0

      font-trial
      text-[60px]
      leading-none
      tracking-[-0.045em]

      text-[#38362e]

      max-[1200px]:text-[52px]
      max-[900px]:translate-y-[18px]
      max-[900px]:text-[27px]
      max-[600px]:translate-y-[12px]
      max-[600px]:text-[24px]
    "
          >
            Areas of Practice
          </h2>

          <span
            className="
      m-0
      shrink-0
      translate-y-[85px]
      whitespace-nowrap
      p-0
      pt-[10px]

      font-clash
      text-[20px]
      uppercase
      leading-none
      tracking-[0.02em]

      text-[#38362e]

      max-[1200px]:text-[17px]
      max-[900px]:translate-y-[18px]
      max-[900px]:text-[13px]
      max-[600px]:translate-y-[12px]
      max-[600px]:text-[9px]
    "
          >
            [ WHAT WE CAN HELP WITH ]
          </span>
        </header>

        {/* =========================================================
            PRACTICE LIST
        ========================================================= */}

        <div className="m-0 w-full p-0">
          {practices.map((practice) => {
            const isActive = activeId === practice.id;

            return (
              <div key={practice.id} className="group relative w-full">
                {/* FULL WIDTH HOVER / ACTIVE BACKGROUND */}
                <div
                  aria-hidden="true"
                  className={`
      pointer-events-none
      absolute
      inset-y-0
      left-[calc(50%+40px)]
      z-0
      w-screen
      -translate-x-1/2

      bg-[#f9f8f2]
      transition-colors
      duration-300
      ease-out

      group-hover:bg-[#eae6dc]
      ${isActive ? "bg-[#eae6dc]" : ""}
    `}
                />

                <article
                  className="
      relative
      z-10
      m-0
      w-full
      overflow-hidden
      bg-transparent
  "
                >
                  {/* =================================================
    COLLAPSED / MAIN ROW
================================================= */}

                  <div
                    className="
    grid
    min-h-[285px]
    w-full
    items-center

    grid-cols-[150px_minmax(0,500px)_minmax(280px,1fr)_70px]

    px-[118px]

    border-0

    max-[1400px]:
      min-h-[270px]
      grid-cols-[140px_minmax(0,460px)_minmax(260px,1fr)_60px]
      px-[80px]

    max-[1200px]:
      min-h-[240px]
      grid-cols-[120px_minmax(0,400px)_minmax(220px,1fr)_55px]
      px-[60px]

    max-[900px]:
      min-h-[190px]
      grid-cols-[55px_minmax(0,1fr)_45px]
      gap-[20px]
      px-[40px]

    max-[700px]:
      min-h-[150px]
      grid-cols-[40px_minmax(0,1fr)_35px]
      gap-[12px]
      px-[20px]
  "
                  >
                    {/* =================================================
      NUMBER
  ================================================= */}

                    <div
                      className="
      self-center
      font-clash
      text-[25px]
      leading-none
      tracking-[0.02em]
      text-[#38362e]
    "
                    >
                      [{practice.id}]
                    </div>

                    {/* =================================================
      TITLE
  ================================================= */}

                    <h3
                      className="
      m-0
      min-w-0
      self-center
      p-0

      font-clash
      text-[48px]
      leading-[1.08]
      tracking-[-0.035em]
      text-[#403e38]

      max-[1400px]:text-[42px]
      max-[1200px]:text-[36px]
      max-[900px]:text-[30px]
      max-[700px]:text-[23px]
    "
                    >
                      {practice.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>

                    {/* =================================================
      DESCRIPTION
================================================= */}

                    <div
                      className="
      z-10
      w-full
      max-w-[280px]
      self-center
      justify-self-start

      max-[1400px]:max-w-[280px]
      max-[1200px]:max-w-[240px]

      max-[900px]:hidden
    "
                    >
                      <div
                        className="
        m-0
        block
        w-full

        font-clash
        text-[20px]
        leading-[1.28]
        tracking-[-0.01em]

        !text-[#38362e]
        opacity-100
        visible
      "
                        style={{
                          display: "block",
                          visibility: "visible",
                          opacity: 1,
                          color: "#38362e",
                        }}
                      >
                        {practice.description}
                      </div>
                    </div>

                    {/* =================================================
      PLUS / MINUS
  ================================================= */}

                    <div
                      className="
      flex
      items-center
      justify-end
      self-center
    "
                    >
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-label={
                          isActive
                            ? `Collapse ${practice.title.join(" ")}`
                            : `Expand ${practice.title.join(" ")}`
                        }
                        onClick={() => toggleRow(practice.id)}
                        className="
  relative
  flex
  h-[42px]
  w-[42px]
  shrink-0
  cursor-pointer
  items-center
  justify-center
  translate-x-[20px]

  border-0
  bg-transparent
  p-0
  outline-none

  max-[900px]:
    h-[36px]
    w-[36px]
    translate-x-[10px]

  max-[700px]:
    h-[28px]
    w-[28px]
    translate-x-0
"
                      >
                        {/* horizontal */}
                        <span
                          className="
          absolute
          left-1/2
          top-1/2

          h-px
          w-[30px]

          -translate-x-1/2
          -translate-y-1/2

          bg-[#85837d]

          max-[900px]:w-[24px]
          max-[700px]:w-[18px]
        "
                        />

                        {/* vertical */}
                        <span
                          className={`
          absolute
          left-1/2
          top-1/2

          h-[30px]
          w-px

          -translate-x-1/2
          -translate-y-1/2

          bg-[#85837d]

          transition-transform
          duration-300
          ease-out

          max-[900px]:h-[24px]
          max-[700px]:h-[18px]

          ${isActive ? "scale-y-0" : "scale-y-100"}
        `}
                        />
                      </button>
                    </div>
                  </div>

                  {/* =================================================
                    EXPANDED CONTENT
                ================================================= */}

                  <div
                    className={`
                    grid

                    transition-[grid-template-rows]
                    duration-600
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="
                        grid
                        grid-cols-[195px_420px_20px_300px_1fr]
                        items-start

                        px-[118px]
                        pb-[55px]

                        max-[1400px]:
                          grid-cols-[170px_400px_20px_280px_1fr]
                          px-[80px]

                        max-[1200px]:
                          grid-cols-[150px_360px_20px_250px_1fr]
                          px-[60px]

                        max-[900px]:
                          grid-cols-[60px_minmax(0,1fr)]
                          gap-[25px]
                          px-[40px]
                          pb-[40px]

                        max-[700px]:
                          grid-cols-1
                          gap-[22px]
                          px-[20px]
                          pb-[32px]
                      "
                      >
                        {/* EMPTY NUMBER */}

                        <div className="max-[900px]:hidden" />

                        {/* =================================================
                          IMAGE
                      ================================================= */}

                        <div
                          className="
    relative
    

    h-[145px]
    w-[190px]
    overflow-hidden

    max-[900px]:
      left-[-30px]
      h-[125px]
      w-[165px]

    max-[700px]:
      left-0
      h-[150px]
      w-full
      max-w-[280px]
  "
                        >
                          <img
                            src={practice.image}
                            alt=""
                            className="
      block
      h-full
      w-full
      object-cover
    "
                          />
                        </div>
                        {/* SPACER */}

                        <div className="max-[900px]:hidden" />

                        {/* =================================================
                          DETAILS
                      ================================================= */}

                        <div
                          className="

    max-w-[600px]

    font-clash
    text-[22px]
    leading-[1.18]

    text-[#38362e]

    max-[1200px]:
      left-[-60px]
      text-[14px]

    max-[900px]:
      left-[-20px]
      max-w-[280px]
      text-[13px]

    max-[700px]:
      left-0
      max-w-[280px]
      text-[14px]
  "
                        >
                          {practice.details.map((detail, index) => (
                            <span key={`${detail}-${index}`} className="block">
                              {detail}
                            </span>
                          ))}
                        </div>

                        {/* EMPTY RIGHT */}

                        <div className="max-[900px]:hidden" />
                      </div>
                    </div>
                  </div>
                </article>
                {/* FULL WIDTH DIVIDER */}
                <div
                  aria-hidden="true"
                  className="
    relative
    left-1/2
    h-px
    w-[calc(100vw+80px)]
    -translate-x-1/2
    bg-black/30
  "
                />
              </div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM BORDER
        ========================================================= */}

        <div className="h-px w-full bg-black/30" />
      </div>
    </section>
  );
}
