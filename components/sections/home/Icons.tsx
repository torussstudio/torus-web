import { HiArrowTurnDownRight } from "react-icons/hi2";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Thin long arrow used in the hero links and card lists */
export function LongArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 27 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={cn("h-auto w-26 shrink-0", className)}
    >
      <path d="M0 9h26M18 1l8 8-8 8" />
    </svg>
  );
}

/** "↳ LABEL" text link (green by default) */
export function TurnLink({
  href,
  children,
  className,
  tone = "green",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "green" | "ink";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-8 text-[14px] leading-[1.3] tracking-[0.05em] uppercase xl:gap-13 xl:text-[length:max(14px,calc(var(--spacing)*25.2))]",
        tone === "green" ? "text-[#3da32e]" : "text-[#38362e]",
        className,
      )}
    >
      <HiArrowTurnDownRight
        aria-hidden="true"
        className="-mt-4 size-14 transition-transform duration-300 group-hover:translate-x-4 xl:-mt-8 xl:size-[max(14px,calc(var(--spacing)*24))]"
      />
      <span>{children}</span>
    </Link>
  );
}
