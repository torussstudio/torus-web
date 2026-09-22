// "use client";

// import { menu } from "@/lib/constants";
// import { useRef, useState, useLayoutEffect } from "react";
// import gsap from "gsap";

// export default function Artwork() {
//   const [active, setActive] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);

//   const desktopImgRef = useRef<HTMLImageElement>(null);
//   const desktopLabelRef = useRef<HTMLParagraphElement>(null);
//   const desktopBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
//   const desktopLineRef = useRef<HTMLDivElement>(null);

//   const mobileImgRef = useRef<HTMLImageElement>(null);
//   const mobileLabelRef = useRef<HTMLParagraphElement>(null);
//   const mobileBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

//   const prevActive = useRef(0);

//   // ---- ENTRANCE ANIMATION (runs once on mount) ----
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       // desktop entrance
//       tl.fromTo(
//         desktopImgRef.current,
//         { autoAlpha: 0, scale: 1.08, clipPath: "inset(0 0 100% 0)" },
//         { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1 }
//       )
//         .fromTo(
//           desktopLabelRef.current,
//           { autoAlpha: 0, x: -16 },
//           { autoAlpha: 1, x: 0, duration: 0.6 },
//           "-=0.7"
//         )
//         .fromTo(
//           desktopLineRef.current,
//           { scaleY: 0 },
//           { scaleY: 1, duration: 0.9, transformOrigin: "bottom" },
//           "-=0.9"
//         )
//         .fromTo(
//           desktopBtnRefs.current,
//           { autoAlpha: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
//           {
//             autoAlpha: 1,
//             y: 0,
//             clipPath: "inset(0% 0 0 0)",
//             duration: 0.7,
//             stagger: 0.08,
//           },
//           "-=0.6"
//         );

//       // mobile entrance
//       const mtl = gsap.timeline({ defaults: { ease: "power3.out" } });
//       mtl
//         .fromTo(
//           mobileImgRef.current,
//           { autoAlpha: 0, scale: 1.08 },
//           { autoAlpha: 1, scale: 1, duration: 0.9 }
//         )
//         .fromTo(
//           mobileLabelRef.current,
//           { autoAlpha: 0, y: -8 },
//           { autoAlpha: 1, y: 0, duration: 0.5 },
//           "-=0.6"
//         )
//         .fromTo(
//           mobileBtnRefs.current,
//           { autoAlpha: 0, x: -24 },
//           { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.08 },
//           "-=0.4"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // ---- ACTIVE-CHANGE ANIMATION ----
//   useLayoutEffect(() => {
//     if (prevActive.current === active) return;
//     prevActive.current = active;

//     const ctx = gsap.context(() => {
//       // desktop image swap: quick glitch-scan then settle
//       const dImg = desktopImgRef.current;
//       if (dImg) {
//         gsap
//           .timeline()
//           .to(dImg, {
//             clipPath: "inset(0 0 100% 0)",
//             duration: 0.28,
//             ease: "power2.in",
//           })
//           .set(dImg, { clipPath: "inset(0 0 100% 0)" })
//           .to(dImg, {
//             clipPath: "inset(0 0 0% 0)",
//             duration: 0.55,
//             ease: "power3.out",
//           });
//       }

//       // desktop label: slide/flicker text change
//       const dLabel = desktopLabelRef.current;
//       if (dLabel) {
//         gsap
//           .timeline()
//           .to(dLabel, { autoAlpha: 0, x: 10, duration: 0.18, ease: "power1.in" })
//           .fromTo(
//             dLabel,
//             { autoAlpha: 0, x: -10 },
//             { autoAlpha: 1, x: 0, duration: 0.35, ease: "power2.out" }
//           );
//       }

//       // active button glow pulse
//       const activeBtn = desktopBtnRefs.current[active];
//       if (activeBtn) {
//         gsap.fromTo(
//           activeBtn,
//           { boxShadow: "inset 0 0 0px rgba(125,151,110,0)" },
//           {
//             boxShadow: "inset 0 0 40px rgba(125,151,110,0.15)",
//             duration: 0.15,
//             yoyo: true,
//             repeat: 1,
//             ease: "power1.inOut",
//           }
//         );
//       }

