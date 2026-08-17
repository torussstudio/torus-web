// import type { Metadata } from "next";
// import "./globals.css";

// import { heading, body } from "./fonts";
// import SmoothScroll from "@/components/common/SmoothScroll";

// export const metadata: Metadata = {
//   title: "Torus",
//   description: "Studio Website",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`
//         ${heading.variable}
//         ${body.variable}
//       `}
//     >
//       <body >
//         <SmoothScroll />
//         {children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

import { heading, body } from "./fonts";

const SmoothScroll = dynamic(() => import("@/components/common/SmoothScroll"), {
  ssr: false,
});

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
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}