import { medtechHero } from "@/lib/constants";
import HeroSection from "../HeroSection";
import ChallengeSection from "./ChallengeSection";
import PartnershipSection from "./PartnershipSection";
import IdentitySection from "./IdentitySection";
import JourneySection from "./JourneySection";
import ProfileSection from "./ProfileSection";
import ProcessSection from "./Processsection";
import MotionSection from "./Motionsection";
import CollateralSection from "./CollateralSection";
import TouchpointsSection from "./TouchpointsSection";
import CultureSection from "./CultureSection";
import OutcomeSection from "./OutcomeSection";
import ReflectionsSection from "./ReflectionsSection";

/** MedTech Corporation case study — everything between the navbar and "Next Project" */
export default function MedtechProject({ index }: { index: string }) {
  return (
    <>
      <HeroSection data={medtechHero} index={index} />
      <ChallengeSection />
      <PartnershipSection />
      <IdentitySection />
      <JourneySection />
      <ProfileSection />
      <ProcessSection />
      <MotionSection />
      <CollateralSection />
      <TouchpointsSection />
      <CultureSection />
      <OutcomeSection />
      <ReflectionsSection />
    </>
  );
}