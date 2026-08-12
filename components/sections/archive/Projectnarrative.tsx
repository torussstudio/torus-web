// "use client";


// type Narrative = {
//   heading: string; // two-line heading
//   body: string;
//   eyebrow: string;
//   statement: string; // big pull-quote style line, wraps to 2 lines
// };

// const narrative: Narrative = {
//   heading: "RETHINKING FRESHNESS IN SKINCARE.",
//   body: "When the project came to us, it was to build a launch-ready brand system around a clear idea of skincare made fresh, in smaller batches. And when we began exploring the project, what stood out was not just the product itself, but the larger contradiction surrounding the skincare industry. The category had become increasingly focused on shelf life, preservation, and mass distribution.",
//   eyebrow: "The challenge was more interesting:",
//   statement: "how to make people believe in the idea of freshly made skincare.",
// };

// export default function ProjectNarrative({ data = narrative }: { data?: Narrative }) {
//   const headingLines = data.heading.split(". ").map((l, i, arr) => (i < arr.length - 1 ? l + "." : l));

//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* MAX-WIDTH WRAPPER — same 1728px freeze as the rest of the page. */}
//       <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-0 pb-8 sm:pb-10 lg:pb-14">
//         {/* ============ FRAME — no outer borders ============ */}
//         <div className="relative lg:flex">
//           {/* ============ SIDEBAR — white, empty, grid-consistency ============ */}
//           <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black/85" />

//           {/* ============ CONTENT — light-gray panel ============ */}
//            <div className="flex-1 lg:max-w-[1120px] bg-[#EAE9E9] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16">
//             <h2 className="font-nova text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.4rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase max-w-[600px]">
//               {headingLines.map((line, i) => (
//                 <span key={i} className="block">
//                   {line}
//                 </span>
//               ))}
//             </h2>

//             <p className="font-nixie text-[14px] sm:text-[15px] leading-[1.75] text-[#5c5c5c] max-w-[420px] mt-8 sm:mt-10">
//               {data.body}
//             </p>

//             <p className="font-nixie text-[14px] sm:text-[15px] text-[#5c5c5c] mt-16 sm:mt-20 lg:mt-24">
//               {data.eyebrow}
//             </p>

//             <p className="font-nixie text-[1.7rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.3rem] xl:text-[2.6rem] leading-[1.2] text-[#181818] mt-4 sm:mt-6 max-w-[750px]">
//               {data.statement}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

/**
 * ProjectNarrative — case-study "challenge" block (heading + body copy +
 * big pull-statement), the section that follows ProjectOverview.
 *
 * Pixel-reference: 1598×879 desktop screenshot.
 *   - Outer frame: uniform ~4-6px black border on all 4 sides (unlike
 *     ProjectOverview, this block IS fully boxed).
 *   - Sidebar column ≈ 287/1598 (~18%) — same ratio as ProjectDetail /
 *     ProjectOverview, white background, empty (grid-consistency).
 *   - Content column: light-gray panel (#EAE9E9) that fills the rest of
 *     the frame — this is what visually separates it from the white
 *     sidebar and from the sections above/below.
 *   - Heading (font-nova, uppercase) sits top-left of the content panel,
 *     a narrow body paragraph follows, then a large gap, then a small
 *     eyebrow line ("The challenge was more interesting:") and a big
 *     two-line pull-statement in a lighter serif (font-nixie at display
 *     size, not uppercase — deliberately different voice from the heading).
 *
 * Fonts / colors reuse the same tokens as StudioHero / ProjectDetail /
 * ProjectOverview: font-nova for display type, font-nixie for labels/body,
 * #181818 ink, #6b6b6b muted, white sidebar, #EAE9E9 content panel.
 */

type Narrative = {
  heading: string; // two-line heading
  body: string;
  eyebrow: string;
  statement: string; // big pull-quote style line, wraps to 2 lines
  detailImage: string;
  detailImageAlt: string;
  detailCaption: string;
  studioImage: string;
  studioImageAlt: string;
  closingCaption: string;
};

