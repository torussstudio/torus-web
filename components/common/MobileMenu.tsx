"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { NAV_LINKS, archiveHref, archiveProjects, footerContent } from "@/lib/constants";

const links = NAV_LINKS.filter((link) => !link.hidden);
const DESKTOP = "(min-width: 1024px)";

/**
 * Phone / tablet menu. A full-screen panel that drops down from under the
 * header (the header stays on top, so its hamburger turns into the X that
 * closes it). Not a modal <dialog>: that would sit above the header too.
 * While open, the rest of the page is made inert and scrolling is locked.
 */
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const inertNodes = useRef<HTMLElement[]>([]);
  const previousOverflow = useRef<string | null>(null);
  const [archiveOpen, setArchiveOpen] = useState(false);

  /** lock page scroll + make everything except the header and this panel inert */
  const lockPage = useCallback(() => {
    const panel = panelRef.current;
    const header = panel?.parentElement?.querySelector("header");
    if (!panel || previousOverflow.current !== null) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keep = (el: Element) => el.contains(panel) || (header ? el.contains(header) : false);
    const nodes: HTMLElement[] = [];
    let parent: HTMLElement | null = panel.parentElement;
    while (parent && parent !== document.documentElement) {
      for (const child of Array.from(parent.children)) {
        if (child instanceof HTMLElement && !keep(child) && !child.inert) {
          child.inert = true;
          nodes.push(child);
        }
      }
      parent = parent.parentElement;
    }
    inertNodes.current = nodes;
  }, []);

  const unlockPage = useCallback(() => {
    inertNodes.current.forEach((node) => (node.inert = false));
    inertNodes.current = [];
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }, []);

  // build the open / close timeline once
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const context = gsap.context(() => {
      const items = panel.querySelectorAll("[data-menu-reveal]");
      gsap.set(panel, { autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)" });
      // opacity (not autoAlpha) on the links: visibility:hidden would stop the
      // first link taking focus when the menu opens
      gsap.set(items, { opacity: 0, yPercent: 60 });
      timelineRef.current = gsap
        .timeline({
          paused: true,
          onReverseComplete: () => {
            gsap.set(panel, { autoAlpha: 0 }); // fully hidden again once rolled up
            unlockPage();
            setArchiveOpen(false); // next time the menu opens with Archive folded
          },
        })
        // the sheet unrolls downward from the header line
        .to(panel, { autoAlpha: 1, duration: 0.01 }, 0)
        .to(panel, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.75, ease: "expo.inOut" }, 0)
        // then the links rise into place one after another
        .to(items, { opacity: 1, yPercent: 0, duration: 0.7, stagger: 0.06, ease: "expo.out" }, 0.35);
    }, panel);

    // menu is phone / tablet only: snap shut if the screen grows to desktop
    const desktop = window.matchMedia(DESKTOP);
    const onResize = () => {
      if (!desktop.matches) return;
      timelineRef.current?.pause(0);
      unlockPage();
      onClose();
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      context.revert();
      timelineRef.current = null;
      unlockPage();
    };
  }, [unlockPage, onClose]);

  // play / reverse on open changes
  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open && !window.matchMedia(DESKTOP).matches) {
      lockPage();
      if (reduce) timeline.progress(1).pause();
      else timeline.timeScale(1).play();
      // Move focus into the menu for keyboard / screen reader users. The panel
      // must be visible to take focus; the clip-path still hides it until the
      // timeline unrolls it, so showing it now changes nothing on screen.
      const panel = panelRef.current;
      if (panel) {
        gsap.set(panel, { autoAlpha: 1 });
        panel.querySelector<HTMLElement>("a, button")?.focus({ preventScroll: true });
      }
    } else if (timeline.progress() > 0) {
      // reverse from wherever it is (also mid-opening); unlock at the very end
      if (reduce) {
        timeline.pause(0);
        if (panelRef.current) gsap.set(panelRef.current, { autoAlpha: 0 });
        unlockPage();
      } else timeline.timeScale(1.35).reverse();
    }
  }, [open, lockPage, unlockPage]);

  // Escape closes, and focus goes back to the hamburger
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      onClose();
      document.querySelector<HTMLElement>('[aria-controls="mobile-menu"]')?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      inert={!open}
      data-lenis-prevent
      // starts right under the fixed header (its height is measured by Navbar)
      className="invisible fixed inset-x-0 top-[var(--header-height,56px)] bottom-0 z-40 overflow-y-auto overscroll-contain bg-[var(--page-paper)] font-clash text-[#171717] lg:hidden"
    >
      <div className="flex min-h-full flex-col px-5 pt-8 pb-[max(24px,env(safe-area-inset-bottom))] sm:px-7 sm:pt-10">
        <nav aria-label="Mobile navigation">
          <ul>
            {links.map((link, index) => (
              <li key={link.href} className="overflow-hidden">
                <div data-menu-reveal>
                  {link.href === "/archive" ? (
                    <>
                      <button type="button" aria-expanded={archiveOpen} aria-controls="mobile-archive-links"
                        onClick={() => setArchiveOpen((value) => !value)}
                        className="flex cursor-pointer items-start text-left text-[clamp(44px,14vw,80px)] leading-[1.05] tracking-[-0.055em] uppercase">
                        {link.label}<span className="mt-2.5 ml-1.5 text-[clamp(13px,3.6vw,16px)] leading-none tracking-normal text-[#3da32e]">{String(index + 1).padStart(2, "0")}</span>
                      </button>
                      <div id="mobile-archive-links" inert={!archiveOpen}
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${archiveOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <ul className="overflow-hidden">
                          {archiveProjects.map((project) => (
                            <li key={project.slug}><Link href={archiveHref(project.slug)} onClick={onClose}
                              className="block py-3 text-[14px] uppercase tracking-[0.02em]">{project.title}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={link.href} onClick={onClose}
                      className="flex w-fit items-start text-[clamp(44px,14vw,80px)] leading-[1.05] tracking-[-0.055em] uppercase">
                      {link.label}<span className="mt-2.5 ml-1.5 text-[clamp(13px,3.6vw,16px)] leading-none tracking-normal text-[#3da32e]">{String(index + 1).padStart(2, "0")}</span>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto overflow-hidden pt-16">
          <div data-menu-reveal className="text-[clamp(15px,4.2vw,18px)] leading-relaxed">
            <p className="mb-2 text-[#3da32e]">Let’s talk</p>
            <a href="mailto:info@toruss.studio" className="inline-block py-2 text-[clamp(20px,6vw,24px)]">info@toruss.studio</a>
            <div className="mt-1 flex w-full justify-between">
              {footerContent.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="py-2 text-[clamp(14px,4.2vw,17px)]">{social.label}</a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
