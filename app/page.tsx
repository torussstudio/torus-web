import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ArchiveReveal from "@/components/sections/archive/ArchiveReveal";
import StudioHero from "@/components/sections/home/Hero";
import CreativeGrid from "@/components/sections/home/Creative";
import ArchiveSection from "@/components/sections/home/Archive";
import DisciplineSection from "@/components/sections/home/DisciplineSection";
import AreasOfPractice from "@/components/sections/home/Areas";
import StudioNote from "@/components/sections/home/StudioNote";
import HomeScrollFx from "@/components/sections/home/HomeScrollFx";
import ContactIcons from "@/components/sections/home/ContactIcons";

export default function Home() {
  return (
    <main data-home-page className="[--page-paper:#f9f5ec] bg-[var(--page-paper)] pb-[calc(60px+max(12px,env(safe-area-inset-bottom)))] lg:pb-0">
      <Navbar />

      <ArchiveReveal>
        <HomeScrollFx>
          <StudioHero />
          <CreativeGrid />
          <ArchiveSection />
          <DisciplineSection />
          <AreasOfPractice />
          <StudioNote />
        </HomeScrollFx>
      </ArchiveReveal>

      <Footer />
      <ContactIcons fixed />
    </main>
  );
}
