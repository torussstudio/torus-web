import type { Metadata } from "next";
import "./globals.css";

import { raisonne, megatoya, monos } from "./fonts";
import SmoothScroll from "@/components/common/SmoothScroll";

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
      className={`
        ${raisonne.variable}
        ${megatoya.variable}
        ${monos.variable}
      `}
    >
      <body >
        <SmoothScroll />
        {children}</body>
    </html>
  );
}