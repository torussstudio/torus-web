"use client";

import { useRef, type ReactNode } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { SplitText } from "@/lib/gsap";
import { dropHiddenBreaks } from "@/lib/utils";

/**
 * Scroll-driven ("scrub") animations for the home page.
 *
 * Sections opt in with data-fx="…" hooks, so the section markup stays as it
 * was. Three levels via gsap.matchMedia:
 *   desktop (≥1280px)  heavy  – pinned diagonal project wipe, pinned word reveal,
 *                               3D card entrance, parallax, velocity skew
 *   phone / tablet     medium – same feel, no pinning, smaller distances
 *   reduced motion     none   – nothing runs, everything stays visible
 *
 * Smoothness:
 *  - every scrub is a number (seconds of catch-up), never `true`, so the
 *    animation eases after the scroll instead of jumping with each frame
 *  - only transform + opacity are animated on big elements (GPU only, no
 *    repaint); clip-path is kept to the thin half-circle line
 *  - images get a GPU layer (will-change) only while their trigger is
 *    active, then it is removed (permanent layers left tile seams)
 *
 * Rules that keep it from fighting ArchiveReveal:
 *  - never animate an element that has [data-reveal] (its tweens use
 *    overwrite:true and would kill these). Animate a parent / child instead.
 *  - triggers are created in page order, so pin spacing is measured right.
 */

const DESKTOP = "(min-width: 1280px) and (prefers-reduced-motion: no-preference)";
const MOBILE = "(max-width: 1279px) and (prefers-reduced-motion: no-preference)";

