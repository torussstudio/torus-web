"use client";

import { usePathname } from "next/navigation";
import Loader from "@/components/common/Loader";

export default function Loading() {
  const pathname = usePathname();

  // The home page has its own entry transition; don't show the full-screen
  // route loader while navigating back to it.
  if (pathname === "/") return null;

  return <Loader loading={true} text="Loading" />;
}
