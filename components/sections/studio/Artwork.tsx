"use client";

import { useState } from "react";

export default function Artwork() {
  const menu = [
    "ARTWORKS & PRINTS",
    "EDITIONS",
    "IDENTITY SYSTEMS",
    "WORKS & STUDIOS",
    "OBJECTS",
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen bg-[#e7e5e1] px-[72px] py-[40px]">
      {/* BLACK CONTAINER */}
      <div className="w-full h-[700px] bg-gradient-to-br from-[#0f0f10] via-[#0b0b0c] to-[#121214] flex items-center">
        {/* INNER CONTENT */}
        <div className="pl-[110px] flex">
          {/* IMAGE SIDE */}
          <div>
            <p className="text-[12px] font-think tracking-[0.32em] ml-[50px] uppercase text-[#5b5b5b] mb-5">
              — artworks & prints
            </p>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-[520px] h-[461px] ml-[50px] object-cover"
              />

              {/* PIXELS */}
              <div className="absolute bottom-8 -right-18 flex flex-col gap-[14px]">
                <span className="w-[10px] h-[10px] bg-[#5d5d5d]" />
                <span className="w-[10px] h-[10px] bg-[#5d5d5d]" />
               <span className="absolute left-5 bottom-3 w-[10px] h-[10px] bg-[#5d5d5d]" />
              </div>
            </div>
          </div>

          {/* RIGHT AREA */}
          <div className="relative w-[820px] h-[500px]">
            <div className="absolute bottom-0 right-[145px] w-px h-[420px] bg-[#323232] z-30" />

            <>
              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 right-[145px] h-px bg-[#323232]" />

              {/* MENU */}
              <div className="absolute right-[145px] bottom-0 flex items-end z-10">
                {menu.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => setActive(index)}
                    className={`
  relative
  overflow-hidden
  w-[64px]
  h-[420px]
  flex
  items-end
  justify-center
  pb-5
  backdrop-blur-[1px]
  transition-all
  duration-700
ease-out
 hover:bg-[#131313]

  ${
  active === index
    ? `
      bg-[linear-gradient(to_top,rgba(255,255,255,0.14),rgba(255,255,255,0.05)_45%,transparent)]

      shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]

      after:absolute
      after:inset-0
      after:bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_70%)]
    `
    : ""
}
`}
                  >
                    <div
                      className="
    absolute
    left-0
    bottom-0
    w-px
    h-full
    bg-gradient-to-t
    from-[#4a4a4a]
    via-[#2a2a2a]
    to-transparent
  "
                    />
                    <span
                      className={`
            [writing-mode:vertical-rl]
            rotate-180
            text-[18px]
            tracking-[0.08em]
            uppercase
            leading-none
            transition-colors
            duration-300
            font-display
            ${
              active === index
                ? "text-[#7d976e]"
                : "text-[#3f3f3f] hover:text-[#7d976e]"
            }
          `}
                    >
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
