"use client";

import Image from "next/image";

export default function TSABrandMoment() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          relative
          max-w-[1728px]
          mx-auto

          /* MOBILE / TABLET ONLY */
          pl-0
          sm:pl-0
          md:pl-0

          /* DESKTOP — EXACTLY UNCHANGED */
          lg:pl-16
          xl:pl-20

          pr-0
        "
      >
        <div className="relative lg:flex">
          {/* SIDEBAR — DESKTOP UNCHANGED */}
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

          {/* CONTENT */}
          <div
            className="
              flex-1

              /* MOBILE */
              px-[16px]

              /* TABLET */
              sm:px-[28px]
              md:px-[40px]

              /* DESKTOP — EXACTLY UNCHANGED */
              lg:px-14
              xl:px-16

              pt-0

              pb-12
              sm:pb-16
              lg:pb-20
            "
          >
            {/* IMAGE + OVERLAY CARD */}
            <div
              className="
                relative
                w-full

                /* MOBILE */
                h-[420px]

                /* TABLET */
                sm:h-[560px]

                /* DESKTOP — EXACTLY UNCHANGED */
                lg:h-[640px]
                xl:h-[720px]

                overflow-hidden
                bg-[#dedcdc]
              "
            >
              <Image
                src="/images/spanish-alchemist-main.jpg"
                alt="People gathered in a warmly lit lounge space"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />

              {/* OVERLAY CARD */}
              <div
                className="
                  absolute

                  /* MOBILE */
                  bottom-[14px]
                  left-[14px]
                  right-[14px]
                  w-auto
                  h-[250px]

                  /* SMALL MOBILE */
                  max-[390px]:bottom-[10px]
                  max-[390px]:left-[10px]
                  max-[390px]:right-[10px]
                  max-[390px]:h-[245px]

                  /* TABLET */
                  sm:bottom-10
                  sm:right-10
                  sm:left-auto
                  sm:w-[68%]
                  sm:h-[360px]

                  /* DESKTOP — EXACTLY UNCHANGED */
                  lg:bottom-12
                  lg:right-12
                  lg:w-[54%]
                  xl:w-[52%]
                  lg:h-[400px]

                  /* BACKGROUND */
                  bg-[#EAE9E9]/90
                  backdrop-blur-sm

                  /* MOBILE */
                  px-[18px]
                  py-[20px]

                  /* TABLET */
                  sm:px-10
                  sm:py-10

                  /* DESKTOP — EXACTLY UNCHANGED */
                  lg:px-12
                  lg:py-12

                  flex
                  flex-col
                  justify-end
                  overflow-hidden
                "
              >
                {/* TSA LOGO */}
                <div
                  className="
                    relative

                    /* MOBILE */
                    w-full
                    h-[42px]
                    mb-[12px]

                    /* SMALL MOBILE */
                    max-[390px]:h-[38px]
                    max-[390px]:mb-[10px]

                    /* TABLET — ORIGINAL STRUCTURE */
                    sm:ml-6
                    sm:h-auto
                    sm:w-auto
                    sm:mb-0
                  "
                >
                  <div
                    className="
                      absolute

                      /* MOBILE */
                      left-0
                      bottom-0

                      /* TABLET */
                      sm:-top-1
                      sm:left-12
                    "
                  >
                    <Image
                      src="/images/tsa.png"
                      alt="TSA signature logo"
                      width={500}
                      height={140}
                      className="
                        w-[105px]
                        max-[390px]:w-[95px]

                        sm:w-[130px]
                        lg:w-[145px]

                        h-auto
                        object-contain
                      "
                    />
                  </div>

                  {/* TABLET / DESKTOP SPACER — ORIGINAL SIZING */}
                  <div
                    className="
                      hidden
                      sm:block

                      w-[130px]
                      lg:w-[145px]

                      aspect-[500/140]
                      invisible
                    "
                  />
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    font-nixie

                    /* MOBILE */
                    text-[11.5px]
                    leading-[1.65]
                    text-[#6b6b6b]
                    mt-0
                    ml-0
                    max-w-full

                    /* SMALL MOBILE */
                    max-[390px]:text-[11px]
                    max-[390px]:leading-[1.6]

                    /* TABLET — ORIGINAL VALUES */
                    sm:text-[14px]
                    sm:leading-[1.8]
                    sm:mt-7
                    sm:ml-40
                    sm:max-w-[320px]

                    /* DESKTOP — EXACTLY UNCHANGED */
                    lg:text-[13px]
                    lg:ml-24
                    lg:max-w-[320px]
                  "
                >
                  Instead of creating a purely corporate skincare logo, we
                  developed a handcrafted signature-style mark. It gave the
                  brand the feeling of a real presence behind the product, the
                  Alchemist, someone involved in the making, testing, and care
                  behind each formulation. This thinking extended into the
                  packaging language as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}