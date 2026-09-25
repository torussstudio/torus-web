// "use client";

// import { HiArrowTurnDownRight } from "react-icons/hi2";
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";

// export default function UXPage() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const imageRef = useRef<HTMLDivElement>(null);
//   const labelRef = useRef<HTMLParagraphElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const descRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: {
//           ease: "power3.out",
//         },
//       });

//       tl.fromTo(
//         imageRef.current,
//         {
//           autoAlpha: 0,
//           scale: 1.08,
//           clipPath: "inset(0 0 100% 0)",
//         },
//         {
//           autoAlpha: 1,
//           scale: 1,
//           clipPath: "inset(0 0 0% 0)",
//           duration: 1.5,
//         },
//       )
//         .fromTo(
//           labelRef.current,
//           {
//             autoAlpha: 0,
//             y: 20,
//           },
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.8,
//           },
//           "-=1",
//         )
//         .fromTo(
//           titleRef.current,
//           {
//             autoAlpha: 0,
//             y: 35,
//             clipPath: "inset(0 0 100% 0)",
//           },
//           {
//             autoAlpha: 1,
//             y: 0,
//             clipPath: "inset(0 0 0% 0)",
//             duration: 1.2,
//           },
//           "-=0.5",
//         )
//         .fromTo(
//           descRef.current,
//           {
//             autoAlpha: 0,
//             y: 25,
//           },
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.9,
//           },
//           "-=0.7",
//         )
//         .fromTo(
//           buttonRef.current,
//           {
//             autoAlpha: 0,
//             y: 18,
//           },
//           {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.8,
//           },
//           "-=0.5",
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         w-full
//         overflow-hidden
//         bg-[#f9f8f2]
//         text-[#38362e]
//       "
//     >
//       {/* =========================================================
//           MAIN STUDIO SECTION
//       ========================================================= */}

//       <div
//         className="
//   mx-auto
//   grid
//   w-full
//   max-w-[1728px]
//   grid-cols-[42%_58%]

//   border-b
//   border-[#b8b6ae]

//           max-[900px]:
//             grid-cols-1
//         "
//       >
//         {/* =========================================================
//             LEFT IMAGE
//         ========================================================= */}

//         <div
//           className="
//     relative
//     h-[800px]
//     w-full
//     overflow-hidden
//     border-r
//     border-[#b8b6ae]

//     max-[1200px]:
//       h-[700px]

//     max-[900px]:
//       h-[500px]
//       border-r-0
//       border-b
//       border-[#b8b6ae]

//     max-[600px]:
//       h-[400px]
//   "
//         >
//           <div
//             ref={imageRef}
//             className="
//       absolute
//       inset-x-0
//       top-[95px]
//       bottom-[95px]
//       overflow-hidden
//     "
//           >
//             <img
//               src="/images/studio.avif"
//               alt="Inside the Toruss studio"
//               className="
//         block
//         h-full
//         w-full
//         object-cover
//         object-center
//       "
//             />
//           </div>
//         </div>

//         {/* =========================================================
//             RIGHT CONTENT
//         ========================================================= */}

//         <div
//           className="
//             flex
//             h-[800px]
//             w-full
//             flex-col

//             px-[92px]
//             py-[135px]

//             max-[1400px]:
//               px-[75px]
//               py-[120px]

//             max-[1200px]:
//               h-[700px]
//               px-[60px]
//               py-[105px]

//             max-[900px]:
//               h-auto
//               min-h-[600px]
//               px-[55px]
//               py-[80px]

//             max-[600px]:
//               min-h-[560px]
//               px-[28px]
//               py-[65px]
//           "
//         >
//           {/* LABEL */}

//           <p
//             ref={labelRef}
//             className="
//               m-0
//               mb-[34px]

//               font-clash
//               text-[20px]
//               uppercase
//               leading-none
//               tracking-[0.015em]

//               text-[ #38362e]

//               max-[1200px]:
//                 mb-[28px]
//                 text-[15px]

//               max-[600px]:
//                 mb-[24px]
//                 text-[13px]
//             "
//           >
//             Inside the Studio
//           </p>

//           {/* TITLE */}

//           <h2
//             ref={titleRef}
//             className="
//               m-0
//               max-w-[760px]

//               font-trial
//               text-[54px]
//               leading-[1.02]
//               tracking-[-0.045em]

//               text-[ #38362e]

//               max-[1400px]:
//                 text-[50px]

//               max-[1200px]:
//                 text-[45px]

//               max-[900px]:
//                 max-w-[700px]
//                 text-[48px]

//               max-[600px]:
//                 text-[36px]
//                 leading-[1.04]
//             "
//           >
//             We like working with people
//             <br />
//             who care deeply about
//             <br />
//             what they’re building.
//           </h2>

//           {/* DESCRIPTION */}

//           <div
//             ref={descRef}
//             className="
//               mt-[48px]
//               max-w-[550px]

//               font-clash
//               text-[20px]
//               leading-[1.38]
//               tracking-[-0.01em]

//               text-[ #38362e]

//               max-[1200px]:
//                 mt-[40px]
//                 text-[16px]

//               max-[900px]:
//                 max-w-[620px]

//               max-[600px]:
//                 mt-[34px]
//                 text-[15px]
//                 leading-[1.45]
//             "
//           >
//             <p className="m-0">
//               Our best collaborations are built around curiosity, trust, clear
//               thinking, and a willingness to question the obvious.
//             </p>

