"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { practices } from "@/lib/constants";
import Lines from "@/components/sections/archive/Lines";
import { h } from "./styles";

/** shared columns: index | title and description | practice details | toggle */
const cols =
  "grid grid-cols-[44px_minmax(0,1fr)_28px] gap-x-12 px-24 md:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)_36px] md:gap-x-24 md:px-40 xl:grid-cols-[182fr_664fr_717fr_49fr] xl:gap-x-0 xl:px-154";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const HOVER_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1280px)";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 49 49"
      fill="none"
      aria-hidden="true"
      className="size-24 text-[#38362e] transition-colors duration-300 md:size-28 xl:size-36"
    >
      <path d="M0 24.5h49" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24.5 0v49"
        stroke="currentColor"
        strokeWidth="1.5"
        className={cn("origin-center transition-transform duration-700", EASE, open && "scale-y-0")}
      />
    </svg>
  );
}

export default function AreasOfPractice() {
  const [activeId, setActiveId] = useState<string | null>(practices[0]?.id ?? null);
  const [hoverMode, setHoverMode] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia(HOVER_QUERY);
    const update = () => setHoverMode(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      clearTimeout(hoverTimer.current);
    };
  }, []);

  const hoverOpen = (id: string) => {
    if (!hoverMode) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveId(id), 110);
  };

  const hoverCancel = () => clearTimeout(hoverTimer.current);

  return (
    <section className={cn(h.inner, "pb-64 md:pb-96 xl:pb-0")}>
      <div className="flex flex-col gap-12 px-24 pt-64 pb-40 md:flex-row md:items-end md:justify-between md:px-40 md:pt-96 md:pb-56 xl:px-0 xl:pt-194 xl:pr-154 xl:pb-130 xl:pl-152">
        <h2 data-reveal className={h.h2}>
          Areas of Practice
        </h2>
        <p data-reveal className={cn(h.body, "uppercase xl:pb-12")}>
          [ What we can help with ]
        </p>
      </div>

      <ul data-fx="areas" className="border-t border-[#38362e]/50" onMouseLeave={hoverCancel}>
        {practices.map((practice) => {
          const open = activeId === practice.id;
          const panelId = `practice-${practice.id}`;
          const title = practice.title.join(" ");
          const details = practice.details
            .flatMap((line) => line.split("/"))
            .map((line) => line.trim())
            .filter(Boolean);

          return (
            <li
              key={practice.id}
              onMouseEnter={() => hoverOpen(practice.id)}
              className={cn(
                "relative grid grid-rows-[auto_0fr] border-b border-[#38362e]/50 transition-[grid-template-rows,margin,background-color] duration-900",
                EASE,
                open && "my-16 grid-rows-[auto_1fr] bg-[#eae6dc] before:pointer-events-none before:absolute before:inset-x-0 before:-top-16 before:h-16 before:bg-[#eae6dc] before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-16 after:h-16 after:bg-[#eae6dc] after:content-['']",
              )}
            >
              <button
                type="button"
                aria-label={`${open ? "Close" : "Open"} ${title}`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => {
                  if (hoverMode) setActiveId(practice.id);
                  else setActiveId(open ? null : practice.id);
                }}
                className={cn(
                  cols,
                  "w-full cursor-pointer text-left transition-[padding] duration-900",
                  EASE,
                  open
                    ? "items-start pt-40 pb-24 md:pt-48 md:pb-24 xl:pt-64 xl:pb-24"
                    : "items-center py-24 md:py-28 xl:py-32",
                )}
              >
                <span className={cn(h.body, "col-start-1 row-start-1 whitespace-nowrap")}>
                  {practice.id}
                </span>

                <span
                  data-fx="area-title"
                  className={cn(
                    "col-start-2 row-start-1 min-w-0 tracking-[-0.025em]",
                    open
                      ? "text-[length:clamp(30px,4vw,54px)] leading-[1.08]"
                      : "text-[length:clamp(22px,2.2vw,32px)] leading-[1.2]",
                  )}
                >
                  {open ? <Lines lines={practice.title} /> : title}
                </span>

                <span
                  className={cn(
                    "col-start-3 row-start-1 justify-self-end md:col-start-4",
                  )}
                >
                  <ToggleIcon open={open} />
                </span>
              </button>

              <div
                id={panelId}
                aria-hidden={!open}
                inert={!open}
                className={cn(
                  "min-h-0 overflow-hidden transition-[opacity,transform] duration-700",
                  EASE,
                  open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-8 opacity-0",
                )}
              >
                <div className={cn(cols, "pt-8 pb-40 md:pt-12 md:pb-48 xl:pt-16 xl:pb-56")}>
                  <p className="col-start-2 max-w-[480px] text-[length:clamp(16px,1.35vw,19px)] leading-[1.4] tracking-[0.01em]">
                    {practice.description.join(" ")}
                  </p>

                  <div className="col-start-2 mt-24 text-[length:clamp(16px,1.45vw,21px)] leading-[1.75] tracking-[0.005em] md:hidden">
                    {details.map((detail) => (
                      <span key={detail} className="block">
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div aria-hidden="true" className="hidden md:col-span-full md:row-start-2 md:block md:h-24 xl:h-64" />
                </div>
              </div>

              <div
                aria-hidden={!open}
                inert={!open}
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-48 hidden transition-[opacity,transform] duration-700 md:block xl:top-64",
                  EASE,
                  open ? "visible translate-y-0 opacity-100 delay-100" : "invisible -translate-y-8 opacity-0",
                )}
              >
                <div className={cols}>
                  <div className="col-start-3 row-start-1 text-[length:clamp(16px,1.45vw,21px)] leading-[1.75] tracking-[0.005em] md:translate-x-64 md:pl-16 md:leading-[1.9] xl:translate-x-96 xl:pl-32 xl:text-[length:clamp(19px,1.5vw,23px)]">
                    {details.map((detail) => (
                      <span key={detail} className="block">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
