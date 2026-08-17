"use client";

import Image from "next/image";

export default function BuildingAlchemistWorld() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className=" relative max-w-[1728px] mx-auto pl-0 sm:pl-0 md:pl-0 lg:pl-16 xl:pl-20 pr-0">
        <div className="relative lg:flex">
          {/* SIDEBAR — desktop unchanged */}
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

          {/* CONTENT */}
          <div className=" flex-1 px-[18px] max-[390px]:px-[16px] sm:px-[28px] md:px-[40px] lg:px-14 xl:px-16 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
            {/* ============ DESKTOP / TABLET — UNCHANGED ============ */}
            <div className="hidden sm:block relative w-full aspect-[967/810]">
              {/* HEADING */}
              <h2 className="absolute left-[1%] top-0 w-[34%] font-nova text-[1.7rem] md:text-[2rem] lg:text-[2.1rem] xl:text-[2.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase">
                <span className="block">BUILDING</span>
                <span className="block">THE WORLD</span>
                <span className="block">OF THE</span>
                <span className="block">ALCHEMIST.</span>
              </h2>

              {/* INTRO TEXT */}
              <p className="absolute left-[46%] top-[1%] w-[26%] font-nixie text-[13px] lg:text-[16px] leading-[1.6] text-[#181818]">
                We created a flexible <br /> identity system with three <br /> key
                layers:
              </p>

              {/* LARGE IMAGE */}
              <div className="absolute left-[40%] top-[16.5%] w-[58%] h-[57%] overflow-hidden bg-[#dedcdc]">
                <Image
                  src="/images/alchemist-desk-overhead.jpg"
                  alt="Overhead view of a person writing at a rug-covered desk with a cat nearby"
                  fill
                  sizes="44vw"
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
              <div className="absolute left-[18.5%] top-[48.5%] w-[17.5%] h-[25.5%] overflow-hidden bg-[#dedcdc]">
                <Image
                  src="/images/alchemist-workshop.jpg"
                  alt="Craftsman working in a small workshop"
                  fill
                  sizes="18vw"
                  className="object-cover"
                />
              </div>

              {/* CLOSING PARAGRAPHS */}
              <div className="absolute left-[18.5%] top-[76%] w-[35%] flex flex-col gap-4">
                <p className="font-nixie text-[13px] lg:text-[16px] leading-[1.75] text-[#181818]">
                  The full The Spanish Alchemist logo, the shorter TSA
                  signature, and the circular TSA seal. Each had a specific
                  role.
                </p>

                <p className="font-nixie text-[13px] lg:text-[16px] leading-[1.75] text-[#181818]">
                  The full logo created brand presence. The TSA signature
                  worked across smaller moments. The seal acted like a
                  freshness stamp, a mark of trust, approval, and
                  authenticity.
                </p>
              </div>
            </div>

            {/* ============ MOBILE — RESPONSIVE STACKED FLOW ============ */}
            <div className=" flex sm:hidden flex-col items-center w-full gap-7 pb-4">
              {/* HEADING */}
              <h2 className=" w-full max-w-[420px] font-nova text-[1.65rem] max-[390px]:text-[1.5rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase text-center">
                <span className="block">BUILDING</span>
                <span className="block">THE WORLD</span>
                <span className="block">OF THE</span>
                <span className="block">ALCHEMIST.</span>
              </h2>

              {/* INTRO TEXT */}
              <p className=" w-full max-w-[420px] font-nixie text-[13px] leading-[1.7] text-[#5c5c5c] text-center">
                We created a flexible identity system with three key layers:
              </p>

              {/* LARGE IMAGE */}
              <div className=" relative w-full max-w-[520px] h-[300px] max-[390px]:h-[270px] overflow-hidden bg-[#dedcdc]">
                <Image
                  src="/images/alchemist-desk-overhead.jpg"
                  alt="Overhead view of a person writing at a rug-covered desk with a cat nearby"
                  fill
                  sizes="calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
            <div className=" relative w-full max-w-[520px] h-[220px] max-[390px]:h-[200px] overflow-hidden bg-[#dedcdc]">
                <Image
                  src="/images/alchemist-workshop.jpg"
                  alt="Craftsman working in a small workshop"
                  fill
                  sizes="calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>

              {/* CLOSING PARAGRAPHS */}
              <div className=" w-full max-w-[420px] flex flex-col gap-4 text-center" >
                <p className="font-nixie text-[13px] leading-[1.75] text-[#5c5c5c]">
                  The full The Spanish Alchemist logo, the shorter TSA
                  signature, and the circular TSA seal. Each had a specific
                  role.
                </p>

                <p className="font-nixie text-[13px] leading-[1.75] text-[#5c5c5c]">
                  The full logo created brand presence. The TSA signature
                  worked across smaller moments. The seal acted like a
                  freshness stamp, a mark of trust, approval, and
                  authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}