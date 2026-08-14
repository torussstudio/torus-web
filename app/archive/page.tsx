import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Archivehero from "@/components/sections/archive/Archivehero";
import BuildingAlchemistWorld from "@/components/sections/archive/BuildingAlchemistWorld";
import PersonalIdentitySection from "@/components/sections/archive/PersonalIdentitySection";
import ProjectNarrative from "@/components/sections/archive/Projectnarrative";
import ProjectOverview from "@/components/sections/archive/Projectoverview";
import ProjectQuestionAndNaming from "@/components/sections/archive/ProjectQuestionAndNaming";
import StudioMoodboard from "@/components/sections/archive/StudioMoodboard";
import TSABrandMoment from "@/components/sections/archive/TSABrandMoment";

export default function ArchivePage() {
  return (
    <main>
        <Navbar/>
      <Archivehero/>
      <ProjectOverview />
      <ProjectNarrative />
      <ProjectQuestionAndNaming />
      <PersonalIdentitySection />
      <StudioMoodboard />
      <BuildingAlchemistWorld />
      <TSABrandMoment />
      <Footer/>
    </main>
  );
}