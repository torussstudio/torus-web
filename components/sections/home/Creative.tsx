// "use client";

// import { cards } from "@/lib/constants";
// import { HiArrowTurnDownRight } from "react-icons/hi2";
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CreativeGrid() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const cardRefs = useRef<(HTMLElement | null)[]>([]);
//   const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
//   const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
//   const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
//   const listRefs = useRef<HTMLLIElement[][]>([]);
//   const footerRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const footerBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, index) => {
//         if (!card) return;

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: card,
//             start: "top 82%",
//             once: true,
//           },
//           defaults: {
//             ease: "power3.out",
//           },
//         });

//         const header = headerRefs.current[index];
//         const number = numberRefs.current[index];
//         const title = titleRefs.current[index];
//         const image = imageRefs.current[index];
//         const desc = descRefs.current[index];
//         const list = listRefs.current[index] || [];
//         const footer = footerRefs.current[index];
//         const button = footerBtnRefs.current[index];

//         if (header) {
//           tl.fromTo(
//             header,
//             {
//               autoAlpha: 0,
//               y: 20,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.7,
//             },
//             0,
//           );
//         }

//         if (number) {
//           tl.fromTo(
//             number,
//             {
//               autoAlpha: 0,
//               x: 15,
//             },
//             {
//               autoAlpha: 1,
//               x: 0,
//               duration: 0.6,
//             },
//             0.1,
//           );
//         }

//         if (title) {
//           tl.fromTo(
//             title,
//             {
//               autoAlpha: 0,
//               y: 25,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.7,
//             },
//             0.15,
//           );
//         }

//         if (image) {
//           tl.fromTo(
//             image,
//             {
//               autoAlpha: 0,
//               scale: 1.08,
//               clipPath: "inset(0 0 100% 0)",
//             },
//             {
//               autoAlpha: 1,
//               scale: 1,
//               clipPath: "inset(0 0 0% 0)",
//               duration: 1,
//             },
//             0.25,
//           );

//           gsap.fromTo(
//             image,
//             {
//               yPercent: -5,
//             },
//             {
//               yPercent: 5,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//               },
//             },
//           );
//         }

//         if (desc) {
//           tl.fromTo(
//             desc,
//             {
//               autoAlpha: 0,
//               y: 18,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.7,
//             },
//             0.4,
//           );
//         }

//         if (list.length) {
//           tl.fromTo(
//             list,
//             {
//               autoAlpha: 0,
//               y: 15,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.55,
//               stagger: 0.08,
//             },
//             0.5,
//           );
//         }

//         if (footer) {
//           tl.fromTo(
//             footer,
//             {
//               autoAlpha: 0,
//               y: 18,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.6,
//             },
//             0.7,
//           );
//         }

//         if (button) {
//           tl.fromTo(
//             button,
//             {
//               autoAlpha: 0,
//               y: 10,
//             },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.5,
//             },
//             0.8,
//           );
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//    <section
//   ref={sectionRef}
//   className="
//     w-full
//     min-h-screen
//     bg-[#f9f8f2]
//     px-[56px]
//     py-[70px]
//     max-[1100px]:px-[28px]
//     max-[1100px]:py-[45px]
//     max-[700px]:px-[14px]
//     max-[700px]:py-[25px]
// "
// >
//   <div className="w-full max-w-[1380px] mx-auto">
//     <div
//       className="
//         w-full
//         grid
//         grid-cols-3
//         gap-[14px]
//         max-[900px]:grid-cols-1
//       "
//     >
//         {cards.map((card, index) => {
//           listRefs.current[index] = [];

//           return (
//             <article
//               key={index}
//               ref={(el) => {
//                 cardRefs.current[index] = el;
//               }}
//               className="
//                 min-w-0
//                 border
//                 border-black/35
//                 bg-[#f9f8f2]
//                 flex
//                 flex-col
//                 overflow-hidden
//               "
//             >
//               {/* =====================================================
//                   HEADER
//               ===================================================== */}

//               <div
//                 ref={(el) => {
//                   headerRefs.current[index] = el;
//                 }}
//                 className="
//                   h-[48px]
//                   shrink-0
//                   border-b
//                   border-black/30
//                   grid
//                   grid-cols-[1fr_58px]
//                 "
//               >
//                 <div className="flex items-center px-[23px]">
//                   <h2
//                     className="
//     m-0
//     font-clash
//     text-[28px]
//     leading-none
//     tracking-[-0.03em]
//     text-[#38362e]
//     capitalize
//   "
//                   >
//                     {card.category}
//                   </h2>
//                 </div>

//                 <div
//                   ref={(el) => {
//                     numberRefs.current[index] = el;
//                   }}
//                   className="
//                     border-l
//                     border-black/30
//                     flex
//                     items-center
//                     justify-center
//                     font-clash
//                     text-[18px]
//                     text-[#38362e]
//                   "
//                 >
//                   {card.number}
//                 </div>
//               </div>

