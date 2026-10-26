"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { practices } from "@/lib/constants";
import Media from "@/components/sections/archive/Media";
import Lines from "@/components/sections/archive/Lines";
import { h } from "./styles";

/** shared column grid: index | title | description | icon */
const cols =
  "grid grid-cols-[44px_1fr_28px] gap-x-12 px-24 md:grid-cols-[64px_1fr_1fr_36px] md:gap-x-24 md:px-40 xl:grid-cols-[182fr_664fr_717fr_49fr] xl:gap-x-0 xl:px-154";

/** one smooth ease for everything that opens / closes (slow start + end) */
const EASE = "ease-[cubic-bezier(0.65,0,0.35,1)]";

/** large screens with a real mouse open rows on hover; touch keeps click */
const HOVER_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1280px)";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 49 49"
      fill="none"
      aria-hidden="true"
      className={cn(
        "size-28 transition-colors duration-300 md:size-36 xl:size-49",
        open ? "text-[#38362e]" : "text-[#afafaf]",
      )}
    >
      <path d="M0 24.5h49" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24.5 0v49"
        stroke="currentColor"
        strokeWidth="1.5"
        className={cn("origin-center transition-transform duration-500", EASE, open && "scale-y-0")}
      />
    </svg>
  );
}

export default function AreasOfPractice() {
  const [activeId, setActiveId] = useState<string | null>(practices[0]?.id ?? null);
  const [hoverMode, setHoverMode] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // follow the screen: hover mode only where hovering is possible
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

  // hover-intent: a short delay so sweeping the mouse across the list does
  // not flick every row open. The last hovered row stays open when the mouse
  // leaves the list (closing all would make the page below jump).
  const hoverOpen = (id: string) => {
    if (!hoverMode) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveId(id), 110);
  };
  const hoverCancel = () => clearTimeout(hoverTimer.current);

  return (
    <section className={cn(h.inner, "pb-64 md:pb-96 xl:pb-0")}>
      {/* HEADER */}
      <div className="flex flex-col gap-12 px-24 pt-64 pb-40 md:flex-row md:items-end md:justify-between md:px-40 md:pt-96 md:pb-56 xl:px-0 xl:pt-194 xl:pr-154 xl:pb-130 xl:pl-152">
        <h2 data-reveal className={h.h2}>
          Areas of Practice
        </h2>
        <p data-reveal className={cn(h.body, "uppercase xl:pb-12")}>
          [ What we can help with ]
        </p>
      </div>

      {/* ROWS */}
      <ul data-fx="areas" onMouseLeave={hoverCancel}>
        {practices.map((practice) => {
          const open = activeId === practice.id;
          const panelId = `practice-${practice.id}`;

          return (
            <li
              key={practice.id}
              onMouseEnter={() => hoverOpen(practice.id)}
              className={cn(
                "border-b transition-colors duration-700",
                EASE,
                open && "bg-[#eae6dc]",
              )}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => {
                  // hover mode: a click on the open row keeps it open
                  if (hoverMode) setActiveId(practice.id);
                  else setActiveId(open ? null : practice.id);
                }}
                className={cn(cols, "w-full cursor-pointer items-center py-28 text-left md:py-40 xl:h-269 xl:py-0")}
              >
                <span className={cn(h.body, "col-start-1 row-start-1 whitespace-nowrap")}>
                  [ {practice.id} ]
                </span>

                <span data-fx="area-title" className="col-start-2 row-start-1 text-[length:clamp(24px,4.4vw,34px)] leading-[1.19] tracking-[0.05em] xl:text-[length:max(28px,calc(var(--spacing)*53.6))]">
                  <Lines lines={practice.title} />
                </span>

                <span
                  className={cn(
                    h.body,
                    "col-span-2 col-start-2 row-start-2 mt-12 md:col-span-1 md:col-start-3 md:row-start-1 md:mt-0",
                  )}
                >
                  <Lines lines={practice.description} />
                </span>

                <span className="col-start-3 row-start-1 justify-self-end md:col-start-4">
                  <ToggleIcon open={open} />
                </span>
              </button>

              {/* PANEL — grows open (the row "expands"), the one that was open
                  shrinks shut at the same time with the same ease */}
              <div
                id={panelId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-700",
                  EASE,
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className={cn(cols, "pb-40 md:pb-56 xl:pt-44 xl:pb-112")}>
                    {/* photo glides up and settles from a slight zoom */}
                    <div
                      className={cn(
                        "col-start-2 row-start-1 w-full max-w-[238px] transition-[transform,opacity] duration-700 md:col-start-2 xl:max-w-none",
                        EASE,
                        open ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0",
                      )}
                    >
                      <div
                        className={cn(
                          "origin-top-left transition-transform duration-1000",
                          EASE,
                          open ? "scale-100" : "scale-90",
                        )}
                      >
                        <Media
                          media={{
                            src: practice.image,
                            alt: practice.title.join(" "),
                            tone: "dark",
                          }}
                          className="aspect-[238/150] h-auto xl:aspect-auto xl:h-150 xl:w-238"
                          sizes="240px"
                        />
                      </div>
                    </div>

                    {/* details follow a beat later */}
                    <p
                      className={cn(
                        "col-span-2 col-start-2 row-start-2 mt-20 text-[length:clamp(18px,3vw,22px)] leading-[1.2] tracking-[0.05em] transition-[transform,opacity] duration-700 md:col-span-1 md:col-start-3 md:row-start-1 md:mt-0 xl:-mt-6 xl:text-[length:max(20px,calc(var(--spacing)*34))]",
                        EASE,
                        open ? "translate-y-0 opacity-100 delay-100" : "translate-y-32 opacity-0",
                      )}
                    >
                      {practice.details.map((line, i) => (
                        <span key={i} className="xl:block">
                          {line}{" "}
                        </span>
                      ))}
                    </p>
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
