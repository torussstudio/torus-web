"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { practices } from "@/lib/constants";
import Lines from "@/components/sections/archive/Lines";
import { h } from "./styles";

/** shared columns: index | title and description | practice details | toggle */
const cols =
  "grid grid-cols-[44px_minmax(0,1fr)_28px] gap-x-12 px-24 md:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)_36px] md:gap-x-24 md:px-40 xl:grid-cols-[182fr_664fr_717fr_49fr] xl:gap-x-0 xl:px-154";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const ROW_TRANSITION_MS = 900;
const HOVER_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1280px)";

/** Current time in ms. Kept outside the component: it's only called from event
 *  handlers / timers, but the React Compiler lint can't tell that and flags
 *  `performance.now()` written inside the component body as an impure render call. */
const now = () => performance.now();

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

/** detail line with the same small black square the navbar uses for the active page */
function DetailItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-12 xl:gap-16">
      <span aria-hidden="true" className="size-8 shrink-0 bg-[#2a2a2a]" />
      <span>{children}</span>
    </span>
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

  /* While a row opens/closes, the rows slide under a still cursor. Opening on
     real pointer movement (not mouseenter) and ignoring hovers until the
     transition settles stops the rows flipping back and forth (the "jitter"). */
  const pendingId = useRef<string | null>(null);
  const lockedUntil = useRef(0);
  const activate = (id: string | null) => {
    lockedUntil.current = now() + ROW_TRANSITION_MS;
    setActiveId(id);
  };

  const hoverOpen = (id: string) => {
    if (!hoverMode || id === activeId || id === pendingId.current) return;
    if (now() < lockedUntil.current) return;
    clearTimeout(hoverTimer.current);
    pendingId.current = id;
    hoverTimer.current = setTimeout(() => {
      pendingId.current = null;
      activate(id);
    }, 50);
  };

  const hoverCancel = () => {
    clearTimeout(hoverTimer.current);
    pendingId.current = null;
  };

  /* The right-hand details list is absolutely positioned (so it sits level with
     the title). A long list (e.g. "Web and Digital") would spill past the row,
     so the open row's panel gets a min-height that makes room for the whole list:
       button (top + title + pb) + panel >= top + list + panel padding + spacer
     → panel >= list − title − button pb + panel pb + spacer  (top cancels out). */
  const titleEls = useRef<Record<string, HTMLElement | null>>({});
  const detailEls = useRef<Record<string, HTMLElement | null>>({});
  const panelEls = useRef<Record<string, HTMLElement | null>>({});
  const buttonEls = useRef<Record<string, HTMLElement | null>>({});
  const spacerEls = useRef<Record<string, HTMLElement | null>>({});
  const [panelMin, setPanelMin] = useState(0);

  useLayoutEffect(() => {
    if (!activeId) return;
    const measure = () => {
      const details = detailEls.current[activeId];
      const title = titleEls.current[activeId];
      const panel = panelEls.current[activeId];
      const button = buttonEls.current[activeId];
      if (!details || !title || !panel || !button || details.offsetHeight === 0) {
        setPanelMin(0);
        return;
      }
      const px = (el: HTMLElement, prop: "paddingBottom") => parseFloat(getComputedStyle(el)[prop]) || 0;
      const spacer = spacerEls.current[activeId]?.offsetHeight ?? 0;
      const need =
        details.offsetHeight - title.offsetHeight - px(button, "paddingBottom") + px(panel, "paddingBottom") + spacer;
      setPanelMin(Math.max(0, Math.ceil(need)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeId]);

  return (
    <section className={cn(h.inner, "pb-64 md:pb-96 xl:pb-0")}>
      <div className="flex flex-col gap-12 px-24 py-48 md:flex-row md:items-center md:justify-between md:px-40 md:py-56 xl:px-0 xl:py-100 xl:pr-154 xl:pl-152">
        <h2 data-reveal className={h.h2}>
          Areas of Practice
        </h2>
        <p data-reveal className={cn(h.body, "uppercase")}>
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
              onPointerMove={() => hoverOpen(practice.id)}
              className={cn(
                // no margin animation: it moved every divider below by a fractional px each frame
                "relative grid grid-rows-[auto_0fr] border-b border-[#38362e]/50 transition-[grid-template-rows,background-color] duration-900 [backface-visibility:hidden]",
                EASE,
                // hover opens the row on desktop, so the open colour is the hover colour.
                // no separate :hover bg: rows sliding under a still cursor flashed it (jitter)
                open && "grid-rows-[auto_1fr] bg-[#efe6d2]",
              )}
            >
              <button
                ref={(el) => {
                  buttonEls.current[practice.id] = el;
                }}
                type="button"
                aria-label={`${open ? "Close" : "Open"} ${title}`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => {
                  if (hoverMode) activate(practice.id);
                  else activate(open ? null : practice.id);
                }}
                className={cn(
                  cols,
                  // same alignment in both states so the index/title don't snap when a row opens
                  "w-full cursor-pointer items-baseline text-left transition-[padding] duration-900",
                  EASE,
                  open
                    ? "pt-48 pb-24 md:pt-56 md:pb-24 xl:pt-72 xl:pb-24"
                    : "py-32 md:py-40 xl:py-48",
                )}
              >
                <span className={cn(h.body, "col-start-1 row-start-1 whitespace-nowrap")}>
                  {practice.id}
                </span>

                <span
                  ref={(el) => {
                    titleEls.current[practice.id] = el;
                  }}
                  data-fx="area-title"
                  className={cn(
                    // font-size grows with the row instead of snapping
                    "col-start-2 row-start-1 min-w-0 tracking-[-0.025em] transition-[font-size,line-height] duration-900",
                    EASE,
                    open
                      ? "text-[length:clamp(30px,4vw,54px)] leading-[1.08]"
                      : "text-[length:clamp(22px,2.2vw,32px)] leading-[1.2]",
                  )}
                >
                  {open ? <Lines lines={practice.title} /> : title}
                </span>

                <span
                  className={cn(
                    "col-start-3 row-start-1 self-start justify-self-end md:col-start-4",
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
                <div
                  ref={(el) => {
                    panelEls.current[practice.id] = el;
                  }}
                  style={open && panelMin ? { minHeight: panelMin } : undefined}
                  className={cn(cols, "content-start pt-8 pb-48 md:pt-12 md:pb-48 xl:pt-16 xl:pb-64")}
                >
                  <p className="col-start-2 max-w-[480px] text-[length:clamp(16px,1.35vw,19px)] leading-[1.4] tracking-[0.01em]">
                    {practice.description.join(" ")}
                  </p>

                  <div className="col-start-2 mt-24 text-[length:clamp(16px,1.45vw,21px)] leading-[1.75] tracking-[0.005em] md:hidden">
                    {details.map((detail) => (
                      <DetailItem key={detail}>{detail}</DetailItem>
                    ))}
                  </div>

                  <div
                    ref={(el) => {
                      spacerEls.current[practice.id] = el;
                    }}
                    aria-hidden="true"
                    className="hidden md:col-span-full md:row-start-2 md:block md:h-16 xl:h-32" />
                </div>
              </div>

              <div
                aria-hidden={!open}
                inert={!open}
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-56 hidden transition-[opacity,transform] duration-700 md:block xl:top-72",
                  EASE,
                  open ? "visible translate-y-0 opacity-100 delay-100" : "invisible -translate-y-8 opacity-0",
                )}
              >
                <div className={cols}>
                  <div
                    ref={(el) => {
                      detailEls.current[practice.id] = el;
                    }}
                    className="col-start-3 row-start-1 text-[length:clamp(16px,1.45vw,21px)] leading-[1.75] tracking-[0.005em] md:translate-x-64 md:pl-16 md:leading-[1.9] xl:translate-x-96 xl:pl-32 xl:text-[length:clamp(19px,1.5vw,23px)]">
                    {details.map((detail) => (
                      <DetailItem key={detail}>{detail}</DetailItem>
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
