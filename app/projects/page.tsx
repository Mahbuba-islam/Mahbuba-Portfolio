import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Projects } from "../components/projects";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A complete list of full-stack, real-time, and frontend projects built end-to-end.",
};

export default function AllProjectsPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <Projects
        showAllLink={false}
        eyebrow="All Projects"
        heading={
          <>
            Every <span className="text-brand-gradient">project</span> I&apos;ve built.
          </>
        }
        description="The full archive — from full-stack platforms and real-time apps to frontend practice projects and UI experiments."
      />
    </main>
  );
}
