import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StudioHero from "@/components/sections/studio/Hero";
import Artwork from "@/components/sections/studio/Artwork";
import CreativeGrid from "@/components/sections/studio/Creative";
import ArchiveSection from "@/components/sections/studio/Archive";
import AreasOfPractice from "@/components/sections/studio/Areas"

export default function Home() {
  return (
    <main className="bg-[#e8e5df] min-h-screen">
      <Navbar />
      <StudioHero />
      <Artwork />
      <CreativeGrid />
      <ArchiveSection />
      <AreasOfPractice />
      <Footer />
    </main>
  );
}