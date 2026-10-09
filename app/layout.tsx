import type { Metadata } from "next";
import "./globals.css";

import { heading, body, nav } from "./fonts";
import SmoothScrollLoader from "@/components/common/SmoothScrollLoader";

export const metadata: Metadata = {
  title: "Torus",
  description: "Studio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${heading.variable} ${body.variable} ${nav.variable}`}
    >
      <body>
        <SmoothScrollLoader />
        {children}
      </body>
    </html>
  );
}