"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { NAV_LINKS, archiveHref, archiveProjects, footerContent } from "@/lib/constants";

const links = NAV_LINKS.filter((link) => !link.hidden);

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const previousOverflow = useRef<string | null>(null);
  const [archiveOpen, setArchiveOpen] = useState(false);

  const finishClose = useCallback(() => {
    dialogRef.current?.close();
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }, []);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const context = gsap.context(() => {
      const items = dialog.querySelectorAll("[data-menu-reveal]");
      gsap.set(dialog, { autoAlpha: 0, yPercent: -8 });
      gsap.set(items, { autoAlpha: 0, y: 30 });
      timelineRef.current = gsap.timeline({ paused: true, onReverseComplete: finishClose })
        .to(dialog, { autoAlpha: 1, yPercent: 0, duration: 0.55, ease: "power3.inOut" }, 0)
        .to(items, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out" }, 0.15);
    }, dialog);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (!desktop.matches) return;
      timelineRef.current?.pause(0);
      finishClose();
      onClose();
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      context.revert();
      timelineRef.current = null;
      finishClose();
    };
  }, [finishClose, onClose]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const timeline = timelineRef.current;
    if (!dialog || !timeline) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open && !window.matchMedia("(min-width: 1024px)").matches) {
      if (!dialog.open) {
        previousOverflow.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialog.showModal();
      }
      if (reduce) timeline.progress(1).pause();
      else timeline.timeScale(1).play();
    } else if (dialog.open) {
      // Reverse the same timeline from its current position, including when
      // the user closes before the entrance finishes. Unlock only at the end.
      if (reduce || timeline.progress() === 0) {
        timeline.pause(0);
        finishClose();
      } else timeline.timeScale(1.25).reverse();
    }
  }, [open, finishClose]);

  return (
    <dialog ref={dialogRef} id="mobile-menu" aria-label="Navigation menu"
      onClose={() => setArchiveOpen(false)}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      data-lenis-prevent
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-[#e9e9e7] p-0 font-clash text-[#171717] backdrop:bg-black/15 lg:hidden">
      <div className="relative flex min-h-full flex-col px-5 pt-[56px] pb-[max(24px,env(safe-area-inset-bottom))] sm:px-7">
        <button type="button" onClick={onClose} aria-label="Close menu"
          className="absolute top-3 right-3 flex min-h-11 min-w-11 cursor-pointer items-center justify-center text-[12px] sm:right-5">Close</button>
        <nav aria-label="Mobile navigation">
          <ul>
            {links.map((link, index) => (
              <li key={link.href} data-menu-reveal>
                {link.href === "/archive" ? (
                  <>
                    <button type="button" aria-expanded={archiveOpen} aria-controls="mobile-archive-links"
                      onClick={() => setArchiveOpen((value) => !value)}
                      className="flex cursor-pointer items-start text-left text-[clamp(44px,14vw,80px)] leading-[1.05] tracking-[-0.055em] uppercase">
                      {link.label}<span className="mt-2.5 ml-1.5 text-[clamp(13px,3.6vw,16px)] leading-none tracking-normal text-[#3da32e]">{String(index + 1).padStart(2, "0")}</span>
                    </button>
                    <div id="mobile-archive-links" inert={!archiveOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${archiveOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
              </li>
            ))}
          </ul>
        </nav>
        <div data-menu-reveal className="mt-auto pt-16 text-[clamp(15px,4.2vw,18px)] leading-relaxed">
          <p className="mb-2 text-[#3da32e]">Let’s talk</p>
          <a href="mailto:info@toruss.studio" className="inline-block py-2 text-[clamp(20px,6vw,24px)]">info@toruss.studio</a>
          <div className="mt-1 flex w-full justify-between">
            {footerContent.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="py-2 text-[clamp(14px,4.2vw,17px)]">{social.label}</a>)}
          </div>
        </div>
      </div>
    </dialog>
  );
}

