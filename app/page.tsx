import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ArchiveReveal from "@/components/sections/archive/ArchiveReveal";
import StudioHero from "@/components/sections/home/Hero";
import Artwork from "@/components/sections/home/Artwork";
import CreativeGrid from "@/components/sections/home/Creative";
import ArchiveSection from "@/components/sections/home/Archive";
import DisciplineSection from "@/components/sections/home/DisciplineSection";
import AreasOfPractice from "@/components/sections/home/Areas";
import StudioNote from "@/components/sections/home/StudioNote";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* same design scale + scroll reveals as the archive pages */}
      <ArchiveReveal>
        <StudioHero />
        <Artwork />
        <CreativeGrid />
        <ArchiveSection />
        <DisciplineSection />
        <AreasOfPractice />
        <StudioNote />
      </ArchiveReveal>

      <Footer />
    </main>
  );
}
