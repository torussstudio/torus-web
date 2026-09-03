"use client";

import { useRef } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { socialss } from "@/lib/constants";
import { links } from "@/lib/constants";
import { useGsap } from "@/hooks/useGsap";

// Heading split into lines here (instead of <br/>) so each line can get
// its own overflow-hidden mask wrapper.
const HEADING_LINES = [
  "A MULTIDIMENSIONAL",
  "STUDIO SHAPING BRANDS,",
  "CULTURE, AND CREATIVE",
  "EXPRESSION.",
];

export default function StudioHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsap(
    (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "smoothReveal" },
      });

      // 1. Heading lines mask-reveal one after another (the "premium" beat).
      tl.set(".hero-heading-line-inner", { yPercent: 120 })
        .set(".hero-image-wrap", { clipPath: "inset(100% 0% 0% 0%)" })
        .set(".hero-image-el", { scale: 1.25 })
        .set(".hero-paragraph", { y: 30, opacity: 0 })
        .set(".hero-link-row", { y: 24, opacity: 0 })
        .set(".hero-link-border", { scaleX: 0 })
        .set(".hero-social-mobile, .hero-social-desktop", { y: 16, opacity: 0 });

      tl.to(".hero-heading-line-inner", {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.12,
      })

        // 2. Image reveals via clip-path wipe while it settles from a slight
        // zoom — overlaps the tail end of the heading reveal.
        .to(
          ".hero-image-wrap",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=0.6"
        )
        .to(
          ".hero-image-el",
          {
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          "<"
        )

        // 3. Paragraph fades/slides up.
        .to(
          ".hero-paragraph",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=1.1"
        )

        // 4. Link rows stagger in, each with its underline drawing in sync.
        .to(
          ".hero-link-row",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .to(
          ".hero-link-border",
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "<"
        )

        // 5. Socials settle in last, on both mobile and desktop.
        .to(
          ".hero-social-mobile, .hero-social-desktop",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3"
        );

    },
    sectionRef,
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#e7e5e1]"
    >
      {/* MAX-WIDTH WRAPPER — ithu illathirunnu 1920px+ screens-il content stretch aayi
          random gaps undakiyathu. Ippo content oru upper limit-il centered aayi nilkkum.
          hero-scale-wrap: scroll-linked scale-in/scale-out ith target cheyyunnu. */}
      <div className="hero-scale-wrap relative max-w-[1728px] mx-auto origin-center">
        {/* HERO */}
        <div
          className="
            relative
            grid
            grid-cols-1
            lg:grid-cols-[0.78fr_1.22fr]
            min-h-0
            lg:min-h-[750px]
          "
        >
          {/* LEFT */}
          <div
            className="
              hero-left-content
              relative
              flex
              flex-col
              justify-center
              px-8
              md:px-16
              lg:px-20
              py-10
              lg:py-16
            "
          >
            <div className="max-w-[680px] mt-0">
              {/* HEADING — each line wrapped for mask reveal */}
              <h1
                className="
                  font-recife
                  origin-left
                  text-[1.45rem]
                  sm:text-[1.75rem]
                  md:text-[2.3rem]
                  lg:text-[2.6rem]
                  xl:text-[2.9rem]
                  leading-[0.98]
                  tracking-[0.01em]
                  text-[#181818]
                  pl-[15px]
                  sm:pl-[22px]
                  lg:pl-[30px]
                  whitespace-normal
                  lg:whitespace-nowrap
                "
              >
                {HEADING_LINES.map((line, i) => (
                  <span
                    key={i}
                    className="hero-heading-line block overflow-hidden"
                  >
                    <span className="hero-heading-line-inner block">
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              {/* TEXT */}
              <p
                className="
                  hero-paragraph
                  mt-8
                  lg:mt-10
                  max-w-[480px]
                  text-[16px]
                  md:text-[18px]
                  leading-[1.7]
                  font-[400]
                  tracking-[0.01em]
                  text-[#181818]
                  pl-[15px]
                  sm:pl-[22px]
                  lg:pl-[30px]
                  font-nixie
                "
              >
                Toruss works across branding, identity systems, digital
                experiences, objects, artistic explorations, and collective
                initiatives, building ideas that are clear, enduring, and
                deeply considered.
              </p>

              {/* LINKS */}
              <div
                className="
                  mt-[28px]
                  lg:mt-[38px]
                  flex
                  w-full
                  lg:w-[423px]
                  flex-col
                  ml-0
                  lg:ml-[21px]
                "
              >
                {links.map((link) => (
                  <div
                    key={link.number}
                    className="
                      hero-link-row
                      group
                      relative
                      flex
                      items-center
                      justify-start
                      pt-[14px]
                      pb-[11px]
                      lg:pt-[18px]
                      lg:pb-[13px]
                      cursor-pointer
                    "
                  >
                    <span className="hero-link-border absolute bottom-0 left-0 h-px w-full origin-left bg-[#1d1d1d]" />

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-[90px] sm:gap-[130px] lg:gap-[170px]">
                      <span
                        className="
                          hero-link-arrow
                          text-[22px]
                          lg:text-[28px]
                          leading-none
                          font-light
                          text-[#181818]
                          transition-transform
                          duration-300
                          group-hover:translate-x-[4px]
                          pl-[18px]
                          sm:pl-[32px]
                          lg:pl-[50px]
                        "
                      >
                        →
                      </span>

                      <span
                        className="
                          hero-link-number
                          text-[15px]
                          lg:text-[18px]
                          leading-none
                          font-nixie
                          uppercase
                          tracking-[0.12em]
                          text-[#80c46c]
                          translate-x-[-15px]
                        "
                      >
                        {link.number}
                      </span>
                    </div>

                    {/* RIGHT SIDE */}
                    <span
                      className="
                        hero-link-label
                        text-[15px]
                        lg:text-[19px]
                        leading-none
                        font-nixie
                        uppercase
                        tracking-[0.08em]
                        text-[#80c46c]
                        mr-[12px]
                        lg:mr-[25px]
                      "
                    >
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* SOCIALS — mobile & tablet only */}
              <div
                className="
                  flex
                  lg:hidden
                  gap-6
                  mt-8
                  pl-[4px]
                  sm:pl-[8px]
                  pb-2
                "
              >
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      hero-social-mobile
                      text-[#181818]
                      hover:text-black
                      transition-colors
                    "
                  >
                    <Icon className="text-[22px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE — hidden on mobile, visible tablet+. */}
          <div
            className="
              hero-right-content
              hidden
              md:flex
              items-center
              justify-center
              gap-6
              py-8
              pr-8
              md:pr-16
              lg:pr-24
              lg:justify-end
            "
          >
            <div
              className="
                hero-image-wrap
                relative
                h-[360px]
                w-[360px]
                md:h-[400px]
                md:w-[400px]
                lg:h-[560px]
                lg:w-[560px]
                xl:h-[620px]
                xl:w-[620px]
                overflow-hidden
              "
            >
              <Image
                src="/images/heroimage.avif"
                alt="Studio Hero"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="hero-image-el object-cover grayscale"
              />
            </div>

            {/* SOCIALS — desktop only. */}
            <div
              className="
                hidden
                lg:flex
                flex-col
                gap-6
                mt-[62px]
              "
            >
              {socialss.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    hero-social-desktop
                    text-black/35
                    hover:text-black
                    transition-colors
                  "
                >
                  <Icon className="text-[22px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";
// import { NAV_LINKS } from "@/lib/constants";
// import { usePathname } from "next/navigation";
// import Image from "next/image";


// export default function Navbar() {
//   const pathname = usePathname();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hideNav, setHideNav] = useState(false);
//   const [headerHeight, setHeaderHeight] = useState(0);

//   const headerRef = useRef<HTMLElement>(null);
//   const lastScrollY = useRef(0);

//   // Measure the whole fixed header's rendered height so the spacer
//   // below can push page content down by the exact right amount.
//   // ResizeObserver keeps it correct across breakpoints / font loads.
//   useEffect(() => {
//   if (!headerRef.current) return;
//   const el = headerRef.current;

//   const update = () => {
//     const h = el.offsetHeight;
//     setHeaderHeight(h);
//     document.documentElement.style.setProperty("--header-height", `${h}px`);
//   };
//   update();

//   const ro = new ResizeObserver(update);
//   ro.observe(el);
//   return () => ro.disconnect();
// }, []);

//   // Scroll direction detection - only affects the DESKTOP nav
//   useEffect(() => {
//     lastScrollY.current = window.scrollY;

//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const diff = currentY - lastScrollY.current;

//       if (currentY <= 4) {
//         // near the top, always show
//         setHideNav(false);
//       } else if (diff > 4) {
//         // scrolling down
//         setHideNav(true);
//       } else if (diff < -4) {
//         // scrolling up
//         setHideNav(false);
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* FIXED HEADER - logo always visible, nav slides behind it */}
//       <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full">
//         {/* LOGO */}
//         <div className="relative z-50 flex items-center justify-center border-b border-black/35 bg-[#f4f4f2] px-4 py-4 sm:py-5 md:py-4">
//           <Link href="/" className="block">
//             <Image
//               src="/images/NewLogo.png"
//               alt="TORUSS Logo"
//               width={260}
//               height={70}
//               priority
//               className="h-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[150px] select-none"
//             />
//           </Link>
//         </div>

//         {/* DESKTOP NAV - sits right below logo, hides behind logo on scroll down, shows on scroll up */}
//         <nav
//           className={cn(
//             "relative z-40 hidden border-b border-black/35 bg-[#f4f4f2] transition-transform duration-300 ease-in-out lg:block",
//             hideNav ? "-translate-y-full" : "translate-y-0"
//           )}
//         >
//           <div className="mx-auto w-full max-w-[1728px]">
//             <ul className="flex items-center justify-between px-8 py-[16px] lg:px-10 xl:px-14 2xl:px-20">
//               {NAV_LINKS.map((item) => {
//                 const isActive = pathname === item.href;

//                 return (
//                   <li key={item.href}>
//                     <Link
//                       href={item.href}
//                       className={cn(
//                         `
//                           relative
//                           flex
//                           items-center
//                           gap-1.5
//                           whitespace-nowrap
//                           uppercase
//                           tracking-[0.16em]
//                           transition-colors
//                           duration-200
//                           font-nixie
//                           text-[14px]
//                           lg:text-[15px]
//                           xl:text-[16px]
//                           2xl:text-[17px]
//                         `,
//                         isActive
//                           ? "text-[#707070]"
//                           : "text-black hover:text-[#6b6b6b]"
//                       )}
//                     >
//                       <span
//                         className={cn(
//                           `
//                             h-[6px]
//                             w-[6px]
//                             shrink-0
//                             bg-[#2a2a2a]
//                             transition-opacity
//                             duration-200
//                           `,
//                           isActive ? "opacity-100" : "opacity-0"
//                         )}
//                       />

//                       <span>{item.label}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </nav>

//         {/* MOBILE / TABLET - always fixed right below logo, does NOT hide */}
//         <div className="relative z-40 border-b border-black/35 bg-[#f4f4f2] lg:hidden">
//           {/* TOP BAR */}
//           <div className="flex items-center justify-between px-5 py-2 sm:px-7 sm:py-3">
//             <button
//               aria-label="Toggle Menu"
//               aria-expanded={menuOpen}
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="flex cursor-pointer flex-col justify-center gap-[5px] p-1 -ml-1"
//             >
//               <span
//                 className={cn(
//                   `
//                     block
//                     h-px
//                     w-6
//                     bg-[#2a2a2a]
//                     origin-center
//                     transition-all
//                     duration-300
//                   `,
//                   menuOpen && "translate-y-[6px] rotate-45"
//                 )}
//               />

//               <span
//                 className={cn(
//                   `
//                     block
//                     h-px
//                     w-6
//                     bg-[#2a2a2a]
//                     transition-all
//                     duration-300
//                   `,
//                   menuOpen
//                     ? "scale-x-0 opacity-0"
//                     : "scale-x-100 opacity-100"
//                 )}
//               />

//               <span
//                 className={cn(
//                   `
//                     block
//                     h-px
//                     w-6
//                     bg-[#2a2a2a]
//                     origin-center
//                     transition-all
//                     duration-300
//                   `,
//                   menuOpen && "-translate-y-[6px] -rotate-45"
//                 )}
//               />
//             </button>

//             <span
//               className="
//                 select-none
//                 font-mono
//                 text-[11px]
//                 uppercase
//                 tracking-[0.35em]
//                 text-[#8f8b86]
//                 sm:text-[12px]
//               "
//             >
//               MENU
//             </span>
//           </div>

//           {/* DROPDOWN */}
//           <div
//             className={cn(
//               `
//                 overflow-hidden
//                 transition-all
//                 duration-300
//                 ease-in-out
//               `,
//               menuOpen
//                 ? "max-h-[600px] opacity-100"
//                 : "max-h-0 opacity-0"
//             )}
//           >
//             <ul className="flex flex-col px-5 pb-2 sm:px-7">
//               {NAV_LINKS.map((item, index) => {
//                 const isActive = pathname === item.href;

//                 return (
//                   <li
//                     key={item.href}
//                     className="border-t border-black/10 first:border-t-0"
//                   >
//                    <Link
//   href={item.href}
//   onClick={() => setMenuOpen(false)}
//                       className={cn(
//                         `
//                           flex
//                           items-center
//                           gap-3
//                           py-4
//                           font-mono
//                           text-[11px]
//                           uppercase
//                           tracking-[0.22em]
//                           transition-colors
//                           duration-150
//                           sm:py-5
//                           sm:text-[13px]
//                           md:text-[14px]
//                         `,
//                         isActive
//                           ? "text-[#2a2a2a]"
//                           : "text-[#8f8b86]"
//                       )}
//                     >
//                       <span
//                         className={cn(
//                           `
//                             h-[5px]
//                             w-[5px]
//                             shrink-0
//                             bg-[#2a2a2a]
//                             transition-opacity
//                             duration-150
//                           `,
//                           isActive ? "opacity-100" : "opacity-0"
//                         )}
//                       />

//                       <span>{item.label}</span>

//                       <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-[#c5c2bc] sm:text-[11px]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </header>

//       {/* SPACER - reserves the header's height in normal document flow
//           so page content doesn't slide under the fixed header */}
//       <div style={{ height: headerHeight }} aria-hidden="true" />
//     </>
//   );
// }