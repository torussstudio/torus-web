import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StudioHero from "@/components/sections/studio/Hero";
import Artwork from "@/components/sections/studio/Artwork";

export default function Home() {
  return (
    <main className="bg-[#e8e5df] min-h-screen">
      <Navbar />
      <StudioHero />
      <Artwork />
      <Footer />
    </main>
  );
}