export default function HomeScrollFx({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    (gsap, ScrollTrigger) => {
      const root = rootRef.current;
      if (!root) return;

      // phones: the address bar showing / hiding must not re-measure
      // everything (that caused jumpy / stuck scroll on real devices)
      ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

      const q = <T extends Element = HTMLElement>(sel: string) =>
        gsap.utils.toArray<T>(sel, root);
      const one = (sel: string) => root.querySelector<HTMLElement>(sel);

      // fixed logo bar stays on screen on desktop – pinned things sit below it
      const navOffset = () =>
        (document.querySelector("header > div") as HTMLElement | null)?.offsetHeight ?? 0;

      // GPU layer only while the trigger is in range
      const layer = (targets: Element | Element[] | NodeListOf<Element>) => ({
        onToggle: (self: ScrollTrigger) =>
          gsap.set(targets, { willChange: self.isActive ? "transform" : "auto" }),
      });

      // While a section is pinned, the content above it scrolls away and so
      // does the divider line that sat on its top edge. Draw that line on the
      // pinned box itself (outside, at -1px = exactly where the old divider
      // was, so it never doubles up).
      const topLine = (el: Element) => ({
        onToggle: (self: ScrollTrigger) =>
          gsap.set(el, { boxShadow: self.isActive ? "0 -1px 0 currentColor" : "none" }),
      });

      const mm = gsap.matchMedia();

      mm.add({ desktop: DESKTOP, mobile: MOBILE }, (ctx) => {
        const { desktop } = ctx.conditions as { desktop: boolean; mobile: boolean };
        const k = desktop ? 1 : 0.5; // distance multiplier
        // seconds the animation takes to catch up with the scroll.
        // Desktop already has Lenis smoothing; native touch scroll on
        // phones gets a little less so it still feels attached to the finger.
        const SCRUB = desktop ? 1.2 : 0.8;
        const splits: SplitText[] = [];
        const cleanups: (() => void)[] = [];

        /* ── 1. HERO – text drifts up faster than the photo, photo zooms ── */
        const heroText = one("[data-fx='hero-text']");
        const heroMedia = one("[data-fx='hero-media']");
        if (heroMedia) {
          const heroSection = heroMedia.closest("section");
          const heroImg = heroMedia.querySelectorAll("img, video");
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: SCRUB,
              ...layer(heroImg),
            },
          });
          tl.to(heroImg, { scale: 1 + 0.18 * k, yPercent: 8 * k }, 0);
          if (desktop) {
            tl.to(heroMedia, { y: 90 }, 0);
            if (heroText) tl.to(heroText, { y: -160, autoAlpha: 0.15 }, 0);
          }
        }

        /* ── 2. STUDIO SPACES row – wave entrance + scroll-speed skew ── */
        const spaces = one("[data-fx='spaces']");
        if (spaces) {
          const figs = q<HTMLElement>("[data-fx='spaces'] figure");
          gsap.set(figs, { force3D: true });

          figs.forEach((fig, i) => {
            gsap.fromTo(
              fig,
              { y: (160 + (i % 4) * 70) * k, rotation: (i % 2 ? 2 : -2) * k },
              {
                y: 0,
                rotation: 0,
                ease: "power1.out",
                scrollTrigger: { trigger: spaces, start: "top bottom", end: "top 25%", scrub: SCRUB },
              },
            );
          });

          // skew follows scroll speed, eased so it never snaps
          const skewTo = gsap.quickTo(figs, "skewY", { duration: 0.9, ease: "power3.out" });
          const maxSkew = desktop ? 4 : 2;
          ScrollTrigger.create({
            trigger: spaces,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => skewTo(gsap.utils.clamp(-maxSkew, maxSkew, self.getVelocity() / -400)),
            onLeave: () => skewTo(0),
            onLeaveBack: () => skewTo(0),
            ...layer(figs),
          });
        }

        /* ── 3. CREATIVE cards – 3D tilt-up entrance, staggered by column ── */
        const cardsGrid = one("[data-fx='cards']");
        if (cardsGrid) {
          const cards = q<HTMLElement>("[data-fx='cards'] > article");
          cards.forEach((card, i) => {
            const col = desktop ? i : 0;
            gsap.fromTo(
              card,
              {
                y: desktop ? 180 + col * 110 : 90,
                rotationX: desktop ? -22 : -10,
                transformPerspective: 1400,
                transformOrigin: "50% 0%",
                autoAlpha: 0,
                force3D: true,
              },
              {
                y: 0,
                rotationX: 0,
                autoAlpha: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: desktop ? cardsGrid : card,
                  start: "top 95%",
                  end: desktop ? "top 30%" : "top 55%",
                  scrub: SCRUB,
                  ...layer(card),
                },
              },
            );
          });
        }

        /* ── generic image parallax (photo slides inside its frame) ── */
        q<HTMLElement>("[data-fx='parallax']").forEach((frame) => {
          const media = frame.querySelectorAll("img, video");
          if (!media.length) return;
          gsap.fromTo(
            media,
            { yPercent: -9 * k, scale: 1 + 0.2 * k },
            {
              yPercent: 9 * k,
              scale: 1 + 0.2 * k,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: SCRUB,
                ...layer(media),
              },
            },
          );
        });

        /* ── 4. SELECTED ARCHIVE – diagonal slash wipe between projects ──
           Desktop: the project box pins; a dark slanted bar sweeps right →
           left and the next project is revealed behind its edge (clip-path
           polygon that follows the bar). The leaving project slides left and
           dims, the incoming one settles in from the right.
           Phone / tablet: each project photo unmasks along a diagonal. */
        const wipe = one("[data-fx='wipe']");
        const rows = q<HTMLElement>("[data-fx='wipe'] > article");
        const bar = one("[data-fx='wipe-bar']");

        if (desktop && wipe && bar && rows.length > 1) {
          const SLANT = 0.18; // bar leans by 18% of the box height
          const BAR_W = 26;
          let W = 0;
          let H = 0;
          const measure = () => {
            W = wipe.offsetWidth;
            H = wipe.offsetHeight;
          };
          measure();

          // lean of the bar in degrees from vertical (matches the clip edge)
          const ANGLE = (Math.atan(SLANT) * 180) / Math.PI;

          // later projects sit on top of the first one, fully clipped away
          rows.forEach((row, i) => {
            gsap.set(row, {
              backgroundColor: "#f9f8f2",
              ...(i > 0 && {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: i + 1,
                clipPath: "polygon(110% 0%, 110% 0%, 110% 100%, 110% 100%)",
              }),
            });
          });

          // edge position in px at the vertical middle of the box -> clip + bar
          const draw = (row: HTMLElement, mid: number) => {
            const off = (SLANT * H) / 2;
            const top = mid + off;
            const bottom = mid - off;
            row.style.clipPath = `polygon(${top}px 0px, ${W + 40}px 0px, ${W + 40}px ${H}px, ${bottom}px ${H}px)`;
            gsap.set(bar, { x: mid - BAR_W / 2 });
          };

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: wipe,
              start: () => `center ${(window.innerHeight + navOffset()) / 2}`,
              end: () => `+=${(rows.length - 1) * window.innerHeight * 1.3}`,
              pin: true,
              scrub: SCRUB,
              invalidateOnRefresh: true,
              onRefresh: measure,
              ...topLine(wipe),
            },
          });

          // bar waits just off the right edge (the box clips it)
          gsap.set(bar, { autoAlpha: 1, rotation: ANGLE, x: W + BAR_W * 4 });

          for (let i = 1; i < rows.length; i++) {
            const prev = rows[i - 1];
            const next = rows[i];
            const edge = { mid: W + (SLANT * H) / 2 + BAR_W };
            const startMid = () => W + (SLANT * H) / 2 + BAR_W;
            const endMid = () => -(SLANT * H) / 2 - BAR_W;

            tl.fromTo(
              edge,
              { mid: startMid },
              {
                mid: endMid,
                duration: 1,
                ease: "power2.inOut",
                onUpdate: () => draw(next, edge.mid),
              },
              i === 1 ? 0.25 : ">", // short hold before the first wipe
            );
            tl.fromTo(prev.children, { xPercent: 0, autoAlpha: 1 }, { xPercent: -10, autoAlpha: 0.2, duration: 1, ease: "power2.inOut" }, "<");
            tl.fromTo(next.children, { xPercent: 12 }, { xPercent: 0, duration: 1, ease: "power2.out" }, "<");
            tl.to({}, { duration: 0.35 }); // short hold on the new project
          }

          cleanups.push(() => rows.forEach((r) => (r.style.clipPath = "")));
        } else if (!desktop) {
          rows.forEach((row) => {
            const frame = row.querySelector<HTMLElement>("[data-fx='parallax']");
            if (!frame) return;
            gsap.fromTo(
              frame,
              { clipPath: "polygon(130% 0%, 130% 0%, 130% 100%, 100% 100%)" },
              {
                clipPath: "polygon(-30% 0%, 130% 0%, 130% 100%, -60% 100%)",
                ease: "power2.out",
                scrollTrigger: { trigger: frame, start: "top 92%", end: "top 45%", scrub: SCRUB },
              },
            );
          });
        }

        /* ── 5. DISCIPLINE – chain reaction ──
           heading words light up while the half circle draws on → the points
           arrive one at a time (the previous one steps back), a line draws
           from each square down to the next → every point comes back to
           full → the note rises line by line. Pinned on desktop, plain scrub on phone / tablet. */
        const disc = one("[data-fx='discipline']");
        const discTitle = one("[data-fx='discipline-title']");
        if (disc && discTitle) {
          const words = SplitText.create(discTitle, { type: "words", wordsClass: "fx-word" });
          splits.push(words);

          const arc = root.querySelector<SVGCircleElement>("[data-fx='discipline-arc']");
          const points = q<HTMLElement>("[data-fx='discipline-point']");
          const links = q<HTMLElement>("[data-fx='discipline-link']");
          const note = one("[data-fx='discipline-note']");
          if (note) cleanups.push(dropHiddenBreaks([note]));
          const noteLines = note ? SplitText.create(note, { type: "lines", mask: "lines" }) : null;
          if (noteLines) splits.push(noteLines);

          // place each chain line from the bottom of its square to the top of
          // the next one. offsetTop / offsetLeft ignore transforms, so this
          // is correct even mid-animation.
          const placeLinks = () => {
            // 1px circle line whatever the column height (viewBox is 100 wide)
            const svg = arc?.ownerSVGElement;
            if (arc && svg?.clientWidth) arc.setAttribute("stroke-width", String(100 / svg.clientWidth));

            links.forEach((link) => {
              const li = link.parentElement as HTMLElement;
              const next = li.nextElementSibling as HTMLElement | null;
              const dot = li.querySelector<HTMLElement>("[data-fx='discipline-dot']");
              const nextDot = next?.querySelector<HTMLElement>("[data-fx='discipline-dot']");
              if (!dot || !next || !nextDot) return;
              const top = dot.offsetTop + dot.offsetHeight + 6;
              const end = next.offsetTop - li.offsetTop + nextDot.offsetTop - 6;
              link.style.display = "block";
              link.style.top = `${top}px`;
              link.style.left = `${dot.offsetLeft + dot.offsetWidth / 2 - 0.5}px`;
              link.style.height = `${Math.max(0, end - top)}px`;
            });
          };
          placeLinks();
          cleanups.push(() => links.forEach((l) => l.removeAttribute("style")));

          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: desktop
              ? {
                  trigger: disc,
                  start: () => `center ${(window.innerHeight + navOffset()) / 2}`,
                  end: "+=220%",
                  pin: true,
                  scrub: SCRUB,
                  invalidateOnRefresh: true,
                  onRefresh: placeLinks,
                  ...topLine(disc),
                }
              : { trigger: disc, start: "top 75%", end: "bottom 45%", scrub: SCRUB, onRefresh: placeLinks },
          });

          // 1. circle draws on (right half) + heading lights up word by word
          if (arc) tl.fromTo(arc, { strokeDasharray: "0 100" }, { strokeDasharray: "50 100", duration: 1, ease: "power1.inOut" }, 0);
          tl.fromTo(
            words.words,
            { opacity: 0.1, yPercent: 35 },
            { opacity: 1, yPercent: 0, stagger: 0.08, duration: 0.4 },
            0,
          );

          // 2. the chain: point → line → point → line → point
          gsap.set(links, { scaleY: 0 });
          points.forEach((point, i) => {
            const at = i === 0 ? 0.6 : ">";
            tl.fromTo(
              point,
              { autoAlpha: 0, y: 70 * k, scale: desktop ? 1.18 : 1.08, transformOrigin: "0% 50%" },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
              at,
            );
            if (i > 0) tl.to(points[i - 1], { opacity: 0.35, duration: 0.4 }, "<"); // previous steps back
            if (links[i]) tl.to(links[i], { scaleY: 1, duration: 0.45, ease: "power1.inOut" }, ">-0.05");
          });

          // 3. every point back to full (the half circle stays a half circle —
          //    that is the design)
          tl.to(points, { opacity: 1, duration: 0.5, stagger: 0.06 }, ">0.1");

          // 4. the note rises line by line out of its masks
          if (noteLines) {
            tl.fromTo(noteLines.lines, { yPercent: 105 }, { yPercent: 0, stagger: 0.1, duration: 0.5 }, "<0.3");
          }
          tl.to({}, { duration: 0.3 }); // hold before the pin lets go
        }

        /* ── 6. AREAS OF PRACTICE – rows rise and slide in ──
           Plays once per row (not scrubbed): the rows open / close on hover,
           and a scrubbed entrance would keep re-measuring while the heights
           change and leave gaps between rows mid-animation. */
        q<HTMLElement>("[data-fx='areas'] > li").forEach((li, i) => {
          const title = li.querySelector("[data-fx='area-title']");
          const tl = gsap.timeline({
            defaults: { duration: desktop ? 1 : 0.8, ease: "expo.out" },
            scrollTrigger: { trigger: li, start: "top 92%", once: true },
          });
          tl.fromTo(li, { y: 110 * k, autoAlpha: 0 }, { y: 0, autoAlpha: 1, clearProps: "transform" }, 0);
          if (title) tl.fromTo(title, { x: (i % 2 ? -90 : 90) * k }, { x: 0, clearProps: "transform" }, 0.05);
        });

        /* ── 7. STUDIO NOTE – photo grows from a small frame, text floats ── */
        // transform-only (scale) instead of clip-path: clip-path repainted the
        // big photo every frame, scale runs on the GPU
        const noteMedia = one("[data-fx='note-media']");
        if (noteMedia) {
          const noteImg = noteMedia.querySelectorAll("img, video");
          const tl = gsap.timeline({
            defaults: { ease: "power1.out" },
            scrollTrigger: {
              trigger: noteMedia,
              start: "top 95%",
              end: desktop ? "top 15%" : "top 40%",
              scrub: SCRUB,
              ...layer([noteMedia, ...Array.from(noteImg)]),
            },
          });
          tl.fromTo(
            noteMedia,
            { scale: desktop ? 0.72 : 0.86, transformOrigin: "50% 50%", force3D: true },
            { scale: 1 },
            0,
          );
          tl.fromTo(noteImg, { scale: 1 + 0.35 * k }, { scale: 1 }, 0);

          const noteText = one("[data-fx='note-text']");
          if (desktop && noteText) {
            gsap.fromTo(
              noteText,
              { y: 160 },
              {
                y: -60,
                ease: "none",
                scrollTrigger: { trigger: noteText, start: "top bottom", end: "bottom top", scrub: SCRUB },
              },
            );
          }
        }

        /* ── 7b. STUDIO NOTE text – block wipe, line by line ──
           Each line gets a block in the page background colour that grows
           in from the left, then slides off to the right and uncovers the
           text behind it. Plays once when the text scrolls into view.
           autoSplit: lines are re-split (and the animation rebuilt) when
           fonts load or the width changes, so the blocks always fit. */
        const typeEls = q<HTMLElement>("[data-fx='note-type']");
        if (typeEls.length) {
          cleanups.push(dropHiddenBreaks(typeEls));
          const blocks: HTMLElement[] = [];
          const typeSplit = SplitText.create(typeEls, {
            type: "lines",
            linesClass: "fx-type-line",
            autoSplit: true,
            onSplit: (self) => {
              blocks.splice(0).forEach((b) => b.remove());

              const lines = self.lines as HTMLElement[];
              // shrink-wrap each line so its block is as wide as the text
              gsap.set(lines, { display: "table", position: "relative" });

              const tl = gsap.timeline({
                scrollTrigger: { trigger: typeEls[0], start: "top 85%", once: true },
              });

              lines.forEach((line, i) => {
                const block = document.createElement("span");
                block.setAttribute("aria-hidden", "true");
                Object.assign(block.style, {
                  position: "absolute",
                  inset: "0.06em -0.08em 0.02em",
                  backgroundColor: "#f9f8f2", // page background (ArchiveReveal)
                  pointerEvents: "none",
                });
                line.appendChild(block);
                blocks.push(block);

                const at = i * 0.09;
                tl.fromTo(
                  block,
                  { scaleX: 0, transformOrigin: "0% 50%" },
                  { scaleX: 1, duration: 0.45, ease: "power3.inOut" },
                  at,
                );
                tl.set(line, { clearProps: "color" }, at + 0.45);
                tl.to(
                  block,
                  { scaleX: 0, transformOrigin: "100% 50%", duration: 0.55, ease: "power3.inOut" },
                  at + 0.5,
                );
              });

              // text hidden until its block has covered it (blocks start at
              // scaleX 0 via fromTo's immediate render)
              gsap.set(lines, { color: "transparent" });
              return tl;
            },
          });
          splits.push(typeSplit);
          cleanups.push(() => blocks.forEach((b) => b.remove()));
        }

        return () => {
          splits.forEach((s) => s.revert());
          // reverse order: restore markup after the splits are undone
          cleanups.reverse().forEach((fn) => fn());
        };
      });

      // Anything that changes the page height must re-measure the triggers,
      // or the pins lock in too early / late (= the "jump"). Watch the whole
      // body, not just this wrapper: the fixed Navbar sets its spacer height
      // a moment after load and pushed the page ~140px down after the
      // triggers were measured. Also covers the accordion, fonts and images.
      const body = document.body;
      let lastH = 0; // 0 -> the first observer call always re-measures
      let timer: ReturnType<typeof setTimeout> | undefined;
      const refresh = () => {
        clearTimeout(timer);
        timer = setTimeout(() => ScrollTrigger.refresh(), 150);
      };
      const ro = new ResizeObserver(() => {
        const hNow = body.offsetHeight;
        if (Math.abs(hNow - lastH) < 2) return;
        lastH = hNow;
        refresh();
      });
      ro.observe(body);
      document.fonts?.ready.then(refresh);

      return () => {
        ro.disconnect();
        clearTimeout(timer);
        mm.revert();
      };
    },
    rootRef,
  );

  return <div ref={rootRef}>{children}</div>;
}
