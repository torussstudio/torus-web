import { medtechHero } from "@/lib/constants";
import HeroSection from "../HeroSection";
import ChallengeSection from "./ChallengeSection";
import PartnershipSection from "./PartnershipSection";
import IdentitySection from "./IdentitySection";
import JourneySection from "./JourneySection";
import ProfileSection from "./ProfileSection";

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
    </>
  );
}