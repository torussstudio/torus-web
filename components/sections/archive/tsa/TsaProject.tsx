import { tsaHero, tsaOutcome, tsaReflections } from "@/lib/constants";
import HeroSection from "../HeroSection";
import OutcomeSection from "../OutcomeSection";
import ReflectionsSection from "../ReflectionsSection";
import ChallengeSection from "./ChallengeSection";
import QuestionSection from "./QuestionSection";
import NamingSection from "./NamingSection";
import IdentitySection from "./IdentitySection";
import SystemSection from "./SystemSection";
import ProofSection from "./ProofSection";
import ProductSection from "./ProductSection";
import PackagingSection from "./PackagingSection";
import SensorySection from "./SensorySection";
import DigitalSection from "./DigitalSection";

/** The Spanish Alchemist case study — everything between the navbar and "Next Project" */
export default function TsaProject({ index }: { index: string }) {
  return (
    <>
      <HeroSection data={tsaHero} index={index} />
      <ChallengeSection />
      <QuestionSection />
      <NamingSection />
      <IdentitySection />
      <SystemSection />
      <ProofSection />
      <ProductSection />
      <PackagingSection />
      <SensorySection />
      <DigitalSection />
      <OutcomeSection data={tsaOutcome} />
      <ReflectionsSection data={tsaReflections} />
    </>
  );
}
