import localFont from "next/font/local";
import { Nixie_One } from "next/font/google";

export const heading = localFont({
  src: "./fonts/BerlingNovaDisplay-Regular.woff",
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const body = Nixie_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});