const narrative: Narrative = {
  heading: "RETHINKING FRESHNESS IN SKINCARE.",
  body: "When the project came to us, it was to build a launch-ready brand system around a clear idea of skincare made fresh, in smaller batches. And when we began exploring the project, what stood out was not just the product itself, but the larger contradiction surrounding the skincare industry. The category had become increasingly focused on shelf life, preservation, and mass distribution.",
  eyebrow: "The challenge was more interesting:",
  statement: "how to make people believe in the idea of freshly made skincare.",
  detailImage: "/images/skincare-fresh-detail.jpg",
  detailImageAlt: "Person viewing an art installation through glass",
  detailCaption:
    "The idea of \"fresh\" is already a familiar word in skincare. It is often used loosely to suggest something natural. But the brand's idea of fresh was connected to the time closest to manufacturing, when the formulation is newly prepared, and the product is closer to its peak performance.",
  studioImage: "/images/skincare-studio-team.jpg",
  studioImageAlt: "Design team collaborating around a table in a bright studio loft",
  closingCaption:
    "So we approached the project not as a conventional skincare identity but as a broader exercise in building a world around freshness, proof, and modern ritual.",
};

export default function ProjectNarrative({ data = narrative }: { data?: Narrative }) {
  const headingLines = data.heading.split(". ").map((l, i, arr) => (i < arr.length - 1 ? l + "." : l));

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* MAX-WIDTH WRAPPER — same 1728px freeze as the rest of the page. */}
      <div className="relative max-w-[1728px] mx-auto pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0 pt-0 pb-8 sm:pb-10 lg:pb-14">
        {/* ============ FRAME — no outer borders ============ */}
        <div className="relative lg:flex">
          {/* ============ SIDEBAR — white, empty, grid-consistency ============ */}
          <div className="hidden lg:block lg:w-[200px] lg:shrink-0 bg-white border-r border-black/85" />

          {/* ============ CONTENT — light-gray panel ============ */}
          <div className="flex-1 bg-[#EAE9E9] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16">
            <h2 className="font-nova text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.1rem] xl:text-[2.4rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase max-w-[600px]">
              {headingLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="font-nixie text-[14px] sm:text-[15px] leading-[1.75] text-[#5c5c5c] max-w-[420px] mt-8 sm:mt-10">
              {data.body}
            </p>

            <p className="font-nixie text-[14px] sm:text-[15px] text-[#5c5c5c] mt-16 sm:mt-20 lg:mt-24">
              {data.eyebrow}
            </p>

            <p className="font-nixie text-[1.7rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.3rem] xl:text-[2.6rem] leading-[1.2] text-[#181818] mt-4 sm:mt-6 max-w-[750px]">
              {data.statement}
            </p>

            {/* DETAIL IMAGE + CAPTION ROW */}
            <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
              <div className="relative w-full sm:w-[280px] lg:w-[300px] h-[220px] sm:h-[230px] shrink-0 overflow-hidden bg-[#dedcdc]">
                <Image
                  src={data.detailImage}
                  alt={data.detailImageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.7] text-[#5c5c5c] max-w-[320px] sm:pt-2">
                {data.detailCaption}
              </p>
            </div>

            {/* HAIRLINE DIVIDER */}
            <div className="h-px bg-black/15 mt-10 sm:mt-12 lg:mt-14" />

            {/* LARGE STUDIO IMAGE */}
            <div className="relative w-full mt-10 sm:mt-12 lg:mt-14 h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-[#dedcdc]">
              <Image
                src={data.studioImage}
                alt={data.studioImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            {/* CLOSING CAPTION — right-aligned, indented from the left */}
            <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.7] text-[#5c5c5c] max-w-[320px] text-right ml-auto mt-6 sm:mt-8">
              {data.closingCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}