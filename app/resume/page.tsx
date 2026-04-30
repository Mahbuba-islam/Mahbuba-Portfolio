import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Globe,
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Sparkles,
  FolderKanban,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/brand-icons";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Mahbuba Akter — Full Stack Web Developer based in New York.",
  alternates: { canonical: "/resume" },
};

const CONTACT = {
  name: "Mahbuba Akter",
  role: "Full Stack Web Developer",
  email: "mahbubaislam7010@gmail.com",
  location: "New York, NY",
  website: "https://mahbuba-portfolio.vercel.app",
  github: "https://github.com/account",
  linkedin: "https://www.linkedin.com/in/mahbuba-akter-020157211/",
};

const SUMMARY =
  "Full‑Stack Web Developer skilled in building modern, scalable, and user‑focused applications using React, Next.js, Node.js, TypeScript, PostgreSQL, and MongoDB. Strong foundation in authentication systems, API development, database modeling, and responsive UI engineering. Passionate about solving real‑world problems, writing clean and maintainable code, and delivering high‑quality digital experiences.";

const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query",
      "Axios",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma ORM",
      "Better Auth",
      "JWT",
      "Firebase Authentication",
    ],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker"],
  },
  {
    label: "Engineering",
    items: ["Problem Solving (JavaScript)", "Critical Thinking"],
  },
];

const PROJECTS = [
  {
    title: "ConsultEdge — Expert Consultation SaaS Platform",
    tagline: "Role-based dashboards, real-time messaging, notifications, and Stripe payments.",
    bullets: [
      "Built a full-stack consultation platform with dashboards for clients, experts, and admins.",
      "Implemented real-time messaging and activity updates using WebSockets.",
      "Added a complete notification system for bookings, status updates, and alerts.",
      "Integrated Stripe for secure payments with webhook-based status automation.",
      "Designed a premium UI with Tailwind CSS and reusable components.",
      "Implemented secure authentication using Better Auth + JWT.",
    ],
    stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Stripe", "WebSockets"],
  },
  {
    title: "CareerCode — Full Stack Job Portal",
    tagline: "Job posting, job application, dashboards, and secure authentication.",
    bullets: [
      "Developed a job portal with job posting, job application, and user dashboards.",
      "Implemented secure login, protected routes, and Prisma-based data models.",
      "Integrated TanStack Query + Axios for smooth data fetching.",
      "Designed a modern, responsive UI with Tailwind CSS.",
    ],
    stack: ["Next.js", "Node.js", "Prisma", "MongoDB", "TanStack Query"],
  },
  {
    title: "E‑Commerce CRUD Application",
    tagline: "Product management, filtering, pagination, and responsive UI.",
    bullets: [
      "Built full CRUD operations with Express.js and MongoDB.",
      "Added product filtering, pagination, and error handling.",
      "Designed a responsive UI using React + Tailwind CSS.",
      "Implemented form validation and optimized API communication with Axios.",
    ],
    stack: ["React", "Express.js", "MongoDB", "Axios"],
  },
  {
    title: "Portfolio Website",
    tagline: "Modern, animated, recruiter-friendly portfolio with SEO optimization.",
    bullets: [
      "Built a modern portfolio with animations, glassmorphism, and gradients.",
      "Added blog system, dynamic routing, and theme support.",
      "Optimized for SEO and performance.",
    ],
    stack: ["Next.js", "Tailwind CSS"],
  },
];

