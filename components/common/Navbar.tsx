"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("STUDIO");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#e7e5e1]">
      {/* LOGO */}
      <div className="flex items-center justify-center border-b border-black/35 px-4 py-4 sm:py-5 md:py-6">
        <h1
          className="
            font-serif
            text-center
            text-[28px]
            sm:text-[38px]
            md:text-[46px]
            lg:text-[56px]
            uppercase
            font-light
            leading-none
            tracking-[0.24em]
            sm:tracking-[0.3em]
            md:tracking-widest
            text-[#1f1f1f]
            select-none
          "
        >
          TORUSS
        </h1>
      </div>

      {/* DESKTOP */}
      <nav className="hidden border-b border-black/35 lg:block">
        <div className="mx-auto w-full max-w-[1800px]">
          <ul className="flex items-center justify-between px-8 py-[16px] lg:px-10 xl:px-14 2xl:px-20">
            {NAV_LINKS.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
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
                        font-think
                        text-[14px]
                        lg:text-[15px]
                        xl:text-[16px]
                        2xl:text-[17px]
                      `,
                      isActive
                        ? "text-[#2a2a2a]"
                        : "text-[#8f8b86] hover:text-[#4a4a4a]"
                    )}
                  >
                    <span
                      className={cn(
                        `
                          h-[6px]
                          w-[6px]
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

      {/* MOBILE / TABLET */}
      <div className="border-b border-black/35 bg-[#e7e5e1] lg:hidden">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5">
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
              font-mono
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
          <ul className="flex flex-col px-5 pb-6 sm:px-7">
            {NAV_LINKS.map((item, index) => {
              const isActive = activeItem === item.label;

              return (
                <li
                  key={item.href}
                  className="border-t border-black/10 first:border-t-0"
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMenuOpen(false);
                    }}
                    className={cn(
                      `
                        flex
                        items-center
                        gap-3
                        py-4
                        font-mono
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

                    <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-[#c5c2bc] sm:text-[11px]">
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
  );
}