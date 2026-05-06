import { PROJECTS } from "@/app/components/projects";
import { notFound } from "next/navigation";

function getLongDescription(title: string): string {
  switch (title) {
    case "Consultdge":
      return "Consultdge is a robust, end-to-end consultation platform that combines chat, video calls, AI assistance, and secure payments into one seamless system.";

    case "MentorHub":
      return "MentorHub is a mentorship platform connecting students and teachers with role-based access, progress tracking, and learning resources.";

    case "Warehouse Management":
      return "Warehouse Management is an inventory system for tracking, updating, and managing stock with secure authentication and dashboards.";

    case "DragonNews":
      return "DragonNews is a real-time news platform with category filtering, dynamic routing, and a responsive UI.";

    case "Manufacture":
      return "Manufacture is a full-stack platform for managing products, orders, and customers with role-based authentication.";

    case "DocBridge":
      return "DocBridge is a healthcare platform for doctor-patient appointments, scheduling, and management with secure access control.";

    case "Book Shelf":
      return "Book Shelf helps users track reading progress, manage books, and organize reading lists efficiently.";

    case "Pet Adoption":
      return "Pet Adoption is an interactive platform for browsing, liking, and adopting pets with dynamic UI updates.";

    case "Travel Guru":
      return "Travel Guru is a travel booking application that allows users to explore destinations and make bookings easily.";

    case "MealDb Explorer":
      return "MealDb Explorer is a recipe search app powered by API integration for exploring meals and ingredients.";

    case "Cricket Hub":
      return "Cricket Hub is a fantasy cricket platform with coin-based player selection and team building features.";

    case "Knowledge Nest":
      return "Knowledge Nest is a blog platform for reading, bookmarking, and managing articles with a clean interface.";

    case "Love Calculator":
      return "Love Calculator is a fun app that calculates name compatibility using simple logic.";

    case "Todo List App":
      return "Todo List App helps users manage daily tasks with add, edit, delete, and filter features.";

    case "Weather App":
      return "Weather App provides real-time weather updates using live API data.";

    case "Influencer Gear":
      return "Influencer Gear is a modern UI landing page focused on product presentation and design.";

    case "Matte Lipstick":
      return "Matte Lipstick is a stylish landing page showcasing modern UI and responsive design.";

    case "Convention Center":
      return "Convention Center is a static HTML/CSS landing page demonstrating layout and design skills.";

    default:
      return "Detailed project description coming soon.";
  }
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) return notFound();

  const longDescription = getLongDescription(project.title);

  return (
    <main className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-[#0a0a13] dark:to-[#1a1a2a] py-16 px-4 flex justify-center items-start">
      <section className="w-full max-w-3xl rounded-3xl shadow-2xl bg-white/90 dark:bg-[#181828]/90 p-10 border border-white/20 dark:border-white/10 relative overflow-hidden">

        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
          }}
        />

        {/* HEADER */}
        <header className="flex items-center gap-4 mb-8">
          <span className="h-14 w-14 text-white bg-brand-gradient rounded-full flex items-center justify-center shadow-lg">
            <project.icon className="h-7 w-7" />
          </span>

          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">
              {project.title}
            </h1>

            <p className="text-brand-gradient text-base font-medium">
              {project.tagline}
            </p>

            {project.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/60 px-2.5 py-1 text-xs font-semibold text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10 ml-2">
                <project.badge.icon className="h-3 w-3" />
                {project.badge.label}
              </span>
            )}
          </div>
        </header>

        {/* DESCRIPTION */}
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {longDescription}
        </p>

        {/* FEATURES */}
        <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-foreground/90"
            >
              <span className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-brand-cyan inline-block" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/30 bg-white/50 px-2 py-0.5 text-xs font-medium text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white shadow-md hover:scale-105 transition-transform"
          >
            Live Demo
          </a>
        </div>
      </section>
    </main>
  );
}

export const dynamicParams = true;