//               {/* =====================================================
//                   TITLE
//               ===================================================== */}

//               <div className="h-[135px] border-b border-black/30 px-[28px] py-[28px]">
//                 <h3
//                   ref={(el) => {
//                     titleRefs.current[index] = el;
//                   }}
//                   className="
//       m-0
//       max-w-[280px]
//       whitespace-normal
//       font-trial
//       text-[26px]
//       leading-[1.02]
//       tracking-[-0.035em]
//       text-[#38362e]
//       max-[1100px]:max-w-[250px]
//       max-[1100px]:text-[23px]
//       max-[700px]:max-w-full
//       max-[700px]:text-[27px]
//     "
//                 >
//                   {card.title}
//                 </h3>
//               </div>

//               {/* =====================================================
//                   IMAGE
//               ===================================================== */}

//               <div className="px-[22px] pt-[26px] pb-[25px]">
//                 <div className="relative w-full h-[165px] overflow-hidden max-[1100px]:h-[250px] max-[700px]:h-[220px]">
//                   <img
//                     ref={(el) => {
//                       imageRefs.current[index] = el;
//                     }}
//                     src={card.image}
//                     alt={card.title}
//                     className="
//                       block
//                       w-full
//                       h-full
//                       object-cover
//                     "
//                   />
//                 </div>
//               </div>

//               {/* =====================================================
//                   DESCRIPTION
//               ===================================================== */}

//               <div className="min-h-[115px] px-[22px] pb-[22px]">
//                 <p
//                   ref={(el) => {
//                     descRefs.current[index] = el;
//                   }}
//                   className="
//                     m-0
//                     max-w-[320px]
//                     font-clash
//                     text-[17px]
//                     leading-[1.35]
//                     text-[#38362e]
//                     max-[700px]:text-[14px]
//                   "
//                 >
//                   {card.desc}
//                 </p>
//               </div>

//               {/* =====================================================
//                   SERVICES / LIST
//               ===================================================== */}

//               <div
//                 className="
//                   border-t
//                   border-black/30
//                   px-[22px]
//                   py-[28px]
//                   min-h-[180px]
//                 "
//               >
//                 <ul className="m-0 p-0 list-none flex flex-col gap-[15px]">
//                   {card.items.map((item, i) => (
//                     <li
//                       key={i}
//                       ref={(el) => {
//                         if (el) {
//                           listRefs.current[index][i] = el;
//                         }
//                       }}
//                       className="
//                         flex
//                         items-center
//                         gap-[9px]
//                         font-clash
//                         text-[18px]
//                         leading-none
//                         text-[#38362e]
//                         max-[700px]:text-[15px]
//                       "
//                     >
//                       <span
//                         className="
//                           shrink-0
//                           text-[15px]
//                           leading-none
//                           text-[#38362e]
//                         "
//                       >
//                         →
//                       </span>

//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* =====================================================
//                   FOOTER
//               ===================================================== */}

//               <div
//                 ref={(el) => {
//                   footerRefs.current[index] = el;
//                 }}
//                 className="mt-auto"
//               >
//                 {/* STAT / DESCRIPTION */}
//                <div
//   className={`
//     border-t
//     border-black/30
//     min-h-[68px]
//     ${
//       card.footerTitle
//         ? "grid grid-cols-[108px_1fr]"
//         : "flex items-center"
//     }
//   `}
// >
//   {card.footerTitle && (
//     <div className="border-r border-black/30 flex items-center px-[20px]">
//       <span
//         className="
//           font-clash
//           text-[27px]
//           leading-none
//           tracking-[-0.04em]
//           text-[#38362e]
//         "
//       >
//         {card.footerTitle}
//       </span>
//     </div>
//   )}

//   <div
//     className={`
//       flex
//       items-center
//       px-[20px]
//       ${card.footerTitle ? "" : "w-full"}
//     `}
//   >
//     <p
//       className="
//         m-0
//         font-clash
//         text-[18px]
//         leading-[1.2]
//         text-[#38362e]
//         max-w-[320px]
//       "
//     >
//       {card.footerDesc}
//     </p>
//   </div>
// </div>

//                 {/* EXPLORE */}
//                 <div className="h-[45px] border-t border-black/30 flex items-center justify-center">
//                   <button
//                     ref={(el) => {
//                       footerBtnRefs.current[index] = el;
//                     }}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-[7px]
//                       border-0
//                       bg-transparent
//                       p-0
//                       cursor-pointer
//                       uppercase
//                       font-clash
//                       text-[20px]
//                       tracking-[0.02em]
//                       text-[#80c46c]
//                       transition-all
//                       duration-300
//                       hover:gap-[12px]
//                     "
//                   >
//                     <HiArrowTurnDownRight
//                       className="
//                         text-[19px]
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-[3px]
//                       "
//                       style={{
//                         strokeWidth: 0.2,
//                       }}
//                     />

