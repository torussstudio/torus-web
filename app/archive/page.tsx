import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Archivehero from "@/components/sections/archive/Archivehero";
import ArchiveSidebar from "@/components/sections/archive/ArchiveSidebar";
import BuildingAlchemistWorld from "@/components/sections/archive/BuildingAlchemistWorld";
import BuildingCompleteEcosystem from "@/components/sections/archive/BuildingCompleteEcosystem";
import ExtendingBeyondPackagingSection from "@/components/sections/archive/ExtendingBeyondPackagingSection";
import LivingBrandEcosystem from "@/components/sections/archive/LivingBrandEcosystem";
import MakingFreshnessVisible from "@/components/sections/archive/MakingFreshnessVisible";
import MicroNanoEncapsulation from "@/components/sections/archive/MicroNanoEncapsulation";
import PackagingConversation from "@/components/sections/archive/PackagingConversation";
import PersonalIdentitySection from "@/components/sections/archive/PersonalIdentitySection";
import ProjectNarrative from "@/components/sections/archive/Projectnarrative";
import ProjectOverview from "@/components/sections/archive/Projectoverview";
import ProjectQuestionAndNaming from "@/components/sections/archive/ProjectQuestionAndNaming";
import ReflectionsSection from "@/components/sections/archive/ReflectionsSection";
import SensoryLayerSection from "@/components/sections/archive/SensoryLayerSection";
import StudioMoodboard from "@/components/sections/archive/StudioMoodboard";
import TSABrandMoment from "@/components/sections/archive/TSABrandMoment";

export default function ArchivePage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-[1728px] mx-auto lg:flex">
        <ArchiveSidebar />
        <div className="flex-1 min-w-0">
          <Archivehero />
          <ProjectOverview />
          <ProjectNarrative />
          <ProjectQuestionAndNaming />
          <PersonalIdentitySection />
          <StudioMoodboard />
          <BuildingAlchemistWorld />
          <TSABrandMoment />
          <MakingFreshnessVisible />
          <PackagingConversation />
          <MicroNanoEncapsulation />
          <SensoryLayerSection />
          <ExtendingBeyondPackagingSection />
          <BuildingCompleteEcosystem />
          <LivingBrandEcosystem />
        </div>
      </div>

     {/* DIVIDER — full width, spans sidebar + content, true screen edges */}
<div
  className="
    relative w-full h-px bg-black/85 mb-6 sm:mb-8 lg:mb-10
  "
/>

      <ReflectionsSection />
      <Footer />
    </main>
  );
}