

// "use client";

// import { useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { tabs } from "@/lib/constants";
// import { socials } from "@/lib/constants";
// import { GoArrowRight } from "react-icons/go";

// const TABS_PER_PAGE = 3;

// export default function StudioHero() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeInPage, setActiveInPage] = useState(0);
//   const [dividerRightGap, setDividerRightGap] = useState(0);

//   const dividerWrapRef = useRef<HTMLDivElement>(null);
//   const tabsRowRef = useRef<HTMLDivElement>(null);

//   const visibleTabs = Array.from({ length: TABS_PER_PAGE }, (_, offset) =>
//     tabs[(startIndex + offset) % tabs.length]
//   );

//   const goToNextPage = () => {
//     setStartIndex((prev) => (prev + 1) % tabs.length);
//     setActiveInPage(0);
//   };

//   useLayoutEffect(() => {
//     function measure() {
//       if (window.innerWidth < 1024) {
//         setDividerRightGap(0);
//         return;
//       }
//       if (dividerWrapRef.current && tabsRowRef.current) {
//         const wrapRight = dividerWrapRef.current.getBoundingClientRect().right;
//         const rowRight = tabsRowRef.current.getBoundingClientRect().right;
//         setDividerRightGap(Math.max(0, wrapRight - rowRight));
//       }
//     }
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, [startIndex]);

//   return (
//     <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
//       <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 lg:py-16">
//         {/* ============ TOP GRID: label + heading + socials ============ */}
//         <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-8">
//           {/* Vertical STUDIO label — desktop only */}
//           <div className="hidden lg:flex absolute left-0 top-2 flex-col items-center">
//             <div className="h-6 w-px bg-black/30 mb-4 ml-[5px]" />
//             <span
//               className="font-nixie  text-[16px] uppercase tracking-[0.18em] text-[#181818] ml-[5px]"
//               style={{ writingMode: "vertical-rl", transform: "rotate(360deg)" }}
//             >
//               STUDIO
//             </span>
//           </div>

//           {/* HEADING */}
//           <h1
//             className="
//               col-span-1 lg:col-span-9 lg:col-start-2
//               font-nova
//               text-[1.75rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[2.6rem] xl:text-[3.1rem] 2xl:text-[3.4rem]
//               leading-[1.12] sm:leading-[1.1] lg:leading-[1.08]
//               tracking-[0.01em]
//               text-[#181818]
//               break-words
//             "
//           >
//             A MULTIDIMENSIONAL STUDIO
//             <br className="hidden sm:block" />{" "}
//             SHAPING BRANDS, CULTURE, AND
//             <br className="hidden sm:block" />{" "}
//             CREATIVE EXPRESSION.
//           </h1>

//           {/* SOCIALS — desktop: pinned top right. mobile/tablet: inline row */}
//           <div className="hidden lg:flex lg:col-span-1 lg:col-start-12 flex-col items-end gap-5 pt-2 lg:translate-x-0 xl:translate-x-7">
//             {socials.map(({ Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="text-[#6b6b6b] hover:text-[#181818] transition-colors"
//               >
//                 <Icon className="text-[22px]" />
//               </a>
//             ))}
//           </div>

//           <div className="flex lg:hidden gap-5 sm:gap-6 flex-wrap">
//             {socials.map(({ Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="text-[#6b6b6b] hover:text-[#181818] transition-colors"
//               >
//                 <Icon className="text-[20px]" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ============ MIDDLE: paragraph + image + quote ============ */}
//         <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
//           {/* LEFT — intro paragraph + view more (lg-il image-inte height-inu
//               opposite aayi nadukku vertically center aavan flex use cheyyunnu) */}
//          <div className="lg:col-span-3 lg:col-start-2 h-[420px] flex flex-col">
//   {/* Centered text */}
//   <div className="flex-1 flex items-center">
//     <p className="font-nixie text-[16px] sm:text-[15px] leading-[1.75] text-[#181818] max-w-[420px] sm:max-w-[320px] lg:max-w-[380px]">
//       Toruss exists at the intersection of branding, digital
//       experiences, communication systems, art, objects, and cultural
//       exploration.
//     </p>
//   </div>

