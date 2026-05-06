"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Layers,
  MessageSquare,
  Sparkles,
  Workflow,
  Zap,
  Shield,
  type LucideIcon,
  ListTodo,
  GraduationCap,
  Package,
  Newspaper,
  Factory,
  Stethoscope,
  BookOpen,
  PawPrint,
  Plane,
  UtensilsCrossed,
  Trophy,
  Lightbulb,
  Heart,
  CloudSun,
  Sparkle,
  Building2,
} from "lucide-react";
import { GithubIcon } from "./brand-icons";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
  icon: LucideIcon;
  badge?: { label: string; icon: LucideIcon };
};

export const PROJECTS: Project[] = [
  {
    title: "Consultdge",
    tagline: "Chat, notifications, live sessions, AI",
    description:
      "All-in-one consultation platform: chat, video, AI, and payments in a seamless workflow.",
    features: [
      "Real-time chat (Socket.io)",
      "Live notifications",
      "Collaborative sessions",
      "AI feature integration",
    ],
    stack: ["Next.js", "Node.js", "Socket.io", "Prisma", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://consultedge-frontend.vercel.app",
    featured: true,
    icon: Zap,
    badge: { label: "Featured", icon: Sparkles },
  },
  
  {
  title: "MentorHub",
  tagline: "Role-based learning and mentorship platform",

  description:
    "Mentorship platform with role-based access, content management, and secure learning flow.",

  features: [
    "Role-based system (Student, Teacher, Admin)",
    "Secure authentication with BetterAuth",
    "Teacher dashboard for managing content and learners",
    "Student access to learning materials and mentorship",
    "Admin panel for full system and user management",
    "Structured learning flow with content organization",
  ],

  stack: ["Next.js", "Node.js", "Express", "Prisma", "BetterAuth", "MongoDB"],

  github: "https://github.com/Mahbuba-islam/MentorHub-Client.git",
  demo: "https://mentor-hub-client.vercel.app",

  icon: GraduationCap,
  badge: { label: "EdTech Platform", icon: GraduationCap },
},{
  title: "Warehouse Management",
  tagline: "Inventory and stock management system",

  description:
    "Inventory management app for real-time stock, secure access, and efficient warehouse ops.",

  features: [
    "Add, update, and delete inventory items",
    "Track stock quantity and product details",
    "User authentication and protected routes",
    "Manage warehouse data with CRUD operations",
    "Responsive and user-friendly interface",
  ],

  stack: ["React", "Node.js", "Express", "MongoDB"],

  github: "https://github.com/Mahbuba-islam/warehouse-management-client-side.git",
  demo: "https://warehouse-management-cli-6485d.web.app/",

  icon: Package,
  badge: { label: "MERN Project", icon: Package },
},
{
  title: "DragonNews",
  tagline: "Modern news portal with categorized content browsing",

  description:
    "Modern news portal: browse, filter, and read live articles in a clean UI.",

  features: [
    "Category-based news browsing",
    "Dynamic routing for news details",
    "API integration for live data",
    "Responsive UI for all devices",
    "Clean component-based architecture",
  ],

  stack: ["React", "JavaScript", "React Router", "CSS", "API Integration"],

  github: "https://github.com/Mahbuba-islam/dragon-news-react.git",
  demo: "https://dragon-news-react-4f311.web.app/category/1?fbclid=IwY2xjawRf9xNleHRuA2FlbQIxMABicmlkETFZMUsxTDlqNEhpbWNMRUxlc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpypxVJk49hzk9XEfaFMgWa9GJKVds2qcjF82OJMPC6BVrypZFzu2MmKwiS4_aem_aor5wSNUtfGILgKImn1e4w",

  icon: Newspaper,
  badge: { label: "News Portal", icon: Newspaper },
},
{
  title: "Manufacture",
  tagline: "Full-stack manufacturer website with product showcase system",

  description:
    "Manufacturer site with product showcase, secure access, and role-based management.",

  features: [
    "Product listing and details system",
    "User authentication and protected routes",
    "Add and manage products (CRUD operations)",
    "Order/interaction workflow system",
    "Responsive and modern UI",
  ],

  stack: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],

  github: "https://github.com/Mahbuba-islam/manufacturer-website-client-side.git",
  demo: "https://manufacture-website-b8de0.web.app",

  icon: Factory,
  badge: { label: "MERN Project", icon: Factory },
},
{
  title: "DocBridge",
  tagline: "Doctor–patient appointment and management platform",

  description:
    "Healthcare platform for booking, doctor management, and admin control.",

  features: [
    "Role-based system (Admin, Doctor, Patient)",
    "Doctor listing and profile system",
    "Appointment booking and management",
    "User authentication and access control",
    "Admin dashboard for managing platform users and activity",
  ],

  stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],

  github: "https://github.com/Mahbuba-islam/docbridge-client.git",
  demo: "https://docbridge-react-router.surge.sh/?fbclid=IwY2xjawRf-EdleHRuA2FlbQIxMABicmlkETFZMUsxTDlqNEhpbWNMRUxlc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlpmHwkxf0N4TJnSxUoogFM356-8gAt5dR8LrfQGNMDBBeSOiIhEO_wW3pLh_aem_wo_35zJWJCW7Qsm90Fm_Yg",

  icon: Stethoscope,
  badge: { label: "Healthcare Platform", icon: Stethoscope },
},
{
  title: "Book Shelf",
  tagline: "Personal book tracker with wishlist and read list",

  description:
    "Book tracker: wishlist, read list, and interactive reading management.",

  features: [
    "Add books to wishlist",
    "Mark books as read",
    "Separate wishlist and read list pages",
    "Dynamic routing with React Router",
    "Clean and responsive UI with Tailwind CSS",
  ],

  stack: ["React", "React Router", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/book-vibe-react-router.git",
  demo: "https://boi-poka-by-mahbuba.surge.sh",

  icon: BookOpen,
  badge: { label: "Book Tracker", icon: BookOpen },
},
{
  title: "Pet Adoption",
  tagline: "Interactive pet adoption and browsing platform",

  description:
    "Pet adoption platform: browse, like, and adopt pets with real-time updates.",

  features: [
    "Browse pets with category-based filtering",
    "Like pets and view them in a liked list",
    "Unlike pets and remove from liked list",
    "View detailed pet information",
    "Sort pets by price",
    "Dynamic UI updates with JavaScript",
  ],

  stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/pet-adopt-website.git",
  demo: "https://peddy-pets-2025.surge.sh",

  icon: PawPrint,
  badge: { label: "Pet Adoption", icon: PawPrint },
},

 {
  title: "Travel Guru",
  tagline: "Travel booking app with authentication and destination filtering",

  description:
    "Travel app: explore, filter, and book destinations with simple auth.",

  features: [
    "Browse and explore travel destinations",
    "Filter destinations by category",
    "Travel booking interaction system",
    "User login and signup functionality",
    "Dynamic UI updates using vanilla JavaScript",
  ],

  stack: ["HTML", "CSS", "JavaScript (Vanilla)"],

  github: "https://github.com/Mahbuba-islam/travel-guru.git",
  demo: "https://travel-guru-js-project.netlify.app/",

  icon: Plane,
  badge: { label: "JavaScript Project", icon: Plane },
},
  {
    title: "MealDb Explorer",
    tagline: "Explore meals and recipes",
    description:
      "Meal explorer: search, filter, and view recipes from MealDB API.",
    features: [
      "Search for meals",
      "View detailed recipe information",
      "Filter meals by category or area",
    ],
    stack: ["Next.js", "Socket.io", "Prisma", "Postgres"],
    github: "https://github.com/Mahbuba-islam/mealDb-react-router.git",
    demo: "https://mealdb-explorer.surge.sh",
    icon: UtensilsCrossed,
    badge: { label: "Realtime", icon: UtensilsCrossed },
  },
 {
  title: "Cricket Hub",
  tagline: "Fantasy cricket team builder with player bidding system",

  description:
    "Fantasy cricket: build your team, bid for players, and manage your squad.",

  features: [
    "User coin-based player selection system",
    "Instant coin deduction on player purchase",
    "Fantasy team creation and management",
    "View selected team squad",
    "Dynamic UI updates with React state management",
  ],

  stack: ["React", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/CrickHub-React.git",
  demo: "https://crickhub.surge.sh",

  icon: Trophy,
  badge: { label: "Fantasy Sports", icon: Trophy },
},
{
  title: "Knowledge Nest",
  tagline: "A React-based knowledge sharing platform with bookmarking and reading system",

  description:
    "Knowledge sharing: explore, bookmark, and manage your reading list.",

  features: [
    "Create and explore user-generated blog content",
    "Bookmark posts with instant UI updates",
    "Remove posts from bookmark list",
    "Mark posts as read/unread",
    "Dynamic state-driven UI with React",
  ],

  stack: ["React", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/knowledge-cafe-react.git",
  demo: "https://knowledge-nest-bymahbuba.surge.sh/",

  icon: Lightbulb,
  badge: { label: "Knowledge Platform", icon: Lightbulb },
},
  {
  title: "Love Calculator",
  tagline: "Fun love compatibility checker based on names",

  description:
    "Fun app: check love compatibility instantly with a playful UI.",

  features: [
    "Calculate love compatibility percentage based on names",
    "Instant result generation",
    "Recheck with different inputs",
    "Simple and interactive UI",
    "Practice project for JavaScript logic and DOM manipulation",
  ],

  stack: ["HTML", "CSS", "JavaScript"],

  github: "https://github.com/Mahbuba-islam/love-calculator-by-js.git",
  demo: "https://love-calculator-by-js.netlify.app",

  icon: Heart,
  badge: { label: "Fun App", icon: Heart },
},
  {
    title: "Todo List App",
    tagline: "Manage your tasks efficiently",
    description:
      "Todo app: organize, prioritize, and track your tasks easily.",
    features: [
      "Create, edit, and delete tasks",
      "Set task priorities and deadlines",
      "Mark tasks as complete",
      "Filter tasks by status",
      "Responsive and interactive UI",
    ],
    stack: [ "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Mahbuba-islam/todo-list-app.git",
    demo: "https://todo-list-app.vercel.app",
    icon: ListTodo,
    badge: { label: "Productivity", icon: ListTodo },
  },
  {
  title: "Weather App",
  tagline: "Real-time weather updates by city",

  description:
    "Weather app: get real-time weather by city in a clean UI.",

  features: [
    "Search weather by city or country name",
    "Display real-time weather data",
    "Show temperature and weather conditions",
    "Clean and responsive UI",
    "Practice project for API integration and DOM handling",
  ],

  stack: ["JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/weather-app.git",
  demo: "https://weather-app-by-mahbuba.netlify.app/",

  icon: CloudSun,
  badge: { label: "Weather App", icon: CloudSun },
},
{
  title: "Influencer Gear",
  tagline: "UI design practice with modern product layout",

  description:
    "Modern product UI: clean, responsive, and stylish landing page design.",

  features: [
    "Modern product UI layout design",
    "Responsive design for all devices",
    "Clean and structured component layout",
    "CSS styling practice with Tailwind",
    "Focus on UI/UX improvement"
  ],

  stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/Influencer-Gear.git",
  demo: "https://influencer-products-css.vercel.app",
  icon: Sparkle,
  badge: { label: "UI Practice", icon: Sparkle },
},
{
  title: "Matte Lipstick",
  tagline: "UI design practice with modern product layout",

  description:
    "Modern product UI: clean, responsive, and stylish landing page design.",

  features: [
    "Modern product UI layout design",
    "Responsive design for all devices",
    "Clean and structured component layout",
    "CSS styling practice with Tailwind",
    "Focus on UI/UX improvement"
  ],

  stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],

  github: "https://github.com/Mahbuba-islam/weather-app.git",
  demo: "https://resilient-zuccutto-d50213.netlify.app",

  icon: Sparkle,
  badge: { label: "UI Practice", icon: Sparkle },
},
{
  title: "Convention Center",
  tagline: "Static landing page UI practice",

  description:
    "Static landing page: modern, responsive, and built with pure HTML/CSS.",

  features: [
    "Built with pure HTML and CSS",
    "Responsive landing page layout",
    "Modern UI section structuring",
    "Practice of CSS positioning and styling",
    "Focus on layout and design fundamentals"
  ],

  stack: ["HTML", "CSS"],

  github: "https://github.com/Mahbuba-islam/convention-senter.git",
  demo: "https://cranky-hypatia-45ac29.netlify.app",

  icon: Building2,
  badge: { label: "Static UI", icon: Building2 },
},
];

export function Projects({
  limit,
  showAllLink = true,
  heading = (
    <>
      Selected <span className="text-brand-gradient">work</span>.
    </>
  ),
  eyebrow = "Projects",
  description = "A collection of full-stack, real-time, and AI-powered products shipped end-to-end \u2014 design, data model, API, and UI.",
}: {
  limit?: number;
  showAllLink?: boolean;
  heading?: React.ReactNode;
  eyebrow?: string;
  description?: string;
} = {}) {
  const items = typeof limit === "number" ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section id="projects" className="relative scroll-mt-24 py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gradient">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="max-w-2xl text-muted-foreground text-sm">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {showAllLink && typeof limit === "number" && PROJECTS.length > limit && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 ring-1 ring-white/30 transition-transform hover:scale-[1.03]"
            >
              See all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const BadgeIcon = project.badge?.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/65 p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-blue)]/40 hover:shadow-[0_20px_55px_-18px_rgba(59,130,246,0.45)] dark:border-white/10 dark:bg-white/[0.04]"
    >
      {/* corner gradient blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
        }}
      />
      {/* hairline gradient top accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-brand-gradient opacity-80"
      />

      <header className="flex items-start justify-between gap-3">
        <span className="icon-halo h-11 w-11 shrink-0 text-white">
          <Icon className="h-5 w-5" />
        </span>

        {project.badge && BadgeIcon && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10">
            <BadgeIcon className="h-3 w-3" />
            {project.badge.label}
          </span>
        )}
      </header>

      <h3 className="mt-5 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-gradient">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--brand-cyan)" }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-white/30 bg-white/50 px-2 py-0.5 text-[10px] font-medium text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-2 border-t border-white/20 pt-5 dark:border-white/10">
        <Link
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          Code
        </Link>
        <Link
          href={project.demo}
          target={project.demo.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25 ring-1 ring-white/30 transition-transform hover:scale-[1.04]"
        >
          View
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
        {/* <Link
          href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-gradient px-3 py-1.5 text-xs font-semibold text-brand-gradient bg-white/80 hover:bg-brand-gradient hover:text-white transition-colors"
        >
          Details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link> */}
        <Link
  href={`/projects/${project.title?.toLowerCase().replace(/\s+/g, "-")}`}
  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-gray-200"
>
  Details
  <ArrowRight className="h-3.5 w-3.5" />
</Link>
      </div>
    </motion.article>
  );
}
