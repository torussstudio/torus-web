import { values } from "@/lib/constants";
import { HiArrowTurnDownRight } from "react-icons/hi2";



export default function UXPage() {
  return (
    <section className="w-full bg-[#f3f3f0] overflow-hidden">
      <div className="grid grid-cols-12 border border-[#b8b8b3]">
        {/* =========================================================
        DESKTOP — FULLY UNTOUCHED
        ========================================================= */}

        {/* ================= TOP LEFT IMAGE ================= */}
        <div className="col-span-12 lg:col-span-6 h-[680px] border-r border-[#b8b8b3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* ================= TOP RIGHT CONTENT ================= */}
        <div className="col-span-12 lg:col-span-6 h-[680px] flex flex-col px-8 md:px-12 lg:px-16 pt-12 lg:pt-14">
          <p className="text-[15px] tracking-[0.38em] uppercase font-think text-[#575757] mb-7">
            A NOTE FROM THE STUDIO
          </p>

          <h1 className="max-w-[620px] text-[34px] md:text-[42px] lg:text-[50px] leading-[1.08] tracking-[-0.04em] uppercase font-display text-[#1e1e1e]">
            ON ATTENTION, CARE, AND THE QUIET INTENT BEHIND EVERYTHING WE MAKE.
          </h1>

          <p className="mt-8 max-w-[430px] text-[13px] font-rethink leading-[1.6] text-[#666666]">
            We believe meaningful work comes from paying attention, to people,
            context, systems, and the details that often go unnoticed. We’re
            drawn to ideas that evolve with time, shaped with clarity, care,
            and a certain quiet intent.
          </p>

          <div className="mt-auto pb-7">
            <button
              className="
                group
                flex
                items-center
                gap-[10px]
                text-[#85A56F]/85
                cursor-pointer
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
                READ OUR STORY
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
        CREATIVE MOBILE + TABLET VALUES
        ========================================================= */}

        {values.map((item, index) => (
          <div
            key={index}
            className={`
              col-span-12
              md:col-span-6
              lg:col-span-3
              border-t border-[#b8b8b3]
              ${
                index !== 1 && index !== 3
                  ? "md:border-r"
                  : ""
              }
              ${index !== 3 ? "lg:border-r" : ""}
              relative
              overflow-hidden
              bg-[#f3f3f0]
            `}
          >
            {/* MOBILE CREATIVE LAYOUT */}
            <div className="lg:hidden relative min-h-[230px] px-6 py-7 flex flex-col justify-between">
              {/* BIG BG NUMBER */}
              <span
                className="
                  absolute
                  right-[-10px]
                  top-[-28px]
                  text-[120px]
                  leading-none
                  font-think
                  text-black/[0.03]
                  pointer-events-none
                "
              >
                {item.no}
              </span>

              {/* TOP */}
              <div className="flex items-center justify-between relative z-10">
                <div className="w-[42px] h-[42px] border border-[#b8b8b3] rounded-full flex items-center justify-center">
                  <span className="text-[11px] tracking-[0.22em] text-[#666] font-think">
                    {item.no}
                  </span>
                </div>

                <div className="w-[70px] h-px bg-[#b8b8b3]" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-10">
                <h3
                  className={`
                    text-[34px]
                    sm:text-[42px]
                    leading-[0.95]
                    tracking-[-0.05em]
                    uppercase
                    font-display
                    ${
                      item.green
                        ? "text-[#8daa7f]"
                        : "text-[#7a7a7a]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[13px]
                    tracking-[0.28em]
                    uppercase
                    text-[#8a8a8a]
                    font-think
                  "
                >
                  {item.sub}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-10 flex justify-between items-end relative z-10">
                <div className="w-[50px] h-[1px] bg-[#b8b8b3]" />

                <HiArrowTurnDownRight
                  className="
                    text-[22px]
                    text-[#85A56F]/70
                  "
                />
              </div>
            </div>

            {/* DESKTOP ORIGINAL */}
            <div className="hidden lg:flex min-h-[260px] flex-col justify-between px-10 py-8">
              <span className="text-[16px] text-right font-think tracking-[0.24em] text-[#3e3e3e]">
                — {item.no}
              </span>

              <div className="pb-2 flex justify-center">
                <div className="w-[360px] flex justify-end">
                  <h3
                    className={`
                      text-[30px]
                      leading-[1.12]
                      uppercase
                      font-medium
                      tracking-[-0.03em]
                      text-right
                      ${
                        item.green
                          ? "text-[#8daa7f]"
                          : "text-[#7a7a7a]"
                      }
                    `}
                  >
                    {item.title}
                    <br />
                    {item.sub}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* =========================================================
        BOTTOM LEFT
        ========================================================= */}

        <div className="col-span-12 md:col-span-6 lg:col-span-3 border-t border-[#b8b8b3] lg:border-r relative overflow-hidden">
          {/* MOBILE */}
          <div className="lg:hidden min-h-[240px] px-6 py-7 flex flex-col justify-between">
            <span
              className="
                absolute
                right-[-10px]
                bottom-[-10px]
                text-[120px]
                leading-none
                font-think
                text-black/[0.03]
              "
            >
              05
            </span>

            <div className="flex justify-between items-center">
              <span className="text-[13px] tracking-[0.24em] text-[#666] font-think">
                — 05
              </span>

              <div className="w-[70px] h-px bg-[#b8b8b3]" />
            </div>

            <h3
              className="
                text-[36px]
                sm:text-[44px]
                leading-[0.95]
                tracking-[-0.05em]
                uppercase
                text-[#7a7a7a]
                font-display
              "
            >
              WORK THAT
              <br />
              LEAVES A TRACE
            </h3>

            <div className="flex justify-end">
              <HiArrowTurnDownRight className="text-[24px] text-[#85A56F]/70" />
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex min-h-[250px] pl-10 pr-16 py-8 flex-col justify-between">
            <div className="flex justify-center">
              <div className="w-[260px] flex justify-end translate-x-[25px]">
                <span className="text-[16px] font-think tracking-[0.24em] text-[#3e3e3e]">
                  — 05
                </span>
              </div>
            </div>

            <div className="pb-2 flex justify-center">
              <div className="w-[360px] flex justify-end translate-x-[18px]">
                <h3
                  className="
                    text-[30px]
                    leading-[1.12]
                    uppercase
                    font-medium
                    tracking-[-0.03em]
                    text-right
                    text-[#7a7a7a]
                  "
                >
                  WORK THAT
                  <br />
                  LEAVES A TRACE
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
        BOTTOM CENTER
        ========================================================= */}

        <div className="col-span-12 md:col-span-6 lg:col-span-6 border-t border-[#b8b8b3] lg:border-r relative overflow-hidden">
          {/* MOBILE */}
          <div className="lg:hidden min-h-[240px] px-6 py-8 flex flex-col justify-between">
            <p
              className="
                text-[24px]
                sm:text-[30px]
                leading-[1.18]
                tracking-[-0.04em]
                uppercase
                text-right
                text-[#5e5e5e]
                font-display
                ml-auto
                max-w-[500px]
              "
            >
              WE WORK BEST WITH PEOPLE WHO VALUE DEPTH OVER SPEED.
            </p>

            <div className="flex justify-end">
              <button
                className="
                  flex
                  items-center
                  gap-2
                  text-[#85A56F]
                "
              >
                <span className="text-[14px] tracking-[0.15em] uppercase">
                  Explore
                </span>

                <HiArrowTurnDownRight className="text-[18px]" />
              </button>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex min-h-[250px] items-end justify-end px-10 py-10">
            <p className="w-[320px] text-right text-[16px] leading-[1.45] text-[#666666]">
              We tend to work best with people who are invested in what they’re
              building, who care about depth, not just speed.
            </p>
          </div>
        </div>

        {/* =========================================================
        BOTTOM RIGHT IMAGE
        ========================================================= */}

        <div className="col-span-12 lg:col-span-3 min-h-[280px] lg:min-h-[250px] border-t border-[#b8b8b3] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1971&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* MOBILE OVERLAY */}
          <div className="lg:hidden absolute inset-0 bg-black/15" />

          <div className="lg:hidden absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-white/80">
                Final Thought
              </p>

              <h3 className="mt-2 text-[28px] leading-[0.95] uppercase text-white font-display">
                BUILT
                <br />
                WITH INTENT
              </h3>
            </div>

            <HiArrowTurnDownRight className="text-[22px] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}