//       // mobile image swap
//       const mImg = mobileImgRef.current;
//       if (mImg) {
//         gsap
//           .timeline()
//           .to(mImg, { autoAlpha: 0, scale: 1.03, duration: 0.2, ease: "power1.in" })
//           .fromTo(
//             mImg,
//             { autoAlpha: 0, scale: 1.05 },
//             { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power3.out" }
//           );
//       }

//       const mLabel = mobileLabelRef.current;
//       if (mLabel) {
//         gsap
//           .timeline()
//           .to(mLabel, { autoAlpha: 0, y: -6, duration: 0.15 })
//           .fromTo(
//             mLabel,
//             { autoAlpha: 0, y: 6 },
//             { autoAlpha: 1, y: 0, duration: 0.3 }
//           );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [active]);

//   const handleEnterBtn = (index: number, isDesktop: boolean) => {
//     if (index === active) return;
//     const btn = isDesktop
//       ? desktopBtnRefs.current[index]
//       : mobileBtnRefs.current[index];
//     if (!btn) return;
//     gsap.to(btn, { y: -4, duration: 0.25, ease: "power2.out" });
//   };

//   const handleLeaveBtn = (index: number, isDesktop: boolean) => {
//     const btn = isDesktop
//       ? desktopBtnRefs.current[index]
//       : mobileBtnRefs.current[index];
//     if (!btn) return;
//     gsap.to(btn, { y: 0, duration: 0.3, ease: "power2.out" });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className=" bg-[#e7e5e1] px-[72px] py-[40px] max-lg:px-[28px] max-lg:py-[28px] max-md:px-4 max-md:py-0"
//     >
//       <div className="artwork-scale-wrap origin-center">
//         {/* =========================
//           DESKTOP
//       ========================= */}
//         <div
//           className="
//           hidden
//           lg:flex
//           w-full
//           h-[700px]
//           bg-gradient-to-br
//           from-[#0f0f10]
//           via-[#0b0b0c]
//           to-[#121214]
//           items-center
//           justify-center
//         "
//         >
//           <div
//             className="
//             w-full
//             max-w-[1500px]
//             mx-auto
//             flex
//             items-center
//             justify-between
//             px-[40px]
//             xl:px-[60px]
//           "
//           >
//             {/* IMAGE SIDE */}
//             <div>
//               <p
//                 ref={desktopLabelRef}
//                 className="
//                 text-[15px]
//                 font-recife
//                 tracking-[0.32em]
//                 ml-[50px]
//                 uppercase
//                 text-white
//                 mb-5
//                 transition-all
//                 duration-300
//               "
//               >
//                 — {menu[active]}
//               </p>

//               <div className="relative overflow-hidden">
//                 <img
//                   ref={desktopImgRef}
//                   src="/images/artwork1.avif"
//                   alt="image"
//                   className="w-[520px] h-[456px] ml-[50px] object-cover"
//                   style={{ willChange: "clip-path, transform" }}
//                 />

//                 {/* PIXELS */}
//                 <div className="absolute bottom-8 -right-18 flex flex-col gap-[14px]">
//                   <span className="w-[10px] h-[10px] bg-[#5d5d5d]" />
//                   <span className="w-[10px] h-[10px] bg-[#5d5d5d]" />
//                   <span className="absolute left-5 bottom-3 w-[10px] h-[10px] bg-[#5d5d5d]" />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT AREA */}
//             <div className="relative w-[820px] max-w-[45vw] h-[500px]">
//               <div
//                 ref={desktopLineRef}
//                 className="absolute bottom-0 right-[145px] w-px h-[420px] bg-[#323232] z-30"
//               />

//               <>
//                 {/* BOTTOM LINE */}
//                 <div className="absolute bottom-0 left-0 right-[145px] h-px bg-[#323232]" />

