"use client";

import { practices } from "@/lib/constants";
import { useState, useRef, useLayoutEffect } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import gsap from "gsap";

export default function AreasOfPractice() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState("right");
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const sectionRef = useRef<HTMLElement>(null);

  // desktop header
  const dHeaderTitleRef = useRef<HTMLHeadingElement>(null);
  const dHeaderDescRef = useRef<HTMLParagraphElement>(null);
  const dCounterRef = useRef<HTMLDivElement>(null);
  const dArrowsRef = useRef<HTMLDivElement>(null);

  // mobile header
  const mHeaderTitleRef = useRef<HTMLHeadingElement>(null);
  const mHeaderDescRef = useRef<HTMLParagraphElement>(null);
  const mCounterRef = useRef<HTMLDivElement>(null);

  // desktop active-card detail content
  const dNumberRef = useRef<HTMLSpanElement>(null);
  const dTitleRef = useRef<HTMLHeadingElement>(null);
  const dDividerRef = useRef<HTMLDivElement>(null);
  const dDescRef = useRef<HTMLParagraphElement>(null);
  const dListRef = useRef<HTMLDivElement>(null);
  const dBtnRef = useRef<HTMLDivElement>(null);

  // mobile active-card detail content
  const mNumberRef = useRef<HTMLSpanElement>(null);
  const mTitleRef = useRef<HTMLHeadingElement>(null);
  const mDividerRef = useRef<HTMLDivElement>(null);
  const mDescRef = useRef<HTMLParagraphElement>(null);
  const mListRef = useRef<HTMLDivElement>(null);
  const mBtnRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 340;

  const scrollToCard = (index: number) => {
    setTimeout(() => {
      cardRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 50);
  };

  const nextSlide = () => {
    setActive((prev) => {
      const next = prev === practices.length - 1 ? 0 : prev + 1;
      scrollToCard(next);
      return next;
    });
  };

  const prevSlide = () => {
    setActive((prev) => {
      const next = prev === 0 ? practices.length - 1 : prev - 1;
      scrollToCard(next);
      return next;
    });
  };

  // entrance animation — runs once on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          [dHeaderTitleRef.current, mHeaderTitleRef.current],
          { autoAlpha: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.8 }
        )
        .fromTo(
          [dHeaderDescRef.current, mHeaderDescRef.current],
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 1.2 },
          "-=1.1"
        )
        .fromTo(
          [dCounterRef.current, mCounterRef.current],
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          dArrowsRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1 },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // active-card detail content animation — replays whenever `active` changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      [
        { number: dNumberRef, title: dTitleRef, divider: dDividerRef, desc: dDescRef, list: dListRef, btn: dBtnRef },
        { number: mNumberRef, title: mTitleRef, divider: mDividerRef, desc: mDescRef, list: mListRef, btn: mBtnRef },
      ].forEach(({ number, title, divider, desc, list, btn }) => {
        if (!title.current) return;

        const listItems = list.current
          ? Array.from(list.current.children)
          : [];

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            number.current,
            { autoAlpha: 0, y: -20 },
            { autoAlpha: 1, y: 0, duration: 0.9 }
          )
          .fromTo(
            title.current,
            { autoAlpha: 0, y: 48, clipPath: "inset(0 0 100% 0)" },
            { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.3 },
            "-=0.5"
          )
          .fromTo(
            divider.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.1, transformOrigin: "left" },
            "-=0.7"
          )
          .fromTo(
            desc.current,
            { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 1 },
            "-=0.6"
          )
          .fromTo(
            listItems,
            { autoAlpha: 0, x: -24 },
            { autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.18 },
            "-=0.5"
          )
          .fromTo(
            btn.current,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.3"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ebe9e6] overflow-hidden border-t border-black/50 pb-[62px]"
    >
      <div className="pt-[62px]">
        <>
          <div className="w-full border-t border-black/50" />

          {/* =========================
          DESKTOP
          ========================= */}
          {/* max-width wrapper add cheythu — 1920px+ screens-il muzhu grid
              stretch aavathe oru limit-il centered aayi nilkkum */}
          <div className="hidden xl:block max-w-[1728px] mx-auto">
            <div
              className="
                grid
                grid-cols-[560px_minmax(0,1fr)]
                min-h-[760px]
              "
            >
              {/* LEFT PANEL */}
              <div
                className="
                  border-r
                  border-black/50
                  px-[74px]
                  pt-[58px]
                  pb-[52px]
                  flex
                  flex-col
                "
              >
                <div>
                  <h2
                    ref={dHeaderTitleRef}
                    className="
                      text-[47px]
                      leading-[1]
                      tracking-[-0.01em]
                      uppercase
                      text-[#181818]
                      font-recife
                      pl-[100px]
                    "
                  >
                    AREAS
                    <br />
                    OF PRACTICE
                  </h2>

                  <p
                    ref={dHeaderDescRef}
                    className="
                      mt-[42px]
                      max-w-[420px]
                      text-[16px]
                      leading-[1.25]
                      text-[#181818]
                      font-nixie
                      pl-[100px]
                    "
                  >
                    Toruss works across a range of interconnected creative
                    disciplines, spanning identity, digital, objects,
                    communication, and collective initiatives.
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    ref={dCounterRef}
                    className="flex items-end gap-[10px] pl-[100px]"
                  >
                    <span
                      className="
                        text-[54px]
                        leading-none
                        tracking-[-0.06em]
                        text-[#181818]
                        font-nixie
                      "
                    >
                      {active === -1 ? "00" : `0${active + 1}`}
                    </span>

                    <span
                      className="
                        text-[54px]
                        leading-none
                        tracking-[-0.06em]
                        text-[#181818]
                        font-nixie
                      "
                    >
                      /05
                    </span>
                  </div>

                  <div
                    ref={dArrowsRef}
                    className="mt-[92px] pl-[100px] flex items-center justify-between"
                  >
                    <button
                      onClick={prevSlide}
                      className="
                        text-[42px]
                        text-[#181818]
                        hover:opacity-60
                        transition-opacity
                        duration-300
                        cursor-pointer
                      "
                    >
                      <HiOutlineArrowLeft />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="
                        text-[42px]
                        text-[#181818]
                        hover:opacity-60
                        transition-opacity
                        duration-300
                        cursor-pointer
                      "
                    >
                      <HiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>

              {/* CAROUSEL COLUMN — min-w-0 CRITICAL aanu: grid item-inte default
                  "min-width: auto" content-inte natural width (1020px+) edukkum,
                  minmax(0,1fr) undayittum ath override cheyyilla. min-w-0 vech
                  aa auto-minimum override cheyyunnu, appo column YETHENKILUM
                  narrow screen-ilum shrink aavum, overflow/crop varilla. */}
              <div className="flex justify-center overflow-hidden border-b border-black/40 min-w-0">
                <div
                  className="
                    relative
                    w-full
                    max-w-[1020px]
                    min-w-0
                    overflow-hidden
                  "
                >
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
                      left-[62.7%]
                      bottom-[118px]
                      w-[80px]
                      h-[80px]
                      bg-[#ebe9e6]
                      border
                      border-black/50
                      flex
                      items-center
                      justify-center
                      text-[42px]
                      text-[#181818]
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
                            border-black/50
                            overflow-visible
                            cursor-pointer
                          "
                        >
                          {isActive ? (
                            <div className="relative h-full">
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
                                  h-full
                                  px-[30px]
                                  pt-[24px]
                                  pb-[28px]
                                  flex
                                  flex-col
                                "
                              >
                                <span
                                  ref={dNumberRef}
                                  className="
                                    text-[20px]
                                    tracking-[0.18em]
                                    uppercase
                                    text-[#80c46c]
                                    font-nixie
                                  "
                                >
                                  — {item.number}
                                </span>

                                <h3
                                  ref={dTitleRef}
                                  className="
                                    mt-[18px]
                                    whitespace-pre-line
                                    text-[45px]
                                    leading-[0.92]
                                    tracking-[-0.05em]
                                    uppercase
                                    text-[#80c46c]
                                    font-nixie
                                  "
                                >
                                  {item.title}
                                </h3>

                                <div
                                  ref={dDividerRef}
                                  className="mt-[28px] h-px w-full bg-white/45"
                                />

                                <p
                                  ref={dDescRef}
                                  className="
                                    mt-[22px]
                                    text-[20px]
                                    leading-[1.5]
                                    text-white/90
                                    font-nixie
                                    max-w-[380px]
                                  "
                                >
                                  {item.desc}
                                </p>

                                <div
                                  ref={dListRef}
                                  className="mt-[30px] space-y-[28px]"
                                >
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
                                          font-nixie
                                        "
                                      >
                                        {listItem}
                                      </span>
                                    </div>
                                  ))}
                                </div>

                                <div
                                  ref={dBtnRef}
                                  className="mt-auto flex items-center"
                                >
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
                                        font-nixie
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
                              <div className="w-full h-[275px] overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <span
                                className="
                                  mt-[40px]
                                  text-[20px]
                                  tracking-[0.18em]
                                  uppercase
                                  text-[#181818]
                                  font-nixie
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
                                  text-[#181818]
                                  font-nixie
                                "
                              >
                                {item.title}
                              </h3>

                              <p
                                className="
                                  mt-[24px]
                                  text-[12px]
                                  leading-[1.15]
                                  text-[#181818]
                                  font-nixie
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
                                    text-[#80c46c]
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
                                      font-nixie
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
          </div>

          {/* =========================
          TABLET + MOBILE (UNCHANGED)
          ========================= */}
          <div className="xl:hidden">
            {/* HEADER */}
            <div className="border-b border-black/20 px-5 sm:px-8 md:px-10 pt-8 pb-6">
              <h2
                ref={mHeaderTitleRef}
                className="
                  text-[34px]
                  sm:text-[52px]
                  md:text-[68px]
                  leading-[0.95]
                  tracking-[-0.05em]
                  uppercase
                  text-[#181818]
                  font-nixie
                "
              >
                AREAS
                <br />
                OF PRACTICE
              </h2>

              <p
                ref={mHeaderDescRef}
                className="
                  mt-5
                  max-w-[700px]
                  text-[13px]
                  sm:text-[16px]
                  md:text-[18px]
                  leading-[1.4]
                  text-black/75
                  font-nixie
                "
              >
                Toruss works across a range of interconnected creative
                disciplines, spanning identity, digital, objects, communication,
                and collective initiatives.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div
                  ref={mCounterRef}
                  className="flex items-end gap-[8px]"
                >
                  <span
                    className="
                      text-[36px]
                      sm:text-[54px]
                      leading-none
                      tracking-[-0.06em]
                      text-[#181818]
                      font-nixie
                    "
                  >
                    0{active + 1}
                  </span>

                  <span
                    className="
                      text-[36px]
                      sm:text-[54px]
                      leading-none
                      tracking-[-0.06em]
                      text-black/25
                      font-nixie
                    "
                  >
                    /05
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="
                      w-[44px]
                      h-[44px]
                      sm:w-[66px]
                      sm:h-[66px]
                      border
                      border-black/20
                      flex
                      items-center
                      justify-center
                      text-[22px]
                      sm:text-[34px]
                      text-[#181818]
                    "
                  >
                    <HiOutlineArrowLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="
                      w-[44px]
                      h-[44px]
                      sm:w-[66px]
                      sm:h-[66px]
                      border
                      border-black/20
                      flex
                      items-center
                      justify-center
                      text-[22px]
                      sm:text-[34px]
                      text-[#181818]
                    "
                  >
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="px-4 sm:px-6 md:px-8 py-5">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 w-max">
                  {practices.map((item, index) => {
                    const isActive = active === index;

                    return (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) cardRefs.current[index] = el;
                        }}
                        onClick={() => {
                          setActive(index);
                          scrollToCard(index);
                        }}
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
                              : "w-[60vw] sm:w-[300px] md:w-[360px]"
                          }
                        `}
                      >
                        {isActive ? (
                          <div className="relative min-h-[480px] sm:min-h-[620px]">
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
                                px-5
                                sm:px-8
                                md:px-10
                                pt-5
                                pb-5
                                flex
                                flex-col
                                min-h-[480px]
                                sm:min-h-[620px]
                              "
                            >
                              <span
                                ref={mNumberRef}
                                className="
                                  text-[14px]
                                  sm:text-[18px]
                                  tracking-[0.18em]
                                  uppercase
                                  text-[#85A56F]
                                  font-nixie
                                "
                              >
                                — {item.number}
                              </span>

                              <h3
                                ref={mTitleRef}
                                className="
                                  mt-3
                                  whitespace-pre-line
                                  text-[32px]
                                  sm:text-[46px]
                                  md:text-[58px]
                                  leading-[0.92]
                                  tracking-[-0.05em]
                                  uppercase
                                  text-[#85A56F]
                                  font-nixie
                                "
                              >
                                {item.title}
                              </h3>

                              <div
                                ref={mDividerRef}
                                className="mt-4 h-px w-full bg-white/45"
                              />

                              <p
                                ref={mDescRef}
                                className="
                                  mt-4
                                  text-[13px]
                                  sm:text-[16px]
                                  md:text-[18px]
                                  leading-[1.5]
                                  text-white/90
                                  font-nixie
                                "
                              >
                                {item.desc}
                              </p>

                              <div ref={mListRef} className="mt-4 space-y-3">
                                {item.items.map((listItem, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3"
                                  >
                                    <div className="flex items-center gap-[5px]">
                                      <div className="flex flex-col gap-[5px]">
                                        <span className="w-[4px] h-[4px] bg-white block" />
                                        <span className="w-[4px] h-[4px] bg-white block" />
                                      </div>
                                      <div className="flex items-center h-[9px]">
                                        <span className="w-[4px] h-[4px] bg-white block" />
                                      </div>
                                    </div>

                                    <span
                                      className="
                                        text-[13px]
                                        sm:text-[16px]
                                        md:text-[18px]
                                        text-white/92
                                        font-nixie
                                      "
                                    >
                                      {listItem}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div ref={mBtnRef} className="mt-auto pt-5">
                                <button
                                  className="
                                    group
                                    flex
                                    items-center
                                    gap-[8px]
                                    text-white
                                  "
                                >
                                  <HiArrowTurnDownRight
                                    style={{
                                      fontSize: "16px",
                                      strokeWidth: "0.2",
                                      marginBottom: "6px",
                                    }}
                                  />

                                  <span
                                    className="
                                      text-[13px]
                                      sm:text-[15px]
                                      uppercase
                                      tracking-[0.08em]
                                      font-nixie
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
                              px-4
                              sm:px-6
                              pt-4
                              pb-5
                              min-h-[420px]
                              sm:min-h-[520px]
                              flex
                              flex-col
                            "
                          >
                            <div className="w-full h-[150px] sm:h-[220px] overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <span
                              className="
                                mt-4
                                text-[13px]
                                sm:text-[16px]
                                tracking-[0.18em]
                                uppercase
                                text-black/35
                                font-nixie
                              "
                            >
                              — {item.number}
                            </span>

                            <h3
                              className="
                                mt-3
                                whitespace-pre-line
                                text-[22px]
                                sm:text-[32px]
                                leading-[0.92]
                                tracking-[-0.05em]
                                uppercase
                                text-black/20
                                font-nixie
                              "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                                mt-3
                                text-[12px]
                                sm:text-[14px]
                                leading-[1.4]
                                text-black/40
                                font-nixie
                              "
                            >
                              {item.desc}
                            </p>

                            <div className="mt-auto pt-5">
                              <button
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-[8px]
                                  text-[#85A56F]/45
                                "
                              >
                                <span
                                  className="
                                    text-[24px]
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-[4px]
                                  "
                                >
                                  ↳
                                </span>

                                <span
                                  className="
                                    text-[12px]
                                    sm:text-[14px]
                                    uppercase
                                    tracking-[0.08em]
                                    font-nixie
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