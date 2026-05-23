"use client";

import { practices } from "@/lib/constants";
import { useState } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { HiArrowTurnDownRight } from "react-icons/hi2";


export default function AreasOfPractice() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState("right");

  const CARD_WIDTH = 340;

  const nextSlide = () => {
    setActive((prev) => (prev === practices.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? practices.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#ebe9e6] overflow-hidden border-t border-black/40 pb-[62px]">
      <div className="pt-[62px]">
        <>
          <div className="w-full border-t border-black/40" />

          {/* =========================
          DESKTOP
          ========================= */}
          <div className="hidden xl:grid grid-cols-[560px_1fr] min-h-[760px]">
            {/* LEFT PANEL */}
            <div
              className="
                border-r
                border-black/40
                px-[74px]
                pt-[58px]
                pb-[52px]
                flex
                flex-col
              "
            >
              <div>
                <h2
                  className="
                    text-[50px]
                    leading-[1]
                    tracking-[-0.01em]
                    uppercase
                    text-[#171717]
                    font-display
                    pl-[100px]
                  "
                >
                  AREAS
                  <br />
                  OF PRACTICE
                </h2>

                <p
                  className="
                    mt-[42px]
                    max-w-[420px]
                    text-[15px]
                    leading-[1.25]
                    text-black/75
                    font-rethink
                    pl-[100px]
                  "
                >
                  Toruss works across a range of interconnected creative
                  disciplines, spanning identity, digital, objects,
                  communication, and collective initiatives.
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex items-end gap-[10px] pl-[100px]">
                  <span
                    className="
      text-[54px]
      leading-none
      tracking-[-0.06em]
      text-[#171717]
      font-think
    "
                  >
                    {active === -1 ? "00" : `0${active + 1}`}
                  </span>

                  <span
                    className="
      text-[54px]
      leading-none
      tracking-[-0.06em]
      text-black/25
      font-think
    "
                  >
                    /05
                  </span>
                </div>

                <div className="mt-[92px] pl-[100px] flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="
                      text-[42px]
                      text-[#171717]
                      hover:opacity-60
                      transition-opacity
                      duration-300
                    "
                  >
                    <HiOutlineArrowLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="
                      text-[42px]
                      text-[#171717]
                      hover:opacity-60
                      transition-opacity
                      duration-300
                    "
                  >
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* CAROUSEL */}
            <div className="relative w-[1020px] overflow-hidden border-b border-black/40">
              <button
                onClick={() => {
                  setActive((prev) => {
                    if (direction === "right") {
                      if (prev === practices.length - 1) {
                        setDirection("left");
                        return prev - 1;
                      }

                      return prev + 1;
                    }

                    if (prev === 0) {
                      setDirection("right");
                      return prev + 1;
                    }

                    return prev - 1;
                  });
                }}
                className="
                  absolute
                  right-[255px]
                  bottom-[118px]
                  left-[640px]
                  w-[80px]
                  h-[80px]
                  bg-[#ebe9e6]
                  border
                  border-black/20
                  flex
                  items-center
                  justify-center
                  text-[42px]
                  text-[#171717]
                  z-[100]
                  transition-all
                  duration-300
                  hover:translate-x-[4px]
                "
              >
                {direction === "right" ? "→" : "←"}
              </button>

              <div
                className="
                  flex
                  h-full
                  transition-transform
                  duration-700
                  ease-out
                "
                style={{
                  transform: `translateX(-${
                    active <= 1
                      ? 0
                      : active >= 3
                        ? 2 * CARD_WIDTH
                        : 1 * CARD_WIDTH
                  }px)`,
                }}
              >
                {practices.map((item, index) => {
                  const isActive = active === index;

                  return (
                    <div
                      key={index}
                      onClick={() => setActive(index)}
                      className="
                        relative
                        w-[340px]
                        flex-shrink-0
                        border-r
                        border-black/20
                        overflow-visible
                        cursor-pointer
                      "
                    >
                      {isActive ? (
                        <div className="relative h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="
                              absolute
                              inset-0
                              w-full
                              h-full
                              object-cover
                            "
                          />

                          <div className="absolute inset-0 bg-black/60" />

                          <div
                            className="
                              relative
                              z-20
                              h-full
                              px-[30px]
                              pt-[24px]
                              pb-[28px]
                              flex
                              flex-col
                            "
                          >
                            <span
                              className="
                                text-[20px]
                                tracking-[0.18em]
                                uppercase
                                text-[#85A56F]
                                font-think
                              "
                            >
                              — {item.number}
                            </span>

                            <h3
                              className="
                                mt-[18px]
                                whitespace-pre-line
                                text-[45px]
                                leading-[0.92]
                                tracking-[-0.05em]
                                uppercase
                                text-[#85A56F]
                                font-display
                              "
                            >
                              {item.title}
                            </h3>

                            <div className="mt-[28px] h-px w-full bg-white/45" />

                            <p
                              className="
                                mt-[22px]
                                text-[20px]
                                leading-[1.5]
                                text-white/90
                                font-rethink
                                max-w-[380px]
                              "
                            >
                              {item.desc}
                            </p>

                            <div className="mt-[30px] space-y-[28px]">
                              {item.items.map((listItem, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-[16px]"
                                >
                                  <div className="flex items-center gap-[5px]">
                                    <div className="flex flex-col gap-[5px]">
                                      <span className="w-[5px] h-[5px] bg-white block" />
                                      <span className="w-[5px] h-[5px] bg-white block" />
                                    </div>

                                    <div className="flex items-center h-[11px]">
                                      <span className="w-[5px] h-[5px] bg-white block" />
                                    </div>
                                  </div>

                                  <span
                                    className="
                                      text-[16px]
                                      text-white/92
                                      font-rethink
                                    "
                                  >
                                    {listItem}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-auto flex items-center">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActive(-1);
                                }}
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-[10px]
                                  text-white
                                "
                              >
                                <span
                                  className="
                                    text-[32px]
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-[4px]
                                  "
                                >
                                  ↳
                                </span>

                                <span
                                  className="
                                    text-[16px]
                                    uppercase
                                    tracking-[0.08em]
                                    font-rethink
                                    cursor-pointer
                                  "
                                >
                                  VIEW LESS
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="
                            h-full
                            px-[28px]
                            pt-[28px]
                            pb-[24px]
                            flex
                            flex-col
                            bg-[#ebe9e6]
                          "
                        >
                          <div
                            className="
                              w-full
                              h-[275px]
                              overflow-hidden
                            "
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="
                                w-full
                                h-full
                                object-cover
                              "
                            />
                          </div>

                          <span
                            className="
                              mt-[40px]
                              text-[20px]
                              tracking-[0.18em]
                              uppercase
                              text-black/35
                              font-think
                            "
                          >
                            — {item.number}
                          </span>

                          <h3
                            className="
                              mt-[18px]
                              whitespace-pre-line
                              text-[42px]
                              leading-[0.92]
                              tracking-[-0.05em]
                              uppercase
                              text-black/18
                              font-display
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-[24px]
                              text-[12px]
                              leading-[1.15]
                              text-black/18
                              font-rethink
                              max-w-[230px]
                            "
                          >
                            {item.desc}
                          </p>

                          <div className="mt-auto">
                            <button
                              className="
                                group
                                flex
                                items-center
                                gap-[10px]
                                text-[#85A56F]/85
                              "
                            >
                              <HiArrowTurnDownRight
                                style={{
                                  fontSize: "24px",
                                  strokeWidth: "0.2",
                                  marginBottom: "8px",
                                }}
                              />

                              <span
                                className="
                                  text-[16px]
                                  uppercase
                                  tracking-[0.08em]
                                  font-rethink
                                "
                              >
                                VIEW MORE
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================
          TABLET + MOBILE
          ========================= */}
          <div className="xl:hidden">
            {/* HEADER */}
            <div className="border-b border-black/20 px-5 sm:px-8 md:px-10 pt-10 pb-8">
              <h2
                className="
                  text-[38px]
                  sm:text-[52px]
                  md:text-[68px]
                  leading-[0.95]
                  tracking-[-0.05em]
                  uppercase
                  text-[#171717]
                  font-display
                "
              >
                AREAS
                <br />
                OF PRACTICE
              </h2>

              <p
                className="
                  mt-8
                  max-w-[700px]
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]
                  leading-[1.4]
                  text-black/75
                  font-rethink
                "
              >
                Toruss works across a range of interconnected creative
                disciplines, spanning identity, digital, objects, communication,
                and collective initiatives.
              </p>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-end gap-[8px]">
                  <span
                    className="
                      text-[42px]
                      sm:text-[54px]
                      leading-none
                      tracking-[-0.06em]
                      text-[#171717]
                      font-think
                    "
                  >
                    0{active + 1}
                  </span>

                  <span
                    className="
                      text-[42px]
                      sm:text-[54px]
                      leading-none
                      tracking-[-0.06em]
                      text-black/25
                      font-think
                    "
                  >
                    /05
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="
                      w-[52px]
                      h-[52px]
                      sm:w-[66px]
                      sm:h-[66px]
                      border
                      border-black/20
                      flex
                      items-center
                      justify-center
                      text-[26px]
                      sm:text-[34px]
                      text-[#171717]
                    "
                  >
                    <HiOutlineArrowLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="
                      w-[52px]
                      h-[52px]
                      sm:w-[66px]
                      sm:h-[66px]
                      border
                      border-black/20
                      flex
                      items-center
                      justify-center
                      text-[26px]
                      sm:text-[34px]
                      text-[#171717]
                    "
                  >
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="px-4 sm:px-6 md:px-8 py-6">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-5 w-max">
                  {practices.map((item, index) => {
                    const isActive = active === index;

                    return (
                      <div
                        key={index}
                        onClick={() => setActive(index)}
                        className={`
                          relative
                          overflow-hidden
                          border
                          border-black/20
                          transition-all
                          duration-500
                          flex-shrink-0
                          ${
                            isActive
                              ? "w-[88vw] sm:w-[620px] md:w-[720px]"
                              : "w-[74vw] sm:w-[360px] md:w-[420px]"
                          }
                        `}
                      >
                        {isActive ? (
                          <div className="relative min-h-[760px] sm:min-h-[820px]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/60" />

                            <div
                              className="
                                relative
                                z-20
                                px-6
                                sm:px-8
                                md:px-10
                                pt-6
                                pb-8
                                flex
                                flex-col
                                min-h-[760px]
                                sm:min-h-[820px]
                              "
                            >
                              <span
                                className="
                                  text-[18px]
                                  sm:text-[20px]
                                  tracking-[0.18em]
                                  uppercase
                                  text-[#85A56F]
                                  font-think
                                "
                              >
                                — {item.number}
                              </span>

                              <h3
                                className="
                                  mt-5
                                  whitespace-pre-line
                                  text-[42px]
                                  sm:text-[58px]
                                  md:text-[72px]
                                  leading-[0.92]
                                  tracking-[-0.05em]
                                  uppercase
                                  text-[#85A56F]
                                  font-display
                                "
                              >
                                {item.title}
                              </h3>

                              <div className="mt-8 h-px w-full bg-white/45" />

                              <p
                                className="
                                  mt-8
                                  text-[17px]
                                  sm:text-[20px]
                                  md:text-[22px]
                                  leading-[1.5]
                                  text-white/90
                                  font-rethink
                                "
                              >
                                {item.desc}
                              </p>

                              <div className="mt-10 space-y-7">
                                {item.items.map((listItem, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-4"
                                  >
                                    <div className="flex items-center gap-[5px]">
                                      <div className="flex flex-col gap-[5px]">
                                        <span className="w-[5px] h-[5px] bg-white block" />
                                        <span className="w-[5px] h-[5px] bg-white block" />
                                      </div>

                                      <div className="flex items-center h-[11px]">
                                        <span className="w-[5px] h-[5px] bg-white block" />
                                      </div>
                                    </div>

                                    <span
                                      className="
                                        text-[16px]
                                        sm:text-[18px]
                                        md:text-[20px]
                                        text-white/92
                                        font-rethink
                                      "
                                    >
                                      {listItem}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-auto pt-10">
                                <button
                                  className="
                                    group
                                    flex
                                    items-center
                                    gap-[10px]
                                    text-white
                                  "
                                >
                                  <HiArrowTurnDownRight
                                    style={{
                                      fontSize: "20px",
                                      strokeWidth: "0.2",
                                      marginBottom: "8px",
                                    }}
                                  />

                                  <span
                                    className="
                                      text-[15px]
                                      sm:text-[16px]
                                      uppercase
                                      tracking-[0.08em]
                                      font-rethink
                                    "
                                  >
                                    VIEW LESS
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="
                              bg-[#ebe9e6]
                              px-5
                              sm:px-6
                              pt-5
                              pb-6
                              min-h-[650px]
                              flex
                              flex-col
                            "
                          >
                            <div className="w-full h-[240px] sm:h-[300px] overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <span
                              className="
                                mt-8
                                text-[18px]
                                tracking-[0.18em]
                                uppercase
                                text-black/35
                                font-think
                              "
                            >
                              — {item.number}
                            </span>

                            <h3
                              className="
                                mt-5
                                whitespace-pre-line
                                text-[34px]
                                sm:text-[42px]
                                leading-[0.92]
                                tracking-[-0.05em]
                                uppercase
                                text-black/20
                                font-display
                              "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                                mt-6
                                text-[14px]
                                sm:text-[15px]
                                leading-[1.4]
                                text-black/40
                                font-rethink
                              "
                            >
                              {item.desc}
                            </p>

                            <div className="mt-auto pt-10">
                              <button
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-[10px]
                                  text-[#85A56F]/45
                                "
                              >
                                <span
                                  className="
                                    text-[30px]
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-[4px]
                                  "
                                >
                                  ↳
                                </span>

                                <span
                                  className="
                                    text-[15px]
                                    uppercase
                                    tracking-[0.08em]
                                    font-rethink
                                    
                                  "
                                >
                                  VIEW MORE
                                </span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
