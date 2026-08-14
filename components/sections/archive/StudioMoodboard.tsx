"use client";

import Image from "next/image";
import { images } from "@/lib/constants";
import { mobileAspects } from "@/lib/constants";

export default function StudioMoodboard() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          relative
          max-w-[1728px]
          mx-auto

          /* MOBILE/TABLET */
          pl-0
          sm:pl-0
          md:pl-0

          /* DESKTOP — UNCHANGED */
          lg:pl-16
          xl:pl-20

          pr-0
        "
      >
        <div className="relative lg:flex">
          {/* SIDEBAR — desktop unchanged */}
          <div
            className="
              hidden
              lg:block
              lg:w-[200px]
              lg:shrink-0
              bg-white
              border-r
              border-black
            "
          />

          {/* CONTENT */}
          <div
            className="
              flex-1

              /* MOBILE */
              px-[18px]

              /* SMALL MOBILE */
              max-[390px]:px-[16px]

              /* TABLET */
              sm:px-[28px]
              md:px-[40px]

              /* DESKTOP — UNCHANGED */
              lg:px-14
              xl:px-16

              pt-10
              sm:pt-14
              lg:pt-16

              pb-0
            "
          >
            {/* DESKTOP / TABLET — SCATTERED MOODBOARD */}
            <div
              className="
                hidden
                sm:block
                relative
                w-full
                aspect-[671/760]
              "
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`
                    absolute
                    overflow-hidden
                    bg-[#dedcdc]
                    ${img.className}
                  `}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* MOBILE — STACKED RESPONSIVE LAYOUT */}
            <div
              className="
                flex
                sm:hidden
                flex-col
                items-center
                gap-[16px]
                w-full
                pb-8
              "
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`
                    relative
                    w-full
                    max-w-[520px]
                    overflow-hidden
                    bg-[#dedcdc]
                    ${mobileAspects[i]}
                  `}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="calc(100vw - 32px)"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}