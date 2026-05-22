import localFont from "next/font/local";

export const raisonne = localFont({
  src: "./fonts/raisonne-demibold.woff2",
  variable: "--font-raisonne",
   preload: true,
});

export const megatoya = localFont({
  src: "./fonts/BDMegatoya-Regular.woff2",
  variable: "--font-megatoya",
   preload: false,
});

export const monos = localFont({
  src: "./fonts/Monos-Regular.woff2",
  variable: "--font-monos",
   preload: false,
});