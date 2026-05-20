


"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "STUDIO", href: "#studio" },
  { label: "AREAS OF PRACTICE", href: "#areas-of-practice" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "CONTACT", href: "#contact" },
  { label: "BLOG", href: "#blog" },
  { label: "SHOP", href: "#shop" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("STUDIO");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#e7e5e1]">
      
      {/* Logo Section */}
      <div
        className="
          flex
          items-center
          justify-center
          border-b
          border-black/35
          px-4
          py-4
          sm:py-5
          md:py-6
        "
      >
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
          "
        >
          TORUSS
        </h1>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:block border-b border-black/35">
        <div className="mx-auto w-full max-w-[1800px]">
          <ul
            className="
              flex
              items-center
              justify-between
              px-8
              lg:px-10
              xl:px-14
              2xl:px-20
              py-[16px]
            "
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`
                      relative
                      flex
                      items-center
                      gap-1.5
                      whitespace-nowrap
                      font-think
                      text-[14px]
                      lg:text-[15px]
                      xl:text-[16px]
                      2xl:text-[17px]
                      uppercase
                      tracking-[0.16em]
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "text-[#2a2a2a]"
                          : "text-[#8f8b86] hover:text-[#4a4a4a]"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="h-[6px] w-[6px] shrink-0 bg-[#2a2a2a]" />
                    )}

                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="border-b border-black/35 bg-[#e7e5e1] lg:hidden">
        
        {/* Mobile Top Row */}
        <div className="flex items-center justify-between px-4 py-4">
          
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              flex-col
              gap-1
              cursor-pointer
            "
          >
            <span className="h-px w-5 bg-[#2a2a2a]" />
            <span className="h-px w-5 bg-[#2a2a2a]" />
            <span className="h-px w-5 bg-[#2a2a2a]" />
          </button>

          <span
            className="
              font-mono
              text-[11px]
              sm:text-[12px]
              uppercase
              tracking-[0.35em]
              text-[#8f8b86]
            "
          >
            MENU
          </span>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <ul className="flex flex-col px-4 pb-5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <li
                  key={item.href}
                  className="border-t border-black/10"
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMenuOpen(false);
                    }}
                    className={`
                      flex
                      items-center
                      gap-2
                      py-4
                      font-mono
                      text-[11px]
                      sm:text-[12px]
                      uppercase
                      tracking-[0.2em]
                      ${
                        isActive
                          ? "text-[#2a2a2a]"
                          : "text-[#8f8b86]"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="h-[6px] w-[6px] shrink-0 bg-[#2a2a2a]" />
                    )}

                    <span>{item.label}</span>
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