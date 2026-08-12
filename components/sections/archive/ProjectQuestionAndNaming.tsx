"use client";

import Image from "next/image";

export default function ProjectQuestionAndNaming() {
  return (
    <>
      {/* ============ SECTION 1 — LIGHT: "How do we make freshness feel real?" ============ */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0">
          <div className="relative lg:flex">
            {/* SIDEBAR — border-black, AreasOfPracticeHeader-nte border-ode
          continuous aayi thonnan */}
            <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

            <div className="flex-1 bg-[#EAE9E9] px-6 sm:px-10 lg:px-14 xl:px-16 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16">
              <p className="font-nixie text-[14px] sm:text-[15px] leading-[1.75] text-[#5c5c5c] max-w-[420px]">
                From naming and identity to packaging, e-commerce, social media,
                email marketing, digital assets, and content direction, the
                project became a full launch-ready brand system built around one
                question:
              </p>

              <p className="font-nixie text-[1.9rem] sm:text-[2.4rem] md:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.9rem] leading-[1.2] text-[#3a3a3a] mt-8 sm:mt-10 max-w-[720px]">
                How do we make freshness feel real to the customer?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — DARK: "Naming the world before designing it." ============ */}
      <section className="relative w-full overflow-hidden bg-[#191919]">
        {/* Left white block — screen edge mutal content start vare
      (padding + sidebar width onnich) full-bleed white */}
        <div
          className="hidden lg:block absolute top-0 h-full bg-white border-r border-black/15"
          style={{
            left: "calc(50% - 50vw)",
            width: "calc((100vw - min(100vw, 1728px)) / 2 + 5rem + 200px)",
          }}
        />

        <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0">
          <div className="relative lg:flex">
            <div className="hidden lg:block lg:w-[200px] lg:shrink-0" />

            <div className="flex-1 px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
              <div className="relative pl-5 sm:pl-6">
                <div className="absolute w-px h-42 sm:h-60 top-52 sm:top-50 left-15 sm:left-22 bg-white/25" />

                <div className="flex-1">
                  <h2 className="mt-4 sm:mt-6 lg:mt-8 font-nova text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.4rem] leading-[1.15] tracking-[0.01em] text-white uppercase max-w-[560px]">
                    <span className="block">NAMING THE</span>
                    <span className="block">WORLD BEFORE</span>
                    <span className="block">DESIGNING IT.</span>
                  </h2>

                  <div className="mt-10 sm:mt-14 lg:mt-16 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-20">
                    <div className="flex flex-col gap-5 sm:gap-6 max-w-[280px] shrink-0 lg:ml-24 xl:ml-32">
                      <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.75] text-white/60">
                        The name &apos;The Spanish Alchemist&apos; was finalized
                        after exploring multiple naming directions. It gave the
                        brand a world that could hold both science and emotion.
                        The idea of the alchemist brought in a strong creative
                        base, hands-on experimentation, transformation, natural
                        ingredients, ritual, precision, and the search for
                        something rare.
                      </p>
                      <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.75] text-white/60">
                        It also allowed us to build symbolic references,
                        including the idea of the Philosopher&apos;s Stone,
                        helping us move away from the usual skincare language
                        and build a brand that felt more distinct.
                      </p>
                    </div>

                    <div className="relative w-full lg:w-[340px] xl:w-[380px] h-[420px] sm:h-[520px] lg:h-[480px] shrink-0 overflow-hidden bg-[#2a2a2a] lg:ml-32 lg:-mt-40">
                      {" "}
                      <Image
                        src="/images/spanish-alchemist-main.jpg"
                        alt="Team working together in a bright studio"
                        fill
                        sizes="(max-width: 1024px) 100vw, 380px"
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
