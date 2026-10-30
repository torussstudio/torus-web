import { cn } from "@/lib/utils";
import { tsaQuestion as q } from "@/lib/constants";
import CapsuleSection from "../CapsuleSection";
import { t } from "../styles";

export default function QuestionSection() {
  return (
    <CapsuleSection
      label={q.label}
      media={q.image}
      contentClassName="xl:pl-125 xl:*:max-w-640"
      mediaClassName="aspect-[572/640] xl:h-640"
    >
      <p data-reveal className={t.body}>
        {q.body}
      </p>
      <p data-reveal className={cn(t.lead, "mt-18 xl:mt-28")}>
        {q.question}
      </p>
    </CapsuleSection>
  );
}
