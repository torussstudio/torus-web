"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, archiveHref, archiveProjects } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

// ARCHIVE doesn't open a page (the archive listing isn't built yet) —
// it opens a list of the projects, and each project opens its own page.
const ARCHIVE_HREF = "/archive";
const ARCHIVE_ITEMS = archiveProjects.map((p) => ({
  label: p.title,
  href: archiveHref(p.slug),
}));

// links flagged `hidden` in constants stay out of the navbar
const LINKS = NAV_LINKS.filter((l) => !l.hidden);

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // archive project list: desktop dropdown + mobile sub-menu
  const [archiveOpen, setArchiveOpen] = useState(false);
  const closeMobileMenu = useCallback(() => setMenuOpen(false), []);

  const headerRef = useRef<HTMLElement>(null);
  const archiveRef = useRef<HTMLLIElement>(null);
  // hover already opens the dropdown for a mouse, so a mouse click must not
  // toggle it shut again; touch / pen / keyboard use click to open + close
  const archivePointer = useRef<string>("mouse");
  const lastScrollY = useRef(0);

  const isActive = (href: string) =>
    href === ARCHIVE_HREF ? pathname.startsWith(ARCHIVE_HREF) : pathname === href;

  // Measure the whole fixed header's rendered height so the spacer
  // below can push page content down by the exact right amount.
  // ResizeObserver keeps it correct across breakpoints / font loads.
  useEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;

    // ResizeObserver fires once right after observe() and again on every
    // size change, after layout is done, so the height comes from the
    // entry instead of reading offsetHeight during mount (a forced reflow).
    const ro = new ResizeObserver(([entry]) => {
      const h = Math.round(entry.borderBoxSize?.[0]?.blockSize ?? el.offsetHeight);
      setHeaderHeight(h);
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Scroll direction detection - only affects the DESKTOP nav
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 4) {
        // near the top, always show
        setHideNav(false);
      } else if (diff > 4) {
        // scrolling down — also close the archive dropdown
        setHideNav(true);
        setArchiveOpen(false);
      } else if (diff < -4) {
        // scrolling up
        setHideNav(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the archive dropdown on outside click / Escape
  useEffect(() => {
    if (!archiveOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!archiveRef.current?.contains(e.target as Node)) setArchiveOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setArchiveOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [archiveOpen]);

  const desktopLinkClass = (active: boolean) =>
    cn(
      `
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        gap-1.5
        whitespace-nowrap
        uppercase
        tracking-[0.1em]
        text-[#38362e]
        transition-colors
        duration-200
        text-[14px]
        lg:text-[15px]
        xl:gap-[calc(var(--nu)*13)]
        xl:tracking-[0.045em]
        xl:text-[length:max(15px,calc(var(--nu)*24))]
      `,
      active ? "font-clash" : "font-clashlight hover:bg-[#f1efe8] hover:text-[#6b6b6b]"
    );

  const activeSquare = (active: boolean) => (
    <span
      className={cn(
        `
          h-[8px]
          w-[8px]
          shrink-0
          xl:size-[max(6px,calc(var(--nu)*8))]
          bg-[#2a2a2a]
          transition-opacity
          duration-200
        `,
        active ? "opacity-100" : "opacity-0"
      )}
    />
  );

  return (
    <>
      {/* FIXED HEADER - logo always visible, nav slides behind it */}
      <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full [--nu:1px] xl:[--nu:min(1.3333px,calc(100vw/1920))]">
        {/* LOGO */}
        <div className="relative z-50 flex items-center justify-between border-b border-black/35 bg-[#f9f8f2] px-5 py-2 sm:px-7 sm:py-3 md:py-2 lg:justify-center lg:px-4 lg:py-4 xl:h-[calc(var(--nu)*81)] xl:py-0">
          <Link href="/" className="block">
            <Image
              src="/images/NewLogo.png"
              alt="TORUSS Logo"
              width={260}
              height={70}
              priority
              className="h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[150px] xl:w-[max(150px,calc(var(--nu)*198))] select-none"
            />
          </Link>
          <button
            type="button"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative -mr-2 flex size-11 shrink-0 cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-px w-7 bg-[#2a2a2a] transition-transform duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1"
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-px w-7 bg-[#2a2a2a] transition-transform duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1"
              )}
            />
          </button>
        </div>

        {/* DESKTOP NAV - sits right below logo, hides behind logo on scroll down, shows on scroll up */}
        <nav
          className={cn(
            "relative z-40 hidden border-b border-black/35 bg-[#f9f8f2] transition-transform duration-300 ease-in-out lg:block",
            hideNav ? "-translate-y-full" : "translate-y-0"
          )}
        >
          <div className="mx-auto w-full max-w-[1800px] xl:max-w-[2560px]">
            {/* three equal cells split by hairlines — the same ruled grid the pages use */}
            <ul className="grid h-[52px] grid-cols-3 xl:h-[calc(var(--nu)*57)]">
              {LINKS.map((item) => {
                const active = isActive(item.href);

                // ARCHIVE — opens the project list (hover or click)
                if (item.href === ARCHIVE_HREF) {
                  return (
                    <li
                      key={item.href}
                      ref={archiveRef}
                      // the li spans the full nav height so the pointer can
                      // move from the label into the panel without closing it
                      className="relative h-full border-l border-black/35 first:border-l-0"
                      onMouseEnter={() => setArchiveOpen(true)}
                      onMouseLeave={() => setArchiveOpen(false)}
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={archiveOpen}
                        aria-controls="archive-menu"
                        onPointerDown={(e) => {
                          archivePointer.current = e.pointerType;
                        }}
                        onClick={(e) => {
                          const fromMouse = e.detail > 0 && archivePointer.current === "mouse";
                          if (fromMouse) setArchiveOpen(true);
                          else setArchiveOpen((prev) => !prev);
                        }}
                        className={cn(desktopLinkClass(active), "cursor-pointer")}
                      >
                        {activeSquare(active)}
                        <span>{item.label}</span>
                      </button>

                      {/* PROJECT LIST */}
                      <div
                        id="archive-menu"
                        className={cn(
                          `
                            absolute
                            left-1/2
                            top-full
                            min-w-[300px]
                            -translate-x-1/2
                            border
                            border-t-0
                            border-black/35
                            bg-[#f9f8f2]
                            transition-all
                            duration-300
                            ease-out
                          `,
                          archiveOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        )}
                      >
                        <ul className="py-2">
                          {ARCHIVE_ITEMS.map((project, index) => {
                            const current = pathname === project.href;

                            return (
                              <li key={project.href}>
                                <Link
                                  href={project.href}
                                  onClick={() => setArchiveOpen(false)}
                                  className={cn(
                                    `
                                      group/item
                                      flex
                                      items-center
                                      gap-3
                                      px-6
                                      py-3.5
                                      whitespace-nowrap
                                      uppercase
                                      tracking-[0.16em]
                                      font-clashlight
                                      text-[14px]
                                      xl:text-[15px]
                                      transition-colors
                                      duration-200
                                      hover:bg-[#eeebe3]
                                    `,
                                    current ? "text-[#38362e]" : "text-[#38362e]/80"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "h-[6px] w-[6px] shrink-0 bg-[#2a2a2a] transition-opacity duration-200",
                                      current ? "opacity-100" : "opacity-0 group-hover/item:opacity-100"
                                    )}
                                  />
                                  <span>{project.label}</span>
                                  <span className="ml-auto pl-6 text-[11px] tracking-[0.2em] text-[#8f8b86]">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="h-full border-l border-black/35 first:border-l-0">
                    <Link href={item.href} className={desktopLinkClass(active)}>
                      {activeSquare(active)}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

      </header>
      <MobileMenu open={menuOpen} onClose={closeMobileMenu} />

      {/* SPACER - reserves the header's height in normal document flow
          so page content doesn't slide under the fixed header */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}
