"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import type { ArchiveMedia } from "@/lib/constants";
import { useNearbyImages } from "@/hooks/useNearbyImages";

/**
 * MedTech 2027 calendar — one page at a time, turned upward over a top binding.
 *
 * Same page physics as the Company Profile flip book (ProfileFlipbook), turned on its side:
 * the leaf in the air is a chain of nested horizontal strips, each tilted a little further
 * than the one above it, so the page curls like paper as it lifts from the bottom edge and
 * swings up over the top. Strips are lit / shaded as they turn and the lifting page throws
 * a shadow on the page underneath. Once it passes upright it fades away, so only one page is
 * ever on show.
 *
 * Turn it with the arrows, ← / → (or ↑ / ↓), a click (lower half = next, upper half = back),
 * or with a mouse by dragging the page up / down.
 */

const N = 24; // strips per leaf
const BETA = 0.62; // peak curl (radians); flat at both ends
const TURN_SECONDS = 1.35;
const INK = "56,54,46";
const PAPER = "#f4f0e8"; // back of a printed page

type Turn = { from: number; dir: 1 | -1 }; // `from` = the page that is in the air
type Anim =
  | {
      kind: "tween";
      from: number;
      target: number;
      e: number;
      dur: number;
      last: number;
    }
  | { kind: "spring"; v: number; target: number; last: number };

const smooth = (lo: number, hi: number, x: number) => {
  const k = Math.min(1, Math.max(0, (x - lo) / (hi - lo)));
  return k * k * (3 - 2 * k);
};

/* ---------- wire-o binding ----------
   Drawn in a 1000-unit-wide box, so it scales with the page. The page's top edge sits at
   y = 30: loops rise from their punched holes (y = 45) over the edge and back behind it.
   Pairs of loops run across the top with a gap in the middle for the hanger. */
const HOLE_Y = 15; // below the page edge, in binding units
const LOOPS = (() => {
  const xs: number[] = [];
  for (let x = 30; x <= 970; x += 26) {
    if (x > 440 && x < 560) continue; // hanger gap
    xs.push(x, x + 8);
  }
  return xs;
})();

/* punched holes — part of the page, so they move with it */
function Holes() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 30"
      className="pointer-events-none absolute inset-x-0 top-0 w-full"
      style={{ aspectRatio: "1000 / 30" }}
    >
      {LOOPS.map((x) => (
        <rect
          key={x}
          x={x - 2.6}
          y={HOLE_Y - 3.4}
          width={5.2}
          height={6.8}
          rx={2.2}
          fill="rgba(46,44,38,.78)"
        />
      ))}
      {/* hanger notch */}
      <path d="M478 0 A22 22 0 0 0 522 0 Z" fill="rgba(46,44,38,.16)" />
    </svg>
  );
}

/* the wire itself — fixed, in front of every page */
function Binding() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 60"
      className="pointer-events-none absolute inset-x-0 top-0 w-full"
      style={{
        aspectRatio: "1000 / 60",
        transform: "translateY(-50%)",
        zIndex: 10,
        overflow: "visible",
        filter: "drop-shadow(0 1.2px 0.8px rgba(56,54,46,.35))",
      }}
    >
      <defs>
        <linearGradient id="cal-wire" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#5f5c55" />
          <stop offset=".38" stopColor="#f4f2ec" />
          <stop offset=".62" stopColor="#b9b5ab" />
          <stop offset="1" stopColor="#4b4842" />
        </linearGradient>
        <linearGradient id="cal-wire-back" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#3f3c36" />
          <stop offset=".5" stopColor="#8d897f" />
          <stop offset="1" stopColor="#3f3c36" />
        </linearGradient>
      </defs>

      {/* hanger: a wire bow rising from the binding rod */}
      <path
        d="M470 22 C478 4 522 4 530 22"
        fill="none"
        stroke="#4b4842"
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <path
        d="M470 22 C478 4 522 4 530 22"
        fill="none"
        stroke="#e6e3db"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.7}
      />
      {/* the rod the loops close around, visible in the hanger gap */}
      <rect x={440} y={20.4} width={120} height={3.2} rx={1.6} fill="#77736a" />

      {/* (rects, not stroked lines: a zero-width bounding box would drop the gradients) */}
      {LOOPS.map((x) => (
        <g key={x}>
          {/* back strand: comes over the top and drops behind the page */}
          <rect
            x={x + 0.6}
            y={13}
            width={3.4}
            height={17}
            rx={1.7}
            fill="url(#cal-wire-back)"
          />
          {/* front strand: from the hole, up and over the edge */}
          <rect
            x={x - 1.8}
            y={11}
            width={3.6}
            height={30 + HOLE_Y - 11 + 1.8}
            rx={1.8}
            fill="url(#cal-wire)"
          />
        </g>
      ))}
    </svg>
  );
}

