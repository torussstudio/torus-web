"use client";

import Image from "next/image";

export default function ProjectQuestionAndNaming() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0">
          <div className="relative lg:flex">
            {/* SIDEBAR — DESKTOP UNCHANGED */}
            <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

            {/* CONTENT */}
            <div className="flex-1 bg-#E px-5 sm:px-8md lg:px-14xl pt-6 sm:pt-8lg pb-8 sm:pb-12 lg:pb-16">
              <p className="font-nixie  text-[13px] sm:text-[16px] md:text-[16px] leading-[1.7] sm:leading-[1.75] text-[#181818] w-full max-w-[420px]">
                From naming and identity to packaging, e-commerce, social media,
                email marketing, digital assets, and content direction, the
                project became a full launch-ready brand system built around one
                question:
              </p>

              <p
                className="
                  font-nixie

                  text-[1.75rem]
                  sm:text-[2.1rem]
                  md:text-[2.8rem]

                  lg:text-[2.8rem]
                  xl:text-[2.9rem]

                  leading-[1.18]
                  sm:leading-[1.2]

                  text-[#181818]

                  mt-7
                  sm:mt-9
                  md:mt-10
                  lg:mt-8

                  w-full
                  max-w-[720px]
                "
              >
                How do we make freshness feel real to the customer?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#191919]">
        {/* LEFT WHITE BLOCK — DESKTOP UNCHANGED */}
        <div
          className="
            hidden
            lg:block
            absolute
            top-0
            left-[calc(50%-50vw)]
            w-[calc((100vw-min(100vw,1728px))/2+5rem+200px)]
            h-full
            bg-white
            border-r
            border-black/15
          "
        />

        <div
          className="
    relative
    max-w-[1728px]
    mx-auto

    pl-0
    sm:pl-0
    md:pl-0

    lg:pl-16
    xl:pl-20

    pr-0
  "
        >
          <div className="relative lg:flex">
            {/* DESKTOP SIDEBAR — UNCHANGED */}
            <div className="hidden lg:block lg:w-[200px] lg:shrink-0" />

            {/* MAIN CONTENT */}
            <div
              className="
    flex-1

    px-[18px]
    max-[390px]:px-[16px]

    sm:px-[24px]
    md:px-[32px]

    lg:px-14
    xl:px-16

    pt-8
    sm:pt-10
    lg:pt-12

    pb-10
    sm:pb-14
    md:pb-16
    lg:pb-20
  "
            >
              <div
                className="
                  relative

                  pl-0
                  sm:pl-3
                  md:pl-4

                  lg:pl-5
                "
              >
                {/* VERTICAL LINE
                    Desktop positioning preserved.
                    Mobile/tablet repositioned cleanly.
                */}
                <div
                  className="
    hidden
    min-[480px]:block

    absolute
    w-px
    bg-white/25

    h-[270px]
    sm:h-[270px]
    md:h-[300px]

    top-[225px]
    sm:top-[225px]
    md:top-[240px]

    left-[16px]
    sm:left-[16px]
    md:left-[20px]

    lg:h-62
    lg:top-52
    lg:left-15

    xl:top-50
    xl:left-22
  "
                />

                <div className="flex-1">
                  {/* HEADING */}
                  <h2
                    className="
                      mt-3
                      sm:mt-5
                      lg:mt-8

                      font-nova

                      text-[1.45rem]
                      sm:text-[1.7rem]
                      md:text-[2.4rem]

                      lg:text-[2.5rem]
                      xl:text-[2.4rem]

                      leading-[1.15]
                      tracking-[0.01em]

                      text-white
                      uppercase

                      max-w-[560px]
                    "
                  >
                    <span className="block">NAMING THE</span>
                    <span className="block">WORLD BEFORE</span>
                    <span className="block">DESIGNING IT.</span>
                  </h2>

                  {/* TEXT + IMAGE */}
                  <div
                    className="
                      mt-9
                      sm:mt-12
                      md:mt-14

                      lg:mt-16

                      flex
                      flex-col

                      lg:flex-row
                      lg:items-start

                      gap-8
                      sm:gap-10
                      md:gap-12

                      lg:gap-16
                      xl:gap-20
                    "
                  >
                    {/* TEXT */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        sm:gap-6

                        w-full
                        max-w-[620px]

                        lg:max-w-[280px]

                        shrink-0

                        lg:ml-24
                        xl:ml-32
                      "
                    >
                      <p
                        className="
                          font-nixie

                          text-[12.5px]
                          sm:text-[16px]
                          md:text-[16px]

                          leading-[1.7]
                          sm:leading-[1.75]

                          text-white
                        "
                      >
                        The name &apos;The Spanish Alchemist&apos; was finalized
                        after exploring multiple naming directions. It gave the
                        brand a world that could hold both science and emotion.
                        The idea of the alchemist brought in a strong creative
                        base, hands-on experimentation, transformation, natural
                        ingredients, ritual, precision, and the search for
                        something rare.
                      </p>

                      <p
                        className="
                          font-nixie

                          text-[12.5px]
                          sm:text-[13px]
                          md:text-[16px]

                          leading-[1.7]
                          sm:leading-[1.75]

                          text-white
                        "
                      >
                        It also allowed us to build symbolic references,
                        including the idea of the Philosopher&apos;s Stone,
                        helping us move away from the usual skincare language
                        and build a brand that felt more distinct.
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        w-full

                        h-[300px]
                        sm:h-[380px]
                        md:h-[440px]

                        lg:w-[340px]
                        xl:w-[380px]

                        lg:h-[480px]

                        shrink-0

                        overflow-hidden
                        bg-[#2a2a2a]

                        rounded-[4px]
                        sm:rounded-[6px]

                        lg:rounded-none

                        lg:ml-32
                        lg:-mt-40
                      "
                    >
                      <Image
                        src="/images/spanish-alchemist-main.jpg"
                        alt="Team working together in a bright studio"
                        fill
                        sizes="
                          (max-width: 639px) 100vw,
                          (max-width: 1023px) 90vw,
                          380px
                        "
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
