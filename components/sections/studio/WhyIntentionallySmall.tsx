"use client";

import Image from "next/image";

export default function WhyIntentionallySmall() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      {/* StudioHero-nte same max-width & padding scale thanne use
          cheyyunnu — full page-il width consistency maintain aavan */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 lg:py-16">
        {/* ============ HEADING ============ */}
       <div className="grid grid-cols-1 lg:grid-cols-12">
  <h2
    className="
      lg:col-span-10 lg:col-start-3 xl:col-start-3
      font-display
      text-[1.9rem] sm:text-[2.5rem] md:text-[2.9rem] lg:text-[2.6rem] xl:text-[3.1rem] 2xl:text-[3.4rem]
      leading-[1.12] sm:leading-[1.1] lg:leading-[1.08]
      tracking-[0.01em]
      text-black
      max-w-3xl
    "
  >
    WHY WE REMAIN
    <br />
    INTENTIONALLY SMALL
  </h2>
</div>

        {/* ============ DIVIDER + PARAGRAPHS ============ */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-5 flex items-stretch gap-6 sm:gap-8 lg:gap-10">
            {/* Vertical rule — parent-il items-stretch ullathukond
                ee div automatic aayi text block-nte height edukkum,
                explicit height set cheyyenda avashyam illa */}
            <div className="hidden sm:block w-px bg-black/15 shrink-0" />

            <div className="flex flex-col gap-5 sm:gap-6 max-w-[460px]">
              <p className="font-rethink text-[13px] sm:text-[14px] leading-[1.75] text-black/55">
                We&apos;ve intentionally resisted building a large-volume
                studio structure. Not because growth isn&apos;t important.
                But because proximity to the work matters deeply to us.
              </p>
              <p className="font-rethink text-[13px] sm:text-[14px] leading-[1.75] text-black/55">
                Smaller teams allow: deeper thinking, stronger coherence,
                calmer collaboration, and genuine involvement throughout the
                process. Clients work directly with the people shaping the
                work rather than layers of disconnected departments. It
                keeps the process human. It allows conversations to remain
                thoughtful. Decisions to remain intentional. And the work to
                retain emotional depth.
              </p>
              <p className="font-rethink text-[13px] sm:text-[14px] leading-[1.75] text-black/55">
                We&apos;re less interested in becoming the loudest studio in
                the room. More interested in building a practice whose work
                continues to hold meaning years later.
              </p>
            </div>
          </div>
        </div>

        {/* ============ IMAGE — full width within container padding,
            heading-nte offset illathe (screenshot-il kaanunna pole) ============ */}
<div className="mt-12 sm:mt-14 lg:mt-16 relative w-[calc(100%+(100vw-100%)/2-10rem)] sm:w-[calc(100%+(100vw-100%)/2-14rem)] lg:w-[calc(100%+(100vw-100%)/2-20rem)] -ml-[calc((100vw-100%)/2)] h-[200px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[470px] overflow-hidden">
  <Image
    src="/images/cohart.avif"
    alt="Team collaborating around a table"
    fill
    sizes="100vw"
    className="object-cover"
  />
</div>
      </div>
    </section>
  );
}