import Image from "next/image";

export default function StudioArchives() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      <div className="relative max-w-[1728px] mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-16 pt-0 sm:pt-1 lg:pt-2 pb-8 sm:pb-14 lg:pb-20">
        {/* ============ ROW 1 — bordered grid: top line, vertical divider, bottom line ============ */}
        <div
          className="mt-1 sm:mt-2 lg:mt-3 border-t border-b border-black/50"
          style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            {/* LEFT — B/W interior image, fills its cell flush to the borders */}
            <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-black/50 flex items-center justify-center p-2 sm:p-3 lg:p-4">
              <div className="relative w-full max-w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[440px] lg:h-[500px] xl:h-[560px] overflow-hidden">
                <Image
                  src="/images/strategy.avif"
                  alt="Studio interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* RIGHT — label + heading at top, list pinned to bottom of the cell */}
            <div className="lg:col-span-6 flex flex-col justify-between pt-4 sm:pt-6 lg:pt-6 pb-8 sm:pb-10 lg:pb-10 px-0 lg:pl-10 xl:pl-14">
              <div className="-mt-2 sm:-mt-3 lg:-mt-4">
                <span className="font-nixie text-[12px] sm:text-[16px] md:text-[16px] uppercase tracking-[0.18em] text-[#181818]">
                  Selected Archives
                </span>

                <h2
                  className="
                    font-nova
                    text-[1.5rem] xs:text-[1.7rem] sm:text-[2.5rem] md:text-[2.7rem] lg:text-[2.6rem] xl:text-[2.75rem] 2xl:text-[3rem]
                    leading-[1.15] tracking-[0.01em] text-[#181818]
                    mt-4 sm:mt-6 lg:mt-8
                  "
                >
                  NOT EVERY PROJECT
                  <br />
                  BEGINS WITH THE
                  <br />
                  SAME PROBLEM
                </h2>
              </div>

              <ul className="font-nixie text-[13px] sm:text-[17px] leading-[1.85] text-[#181818] mt-8 sm:mt-14 lg:mt-0 space-y-0">
                <li>Some begin with perception.</li>
                <li>Some with clarity.</li>
                <li>Some with emotional disconnect.</li>
                <li>Some with growth.</li>
                <li>Some with storytelling.</li>
                <li>Some with atmosphere.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============ ROW 2 — portrait image + copy + sketch image + closing line ============ */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start sm:pl-6 lg:pl-10 xl:pl-14">
          <div className="lg:col-span-4 relative w-full lg:w-[95%] lg:ml-auto xl:w-full xl:ml-0 h-[260px] xs:h-[300px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px] overflow-hidden">
            <Image
              src="/images/digital.avif"
              alt="Studio member walking with materials"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* RIGHT — paragraph, then nested sketch image + closing copy */}
          <div className="lg:col-span-8 lg:col-start-5 flex flex-col">
            <p className="font-nixie text-[14px] sm:text-[17px] leading-[1.85] text-[#181818] max-w-[460px]">
              Over time, the studio has moved across:
              <br />
              <br />
              hospitality, architecture, consumer brands, SaaS, AI, wellness,
              culture, exports, education, digital products, spatial
              experiences, and artistic explorations.
              <br />
              <br />
              Rather than approaching projects through fixed
              <span className="hidden lg:inline">
                {" "}
                <br />
              </span>{" "}
              formulas, we prefer allowing the nature of the
              <span className="hidden lg:inline">
                {" "}
                <br />
              </span>{" "}
              business itself to shape the direction of the work.
            </p>

            <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <div className="relative w-full sm:w-[240px] md:w-[270px] lg:w-[290px] h-[200px] xs:h-[220px] sm:h-[220px] md:h-[240px] lg:h-[250px] shrink-0 overflow-hidden">
                <Image
                  src="/images/curiosity.avif"
                  alt="Hands sketching in a notebook"
                  fill
                  sizes="(max-width: 640px) 100vw, 210px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:self-end">
                <p className="font-nixie text-[14px] sm:text-[17px] leading-[1.85] text-[#181818] max-w-[300px]">
                  Each project becomes its own world, with its own pace,
                  emotional tone, visual language, and system of thinking.
                </p>

                <a
                  href="#"
                  className="group mt-6 sm:mt-8 inline-flex items-center gap-2 w-fit font-nixie text-[16px] uppercase tracking-[0.12em] text-[#80c46c]"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↳
                  </span>
                  VIEW OUR PROJECTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}