//                     <span>Explore</span>
//                   </button>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { cards } from "@/lib/constants";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const listRefs = useRef<HTMLLIElement[][]>([]);
  const footerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        const header = headerRefs.current[index];
        const number = numberRefs.current[index];
        const title = titleRefs.current[index];
        const image = imageRefs.current[index];
        const desc = descRefs.current[index];
        const list = listRefs.current[index] || [];
        const footer = footerRefs.current[index];
        const button = footerBtnRefs.current[index];

        if (header) {
          tl.fromTo(
            header,
            {
              autoAlpha: 0,
              y: 20,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
            },
            0,
          );
        }

        if (number) {
          tl.fromTo(
            number,
            {
              autoAlpha: 0,
              x: 15,
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
            },
            0.1,
          );
        }

        if (title) {
          tl.fromTo(
            title,
            {
              autoAlpha: 0,
              y: 25,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
            },
            0.15,
          );
        }

        if (image) {
          tl.fromTo(
            image,
            {
              autoAlpha: 0,
              scale: 1.08,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              autoAlpha: 1,
              scale: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
            },
            0.25,
          );

          gsap.fromTo(
            image,
            {
              yPercent: -5,
            },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            {
              autoAlpha: 0,
              y: 18,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
            },
            0.4,
          );
        }

        if (list.length) {
          tl.fromTo(
            list,
            {
              autoAlpha: 0,
              y: 15,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
            },
            0.5,
          );
        }

        if (footer) {
          tl.fromTo(
            footer,
            {
              autoAlpha: 0,
              y: 18,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
            },
            0.7,
          );
        }

        if (button) {
          tl.fromTo(
            button,
            {
              autoAlpha: 0,
              y: 10,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
            },
            0.8,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        max-w-full
        min-h-screen
        overflow-x-hidden
        bg-[#f9f8f2]
        px-[56px]
        py-[70px]
        max-[1100px]:px-[28px]
        max-[1100px]:py-[45px]
        max-[700px]:px-[14px]
        max-[700px]:py-[25px]
      "
    >
      <div className="w-full max-w-[1380px] min-w-0 mx-auto">
        <div
          className="
            w-full
            min-w-0
            grid
            grid-cols-1
            gap-[14px]
            sm:grid-cols-2
            lg:grid-cols-3
            max-[900px]:gap-[14px]
          "
        >
          {cards.map((card, index) => {
            listRefs.current[index] = [];

            return (
              <article
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="
                  min-w-0
                  w-full
                  border
                  border-black/35
                  bg-[#f9f8f2]
                  flex
                  flex-col
                  overflow-hidden
                "
              >
                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div
                  ref={(el) => {
                    headerRefs.current[index] = el;
                  }}
                  className="
                    h-[48px]
                    shrink-0
                    border-b
                    border-black/30
                    grid
                    grid-cols-[1fr_58px]
                  "
                >
                  <div className="flex items-center min-w-0 px-[23px] max-[700px]:px-[15px]">
                    <h2
                      className="
                        m-0
                        min-w-0
                        font-clash
                        text-[28px]
                        leading-none
                        tracking-[-0.03em]
                        text-[#38362e]
                        capitalize
                        max-[1100px]:text-[24px]
                        max-[700px]:text-[22px]
                        truncate
                      "
                    >
                      {card.category}
                    </h2>
                  </div>

                  <div
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className="
                      border-l
                      border-black/30
                      flex
                      items-center
                      justify-center
                      font-clash
                      text-[18px]
                      max-[700px]:text-[16px]
                      text-[#38362e]
                    "
                  >
                    {card.number}
                  </div>
                </div>

                {/* =====================================================
                    TITLE
                ===================================================== */}

                <div
                  className="
                    h-[135px]
                    border-b
                    border-black/30
                    px-[28px]
                    py-[28px]
                    max-[1100px]:h-[125px]
                    max-[1100px]:px-[22px]
                    max-[1100px]:py-[24px]
                    max-[700px]:h-auto
                    max-[700px]:min-h-[115px]
                    max-[700px]:px-[18px]
                    max-[700px]:py-[22px]
                  "
                >
                  <h3
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                    className="
                      m-0
                      max-w-[280px]
                      whitespace-normal
                      break-words
                      font-trial
                      text-[26px]
                      leading-[1.02]
                      tracking-[-0.035em]
                      text-[#38362e]
                      max-[1100px]:max-w-[250px]
                      max-[1100px]:text-[23px]
                      max-[700px]:max-w-full
                      max-[700px]:text-[25px]
                    "
                  >
                    {card.title}
                  </h3>
                </div>

                {/* =====================================================
                    IMAGE
                ===================================================== */}

                <div
                  className="
                    px-[22px]
                    pt-[26px]
                    pb-[25px]
                    max-[700px]:px-[16px]
                    max-[700px]:pt-[20px]
                    max-[700px]:pb-[20px]
                  "
                >
                  <div
                    className="
                      relative
                      w-full
                      min-w-0
                      h-[165px]
                      overflow-hidden
                      max-[1100px]:h-[250px]
                      max-[700px]:h-[210px]
                    "
                  >
                    <img
                      ref={(el) => {
                        imageRefs.current[index] = el;
                      }}
                      src={card.image}
                      alt={card.title}
                      className="
                        block
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* =====================================================
                    DESCRIPTION
                ===================================================== */}

                <div
                  className="
                    min-h-[115px]
                    px-[22px]
                    pb-[22px]
                    max-[700px]:min-h-0
                    max-[700px]:px-[18px]
                    max-[700px]:pb-[20px]
                  "
                >
                  <p
                    ref={(el) => {
                      descRefs.current[index] = el;
                    }}
                    className="
                      m-0
                      w-full
                      max-w-[320px]
                      break-words
                      font-clash
                      text-[17px]
                      leading-[1.35]
                      text-[#38362e]
                      max-[700px]:text-[14px]
                    "
                  >
                    {card.desc}
                  </p>
                </div>

                {/* =====================================================
                    SERVICES / LIST
                ===================================================== */}

                <div
                  className="
                    border-t
                    border-black/30
                    px-[22px]
                    py-[28px]
                    min-h-[180px]
                    max-[700px]:px-[18px]
                    max-[700px]:py-[22px]
                    max-[700px]:min-h-0
                  "
                >
                  <ul className="m-0 p-0 list-none flex flex-col gap-[15px] max-[700px]:gap-[12px]">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        ref={(el) => {
                          if (el) {
                            listRefs.current[index][i] = el;
                          }
                        }}
                        className="
                          flex
                          items-start
                          gap-[9px]
                          min-w-0
                          font-clash
                          text-[18px]
                          leading-none
                          text-[#38362e]
                          max-[700px]:text-[15px]
                          max-[700px]:leading-[1.2]
                        "
                      >
                        <span
                          className="
                            shrink-0
                            text-[15px]
                            leading-none
                            text-[#38362e]
                          "
                        >
                          →
                        </span>

                        <span className="min-w-0 break-words">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <div
                  ref={(el) => {
                    footerRefs.current[index] = el;
                  }}
                  className="mt-auto min-w-0"
                >
                  {/* STAT / DESCRIPTION */}

                  <div
                    className={`
                      border-t
                      border-black/30
                      min-h-[68px]
                      ${
                        card.footerTitle
                          ? "grid grid-cols-[108px_1fr] max-[700px]:grid-cols-[75px_1fr]"
                          : "flex items-center"
                      }
                    `}
                  >
                    {card.footerTitle && (
                      <div
                        className="
                          border-r
                          border-black/30
                          flex
                          items-center
                          px-[20px]
                          min-w-0
                          max-[700px]:px-[12px]
                        "
                      >
                        <span
                          className="
                            font-clash
                            text-[27px]
                            leading-none
                            tracking-[-0.04em]
                            text-[#38362e]
                            max-[700px]:text-[21px]
                          "
                        >
                          {card.footerTitle}
                        </span>
                      </div>
                    )}

                    <div
                      className={`
                        flex
                        items-center
                        min-w-0
                        px-[20px]
                        max-[700px]:px-[12px]
                        ${card.footerTitle ? "" : "w-full"}
                      `}
                    >
                      <p
                        className="
                          m-0
                          w-full
                          min-w-0
                          break-words
                          font-clash
                          text-[18px]
                          leading-[1.2]
                          text-[#38362e]
                          max-w-[320px]
                          max-[700px]:text-[14px]
                        "
                      >
                        {card.footerDesc}
                      </p>
                    </div>
                  </div>

                  {/* EXPLORE */}

                  <div className="h-[45px] border-t border-black/30 flex items-center justify-center">
                    <button
                      ref={(el) => {
                        footerBtnRefs.current[index] = el;
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-[7px]
                        border-0
                        bg-transparent
                        p-0
                        cursor-pointer
                        uppercase
                        font-clash
                        text-[20px]
                        tracking-[0.02em]
                        text-[#80c46c]
                        transition-all
                        duration-300
                        hover:gap-[12px]
                        max-[700px]:text-[16px]
                      "
                    >
                      <HiArrowTurnDownRight
                        className="
                          text-[19px]
                          max-[700px]:text-[16px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-[3px]
                        "
                        style={{
                          strokeWidth: 0.2,
                        }}
                      />

                      <span>Explore</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}