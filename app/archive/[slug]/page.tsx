import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ArchiveReveal from "@/components/sections/archive/ArchiveReveal";
import NextProjectSection from "@/components/sections/archive/NextProjectSection";
import TsaProject from "@/components/sections/archive/tsa/TsaProject";
import ExultProject from "@/components/sections/archive/exult/ExultProject";
import MedtechProject from "@/components/sections/archive/medtech/MedtechProject";
import { archiveProjects } from "@/lib/constants";

// slug -> page body. Add a line here when a new project page is built.
const projectPages: Record<string, ComponentType<{ index: string }>> = {
  "the-spanish-alchemist": TsaProject,
  "exult-global": ExultProject,
  medtech: MedtechProject,
};

type Props = { params: Promise<{ slug: string }> };

// only the projects above exist; any other /archive/<slug> is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return archiveProjects
    .filter((p) => projectPages[p.slug])
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = archiveProjects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Toruss` : "Archive — Toruss" };
}

export default async function ArchiveProjectPage({ params }: Props) {
  const { slug } = await params;
  const position = archiveProjects.findIndex((p) => p.slug === slug);
  const Project = projectPages[slug];
  if (position === -1 || !Project) notFound();

  const index = String(position + 1).padStart(2, "0");
  const others = archiveProjects.filter((p) => p.slug !== slug && projectPages[p.slug]);

  return (
    <main>
      <Navbar />

      {/* key: restart the scroll reveals when moving between projects */}
      <ArchiveReveal key={slug}>
        <Project index={index} />
        <NextProjectSection items={others} />
      </ArchiveReveal>

      <Footer />
    </main>
  );
}