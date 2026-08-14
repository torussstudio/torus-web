"use client";

import Image from "next/image";
import { overview } from "@/lib/constants";

type Overview = {
  statement: string;
  location: string;
  period: string;
  services: string[]; // rendered as a "/"-joined line, wraps naturally
  image: string;
  imageAlt: string;
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