/* one face of one strip: a horizontal slice of the page image (back = plain paper) */
function Face({
  src,
  pos,
  ph,
  back,
  holes,
}: {
  src?: string;
  pos: number;
  ph: number;
  back?: boolean;
  holes?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: -1.1, // overlap, so no hairline gaps between strips
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: back ? "rotateX(180deg)" : undefined,
        background:
          !back && src
            ? `${PAPER} url("${src}") 0 ${pos}px / 100% ${ph}px no-repeat`
            : PAPER,
      }}
    >
      {/* shade — darker where this strip turns away from the light */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: back
            ? `linear-gradient(0deg, rgba(${INK},var(--a1,0)), rgba(${INK},var(--a2,0)))`
            : `linear-gradient(180deg, rgba(${INK},var(--a1,0)), rgba(${INK},var(--a2,0)))`,
        }}
      />
      {/* gloss on strips that face the light */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#fffdf6",
          opacity:
            "calc(var(--shade, 0) * var(--lit, 1) * var(--lit, 1) * .14)",
        }}
      />
      {holes && <Holes />}
    </div>
  );
}

/* the chain: each strip hangs off the bottom of the previous one */
function Strip({
  i,
  ph,
  src,
  register,
}: {
  i: number;
  ph: number;
  src?: string;
  register: (i: number, el: HTMLDivElement) => void;
}) {
  const sh = ph / N;
  return (
    <div
      ref={(el) => {
        if (el) register(i, el);
      }}
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        height: sh,
        top: i === 0 ? 0 : "100%",
        transformOrigin: "center top",
        transformStyle: "preserve-3d",
        transform: i === 0 ? undefined : "rotateX(calc(-1 * var(--td, 0deg)))",
      }}
    >
      <Face src={src} pos={-i * sh} ph={ph} holes={i === 0} />
      <Face ph={ph} pos={0} back />
      {i < N - 1 && <Strip i={i + 1} ph={ph} src={src} register={register} />}
    </div>
  );
}

