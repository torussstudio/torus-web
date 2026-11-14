"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, MutableRefObject, PointerEvent } from "react";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";

/**
 * MedTech "Company Profile" flip book.
 *
 * A landscape book (each page 16:9, so the spread is 32:9, fixed in place).
 * Item 1 is the cover, alone on the right; every sheet after that carries two
 * items, front and back, down to the back page.
 *
 * The leaf that turns is a curved surface, not a flat door: a chain of nested
 * strips, each tilted a little further than the one before it, so the page
 * bends the way paper does, lit and shaded strip by strip while it swings and
 * throwing a shadow on the page below. (Technique after the ThreeUI sketchbook.)
 * Only the leaf in the air is built that way; resting pages are plain images.
 *
 * Turn it with the arrows, a click on a page, ← / →, or by dragging a page
 * across the spine. Palette is the site's: ink #38362e, placeholder #eae6dc.
 */

const N = 24; // strips per leaf — enough for a smooth curve
const BETA = 0.62; // peak curl of the arc (radians); flat at both ends
const TURN_SECONDS = 1.35;
const INK = "56,54,46";

type Turn = { sheet: number; dir: 1 | -1 };
type Anim =
  | { kind: "tween"; from: number; target: number; e: number; dur: number; last: number }
  | { kind: "spring"; v: number; target: number; last: number };

/* ---------- a resting page ---------- */
function RestingPage({ media, side }: { media?: ArchiveMedia | null; side: "left" | "right" }) {
  if (!media) return null;
  return (
    <div
      className={cn(
        "absolute top-0 h-full w-1/2 overflow-hidden bg-[#eae6dc] shadow-[0_1px_3px_rgba(56,54,46,0.18)]",
        side === "left" ? "left-0" : "left-1/2",
      )}
    >
      {media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 767px) 50vw, 45vw"
          unoptimized
          className="object-cover"
          draggable={false}
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center p-16 text-center text-[10px] tracking-[0.14em] text-[#38362e]/45 uppercase xl:text-[length:max(10px,calc(var(--spacing)*15))]"
        >
          {media.alt}
        </span>
      )}
      {/* the crease where the page meets the spine — part of the page itself, so it can never
          pop in front of or behind the turning leaf */}
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute top-0 h-full w-[16%]", side === "left" ? "right-0" : "left-0")}
        style={{
          background:
            side === "left"
              ? `linear-gradient(90deg, rgba(${INK},0), rgba(${INK},.07) 55%, rgba(${INK},.2))`
              : `linear-gradient(90deg, rgba(${INK},.2), rgba(${INK},.07) 45%, rgba(${INK},0))`,
        }}
      />
    </div>
  );
}

/* ---------- one face of one strip: a slice of a page image ---------- */
function Face({ src, pos, pw, back, i, sw }: { src?: string; pos: number; pw: number; back?: boolean; i: number; sw: number }) {
  const w = pw * 0.16; // crease width: 8% of the book = 16% of one page
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: -1.1, // overlap, so no hairline gaps between strips
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: back ? "rotateY(180deg)" : undefined,
        background: src ? `#eae6dc url("${src}") ${pos}px 0 / ${pw}px 100% no-repeat` : "#eae6dc",
      }}
    >
      {/* shade — darker where this strip turns away from the light */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: back
            ? `linear-gradient(90deg, rgba(${INK},var(--a2,0)), rgba(${INK},var(--a1,0)))`
            : `linear-gradient(90deg, rgba(${INK},var(--a1,0)), rgba(${INK},var(--a2,0)))`,
        }}
      />
      {/* crease at the spine edge, carried by the leaf itself (--cf / --cb fade it where no page lies there) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: back
            ? `linear-gradient(90deg, rgba(${INK},0), rgba(${INK},calc(.07 * var(--cb, 1))) 55%, rgba(${INK},calc(.2 * var(--cb, 1)))) ${((i + 1) * sw - w).toFixed(2)}px 0 / ${w.toFixed(2)}px 100% no-repeat`
            : `linear-gradient(90deg, rgba(${INK},calc(.2 * var(--cf, 1))), rgba(${INK},calc(.07 * var(--cf, 1))) 45%, rgba(${INK},0)) ${(-i * sw).toFixed(2)}px 0 / ${w.toFixed(2)}px 100% no-repeat`,
        }}
      />
      {/* gloss — a faint sheen on strips that face the light */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#fffdf6",
          opacity: "calc(var(--shade, 0) * var(--lit, 1) * var(--lit, 1) * .14)",
        }}
      />
    </div>
  );
}

