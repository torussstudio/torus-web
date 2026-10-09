// =========================================================
// ARCHIVE PAGE — shared Tailwind class strings
// ---------------------------------------------------------
// Three layouts:
//   • phone   (< 768px)     stacked, plain px          -> p-24 = 24px
//   • tablet  (md: 768–1279) 2/3-column, plain px      -> md:px-40 = 40px
//   • desktop (xl: 1280+)   the 1920px design, scaled
//
// For desktop the page wrapper (ArchiveReveal) overrides
// Tailwind's --spacing unit so 1 unit = 1 design px of the
// 1920px artboard, scaled to the screen (capped at 2560px):
//     xl:pt-158 = 158px on 1920, 118.5px on 1440, 105px on 1280
// So every xl: number is read straight off the design.
// Font sizes use the same unit with a readable minimum.
// =========================================================

export const t = {
  // small grey section labels — "THE CHALLENGE"
  label:
    "block text-[13px] leading-[1.3333] uppercase tracking-[0.05em] text-[#999688] xl:text-[length:max(12px,calc(var(--spacing)*24))]",

  // Season serif headings
  h2: "font-trial font-normal text-[length:clamp(30px,6vw,44px)] leading-[1.2] tracking-normal xl:text-[length:max(30px,calc(var(--spacing)*64))]",

  // body copy
  body: "text-[16px] leading-[1.5] tracking-[0.05em] md:text-[length:clamp(15px,1.6vw,17px)] xl:text-[length:max(15px,calc(var(--spacing)*24))] xl:leading-[1.3333]",

  // large Clash statements — "how to make people believe…"
  lead: "text-[length:clamp(22px,4.4vw,32px)] leading-[1.2] tracking-[0.05em] md:text-[length:clamp(24px,3vw,32px)] xl:text-[length:max(22px,calc(var(--spacing)*49))]",

  // centred full-width wrapper (design scales up to 2560px wide screens)
  inner: "mx-auto w-full max-w-[2560px]",

  // grey label cell in the left 272px column (sits on top on phone/tablet)
  sideLabel: "px-24 pt-48 md:px-40 md:pt-64 xl:border-r xl:px-0 xl:text-center",
};
