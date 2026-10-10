import {
  exultHero,
  exultMarks,
  exultOutcome,
  exultReflections,
} from "@/lib/constants";
import HeroSection from "../HeroSection";
import MarksSection from "../MarksSection";
import OutcomeSection from "../OutcomeSection";
import ReflectionsSection from "../ReflectionsSection";
import { t } from "../styles";
import ChallengeSection from "./ChallengeSection";
import PartnershipSection from "./PartnershipSection";
import IdentitySection from "./IdentitySection";
import WebsiteSection from "./WebsiteSection";
import ContentSection from "./ContentSection";
import ImpactSection from "./ImpactSection";
import CommunicationSection from "./CommunicationSection";
import EventSection from "./EventSection";
import EmailSection from "./EmailSection";
import DigitalSection from "./DigitalSection";

/** Exult Global case study — everything between the navbar and "Next Project" */
export default function ExultProject({ index }: { index: string }) {
  return (
    <>
      <HeroSection data={exultHero} index={index} />
      <ChallengeSection />
      <PartnershipSection />
      <IdentitySection />
      <WebsiteSection />
      <ContentSection />
      <section className={t.inner}>
        <MarksSection data={exultMarks} />
      </section>
      <ImpactSection />
      <CommunicationSection />
      <EventSection />
      <EmailSection />
      <DigitalSection />
      <OutcomeSection
        data={exultOutcome}
        topPadding="xl:pt-84"
        columnWidths={["xl:max-w-390", "xl:max-w-454", "xl:max-w-386"]}
      />
      <ReflectionsSection data={exultReflections} />
    </>
  );
}
