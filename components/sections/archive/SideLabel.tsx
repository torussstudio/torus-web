import { cn } from "@/lib/utils";
import { t } from "./styles";

/**
 * Grey section label that reads bottom-to-top in its own column on desktop
 * ("THE DIRECTION"); sits on top as a normal label on phone/tablet.
 * `className` replaces the default cell padding (the capsule panels pass their own).
 */
export default function SideLabel({
  label,
  className = "px-24 pt-48 md:px-40 md:pt-64 xl:p-0",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center xl:justify-center xl:border-r", className)}>
      <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>{label}</span>
    </div>
  );
}
