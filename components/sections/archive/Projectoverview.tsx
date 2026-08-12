// "use client";

// import Image from "next/image";


// type Overview = {
//   statement: string;
//   location: string;
//   period: string;
//   services: string[]; // rendered as a "/"-joined line, wraps naturally
//   image: string;
//   imageAlt: string;
// };

// const overview: Overview = {
//   statement:
//     "TURNING A FRESH SKINCARE IDEA FROM ALICANTE INTO A LAUNCH-READY BRAND, PACKAGING, E-COMMERCE, AND DIGITAL SYSTEM.",
//   location: "Alicante, Spain",
//   period: "2025 – Present",
//   services: [
//     "Naming",
//     "Identity System",
//     "Packaging",
//     "E-Commerce",
//     "Social Media",
//     "Email Marketing",
//   ],
//   image: "/images/skincare-hero.jpg",
//   imageAlt: "Creative working at a desk surrounded by colorful packaging mockups",
// };

// export default function ProjectOverview({ data = overview }: { data?: Overview }) {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* MAX-WIDTH WRAPPER — same 1728px freeze as StudioHero / ProjectDetail,
//           so this section lines up with the rest of the page. */}
//       <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-10 lg:pb-14">
//         {/* ============ FRAME — no outer borders ============ */}
//         <div className="relative bg-white lg:flex">
//           {/* ============ SIDEBAR — empty, kept for grid consistency ============ */}
//           <div className="hidden lg:block lg:w-[200px] lg:shrink-0 border-r border-black/85" />

//           {/* ============ CONTENT ============ */}
//           <div className="flex-1 flex flex-col px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
//             {/* STATEMENT HEADING */}
//             <h1
//               className="
//                 font-nova mx-auto text-center
//                 text-[1.6rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[2.3rem] xl:text-[2.7rem] 2xl:text-[2.9rem]
//                 leading-[1.28] sm:leading-[1.3] lg:leading-[1.32]
//                 tracking-[0.005em]
//                 text-[#181818]
//                 max-w-[900px]
//               "
//             >
//               {data.statement}
//             </h1>

//             {/* HERO IMAGE */}
//             <div className="relative w-full mt-16 sm:mt-20 lg:mt-24 h-[220px] sm:h-[340px] md:h-[400px] lg:h-[420px] xl:h-[460px] overflow-hidden bg-[#F4F3F1]">
//               <Image
//                 src={data.image}
//                 alt={data.imageAlt}
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 80vw"
//                 className="object-cover"
//               />
//             </div>

//             {/* META ROW — location / period / services, wraps to a stack on mobile */}
//             <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 lg:gap-14">
//               <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] shrink-0">
//                 {data.location}
//               </p>
//               <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] shrink-0">
//                 {data.period}
//               </p>
//               <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] max-w-[480px]">
//                 {data.services.join(" / ")}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

/**
 * ProjectOverview — case-study intro block (statement + hero image + meta row).
 *
 * Pixel-reference: 1099×881 desktop screenshot.
 *   - Outer frame: thick left/right border (~12px) + thin top/bottom border
 *     (~3px) — an intentional asymmetric "frame" rather than a uniform box.
 *   - Left sidebar column ≈ 201/1099 (~18%) width, empty, divided by a
 *     hairline from the content column (kept for grid-consistency with the
 *     project detail page next to it).
 *   - Statement heading is centered, its measured width (201–991) runs
 *     almost the full content column, capped so it wraps like the reference.
 *   - Hero image box ratio inside content ≈ 746 : 878 (~85% of content width),
 *     indented from both the divider and the right frame.
 *   - Meta row below the image: 3 columns — location, period, and a
 *     services line that wraps onto a second line.
 *
 * Fonts / colors reuse the same tokens as StudioHero / ProjectDetail:
 * font-nova for display type, font-nixie for labels/body, #181818 ink,
 * #6b6b6b muted, white page bg.
 */

type Overview = {
  statement: string;
  location: string;
  period: string;
  services: string[]; // rendered as a "/"-joined line, wraps naturally
  image: string;
  imageAlt: string;
};

const overview: Overview = {
  statement:
    "TURNING A FRESH SKINCARE IDEA FROM ALICANTE INTO A LAUNCH-READY BRAND, PACKAGING, E-COMMERCE, AND DIGITAL SYSTEM.",
  location: "Alicante, Spain",
  period: "2025 – Present",
  services: [
    "Naming",
    "Identity System",
    "Packaging",
    "E-Commerce",
    "Social Media",
    "Email Marketing",
  ],
  image: "/images/skincare-hero.jpg",
  imageAlt: "Creative working at a desk surrounded by colorful packaging mockups",
};

export default function ProjectOverview({ data = overview }: { data?: Overview }) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* MAX-WIDTH WRAPPER — same 1728px freeze as StudioHero / ProjectDetail,
          so this section lines up with the rest of the page. */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-0 pb-0">
        {/* ============ FRAME — no outer borders ============ */}
        <div className="relative bg-white lg:flex">
          {/* ============ SIDEBAR — empty, kept for grid consistency ============ */}
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 border-r border-black/85" />

          {/* ============ CONTENT ============ */}
                  <div className="flex-1 flex flex-col px-6 sm:px-10 lg:px-12 xl:px-16 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">

            {/* STATEMENT HEADING */}
            <h1
              className="
                font-nova mx-auto text-center
                text-[1.6rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[2.3rem] xl:text-[2.7rem] 2xl:text-[2.9rem]
                leading-[1.28] sm:leading-[1.3] lg:leading-[1.32]
                tracking-[0.005em]
                text-[#181818]
                max-w-[1000px]
              "
            >
              {data.statement}
            </h1>

            {/* HERO IMAGE */}
            <div className="relative w-full mt-16 sm:mt-20 lg:mt-24 h-[220px] sm:h-[340px] md:h-[400px] lg:h-[420px] xl:h-[460px] overflow-hidden bg-[#F4F3F1]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
            </div>

            {/* META ROW — location / period / services, wraps to a stack on mobile */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 lg:gap-14">
              <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] shrink-0">
                {data.location}
              </p>
              <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] shrink-0">
                {data.period}
              </p>
              <p className="font-nixie text-[13px] sm:text-[14px] uppercase tracking-[0.06em] text-[#6b6b6b] max-w-[480px]">
                {data.services.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}