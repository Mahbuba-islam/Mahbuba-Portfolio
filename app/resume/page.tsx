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
    "Resume of Mahbuba Akter — Junior Full Stack Web Developer based in New York.",
  alternates: { canonical: "/resume" },
};

const CONTACT = {
  name: "Mahbuba Akter",
  role: "Junior Full Stack Web Developer",
  email: "mahbubaislam7010@gmail.com",
  location: "New York, NY",
  website: "https://mahbuba.dev",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

const SUMMARY =
  "Junior Full Stack Web Developer based in New York, focused on building modern, scalable, real-time web applications. Comfortable across the stack — from designing PostgreSQL/MongoDB schemas with Prisma to crafting accessible, animated UIs with Next.js, React, and Tailwind. Trained at Programming Hero (Levels 1 & 2). Curious about WebSockets, streaming UIs, and AI-assisted product features.";

const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "React Query / TanStack Query",
      "Axios",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Zod",
      "Better Auth",
      "JWT",
      "RAG",
    ],
  },
  {
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"],
  },
  { label: "Tools", items: ["Git", "Docker"] },
  { label: "Engineering", items: ["Problem Solving (JS)", "Critical Thinker"] },
];

const PROJECTS = [
  {
    title: "Real-Time Full Stack Application",
    tagline: "Live data, presence, and instant collaboration.",
    bullets: [
      "Designed a Postgres + Prisma schema and a typed REST API with Zod validation.",
      "Implemented WebSocket presence and optimistic UI for sub-100ms perceived latency.",
      "Authenticated with Better Auth and JWT-protected routes.",
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Prisma", "Better Auth"],
  },
  {
    title: "TaskForge — Team Productivity",
    tagline: "Drag-and-drop boards, filters, and team analytics.",
    bullets: [
      "Built drag-and-drop kanban with optimistic mutations via TanStack Query.",
      "Modeled multi-tenant data with row-level access control.",
      "Shipped accessible animations with Framer Motion.",
    ],
    stack: ["Next.js", "TypeScript", "TanStack Query", "Postgres", "Prisma"],
  },
  {
    title: "RAG Knowledge Assistant",
    tagline: "Retrieval-augmented chatbot over private documents.",
    bullets: [
      "Document ingestion + chunking pipeline with embeddings and similarity search.",
      "Streamed answers with citations and per-source confidence.",
      "JWT-protected admin upload with Zod-validated payloads.",
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Better Auth", "Zod"],
  },
  {
    title: "DevBlog — Markdown CMS",
    tagline: "Headless blog with code highlighting and tags.",
    bullets: [
      "Markdown + frontmatter pipeline with reading time and tag pages.",
      "Prism syntax highlighting and tuned typography.",
      "SEO metadata, OpenGraph images, and RSS feed.",
    ],
    stack: ["Next.js", "Tailwind", "remark", "rehype"],
  },
];

const EXPERIENCE = [
  {
    role: "Independent Full Stack Projects",
    org: "Self-directed",
    period: "2024 — Present",
    location: "New York, NY",
    bullets: [
      "Designed and shipped multiple end-to-end web apps using Next.js, Node.js, and Postgres/MongoDB.",
      "Practiced production patterns: typed APIs, authentication, validation, testing, and deployment.",
      "Wrote technical posts on real-time apps, Next.js, and full-stack workflows.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Programming Hero — Full Stack Bootcamp",
    detail: "Level 1 & Level 2 — Modern JavaScript, React, Node.js, Databases.",
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
                mahbuba.dev
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
            mahbuba.dev <ExternalLink className="h-3 w-3" />
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