//                 {/* MENU */}
//                 <div className="absolute right-[145px] bottom-0 flex items-end z-10">
//                   {menu.map((item, index) => (
//                     <button
//                       key={item}
//                       ref={(el) => {
//                         desktopBtnRefs.current[index] = el;
//                       }}
//                       onClick={() => setActive(index)}
//                       onMouseEnter={() => handleEnterBtn(index, true)}
//                       onMouseLeave={() => handleLeaveBtn(index, true)}
//                       className={`
//                       relative
//                       overflow-hidden
//                       w-[64px]
//                       h-[420px]
//                       flex
//                       items-end
//                       justify-center
//                       pb-5
//                       backdrop-blur-[1px]
//                       transition-all
//                       duration-700
//                       ease-out
//                       hover:bg-[#131313]
//                       cursor-pointer

//                       ${
//                         active === index
//                           ? `
//                           bg-[linear-gradient(to_top,rgba(255,255,255,0.14),rgba(255,255,255,0.05)_45%,transparent)]

//                           shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]

//                           after:absolute
//                           after:inset-0
//                           after:bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_70%)]
//                         `
//                           : ""
//                       }
//                     `}
//                     >
//                       <div
//                         className="
//                         absolute
//                         left-0
//                         bottom-0
//                         w-px
//                         h-full
//                         bg-gradient-to-t
//                         from-[#4a4a4a]
//                         via-[#2a2a2a]
//                         to-transparent
//                       "
//                       />

//                       <span
//                         className={`
//                         [writing-mode:vertical-rl]
//                         rotate-180
//                         text-[18px]
//                         tracking-[0.08em]
//                         uppercase
//                         leading-none
//                         transition-colors
//                         duration-300
//                         font-recife
//                         ${
//                           active === index
//                             ? "text-[#80c46c]"
//                             : "text-[#6b6b6b] hover:text-[#7d976e]"
//                         }
//                       `}
//                       >
//                         {item}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </>
//             </div>
//           </div>
//         </div>

//         {/* =========================
//           TABLET + MOBILE (UNCHANGED)
//       ========================= */}

//         <div
//           className="
//           lg:hidden
//           w-full

//           bg-gradient-to-br
//           from-[#0f0f10]
//           via-[#0b0b0c]
//           to-[#121214]
//           overflow-hidden
//         "
//         >
//           {/* IMAGE */}
//           <div className="px-5 pt-6">
//             <p
//               ref={mobileLabelRef}
//               className="
//               text-[11px]
//               font-nixie
//               tracking-[0.28em]
//               uppercase
//               text-[#5b5b5b]
//               mb-4
//             "
//             >
//               — {menu[active]}
//             </p>

//             <div className="relative overflow-hidden">
//               <img
//                 ref={mobileImgRef}
//                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
//                 alt=""
//                 className="
//                 w-full
//                 h-[420px]
//                 object-cover

//                 max-md:h-[320px]
//               "
//               />

//               {/* PIXELS */}
//               <div
//                 className="
//                 absolute
//                 bottom-5
//                 right-5
//                 flex
//                 flex-col
//                 gap-[10px]
//               "
//               >
//                 <span className="w-[8px] h-[8px] bg-[#5d5d5d]" />
//                 <span className="w-[8px] h-[8px] bg-[#5d5d5d]" />

//                 <span className="absolute left-4 bottom-2 w-[8px] h-[8px] bg-[#5d5d5d]" />
//               </div>
//             </div>
//           </div>

//           {/* MENU */}
//           <div className="px-5 pt-8 pb-6">
//             <div className="border-t border-[#323232]">
//               {menu.map((item, index) => (
//                 <button
//                   key={item}
//                   ref={(el) => {
//                     mobileBtnRefs.current[index] = el;
//                   }}
//                   onClick={() => setActive(index)}
//                   className={`
//                   w-full
//                   flex
//                   items-center
//                   justify-between
//                   border-b
//                   border-[#323232]
//                   py-5
//                   transition-all
//                   duration-500
//                   text-left

//                   ${active === index ? "bg-[#141414]" : "bg-transparent"}
//                 `}
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* PIXEL ICON */}
//                     <div className="flex items-center gap-[4px]">
//                       <div className="flex flex-col gap-[4px]">
//                         <span
//                           className={`
//                           w-[4px]
//                           h-[4px]
//                           block
//                           transition-colors
//                           duration-300
//                           ${
//                             active === index
//                               ? "bg-[#7d976e]"
//                               : "bg-[#4d4d4d]"
//                           }
//                         `}
//                         />

