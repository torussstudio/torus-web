import { redirect } from "next/navigation";
import { archiveHref, archiveProjects } from "@/lib/constants";

// The archive listing page isn't designed yet — the navbar's ARCHIVE
// dropdown links straight to each project. Anyone opening /archive
// directly is sent to the first project for now.
export default function ArchivePage() {
  redirect(archiveHref(archiveProjects[0].slug));
}
