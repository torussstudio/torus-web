import localFont from "next/font/local";
import { Nixie_One } from "next/font/google";


export const nav = localFont({
  src: "./fonts/ClashGrotesk-Light.woff",
  variable: "--font-nav",
  display: "swap",
  preload: true,
});

export const body = localFont({
  src: "./fonts/SeasonMix-TRIAL-Medium.otf",
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const heading = localFont({
  src: "./fonts/ClashGrotesk-Regular.woff",
  variable: "--font-body",
  display: "swap",
  preload: true,
});





// export const serendipity = localFont({
//   src: "./fonts/serendipity.woff",
//   variable: "--font-serendipity",
//   display: "swap",
//   preload: true,
// });