//                         <span
//                           className={`
//                           w-[4px]
//                           h-[4px]
//                           block
//                           transition-colors
//                           duration-300
//                           ${
//                             active === index
//                               ? "bg-[#7d976e]"
//                               : "bg-[#4d4d4d]"
//                           }
//                         `}
//                         />
//                       </div>

//                       <div className="flex items-center h-[10px]">
//                         <span
//                           className={`
//                           w-[4px]
//                           h-[4px]
//                           block
//                           transition-colors
//                           duration-300
//                           ${
//                             active === index
//                               ? "bg-[#7d976e]"
//                               : "bg-[#4d4d4d]"
//                           }
//                         `}
//                         />
//                       </div>
//                     </div>

//                     {/* TEXT */}
//                     <span
//                       className={`
//                       text-[16px]
//                       uppercase
//                       tracking-[0.08em]
//                       leading-[1.1]
//                       font-nixie
//                       transition-colors
//                       duration-300

//                       ${
//                         active === index
//                           ? "text-[#7d976e]"
//                           : "text-[#4a4a4a]"
//                       }
//                     `}
//                     >
//                       {item}
//                     </span>
//                   </div>

//                   {/* NUMBER */}
//                   <span
//                     className={`
//                     text-[12px]
//                     font-nixie
//                     tracking-[0.18em]
//                     transition-colors
//                     duration-300

//                     ${active === index ? "text-[#7d976e]" : "text-[#4a4a4a]"}
//                   `}
//                   >
//                     0{index + 1}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const spaces = [
  {
    title: "Work Spaces",
    image: "/images/artwork1.avif",
  },
  {
    title: "Experiments",
    image: "/images/cohart.avif",
  },
  {
    title: "Collaboration",
    image: "/images/creative.avif",
  },
];

const stats = [
  {
    value: "100+",
    label: "Projects",
  },
  {
    value: "10+",
    label: (
      <>
        Years
        <br />
        of practice
      </>
    ),
  },
  {
    value: "6000+",
    label: (
      <>
        Artworks curated, created
        <br />
        and sourced
      </>
    ),
  },
];

export default function StudioSpaces() {
  return (
    <section className="w-full bg-[#f9f8f2] text-[#38362e] py-[90px]">
      <div className="w-full">
        {/* ================= IMAGE GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
          {spaces.map((space, index) => (
            <div key={space.title} className="group">
              {/* IMAGE */}
              <div className="relative w-full h-[435px] overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* LABEL */}
              <div className="relative flex items-center mt-[13px]">
                {/* SMALL SQUARE */}
                <span className="absolute left-0 top-[5px] w-[7px] h-[7px] bg-[#343431]" />

                <span
                  className="
                    w-full
                    text-center
                    font-clash
                    text-[18px]
                    leading-none
                    text-[#38362e]
                  "
                >
                  {space.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOWER CONTENT ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 mt-[95px]">
          {/* DESCRIPTION */}
          <div className="md:col-span-1 pl-[103px]">
            <p
              className="
                max-w-[380px]
                font-clash
                text-[20px]
                leading-[1.35]
                text-[#38362e]
              "
            >
              Palakkad, India, working with clients across India, Europe, North
              America, Australia, and the Middle East.
            </p>
          </div>

          {/* EMPTY SPACE */}
          <div className="hidden md:block" />

          {/* EMPTY SPACE */}
          <div className="hidden md:block" />
        </div>

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_0.85fr_1fr] mt-[90px]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center md:items-start md:pl-[250px]"
            >
              <div
                className="
                  text-[58px]
                  md:text-[58px]
                  lg:text-[60px]
                  leading-[0.9]
                  tracking-[-0.045em]
                  font-clash
                  text-[#38362e]
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-[12px]
                  font-clash
                  text-[16px]
                  leading-[1.15]
                  text-[#38362e]
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
