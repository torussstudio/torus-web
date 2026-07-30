"use client";

import Image from "next/image";

export default function StudioIntro() {
  return (
    <section className="relative w-full bg-[#EAE7E2]">
      {/* Same max-width wrapper as StudioHero so both sections line up
          at every breakpoint (1728px freeze, centered beyond that). */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT — gallery image. aspect-[8/9] matches the screenshot's
              portrait ratio (~616x696) and scales cleanly at any width,
              so no fixed-height breakpoints are needed here. */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[8/9] overflow-hidden">
              <Image
                src="/images/artwork1.avif"
                alt="Visitor seated on a bench viewing paintings in a gallery"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — text column. Grid items stretch to the image's
              height by default at lg+, so justify-between naturally pins
              the paragraphs to the top and the heading to the bottom —
              matching the screenshot without any magic min-height number.
              Below lg (stacked layout) there's no shared row height, so
              gap-12 supplies the spacing instead. */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12 lg:gap-0">
            <div className="flex flex-col gap-8 sm:gap-10 max-w-[380px]">
              <p className="font-rethink text-[15px] sm:text-[16px] leading-[1.75] text-black/70">
                A practice where business thinking and cultural thinking can
                coexist naturally.
              </p>

              <p className="font-rethink text-[15px] sm:text-[16px] leading-[1.75] text-black/70">
                Over time, we hope Toruss evolves into more than a studio
                alone, perhaps into a broader ecosystem of: creative
                practice, education, publishing, archives, objects, cultural
                initiatives, and shared learning.
              </p>
            </div>

            <h2 className="font-display text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[2.8rem] xl:text-[2.8rem] 2xl:text-[3rem] leading-[1.15] tracking-[0.01em] text-[#80AD76]">
              Quietly global.
              <br />
              Deeply human.
              <br />
              Rooted in curiosity.
            </h2>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 h-px bg-black/40" />
      </div>
    </section>
  );
}