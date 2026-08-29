// "use client";

// import Image from "next/image";

// export default function PersonalIdentitySection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       <div
//         className="
//           relative max-w-[1728px] mx-auto
          
//           /* MOBILE/TABLET */
//           pl-0
//           sm:pl-0
//           md:pl-0

//           /* DESKTOP — UNCHANGED */
//           lg:pl-16
//           xl:pl-20

//           pr-0
//         "
//       >
//         <div className="relative lg:flex">
//           {/* SIDEBAR — desktop unchanged */}
//           <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

//           {/* CONTENT */}
//           <div
//             className="
//               flex-1

//               /* MOBILE — equal spacing + centered content */
//               px-[18px]
//               max-[390px]:px-[16px]

//               /* TABLET */
//               sm:px-[28px]
//               md:px-[40px]

//               /* DESKTOP — UNCHANGED */
//               lg:pl-44
//               lg:pr-14
//               xl:pl-54
//               xl:pr-16

//               pt-10
//               sm:pt-14
//               lg:pt-16

//               pb-12
//               sm:pb-16
//               lg:pb-20
//             "
//           >
//             {/* HEADING */}
//             <h2
//               className="
//                 font-nova

//                 /* MOBILE */
//                 text-[1.55rem]
//                 max-[390px]:text-[1.45rem]

//                 /* TABLET */
//                 sm:text-[2.1rem]
//                 md:text-[2.4rem]

//                 /* DESKTOP — UNCHANGED */
//                 lg:text-[2.4rem]
//                 xl:text-[2.5rem]

//                 leading-[1.15]
//                 tracking-[0.01em]
//                 text-[#181818]
//                 uppercase

//                 max-w-[620px]

//                 /* mobile centered */
//                 mx-auto
//                 text-center
//                 sm:text-left
//                 sm:mx-0
//               "
//             >
//               <span className="block">A PERSONAL IDENTITY WITH</span>
//               <span className="block">A PROOF SYSTEM.</span>
//             </h2>

//             {/* INTRO PARAGRAPH */}
//             <p
//               className="
//                 font-nixie
//                 text-[13px]
//                 sm:text-[16px]

//                 leading-[1.75]
//                 text-[#181818]

//                 max-w-[340px]

//                 mt-8
//                 sm:mt-10

//                 /* mobile centered */
//                 mx-auto
//                 text-center

//                 sm:mx-0
//                 sm:text-left
//               "
//             >
//               The identity was built to feel both human and trustworthy. The
//               brand did not have to look purely clinical. It also did not have
//               to look overly soft, beige, or generic. TSA could sit in a more
//               ownable space: freshly prepared skincare from its lab in Alicante,
//               Spain, shaped with Mediterranean warmth.
//             </p>

//             {/* THREE-IMAGE ROW */}
//             <div
//               className="
//                 mt-10
//                 sm:mt-12
//                 lg:mt-14

//                 flex

//                 /* MOBILE */
//                 flex-col
//                 items-center
//                 gap-5

//                 /* TABLET */
//                 sm:flex-row
//                 sm:items-stretch
//                 sm:gap-3

//                 /* DESKTOP — UNCHANGED */
//                 lg:gap-4
//               "
//             >
//               {/* IMAGE 1 */}
//               <div
//                 className="
//                   relative
//                   w-full

//                   /* mobile */
//                   max-w-[420px]

//                   /* tablet */
//                   sm:max-w-none
//                   sm:w-[300px]

//                   /* desktop — unchanged */
//                   lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]">
//                 <Image
//                   src="/images/tsa-meeting.jpg"
//                   alt="Founder presenting during a working session"
//                   fill
//                   sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
//                   className="object-cover"
//                 />
//               </div>

//               {/* IMAGE 2 */}
//               <div
//                 className="
//                   relative
//                   w-full

//                   /* mobile */
//                   max-w-[420px]

//                   /* tablet */
//                   sm:max-w-none
//                   sm:w-[300px]

//                   /* desktop — unchanged */
//                    lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]">
//                 <Image
//                   src="/images/tsa-installation.jpg"
//                   alt="Person seated watching a video installation"
//                   fill
//                   sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
//                   className="object-cover"
//                 />
//               </div>

