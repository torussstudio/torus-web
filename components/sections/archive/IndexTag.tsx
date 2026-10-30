import { cn } from "@/lib/utils";

/** "[ 01 ]" number tag; `suffix` adds a word after it ("[ 01 ]  Calendar"). */
export default function IndexTag({
  index,
  suffix,
  className,
}: {
  /** zero-based position */
  index: number;
  suffix?: string;
  className?: string;
}) {
  const tag = `[ ${String(index + 1).padStart(2, "0")} ]`;
  return <span className={cn("whitespace-pre", className)}>{suffix ? `${tag}  ${suffix}` : tag}</span>;
}
