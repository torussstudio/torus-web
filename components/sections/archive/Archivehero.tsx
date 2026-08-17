"use client";

import Image from "next/image";
import { project } from "@/lib/constants";

type Project = {
  title: string;
  location: string;
  period: string;
  projectLead: string;
  contributors: string[];
  heroImage: string;
  heroImageAlt: string;
  thumbImage: string;
  thumbImageAlt: string;
};


export default function ProjectDetail({ data = project }: { data?: Project }) {
  const sidebarLines = data.title.split(" ");

  return (
    <section className="relative w-full overflow-hidden bg-white">
     <div className="relative max-w-[1728px] mx-auto pl-0 pr-5 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 pt-0 pb-0">
        {/* ============ CARD — border-b only, bleeds left, right AND top ============ */}
        <div className="relative bg-white lg:flex">
          {/* ============ SIDEBAR ============ */}
          <div className="lg:w-[280px] lg:shrink-0 lg:border-r border-black/85 pl-12 pr-6 sm:pl-16 sm:pr-8 lg:pl-14 lg:pr-8 py-8 sm:py-10 flex flex-row lg:flex-col gap-8 lg:gap-0 items-start">
            <div className="flex flex-col shrink-0">
              <h2 className="font-nova text-[1.4rem] sm:text-[1.8rem] leading-[1.15] tracking-[0.01em] text-[#181818] uppercase">
                {sidebarLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <div className="h-px w-10 bg-black/70 mt-4 mb-6 lg:mb-8" />

              <div className="relative w-[150px] h-[195px] sm:w-[170px] sm:h-[220px] overflow-hidden bg-[#F4F3F1]">
                <Image
                  src={data.thumbImage}
                  alt={data.thumbImageAlt}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="font-nixie text-[14px] sm:text-[16px] leading-[1.6] text-[#181818] lg:mt-8 ml-auto lg:ml-0 self-end lg:self-start">
              <p>{data.location}</p>
              <p>{data.period}</p>
            </div>
          </div>

          {/* ============ MAIN CONTENT ============ */}
          <div className="flex-1 pl-10 pr-6 sm:pl-16 sm:pr-10 lg:pl-24 lg:pr-12 py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
              {/* HERO IMAGE */}
              <div className="relative w-full lg:w-[42%] xl:w-[41%] h-[280px] sm:h-[420px] lg:h-auto lg:min-h-[520px] xl:min-h-[600px] shrink-0 overflow-hidden bg-[#F4F3F1]">
                <Image
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* TEXT COLUMN — heading/owner pinned top, lead/contributors
                  pinned bottom, matching the image's height on desktop */}
              <div className="flex-1 flex flex-col justify-between gap-10 lg:min-h-[520px] xl:min-h-[600px]">
                <div>
                  <h1 className="font-nova text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.08] tracking-[0.01em] text-[#181818] uppercase">
                    {sidebarLines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-8 sm:gap-10 text-left lg:text-right">
                  <div>
                    <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                      Project Lead
                    </p>
                    <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818]">
                      {data.projectLead}
                    </p>
                  </div>

                  <div>
                    <p className="font-nixie text-[12px] sm:text-[15px] uppercase tracking-[0.14em] text-[#181818] mb-2">
                      Studio Contributors
                    </p>
                    <p className="font-nixie text-[15px] sm:text-[16px] text-[#181818] max-w-[280px] lg:ml-auto">
                      {data.contributors.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
