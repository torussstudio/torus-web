"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  // Measure the whole fixed header's rendered height so the spacer
  // below can push page content down by the exact right amount.
  // ResizeObserver keeps it correct across breakpoints / font loads.
  useEffect(() => {
  if (!headerRef.current) return;
  const el = headerRef.current;

  const update = () => {
    const h = el.offsetHeight;
    setHeaderHeight(h);
    document.documentElement.style.setProperty("--header-height", `${h}px`);
  };
  update();

  const ro = new ResizeObserver(update);
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
        // scrolling down
        setHideNav(true);
      } else if (diff < -4) {
        // scrolling up
        setHideNav(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FIXED HEADER - logo always visible, nav slides behind it */}
      <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full">
        {/* LOGO */}
        <div className="relative z-50 flex items-center justify-center border-b border-black/35 bg-[#f9f8f2] px-4 py-4 sm:py-5 md:py-4">
          <Link href="/" className="block">
            <Image
              src="/images/NewLogo.png"
              alt="TORUSS Logo"
              width={260}
              height={70}
              priority
              className="h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[150px] select-none"
            />
          </Link>
        </div>

        {/* DESKTOP NAV - sits right below logo, hides behind logo on scroll down, shows on scroll up */}
        <nav
          className={cn(
            "relative z-40 hidden border-b border-black/35 bg-[#f9f8f2] transition-transform duration-300 ease-in-out lg:block",
            hideNav ? "-translate-y-full" : "translate-y-0"
          )}
        >
          <div className="mx-auto w-full max-w-[1800px]">
            <ul className="flex items-center justify-between px-8 py-[16px] lg:px-10 xl:px-14 2xl:px-20">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        `
                          relative
                          flex
                          items-center
                          gap-1.5
                          whitespace-nowrap
                          uppercase
                          tracking-[0.16em]
                          transition-colors
                          duration-200
                          font-clashlight
                          text-[14px]
                          lg:text-[15px]
                          xl:text-[16px]
                          2xl:text-[17px]
                        `,
                        isActive
                          ? "text-[#38362e]"
                          : " hover:text-[#6b6b6b]"
                      )}
                    >
                      <span
                        className={cn(
                          `
                            h-[8px]
                            w-[8px]
                            shrink-0
                            bg-[#2a2a2a]
                            transition-opacity
                            duration-200
                          `,
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />

                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* MOBILE / TABLET - always fixed right below logo, does NOT hide */}
        <div className="relative z-40 border-b border-black/35 bg-[#f4f4f2] lg:hidden">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-5 py-2 sm:px-7 sm:py-3">
            <button
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex cursor-pointer flex-col justify-center gap-[5px] p-1 -ml-1"
            >
              <span
                className={cn(
                  `
                    block
                    h-px
                    w-6
                    bg-[#2a2a2a]
                    origin-center
                    transition-all
                    duration-300
                  `,
                  menuOpen && "translate-y-[6px] rotate-45"
                )}
              />

              <span
                className={cn(
                  `
                    block
                    h-px
                    w-6
                    bg-[#2a2a2a]
                    transition-all
                    duration-300
                  `,
                  menuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                )}
              />

              <span
                className={cn(
                  `
                    block
                    h-px
                    w-6
                    bg-[#2a2a2a]
                    origin-center
                    transition-all
                    duration-300
                  `,
                  menuOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </button>

            <span
              className="
                select-none
                font-clash
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#8f8b86]
                sm:text-[12px]
              "
            >
              MENU
            </span>
          </div>

          {/* DROPDOWN */}
          <div
            className={cn(
              `
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
              `,
              menuOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <ul className="flex flex-col px-5 pb-2 sm:px-7">
              {NAV_LINKS.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <li
                    key={item.href}
                    className="border-t border-black/10 first:border-t-0"
                  >
                   <Link
  href={item.href}
  onClick={() => setMenuOpen(false)}
                      className={cn(
                        `
                          flex
                          items-center
                          gap-3
                          py-4
                          font-clash
                          text-[11px]
                          uppercase
                          tracking-[0.22em]
                          transition-colors
                          duration-150
                          sm:py-5
                          sm:text-[13px]
                          md:text-[14px]
                        `,
                        isActive
                          ? "text-[#2a2a2a]"
                          : "text-[#8f8b86]"
                      )}
                    >
                      <span
                        className={cn(
                          `
                            h-[5px]
                            w-[5px]
                            shrink-0
                            bg-[#2a2a2a]
                            transition-opacity
                            duration-150
                          `,
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />

                      <span>{item.label}</span>

                      <span className="ml-auto font-clash text-[10px] tracking-[0.2em] text-[#c5c2bc] sm:text-[11px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>

      {/* SPACER - reserves the header's height in normal document flow
          so page content doesn't slide under the fixed header */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}