/* ---------- the chain: each strip hangs off the previous one ---------- */
function Strip({
  i,
  pw,
  front,
  back,
  refs,
}: {
  i: number;
  pw: number;
  front?: string;
  back?: string;
  refs: MutableRefObject<HTMLDivElement[]>;
}) {
  const sw = pw / N;
  return (
    <div
      ref={(el) => {
        if (el) refs.current[i] = el;
      }}
      style={{
        position: "absolute",
        top: 0,
        height: "100%",
        width: sw,
        left: i === 0 ? 0 : "100%",
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        transform: i === 0 ? undefined : "rotateY(var(--td, 0deg))",
      }}
    >
      <Face src={front} pos={-i * sw} pw={pw} i={i} sw={sw} />
      <Face src={back} pos={(i + 1) * sw - pw} pw={pw} back i={i} sw={sw} />
      {i < N - 1 && <Strip i={i + 1} pw={pw} front={front} back={back} refs={refs} />}
    </div>
  );
}

export default function ProfileFlipbook({ items }: { items: (ArchiveMedia & { title?: string })[] }) {
  const pages: (ArchiveMedia | null)[] = [...items];
  if (pages.length % 2) pages.push(null);
  const sheets = pages.length / 2;

  const [flipped, setFlipped] = useState(0);
  const [turn, setTurn] = useState<Turn | null>(null);
  /* after a turn lands, the flat leaf stays over the book for a beat while the resting pages
     underneath take the new images; only then is it lifted away — so nothing ever pops */
  const [settling, setSettling] = useState(false);
  const [pw, setPw] = useState(0);

  const bookRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const shiftRef = useRef<HTMLDivElement>(null);
  const shRRef = useRef<HTMLDivElement>(null);
  const shLRef = useRef<HTMLDivElement>(null);
  const sheetsRef = useRef(0);
  const stripRefs = useRef<HTMLDivElement[]>([]);
  const uRef = useRef(0); // how far the leaf has swung: 0 = flat right, 1 = flat left
  const turnRef = useRef<Turn | null>(null);
  const flippedRef = useRef(0);
  const animRef = useRef<Anim | null>(null);
  const rafRef = useRef<number | null>(null);
  const press = useRef<{ x: number; dir: 1 | -1; sheet: number; pw: number; moved: boolean } | null>(null);
  flippedRef.current = flipped;
  sheetsRef.current = sheets;

  /* load and decode every page up front so a turn never reveals one that is still arriving */
  useEffect(() => {
    items.forEach((it) => {
      if (!it.src) return;
      const im = new window.Image();
      im.decoding = "async";
      im.src = it.src;
      im.decode?.().catch(() => {});
    });
  }, [items]);

  /* measure a page so strips and their image slices line up exactly */
  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setPw(el.clientWidth / 2));
    ro.observe(el);
    setPw(el.clientWidth / 2);
    return () => ro.disconnect();
  }, []);

  /* pose the curved leaf for u in 0..1 (pure geometry + lighting, no React state) */
  const applyU = useCallback((u: number) => {
    const tr = turnRef.current;
    if (!tr) return;
    const th = Math.PI * u;
    const beta = BETA * Math.sin(Math.PI * u);
    const tt = th + beta;
    const td = (2 * beta) / N;
    const D = 180 / Math.PI;
    const leaf = leafRef.current;
    if (leaf) {
      leaf.style.setProperty("--tt", `${(tt * D).toFixed(2)}deg`);
      leaf.style.setProperty("--td", `${(td * D).toFixed(3)}deg`);
      leaf.style.setProperty("--cb", (tr.sheet === 0 ? u : 1).toFixed(3));
      leaf.style.setProperty("--cf", (tr.sheet === sheetsRef.current - 1 ? 1 - u : 1).toFixed(3));
    }
    bookRef.current?.style.setProperty("--shade", Math.sin(Math.PI * u).toFixed(3));

    /* the book glides to stay centred on the pages that are showing:
       cover alone → centred, open → on the spine, back page alone → centred */
    const last = sheetsRef.current - 1;
    let shift = 0;
    let sl = 1;
    let sr = 1;
    if (tr.sheet === 0) {
      shift -= 25 * (1 - u);
      sl = u;
    }
    if (tr.sheet === last) {
      shift += 25 * u;
      sr = 1 - u;
    }
    const se = shiftRef.current;
    if (se) {
      se.style.setProperty("--shift", `${shift.toFixed(3)}%`);
      se.style.setProperty("--sl", sl.toFixed(3));
      se.style.setProperty("--sr", sr.toFixed(3));
    }

    /* The leaf's shadow on the page below. Strength follows how high the leaf is (eased),
       and it hands over from the right page to the left page through the vertical with a
       long cross-fade, so nothing switches on or off. */
    const c = Math.cos(th);
    const lift = Math.pow(Math.max(0, Math.sin(th)), 1.4);
    const smooth = (lo: number, hi: number, x: number) => {
      const k = Math.min(1, Math.max(0, (x - lo) / (hi - lo)));
      return k * k * (3 - 2 * k);
    };
    const shR = shRRef.current;
    const shL = shLRef.current;
    if (shR) {
      shR.style.width = `${((Math.max(0, c) * 0.9 + 0.1) * 50).toFixed(2)}%`;
      shR.style.opacity = (lift * 0.9 * smooth(-0.2, 0.45, c)).toFixed(3);
    }
    if (shL) {
      shL.style.width = `${((Math.max(0, -c) * 0.9 + 0.1) * 50).toFixed(2)}%`;
      shL.style.opacity = (lift * 0.9 * smooth(-0.2, 0.45, -c)).toFixed(3);
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
      if (tr.dir === 1 && target === 1) setFlipped(tr.sheet + 1);
      if (tr.dir === -1 && target === 0) setFlipped(tr.sheet);
    }
    turnRef.current = null;
    bookRef.current?.style.setProperty("--shade", "0");
    setSettling(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (turnRef.current) return; // a new turn already began
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
        const ease = k * k * k * (k * (6 * k - 15) + 10); // smootherstep: gentle start, gentle landing
        uRef.current = a.from + (a.target - a.from) * ease;
        applyU(uRef.current);
        if (k >= 1) return finish(a.target);
      } else {
        const x = uRef.current - a.target;
        a.v += (-150 * x - 22 * a.v) * dt; // a soft spring: lands with a hint of settle
        uRef.current += a.v * dt;
        if (Math.abs(uRef.current - a.target) < 0.002 && Math.abs(a.v) < 0.02) {
          uRef.current = a.target;
          applyU(uRef.current);
          return finish(a.target);
        }
        applyU(uRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    },
    [applyU, finish],
  );

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

  // first pose of a freshly mounted leaf, before it is ever painted
  useLayoutEffect(() => {
    applyU(uRef.current);
  }, [turn, pw, applyU]);

  /* ---------- turning ---------- */
  const begin = useCallback((dir: 1 | -1): Turn | null => {
    if (turnRef.current) return null;
    const sheet = dir === 1 ? flippedRef.current : flippedRef.current - 1;
    if (sheet < 0 || sheet >= sheets) return null;
    const tr = { sheet, dir };
    turnRef.current = tr;
    uRef.current = dir === 1 ? 0 : 1;
    setSettling(false);
    setTurn(tr);
    return tr;
  }, [sheets]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setFlipped((f) => Math.max(0, Math.min(sheets, f + dir)));
        return;
      }
      if (!begin(dir)) return;
      run({ kind: "tween", from: dir === 1 ? 0 : 1, target: dir === 1 ? 1 : 0, e: 0, dur: TURN_SECONDS, last: performance.now() });
    },
    [begin, run, sheets],
  );

  function onDown(e: PointerEvent<HTMLDivElement>) {
    if (turnRef.current) return;
    const r = bookRef.current?.getBoundingClientRect();
    if (!r) return;
    const right = e.clientX > r.left + r.width / 2;
    const f = flippedRef.current;
    if (right && f < sheets) press.current = { x: e.clientX, dir: 1, sheet: f, pw: r.width / 2, moved: false };
    else if (!right && f > 0) press.current = { x: e.clientX, dir: -1, sheet: f - 1, pw: r.width / 2, moved: false };
    else return;
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const s = press.current;
    if (!s) return;
    const dx = e.clientX - s.x;
    if (!s.moved) {
      if (Math.abs(dx) < 6) return;
      s.moved = true;
      if (!begin(s.dir)) {
        press.current = null;
        return;
      }
    }
    const k = Math.max(0, Math.min(1, (s.dir === 1 ? -dx : dx) / (s.pw * 1.2)));
    uRef.current = s.dir === 1 ? k : 1 - k;
    applyU(uRef.current);
  }
  function onUp() {
    const s = press.current;
    press.current = null;
    if (!s) return;
    if (!s.moved) return go(s.dir); // a plain click turns the page
    const u = uRef.current;
    const target = s.dir === 1 ? (u > 0.3 ? 1 : 0) : u < 0.7 ? 0 : 1;
    run({ kind: "spring", v: 0, target, last: performance.now() });
  }
  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  }

  if (!sheets) return null;

  const atStart = flipped === 0;
  const atEnd = flipped === sheets;
  const busy = !!turn;

  // pages beneath the leaf (or the resting spread when nothing is turning)
  const baseLeft = turn && !settling ? pages[2 * turn.sheet - 1] : pages[2 * flipped - 1];
  const baseRight = turn && !settling ? pages[2 * turn.sheet + 2] : pages[2 * flipped];

  // the caption is the title of what's on show (one title if both pages share it)
  const caption = [2 * flipped - 1, 2 * flipped]
    .filter((i) => i >= 0 && i < items.length)
    .map((i) => items[i].title ?? items[i].alt)
    .filter((title, i, all) => all.indexOf(title) === i)
    .join("  ·  ");

  // where the book rests: cover alone → centred on the right page, back page alone → centred on the left.
  // While a leaf turns, applyU glides these same variables so nothing ever jumps.
  const rest = {
    "--shift": atStart ? "-25%" : atEnd ? "25%" : "0%",
    "--sl": atStart ? "0" : "1",
    "--sr": atEnd ? "0" : "1",
  } as CSSProperties;

  const arrow =
    "inline-flex size-44 items-center justify-center border border-[#38362e]/25 text-[#38362e] transition-colors duration-200 hover:border-[#38362e] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#38362e]/25 xl:size-[max(44px,calc(var(--spacing)*64))]";

  return (
    <div
      data-reveal
      className="w-full border-b bg-[#fbf3f2] bg-cover bg-center px-24 py-48 md:px-40 md:py-64 xl:px-50 xl:py-100"
      style={{ backgroundImage: 'url("/images/medtech/profile/book-bg.jpg")' }}
    >
      {/* the whole band is the backdrop: the book, its shadow and the controls all sit on the gradient */}
      <div className="mx-auto w-full max-w-[1640px] xl:max-w-1640">
      <div
        tabIndex={0}
        role="group"
        aria-roledescription="flip book"
        aria-label="Company profile flip book"
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative cursor-grab touch-pan-y outline-none select-none active:cursor-grabbing focus-visible:ring-1 focus-visible:ring-[#38362e]/40"
        style={{ perspective: "2600px", perspectiveOrigin: "50% 40%", overflowX: "clip" }}
      >
        {/* everything that is "the book" glides together, so the visible pages stay centred */}
        <div
          ref={shiftRef}
          className="relative w-full"
          style={{ ...rest, transformStyle: "preserve-3d", transform: "translateX(var(--shift, 0%))" }}
        >
          {/* its shadow on the desk — three layers, tight to soft, like a real object resting on a surface.
              Each only lies under pages that are showing (--sl / --sr: 1 = page present, 0 = none). */}
          {[
            { bottom: "-7%", height: "15%", blur: 30, a: 0.2 }, // ambient, wide and soft
            { bottom: "-1.6%", height: "4.5%", blur: 8, a: 0.3 }, // contact, close under the edge
            { bottom: "-0.4%", height: "1.4%", blur: 2.5, a: 0.38 }, // the dark line where paper meets desk
          ].map((l, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute rounded-[50%]"
              style={{
                bottom: l.bottom,
                height: l.height,
                left: "calc(52% - 48% * var(--sl, 1))",
                right: "calc(52% - 48% * var(--sr, 1))",
                background: `rgba(${INK},${l.a})`,
                filter: `blur(${l.blur}px)`,
              }}
            />
          ))}

          <div ref={bookRef} className="relative aspect-[32/9] w-full" style={{ transformStyle: "preserve-3d" }}>
            <RestingPage media={baseLeft} side="left" />
            <RestingPage media={baseRight} side="right" />

            {/* the shadow the leaf throws on the page below it (follows the leaf's footprint) */}
            {turn && (
              <>
                <div
                  ref={shLRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-1/2 h-full"
                  style={{
                    zIndex: 4,
                    width: "4%",
                    opacity: 0,
                    background: `linear-gradient(270deg, rgba(${INK},.26) 0%, rgba(${INK},.17) 18%, rgba(${INK},.09) 42%, rgba(${INK},.035) 68%, rgba(${INK},0) 100%)`,
                  }}
                />
                <div
                  ref={shRRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-1/2 h-full"
                  style={{
                    zIndex: 4,
                    width: "4%",
                    opacity: 0,
                    background: `linear-gradient(90deg, rgba(${INK},.26) 0%, rgba(${INK},.17) 18%, rgba(${INK},.09) 42%, rgba(${INK},.035) 68%, rgba(${INK},0) 100%)`,
                  }}
                />
              </>
            )}

          {/* the turning leaf — a curved surface made of nested strips */}
          {turn && pw > 0 && (
            <div
              ref={leafRef}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                height: "100%",
                width: pw,
                zIndex: 6,
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                transform: "rotateY(calc(-1 * var(--tt, 0deg)))",
                willChange: "transform",
              }}
            >
              <Strip
                i={0}
                pw={pw}
                front={pages[2 * turn.sheet]?.src}
                back={pages[2 * turn.sheet + 1]?.src}
                refs={stripRefs}
              />
            </div>
          )}
          </div>
        </div>
      </div>
      </div>

      {/* controls + caption */}
      <div className="mx-auto mt-24 flex w-full max-w-[1640px] items-center justify-between gap-16 md:mt-32 xl:mt-48 xl:max-w-1640">
        <button type="button" aria-label="Previous page" disabled={atStart || busy} onClick={() => go(-1)} className={arrow}>
          <HiArrowLongLeft aria-hidden="true" className="size-20 xl:size-[max(20px,calc(var(--spacing)*28))]" />
        </button>

        <div className="min-w-0 text-center" aria-live="polite">
          <p className="font-clashlight text-[13px] leading-[1.4] tracking-[0.1em] text-[#38362e] uppercase md:text-[14px] xl:text-[length:max(14px,calc(var(--spacing)*26))]">
            {caption || " "}
          </p>
        </div>

        <button type="button" aria-label="Next page" disabled={atEnd || busy} onClick={() => go(1)} className={arrow}>
          <HiArrowLongRight aria-hidden="true" className="size-20 xl:size-[max(20px,calc(var(--spacing)*28))]" />
        </button>
      </div>
    </div>
  );
}