export default function CalendarFlip({
  pages,
}: {
  pages: (ArchiveMedia & { title?: string })[];
}) {
  const count = pages.length;

  const [index, setIndex] = useState(0);
  const [turn, setTurn] = useState<Turn | null>(null);
  const [settling, setSettling] = useState(false);
  const [ph, setPh] = useState(0);

  const pageRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const stripRefs = useRef<HTMLDivElement[]>([]);
  const uRef = useRef(0); // 0 = page flat on the calendar, 1 = swung up over the binding
  const turnRef = useRef<Turn | null>(null);
  const indexRef = useRef(0);
  const animRef = useRef<Anim | null>(null);
  const rafRef = useRef<number | null>(null);
  const press = useRef<{
    y: number;
    dir: 1 | -1;
    h: number;
    moved: boolean;
  } | null>(null);
  const tickRef = useRef<(now: number) => void>(() => {});
  const registerStrip = useCallback((i: number, el: HTMLDivElement) => {
    stripRefs.current[i] = el;
  }, []);
  useLayoutEffect(() => {
    indexRef.current = index;
  }, [index]);

  useNearbyImages(pageRef, pages, index);

  /* measure the page so strips and their image slices line up exactly */
  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setPh(el.clientHeight));
    ro.observe(el);
    setPh(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  /* pose the curved leaf for u in 0..1 */
  const applyU = useCallback((u: number) => {
    if (!turnRef.current) return;
    const th = Math.PI * u;
    const beta = BETA * Math.sin(Math.PI * u);
    const tt = th + beta;
    const td = (2 * beta) / N;
    const D = 180 / Math.PI;
    const leaf = leafRef.current;
    if (leaf) {
      leaf.style.setProperty("--tt", `${(tt * D).toFixed(2)}deg`);
      leaf.style.setProperty("--td", `${(td * D).toFixed(3)}deg`);
      // past upright the page is going away over the top — fade it so one page shows at a time
      leaf.style.opacity = (1 - smooth(0.58, 0.96, u)).toFixed(3);
    }
    pageRef.current?.style.setProperty(
      "--shade",
      Math.sin(Math.PI * u).toFixed(3),
    );

    /* shadow of the lifting page on the page below, strongest under the binding */
    const c = Math.cos(th);
    const lift = Math.pow(Math.max(0, Math.sin(th)), 1.4);
    const sh = shadowRef.current;
    if (sh) {
      sh.style.height = `${((Math.max(0, c) * 0.9 + 0.1) * 100).toFixed(2)}%`;
      sh.style.opacity = (lift * 0.9 * smooth(-0.2, 0.45, c)).toFixed(3);
    }

    stripRefs.current.forEach((s, i) => {
      if (!s) return;
      const l1 = Math.abs(Math.cos(tt - i * td));
      const l2 = Math.abs(Math.cos(tt - (i + 1) * td));
      s.style.setProperty("--lit", l1.toFixed(3));
      s.style.setProperty("--a1", ((1 - l1) * 0.5).toFixed(3));
      s.style.setProperty("--a2", ((1 - l2) * 0.5).toFixed(3));
    });
  }, []);

  const finish = useCallback((target: number) => {
    const tr = turnRef.current;
    animRef.current = null;
    if (tr) {
      if (tr.dir === 1 && target === 1) setIndex(tr.from + 1);
      if (tr.dir === -1 && target === 0) setIndex(tr.from);
    }
    turnRef.current = null;
    pageRef.current?.style.setProperty("--shade", "0");
    setSettling(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (turnRef.current) return;
        setTurn(null);
        setSettling(false);
      }),
    );
  }, []);

  const tick = useCallback(
    (now: number) => {
      rafRef.current = null;
      const a = animRef.current;
      if (!a) return;
      const dt = Math.min(0.032, (now - a.last) / 1000 || 0.016);
      a.last = now;
      if (a.kind === "tween") {
        a.e += dt;
        const k = Math.min(1, a.e / a.dur);
        const ease = k * k * k * (k * (6 * k - 15) + 10); // smootherstep
        uRef.current = a.from + (a.target - a.from) * ease;
        applyU(uRef.current);
        if (k >= 1) return finish(a.target);
      } else {
        const x = uRef.current - a.target;
        a.v += (-150 * x - 22 * a.v) * dt; // soft spring
        uRef.current += a.v * dt;
        if (Math.abs(uRef.current - a.target) < 0.002 && Math.abs(a.v) < 0.02) {
          uRef.current = a.target;
          applyU(uRef.current);
          return finish(a.target);
        }
        applyU(uRef.current);
      }
      rafRef.current = requestAnimationFrame((t) => tickRef.current(t));
    },
    [applyU, finish],
  );
  useLayoutEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  const run = useCallback(
    (a: Anim) => {
      animRef.current = a;
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(tick);
    },
    [tick],
  );

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  useLayoutEffect(() => {
    applyU(uRef.current);
  }, [turn, ph, applyU]);

  /* ---------- turning ---------- */
  const begin = useCallback(
    (dir: 1 | -1): Turn | null => {
      if (turnRef.current) return null;
      const from = dir === 1 ? indexRef.current : indexRef.current - 1;
      if (from < 0 || from >= count - 1) return null;
      const tr = { from, dir };
      turnRef.current = tr;
      uRef.current = dir === 1 ? 0 : 1;
      setSettling(false);
      setTurn(tr);
      return tr;
    },
    [count],
  );

  const go = useCallback(
    (dir: 1 | -1) => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setIndex((i) => Math.max(0, Math.min(count - 1, i + dir)));
        return;
      }
      if (!begin(dir)) return;
      run({
        kind: "tween",
        from: dir === 1 ? 0 : 1,
        target: dir === 1 ? 1 : 0,
        e: 0,
        dur: TURN_SECONDS,
        last: performance.now(),
      });
    },
    [begin, run, count],
  );

  function onDown(e: PointerEvent<HTMLDivElement>) {
    if (turnRef.current) return;
    const r = pageRef.current?.getBoundingClientRect();
    if (!r) return;
    const lower = e.clientY > r.top + r.height / 2;
    const i = indexRef.current;
    if (lower && i < count - 1)
      press.current = { y: e.clientY, dir: 1, h: r.height, moved: false };
    else if (!lower && i > 0)
      press.current = { y: e.clientY, dir: -1, h: r.height, moved: false };
    else return;
    // touch keeps native vertical scrolling; only a mouse / pen drags the page
    if (e.pointerType !== "touch")
      e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const s = press.current;
    if (!s || e.pointerType === "touch") return;
    const dy = e.clientY - s.y;
    if (!s.moved) {
      if (Math.abs(dy) < 6) return;
      s.moved = true;
      if (!begin(s.dir)) {
        press.current = null;
        return;
      }
    }
    const k = Math.max(0, Math.min(1, (s.dir === 1 ? -dy : dy) / (s.h * 1.1)));
    uRef.current = s.dir === 1 ? k : 1 - k;
    applyU(uRef.current);
  }
  function onUp() {
    const s = press.current;
    press.current = null;
    if (!s) return;
    if (!s.moved) return go(s.dir); // a plain click / tap turns the page
    const u = uRef.current;
    const target = s.dir === 1 ? (u > 0.3 ? 1 : 0) : u < 0.7 ? 0 : 1;
    run({ kind: "spring", v: 0, target, last: performance.now() });
  }
  function onCancel() {
    const s = press.current;
    press.current = null;
    if (s?.moved)
      run({
        kind: "spring",
        v: 0,
        target: s.dir === 1 ? 0 : 1,
        last: performance.now(),
      });
  }
  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      go(-1);
    }
  }

  if (!count) return null;

  const busy = !!turn;
  // the page beneath the leaf (or the page on show when nothing is turning)
  const base = turn && !settling ? pages[turn.from + 1] : pages[index];
  const current = pages[index];

  const arrow =
    "inline-flex size-44 items-center justify-center border border-[#38362e]/25 text-[#38362e] transition-colors duration-200 hover:border-[#38362e] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#38362e]/25 xl:size-[max(44px,calc(var(--spacing)*64))]";

  return (
    <div
      data-reveal
      className="w-full border-b bg-[#fbf3f2] bg-cover bg-center px-24 py-48 md:px-40 md:py-64 xl:px-50 xl:py-100"
      style={{ backgroundImage: 'url("/images/medtech/profile/book-bg.jpg")' }}
    >
      {/* the calendar: centred, sized to fit the viewport height as well as the width */}
      <div
        className="mx-auto w-full"
        style={{ maxWidth: "min(1120px, calc((100svh - 260px) * 680 / 482))" }}
      >
        <div
          tabIndex={0}
          role="group"
          aria-roledescription="calendar"
          aria-label="MedTech 2027 calendar"
          onKeyDown={onKey}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onCancel}
          className="relative cursor-pointer touch-pan-y outline-none select-none focus-visible:ring-1 focus-visible:ring-[#38362e]/40"
          style={{ perspective: "2600px", perspectiveOrigin: "50% 30%" }}
        >
          {/* its shadow on the wall — ambient, contact and edge, like the flip book */}
          {[
            { bottom: "-6%", height: "13%", blur: 30, a: 0.2 },
            { bottom: "-1.6%", height: "4.5%", blur: 8, a: 0.3 },
            { bottom: "-0.4%", height: "1.4%", blur: 2.5, a: 0.38 },
          ].map((l, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute right-[3%] left-[3%] rounded-[50%]"
              style={{
                bottom: l.bottom,
                height: l.height,
                background: `rgba(${INK},${l.a})`,
                filter: `blur(${l.blur}px)`,
              }}
            />
          ))}

          <div
            ref={pageRef}
            className="relative aspect-[680/482] w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* the resting page */}
            {base && (
              <div className="absolute inset-0 overflow-hidden bg-[#eae6dc] shadow-[0_1px_3px_rgba(56,54,46,0.18)]">
                {base.src && (
                  <Image
                    src={base.src}
                    alt={base.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 1120px"
                    unoptimized
                    className="object-cover"
                    draggable={false}
                  />
                )}
                {/* a soft crease under the binding */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[5%]"
                  style={{
                    background: `linear-gradient(180deg, rgba(${INK},.14), rgba(${INK},0))`,
                  }}
                />
                <Holes />
              </div>
            )}

            {/* the shadow the lifting page throws on the page below */}
            {turn && (
              <div
                ref={shadowRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0"
                style={{
                  zIndex: 4,
                  height: "6%",
                  opacity: 0,
                  background: `linear-gradient(180deg, rgba(${INK},.26) 0%, rgba(${INK},.17) 18%, rgba(${INK},.09) 42%, rgba(${INK},.035) 68%, rgba(${INK},0) 100%)`,
                }}
              />
            )}

            {/* the turning page — a curved surface made of nested strips */}
            {turn && ph > 0 && (
              <div
                ref={leafRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: ph,
                  zIndex: 6,
                  transformOrigin: "center top",
                  transformStyle: "preserve-3d",
                  transform: "rotateX(var(--tt, 0deg))",
                  willChange: "transform, opacity",
                }}
              >
                <Strip
                  i={0}
                  ph={ph}
                  src={pages[turn.from]?.src}
                  register={registerStrip}
                />
              </div>
            )}
          </div>

          {/* the wire binding along the top edge — outside the 3D context so it always stays in front */}
          <Binding />
        </div>

        {/* controls + caption */}
        <div className="mt-24 flex w-full items-center justify-between gap-16 md:mt-32 xl:mt-48">
          <button
            type="button"
            aria-label="Previous page"
            disabled={index === 0 || busy}
            onClick={() => go(-1)}
            className={arrow}
          >
            <HiArrowLongLeft
              aria-hidden="true"
              className="size-20 xl:size-[max(20px,calc(var(--spacing)*28))]"
            />
          </button>

          <div className="min-w-0 text-center" aria-live="polite">
            <p className="font-clashlight text-[13px] leading-[1.4] tracking-[0.1em] text-[#38362e] uppercase md:text-[14px] xl:text-[length:max(14px,calc(var(--spacing)*26))]">
              {current?.title ?? current?.alt}
            </p>
            <p className="mt-6 text-[11px] tracking-[0.14em] text-[#38362e]/55 tabular-nums xl:text-[length:max(11px,calc(var(--spacing)*18))]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>
          </div>

          <button
            type="button"
            aria-label="Next page"
            disabled={index === count - 1 || busy}
            onClick={() => go(1)}
            className={arrow}
          >
            <HiArrowLongRight
              aria-hidden="true"
              className="size-20 xl:size-[max(20px,calc(var(--spacing)*28))]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
