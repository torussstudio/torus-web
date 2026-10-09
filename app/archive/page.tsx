import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import ArchiveReveal from "@/components/sections/archive/ArchiveReveal";
import HeroSection from "@/components/sections/archive/HeroSection";
import ChallengeSection from "@/components/sections/archive/ChallengeSection";
import QuestionSection from "@/components/sections/archive/QuestionSection";
import NamingSection from "@/components/sections/archive/NamingSection";
import IdentitySection from "@/components/sections/archive/IdentitySection";
import SystemSection from "@/components/sections/archive/SystemSection";
import ProofSection from "@/components/sections/archive/ProofSection";
import ProductSection from "@/components/sections/archive/ProductSection";
import PackagingSection from "@/components/sections/archive/PackagingSection";
import SensorySection from "@/components/sections/archive/SensorySection";
import DigitalSection from "@/components/sections/archive/DigitalSection";
import OutcomeSection from "@/components/sections/archive/OutcomeSection";
import ReflectionsSection from "@/components/sections/archive/ReflectionsSection";
import NextProjectSection from "@/components/sections/archive/NextProjectSection";

export default function ArchivePage() {
  return (
    <main>
      <Navbar />

      <ArchiveReveal>
        <HeroSection />
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
        <OutcomeSection />
        <ReflectionsSection />
        <NextProjectSection />
      </ArchiveReveal>

      <Footer />
    </main>
  );
}
