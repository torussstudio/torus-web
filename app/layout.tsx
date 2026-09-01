import type { Metadata } from "next";
import "./globals.css";

import { heading, body, recife, serendipity } from "./fonts";
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
    <html lang="en" className={`${heading.variable} ${body.variable} ${recife.variable} ${serendipity.variable}`}>
      <body className="overflow-x-hidden">
        <SmoothScrollLoader />
        {children}
      </body>
    </html>
  );
}