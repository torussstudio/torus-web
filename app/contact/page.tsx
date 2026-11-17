import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ArchiveReveal from "@/components/sections/archive/ArchiveReveal";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Toruss",
  description: "Tell us what you're building. A light conversation to begin with.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <ArchiveReveal>
        <ContactSection />
      </ArchiveReveal>

      <Footer showContactBox={false} />
    </main>
  );
}
