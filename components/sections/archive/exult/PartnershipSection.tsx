import { cn } from "@/lib/utils";
import { exultPartnership as d } from "@/lib/constants";
import CapsuleSection from "../CapsuleSection";
import { t } from "../styles";

export default function PartnershipSection() {
  return (
    <CapsuleSection
      label={d.label}
      media={d.image}
      contentClassName="xl:pl-107"
      mediaClassName="aspect-[572/638] xl:h-638"
    >
      <p data-reveal className={cn(t.lead, "xl:max-w-720")}>
        {d.lead}
      </p>
      <p data-reveal className={cn(t.body, "mt-18 xl:mt-26 xl:max-w-697")}>
        {d.body}
      </p>
    </CapsuleSection>
  );
}