//   {/* Bottom button */}
//   <a
//     href="#"
//     className="group inline-flex items-center gap-2 w-fit font-nixie text-[16px] uppercase tracking-[0.12em] text-[#80c46c]"
//   >
//     <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
//       ↳
//     </span>
//     VIEW MORE
//   </a>
// </div>

//           {/* RIGHT — image + quote stacked below it, right-aligned */}
//           <div className="lg:col-span-8 flex flex-col items-end">
//             <div className="relative w-full h-[215px] sm:h-[320px] md:h-[370px] lg:h-[390px] xl:h-[420px] overflow-hidden">
//   <Image
//     src="/images/heroimage.avif"
//     alt="Studio"
//     fill
//     priority
//     sizes="(max-width: 1024px) 100vw, 66vw"
//     className="object-cover"
//   />
// </div>

//             <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[85%] sm:max-w-[300px] lg:max-w-[260px] text-right mt-6 sm:mt-8">
//               We work across disciplines because we rarely experience the
//               world in isolated categories ourselves.
//             </p>
//           </div>
//         </div>

//         {/* ============ NUMBERED TABS + LABELS (merged per column) ============ */}
//         <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//           <div
//             ref={tabsRowRef}
//             className="lg:col-span-9 lg:col-start-2 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-8 sm:gap-y-10 lg:w-full"
//           >
//             {visibleTabs.map((tab, i) => (
//               <div
//                 key={tab.number}
//                 className="inline-flex text-[#181818] font-nixie flex-col items-center sm:items-end gap-3 w-fit"
//               >
//                 <button
//                   onClick={() => setActiveInPage(i)}
//                   className={`font-nixie text-[16px] sm:text-[18px] cursor-pointer uppercase tracking-[0.1em] transition-colors ${
//                     activeInPage === i ? "text-[#181818]" : "text-[#6b6b6b] hover:text-black"
//                   }`}
//                 >
//                   — {tab.number}
//                 </button>

//                 <span
//                   className={`font-nixie text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[21px] leading-[1.3] text-center sm:text-right transition-colors ${
//                     activeInPage === i ? "text-[#181818]" : "text-[#6b6b6b] hover:text-black"
//                   }`}
//                 >
//                   {tab.lines[0]}
//                   <br />
//                   {tab.lines[1]}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Arrow button — cycles to next page of 3 tabs (wraps back to start).
//               Visible from sm up now, not just lg, so tablet/mobile users can page too. */}
//           <button
//             aria-label="Next"
//             onClick={goToNextPage}
//             className="cursor-pointer flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center bg-white border border-black/30 text-black/60 hover:bg-black hover:text-white hover:border-black transition-colors self-center sm:self-end lg:self-auto lg:col-span-1 lg:col-start-12 mx-auto sm:mx-0 sm:ml-auto lg:ml-auto"
//           >
//             <GoArrowRight size={20} />
//           </button>
//         </div>

//         {/* ============ DIVIDER — left edge full-bleeds to the screen's true
//             left edge; right edge is measured via JS to exactly match the
//             tabs row's right boundary (fixed % drifts when text length
//             or gaps change) ============ */}
//         <div ref={dividerWrapRef} className="mt-10 lg:mt-14 relative h-px">
//           <div
//             className="absolute top-0 h-px bg-black/12"
//             style={{ left: "calc(50% - 50vw)", right: dividerRightGap }}
//           />
//         </div>

//         {/* ============ CLOSING QUOTE + DIAGRAM ============ */}
//         <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
//           <div className="lg:col-span-5 lg:col-start-7 lg:-translate-x-6 flex items-center gap-5 sm:gap-6">
//             <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[220px] sm:max-w-[280px] lg:max-w-[380px]">
//               We are interested in how all of these layers come together to
//               shape human experience. Quietly, thoughtfully, and with
//               long-term intent.
//             </p>

