import { cn } from "@/lib/utils";
import { t } from "@/components/sections/archive/styles";

// home page = archive styles, with tighter body leading (design: 24/29)
// and smaller headings on tablet, where they sit in half-width columns
export const h = {
  ...t,
  h2: cn(t.h2, "md:text-[length:clamp(30px,4.4vw,40px)]"),
  body: cn(t.body, "xl:leading-[1.2]"),
};