//               {/* IMAGE 3 */}
//               <div className=" relative w-full max-w-[420px] sm:max-w-none sm:w-[300px] lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]">
//                 <Image
//                   src="/images/tsa-field.jpg"
//                   alt="Person standing in a field looking outward"
//                   fill
//                   sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* CLOSING PARAGRAPH */}
//             <p className=" font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[360px] mt-10 sm:mt-12 lg:mt-14 mx-auto text-center sm:mx-0 sm:text-left">
//               The challenge was to create an identity that could work across
//               bottles, boxes, stickers, seals, tissue paper, social posts,
//               website pages, printed inserts, and emailers. TSA needed a
//               flexible identity system.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function PersonalIdentitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closingRef = useRef<HTMLParagraphElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      // ---- Heading ----
      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Intro paragraph ----
      gsap.fromTo(
        introRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Three-image row, staggered ----
      gsap.fromTo(
        imgRefs.current,
        { autoAlpha: 0, y: 30, scale: 1.05 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: imgRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ---- Closing paragraph ----
      gsap.fromTo(
        closingRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    sectionRef
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div
        className="
          relative max-w-[1728px] mx-auto
          pl-0
          sm:pl-0
          md:pl-0
          lg:pl-16
          xl:pl-20
          pr-0
        "
      >
        <div className="relative lg:flex">
          {/* SIDEBAR */}
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black" />

          {/* CONTENT */}
          <div
            className="
              flex-1
              px-[18px]
              max-[390px]:px-[16px]
              sm:px-[28px]
              md:px-[40px]
              lg:pl-44
              lg:pr-14
              xl:pl-54
              xl:pr-16
              pt-10
              sm:pt-14
              lg:pt-16
              pb-12
              sm:pb-16
              lg:pb-20
            "
          >
            {/* HEADING */}
            <h2
              ref={headingRef}
              className="
                font-nova
                text-[1.55rem]
                max-[390px]:text-[1.45rem]
                sm:text-[2.1rem]
                md:text-[2.4rem]
                lg:text-[2.4rem]
                xl:text-[2.5rem]
                leading-[1.15]
                tracking-[0.01em]
                text-[#181818]
                uppercase
                max-w-[620px]
                mx-auto
                text-center
                sm:text-left
                sm:mx-0
              "
            >
              <span className="block">A PERSONAL IDENTITY WITH</span>
              <span className="block">A PROOF SYSTEM.</span>
            </h2>

            {/* INTRO PARAGRAPH */}
            <p
              ref={introRef}
              className="
                font-nixie
                text-[13px]
                sm:text-[16px]
                leading-[1.75]
                text-[#181818]
                max-w-[340px]
                mt-8
                sm:mt-10
                mx-auto
                text-center
                sm:mx-0
                sm:text-left
              "
            >
              The identity was built to feel both human and trustworthy. The
              brand did not have to look purely clinical. It also did not have
              to look overly soft, beige, or generic. TSA could sit in a more
              ownable space: freshly prepared skincare from its lab in Alicante,
              Spain, shaped with Mediterranean warmth.
            </p>

            {/* THREE-IMAGE ROW */}
            <div
              className="
                mt-10
                sm:mt-12
                lg:mt-14
                flex
                flex-col
                items-center
                gap-5
                sm:flex-row
                sm:items-stretch
                sm:gap-3
                lg:gap-4
              "
            >
              <div
                ref={(el) => {
                  imgRefs.current[0] = el;
                }}
                className="
                  relative
                  w-full
                  max-w-[420px]
                  sm:max-w-none
                  sm:w-[300px]
                  lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
              >
                <Image
                  src="/images/tsa-meeting.jpg"
                  alt="Founder presenting during a working session"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
                  className="object-cover"
                />
              </div>

              <div
                ref={(el) => {
                  imgRefs.current[1] = el;
                }}
                className="
                  relative
                  w-full
                  max-w-[420px]
                  sm:max-w-none
                  sm:w-[300px]
                  lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
              >
                <Image
                  src="/images/tsa-installation.jpg"
                  alt="Person seated watching a video installation"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
                  className="object-cover"
                />
              </div>

              <div
                ref={(el) => {
                  imgRefs.current[2] = el;
                }}
                className="relative w-full max-w-[420px] sm:max-w-none sm:w-[300px] lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] shrink-0 overflow-hidden bg-[#dedcdc]"
              >
                <Image
                  src="/images/tsa-field.jpg"
                  alt="Person standing in a field looking outward"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 300px, 340px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* CLOSING PARAGRAPH */}
            <p
              ref={closingRef}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[360px] mt-10 sm:mt-12 lg:mt-14 mx-auto text-center sm:mx-0 sm:text-left"
            >
              The challenge was to create an identity that could work across
              bottles, boxes, stickers, seals, tissue paper, social posts,
              website pages, printed inserts, and emailers. TSA needed a
              flexible identity system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}