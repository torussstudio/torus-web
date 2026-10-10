"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { exultCommunication as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function CommunicationSection() {
  // one row open at a time; click the open row again to close it
  const [open, setOpen] = useState<number | null>(d.defaultOpen);

  return (
    <section className={t.inner}>
      <div className="border-b px-24 py-48 md:px-40 md:py-64 xl:px-0 xl:pt-99 xl:pb-113">
        {/* header */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 xl:grid-cols-[1075fr_541fr] xl:gap-0 xl:px-152">
          <div>
            <span data-reveal className={t.label}>
              {d.label}
            </span>
            <h2 data-reveal className={cn(t.h2, "mt-12 xl:mt-28")}>
              <Lines lines={d.heading} />
            </h2>
          </div>
          <p data-reveal className={cn(t.body, "pt-20 md:pt-36 xl:max-w-437 xl:pt-81")}>
            {d.intro}
          </p>
        </div>

        {/* platforms accordion */}
        <ul className="mt-36 border-t md:mt-48 xl:mt-71 xl:border-t-0 xl:px-135">
          {d.platforms.map((item, i) => {
            const isOpen = open === i;
            const hasBody = Boolean(item.body);
            const panelId = `exult-platform-${i}`;

            return (
              <li key={item.name} className="border-b">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-16 py-24 text-left md:grid-cols-[120px_150px_1fr_auto] md:py-36 xl:grid-cols-[calc(var(--spacing)*193)_calc(var(--spacing)*672)_1fr_auto] xl:gap-0 xl:pt-60 xl:pb-60"
                >
                  {/* index + platform (one line on phone) */}
                  <span className={cn(t.body, "col-span-2 mb-8 flex gap-16 md:col-span-1 md:mb-0 md:contents")}>
                    <span className="whitespace-pre xl:pl-24">{`[ ${String(i + 1).padStart(2, "0")} ]`}</span>
                    <span className="xl:w-118 xl:text-center">{item.name}</span>
                  </span>

                  <span className={t.lead}>
                    <Lines lines={item.title} />
                  </span>

                  {/* plus / minus */}
                  <span aria-hidden="true" className="relative block size-28 xl:mr-19 xl:size-49">
                    <span className="absolute top-1/2 left-0 h-px w-full bg-[#afafaf]" />
                    <span
                      className={cn(
                        "absolute top-0 left-1/2 h-full w-px bg-[#afafaf] transition-transform duration-300 motion-reduce:transition-none",
                        isOpen ? "scale-y-0" : "scale-y-100",
                      )}
                    />
                  </span>
                </button>

                {/* panel — animates height with the grid-rows trick */}
                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 gap-16 pb-28 md:grid-cols-[120px_1fr] md:gap-x-0 md:pb-36 xl:grid-cols-[calc(var(--spacing)*193)_calc(var(--spacing)*672)_1fr] xl:pb-67">
                      <Media
                        media={item.image}
                        className="aspect-[238/148] h-auto w-[238px] max-w-full md:col-start-2 md:row-start-1 xl:col-start-2 xl:mt-2 xl:h-148 xl:w-238 xl:max-w-none xl:aspect-auto"
                        sizes="240px"
                      />
                      {hasBody && (
                        <p className={cn(t.body, "md:col-start-2 xl:col-start-3 xl:row-start-1 xl:-mt-7 xl:max-w-460 xl:pl-3")}>
                          {item.body}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* closing impact line */}
      <div className="grid grid-cols-1 border-b xl:min-h-266 xl:grid-cols-[272fr_1648fr]">
        <div className={cn(t.sideLabel, "xl:flex xl:items-center xl:justify-center xl:pt-0")}>
          <span className={t.label}>{d.impactLabel}</span>
        </div>
        <div className="flex items-center px-24 pt-16 pb-48 md:px-40 md:pb-64 xl:py-0 xl:pr-0 xl:pl-730">
          <p data-reveal className={cn(t.body, "xl:max-w-614")}>
            {d.impact}
          </p>
        </div>
      </div>
    </section>
  );
}