//             <svg
//               width="48"
//               height="48"
//               viewBox="0 0 52 52"
//               fill="none"
//               className="shrink-0 text-black/30 sm:w-[56px] sm:h-[56px] lg:w-[65px] lg:h-[65px]"
//             >
//               <path
//                 d="M46 6 L6 46"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//               <path
//                 d="M6 24 L6 46 L28 46"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "@/lib/constants";
import { socials } from "@/lib/constants";
import { GoArrowRight } from "react-icons/go";

const TABS_PER_PAGE = 3;

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function StudioHero() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeInPage, setActiveInPage] = useState(0);
  const [dividerRightGap, setDividerRightGap] = useState(0);

  const dividerWrapRef = useRef<HTMLDivElement>(null);
  const tabsRowRef = useRef<HTMLDivElement>(null);

  const visibleTabs = Array.from({ length: TABS_PER_PAGE }, (_, offset) =>
    tabs[(startIndex + offset) % tabs.length]
  );

  const goToNextPage = () => {
    setStartIndex((prev) => (prev + 1) % tabs.length);
    setActiveInPage(0);
  };

  useLayoutEffect(() => {
    function measure() {
      if (window.innerWidth < 1024) {
        setDividerRightGap(0);
        return;
      }
      if (dividerWrapRef.current && tabsRowRef.current) {
        const wrapRight = dividerWrapRef.current.getBoundingClientRect().right;
        const rowRight = tabsRowRef.current.getBoundingClientRect().right;
        setDividerRightGap(Math.max(0, wrapRight - rowRight));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [startIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 lg:py-16">
        {/* ============ TOP GRID: label + heading + socials ============ */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-8">
          {/* Vertical STUDIO label — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden lg:flex absolute left-0 top-2 flex-col items-center"
          >
            <div className="h-6 w-px bg-black/30 mb-4 ml-[5px]" />
            <span
              className="font-nixie  text-[16px] uppercase tracking-[0.18em] text-[#181818] ml-[5px]"
              style={{ writingMode: "vertical-rl", transform: "rotate(360deg)" }}
            >
              STUDIO
            </span>
          </motion.div>

          {/* HEADING — clip-path line reveal, staggered */}
          <h1
            className="
              col-span-1 lg:col-span-9 lg:col-start-2
              font-nova
              text-[1.75rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[2.6rem] xl:text-[3.1rem] 2xl:text-[3.4rem]
              leading-[1.12] sm:leading-[1.1] lg:leading-[1.08]
              tracking-[0.01em]
              text-[#181818]
              break-words
            "
          >
            {[
              "A MULTIDIMENSIONAL STUDIO",
              "SHAPING BRANDS, CULTURE, AND",
              "CREATIVE EXPRESSION.",
            ].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: easeOut, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* SOCIALS — desktop: pinned top right. mobile/tablet: inline row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden lg:flex lg:col-span-1 lg:col-start-12 flex-col items-end gap-5 pt-2 lg:translate-x-0 xl:translate-x-7"
          >
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#6b6b6b] hover:text-[#181818] transition-colors"
              >
                <Icon className="text-[22px]" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex lg:hidden gap-5 sm:gap-6 flex-wrap"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#6b6b6b] hover:text-[#181818] transition-colors"
              >
                <Icon className="text-[20px]" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ============ MIDDLE: paragraph + image + quote ============ */}
        <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* LEFT — intro paragraph + view more */}
          <div className="lg:col-span-3 lg:col-start-2 h-[420px] flex flex-col">
            {/* Centered text */}
            <div className="flex-1 flex items-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="font-nixie text-[16px] sm:text-[15px] leading-[1.75] text-[#181818] max-w-[420px] sm:max-w-[320px] lg:max-w-[380px]"
              >
                Toruss exists at the intersection of branding, digital
                experiences, communication systems, art, objects, and cultural
                exploration.
              </motion.p>
            </div>

            {/* Bottom button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
              whileHover="hover"
              className="group inline-flex items-center gap-2 w-fit font-nixie text-[16px] uppercase tracking-[0.12em] text-[#80c46c]"
            >
              <motion.span
                variants={{ hover: { x: 2, y: -2 } }}
                transition={{ duration: 0.3 }}
              >
                ↳
              </motion.span>
              VIEW MORE
            </motion.a>
          </div>

          {/* RIGHT — image + quote stacked below it, right-aligned */}
          <div className="lg:col-span-8 flex flex-col items-end">
            <div className="relative w-full h-[215px] sm:h-[320px] md:h-[370px] lg:h-[390px] xl:h-[420px] overflow-hidden">
              <motion.div
                initial={{ scale: 1.18, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.3, ease: easeOut, delay: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/heroimage.avif"
                  alt="Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
              className="font-nixie text-[13px] sm:text-[16px] leading-[1.7] text-[#181818] max-w-[85%] sm:max-w-[300px] lg:max-w-[260px] text-right mt-6 sm:mt-8"
            >
              We work across disciplines because we rarely experience the
              world in isolated categories ourselves.
            </motion.p>
          </div>
        </div>

        {/* ============ NUMBERED TABS + LABELS (merged per column) ============ */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <motion.div
            ref={tabsRowRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:col-span-9 lg:col-start-2 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-8 sm:gap-y-10 lg:w-full"
          >
            {visibleTabs.map((tab, i) => (
              <motion.div
                key={`${startIndex}-${tab.number}`}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
                }}
                className="inline-flex text-[#181818] font-nixie flex-col items-center sm:items-end gap-3 w-fit"
              >
                <button
                  onClick={() => setActiveInPage(i)}
                  className={`font-nixie text-[16px] sm:text-[18px] cursor-pointer uppercase tracking-[0.1em] transition-colors ${
                    activeInPage === i ? "text-[#181818]" : "text-[#6b6b6b] hover:text-black"
                  }`}
                >
                  — {tab.number}
                </button>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeInPage === i ? "active" : "inactive"}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`font-nixie text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[21px] leading-[1.3] text-center sm:text-right transition-colors ${
                      activeInPage === i ? "text-[#181818]" : "text-[#6b6b6b] hover:text-black"
                    }`}
                  >
                    {tab.lines[0]}
                    <br />
                    {tab.lines[1]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow button — cycles to next page of 3 tabs (wraps back to start) */}
          <motion.button
            aria-label="Next"
            onClick={goToNextPage}
            whileHover={{ scale: 1.08, rotate: -8 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="cursor-pointer flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center bg-white border border-black/30 text-black/60 hover:bg-black hover:text-white hover:border-black transition-colors self-center sm:self-end lg:self-auto lg:col-span-1 lg:col-start-12 mx-auto sm:mx-0 sm:ml-auto lg:ml-auto"
          >
            <GoArrowRight size={20} />
          </motion.button>
        </div>

        {/* ============ DIVIDER — draws in from left on scroll ============ */}
        <div ref={dividerWrapRef} className="mt-10 lg:mt-14 relative h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: easeOut }}
            style={{
              left: "calc(50% - 50vw)",
              right: dividerRightGap,
              transformOrigin: "left",
            }}
            className="absolute top-0 h-px bg-black/12"
          />
        </div>

        {/* ============ CLOSING QUOTE + DIAGRAM ============ */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="lg:col-span-5 lg:col-start-7 lg:-translate-x-6 flex items-center gap-5 sm:gap-6"
          >
            <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818] max-w-[220px] sm:max-w-[280px] lg:max-w-[380px]">
              We are interested in how all of these layers come together to
              shape human experience. Quietly, thoughtfully, and with
              long-term intent.
            </p>

            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 52 52"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
              className="shrink-0 text-black/30 sm:w-[56px] sm:h-[56px] lg:w-[65px] lg:h-[65px]"
            >
              <motion.path
                d="M46 6 L6 46"
                stroke="currentColor"
                strokeWidth="1"
              />
              <motion.path
                d="M6 24 L6 46 L28 46"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}