import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StudioHero from "@/components/sections/home/Hero";
import Artwork from "@/components/sections/home/Artwork";
import CreativeGrid from "@/components/sections/home/Creative";
import ArchiveSection from "@/components/sections/home/Archive";
import AreasOfPractice from "@/components/sections/home/Areas";
import UXPage from "@/components/sections/home/StudioNote";
import PreloaderWrapper from "@/components/common/PreloaderWrapper";

export default function Home() {
  return (
    <>

          <PreloaderWrapper />

    <main className="bg-[#e8e5df] min-h-screen">
      <Navbar />
      <StudioHero />
      <Artwork />
      <CreativeGrid />
      <ArchiveSection />
      <AreasOfPractice />
      <UXPage/>
      <Footer />
    </main>
    </>
  );
}