//             <p className="mt-[20px]">
//               We stay deliberately close to the work, collaborate across
//               disciplines, and take on a limited number of projects at a time.
//             </p>
//           </div>

//           {/* CTA */}

//           <div
//             ref={buttonRef}
//             className="
//               mt-[44px]

//               max-[1200px]:
//                 mt-[38px]

//               max-[600px]:
//                 mt-[34px]
//             "
//           >
//             <button
//               type="button"
//               className="
//                 group
//                 flex
//                 cursor-pointer
//                 items-center
//                 gap-[8px]

//                 border-0
//                 bg-transparent
//                 p-0

//                 font-clash
//                 text-[20px]
//                 uppercase
//                 leading-none
//                 tracking-[0.015em]

//                 text-[#80c46c]

//                 transition-all
//                 duration-300

//                 hover:gap-[12px]
//               "
//             >
//               <HiArrowTurnDownRight
//                 className="
//                   shrink-0
//                   text-[19px]

//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-[2px]
//                 "
//               />

//               <span>Inside Toruss</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function UXPage() {
  const sectionRef = useRef<HTMLElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 1.08, clipPath: "inset(0 0 100% 0)" },
        { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 1.5 }
      )
        .fromTo(
          labelRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=1"
        )
        .fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 35, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.2 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { autoAlpha: 0, y: 25 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          buttonRef.current,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#f9f8f2] text-[#38362e]"
    >
      {/* =========================================================
          MAIN STUDIO SECTION
      ========================================================= */}

      <div
        className="
          mx-auto grid w-full max-w-[1728px]
          grid-cols-[42%_58%]
          border-b border-[#b8b6ae]
          max-[900px]:grid-cols-1
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            relative h-[800px] w-full overflow-hidden
            border-r border-[#b8b6ae]
            max-[1200px]:h-[700px]
            max-[900px]:h-[500px]
            max-[900px]:border-r-0
            max-[900px]:border-b
            max-[900px]:border-[#b8b6ae]
            max-[600px]:h-[400px]
          "
        >
          <div
            ref={imageRef}
            className="absolute inset-x-0 top-[95px] bottom-[95px] overflow-hidden"
          >
            <img
              src="/images/studio.avif"
              alt="Inside the Toruss studio"
              className="block h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex h-[800px] w-full flex-col
            px-[92px] py-[135px]
            max-[1400px]:px-[75px]
            max-[1400px]:py-[120px]
            max-[1200px]:h-[700px]
            max-[1200px]:px-[60px]
            max-[1200px]:py-[105px]
            max-[900px]:h-auto
            max-[900px]:min-h-[600px]
            max-[900px]:px-[55px]
            max-[900px]:py-[80px]
            max-[600px]:min-h-[560px]
            max-[600px]:px-[28px]
            max-[600px]:py-[65px]
          "
        >
          {/* LABEL */}
          <p
            ref={labelRef}
            className="
              m-0 mb-[34px]
              font-clash text-[20px] uppercase leading-none tracking-[0.015em]
              text-[#38362e]
              max-[1200px]:mb-[28px]
              max-[1200px]:text-[15px]
              max-[600px]:mb-[24px]
              max-[600px]:text-[13px]
            "
          >
            Inside the Studio
          </p>

          {/* TITLE */}
          <h2
            ref={titleRef}
            className="
              m-0 max-w-[760px]
              font-trial text-[54px] leading-[1.02] tracking-[-0.045em]
              text-[#38362e]
              max-[1400px]:text-[50px]
              max-[1200px]:text-[45px]
              max-[900px]:max-w-[700px]
              max-[900px]:text-[48px]
              max-[600px]:text-[36px]
              max-[600px]:leading-[1.04]
            "
          >
            We like working with people
            <br />
            who care deeply about
            <br />
            what they’re building.
          </h2>

          {/* DESCRIPTION */}
          <div
            ref={descRef}
            className="
              mt-[48px] max-w-[550px]
              font-clash text-[20px] leading-[1.38] tracking-[-0.01em]
              text-[#38362e]
              max-[1200px]:mt-[40px]
              max-[1200px]:text-[16px]
              max-[900px]:max-w-[620px]
              max-[600px]:mt-[34px]
              max-[600px]:text-[15px]
              max-[600px]:leading-[1.45]
            "
          >
            <p className="m-0">
              Our best collaborations are built around curiosity, trust, clear
              thinking, and a willingness to question the obvious.
            </p>

            <p className="mt-[20px]">
              We stay deliberately close to the work, collaborate across
              disciplines, and take on a limited number of projects at a time.
            </p>
          </div>

          {/* CTA */}
          <div
            ref={buttonRef}
            className="
              mt-[44px]
              max-[1200px]:mt-[38px]
              max-[600px]:mt-[34px]
            "
          >
            <button
              type="button"
              className="
                group flex cursor-pointer items-center gap-[8px]
                border-0 bg-transparent p-0
                font-clash text-[20px] uppercase leading-none tracking-[0.015em]
                text-[#80c46c]
                transition-all duration-300
                hover:gap-[12px]
              "
            >
              <HiArrowTurnDownRight
                className="
                  shrink-0 text-[19px]
                  transition-transform duration-300
                  group-hover:translate-x-[2px]
                "
              />

              <span>Inside Toruss</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}