const EXPERIENCE = [
  {
    role: "Independent Full Stack Developer",
    org: "Self-directed",
    period: "2024 — Present",
    location: "New York, NY",
    bullets: [
      "Designed and shipped multiple full-stack applications using Next.js, Node.js, PostgreSQL, and MongoDB.",
      "Implemented production-grade patterns: authentication, validation, API design, and deployment.",
      "Built SaaS platforms, job portals, and real-time applications.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Higher Secondary Certificate (HSC)",
    detail: "Completed in Bangladesh.",
    period: "Completed",
  },
  {
    school: "Programming Hero — Full Stack Bootcamp",
    detail: "Level‑1 Web Development & Level‑2 Next‑Level Web Development.",
    period: "Completed",
  },
];

export default function ResumePage() {
  return (
    <div className="resume-root mx-auto max-w-4xl px-4 py-10 sm:px-6 print:px-0 print:py-0">
      {/* Toolbar — hidden when printing */}
      <div className="resume-toolbar mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <div className="flex items-center gap-2">
          <PrintButton />
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 px-3 text-xs font-medium text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/20 transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-3.5 w-3.5" />
            Email me
          </a>
        </div>
      </div>

      <article className="resume-paper rounded-2xl border border-border/60 bg-card/60 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-10 print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black print:shadow-none">
        {/* Header */}
        <header className="resume-header border-b border-border/60 pb-6 print:border-black/20">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl print:text-3xl">
            {CONTACT.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground print:text-black/70">
            {CONTACT.role}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground print:text-black/80">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {CONTACT.location}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <a
                href={`mailto:${CONTACT.email}`}
                className="underline-offset-2 hover:underline"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" aria-hidden />
              <a
                href={CONTACT.website}
                className="underline-offset-2 hover:underline"
              >
                {CONTACT.website.replace("https://", "")}
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <GithubIcon className="h-3.5 w-3.5" />
              <a
                href={CONTACT.github}
                className="underline-offset-2 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <LinkedinIcon className="h-3.5 w-3.5" />
              <a
                href={CONTACT.linkedin}
                className="underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </header>

        {/* Summary */}
        <Section icon={Sparkles} title="Summary">
          <p className="text-sm leading-relaxed text-muted-foreground print:text-black/80">
            {SUMMARY}
          </p>
        </Section>

        {/* Skills */}
        <Section icon={Wrench} title="Skills">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SKILLS.map((g) => (
              <div key={g.label} className="break-inside-avoid">
                <dt className="text-xs font-semibold uppercase tracking-widest text-foreground/80 print:text-black">
                  {g.label}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground print:text-black/80">
                  {g.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Experience */}
        <Section icon={Briefcase} title="Experience">
          <ol className="space-y-5">
            {EXPERIENCE.map((e) => (
              <li key={e.role} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground print:text-black">
                    {e.role}
                    <span className="font-normal text-muted-foreground print:text-black/70">
                      {" "}
                      · {e.org}
                    </span>
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-black/70">
                    {e.period} · {e.location}
                  </span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-indigo-400 print:text-black/80 print:marker:text-black/60">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section icon={FolderKanban} title="Selected Projects">
          <ol className="space-y-5">
            {PROJECTS.map((p) => (
              <li key={p.title} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground print:text-black">
                    {p.title}
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-black/70">
                    {p.stack.join(" · ")}
                  </span>
                </div>
                <p className="mt-1 text-xs italic text-muted-foreground print:text-black/70">
                  {p.tagline}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-indigo-400 print:text-black/80 print:marker:text-black/60">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Education */}
        <Section icon={GraduationCap} title="Education">
          <ul className="space-y-3">
            {EDUCATION.map((ed) => (
              <li key={ed.school} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground print:text-black">
                    {ed.school}
                  </h3>
                  <span className="text-xs text-muted-foreground print:text-black/70">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground print:text-black/80">
                  {ed.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="resume-footer mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-[11px] text-muted-foreground print:border-black/20 print:text-black/60">
          <span>© {new Date().getFullYear()} Mahbuba Akter</span>
          <a
            href={CONTACT.website}
            className="inline-flex items-center gap-1 underline-offset-2 hover:underline"
          >
            {CONTACT.website.replace("https://", "")}
            <ExternalLink className="h-3 w-3" />
          </a>
        </footer>
      </article>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section mt-7 print:mt-5 print:break-inside-avoid">
      <h2 className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 print:text-black">
        <Icon className="h-3.5 w-3.5 text-indigo-400 print:text-black" />
        {title}
      </h2>
      {children}
    </section>
  );
}
