"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const socialEntries = Object.entries(SOCIAL_LINKS) as [string, string][];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black border-t border-white/10 px-8 py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-white text-2xl font-bold tracking-widest uppercase mb-4">
            {SITE_NAME}
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            A creative studio crafting digital experiences that inspire.
          </p>
        </div>

        <div>
          <h3 className="text-white/60 text-xs tracking-widest uppercase mb-6">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm tracking-wider uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white/60 text-xs tracking-widest uppercase mb-6">
            Follow Us
          </h3>
          <ul className="flex flex-col gap-3">
            {socialEntries.map(([platform, url]) => (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm tracking-wider uppercase transition-colors duration-200"
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs tracking-widest">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <p className="text-white/20 text-xs tracking-widest">
          Designed &amp; Built with passion.
        </p>
      </div>
    </footer>
  );
}