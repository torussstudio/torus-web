import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Archivehero from "@/components/sections/archive/Archivehero";
import ProjectNarrative from "@/components/sections/archive/Projectnarrative";
import ProjectOverview from "@/components/sections/archive/Projectoverview";

export default function ArchivePage() {
  return (
    <main>
        <Navbar/>
      <Archivehero/>
      <ProjectOverview />
      <ProjectNarrative />
      <Footer/>
    </main>
  );
}