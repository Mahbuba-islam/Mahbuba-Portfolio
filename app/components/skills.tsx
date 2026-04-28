"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  ChevronDown,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SkillIcon } from "./skill-icon";

type Group = {
  id: string;
  icon: LucideIcon;
  label: string;
  blurb: string;
  gradient: string;
  ringFrom: string;
  textGlow: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    id: "frontend",
    icon: Code2,
    label: "Frontend",
    blurb: "Crafting fast, accessible, beautifully animated interfaces.",
    gradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
    ringFrom: "from-sky-400 to-indigo-400",
    textGlow: "from-sky-400 to-indigo-400",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "React Query",
      "TanStack Query",
      "Axios",
    ],
  },
  {
    id: "backend",
    icon: Server,
    label: "Backend",
    blurb: "Typed APIs, auth, and validation that scale.",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    ringFrom: "from-emerald-400 to-cyan-400",
    textGlow: "from-emerald-400 to-cyan-400",
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
    id: "database",
    icon: Database,
    label: "Database",
    blurb: "Relational + NoSQL data modelling with Prisma.",
    gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    ringFrom: "from-violet-400 to-indigo-400",
    textGlow: "from-violet-400 to-indigo-400",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"],
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools",
    blurb: "Daily-driver tooling for shipping confidently.",
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    ringFrom: "from-amber-400 to-orange-400",
    textGlow: "from-amber-400 to-orange-400",
    items: ["Git", "Docker"],
  },
  {
    id: "engineering",
    icon: Brain,
    label: "Engineering",
    blurb: "How I think about problems and trade-offs.",
    gradient: "from-cyan-500/30 via-sky-500/20 to-indigo-500/30",
    ringFrom: "from-cyan-400 to-indigo-400",
    textGlow: "from-cyan-400 to-indigo-400",
    items: ["Problem Solving (JS)", "Critical Thinker"],
  },
];

/** Inner content of a skill card — shared between mobile and desktop variants. */
function SkillCardBody({
  group,
  index,
  total,
}: {
  group: Group;
  index: number;
  total: number;
}) {
  return (
    <>
      {/* gradient blob */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-linear-to-br ${group.gradient} blur-3xl transition-opacity duration-500 group-hover:opacity-90`}
      />
      {/* hover sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      <div className="flex items-start gap-3">
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br text-white shadow-md ring-1 ring-white/30 ${group.ringFrom}`}
        >
          <group.icon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={`bg-linear-to-r bg-clip-text text-2xl font-semibold leading-tight tracking-tight text-transparent ${group.textGlow}`}
            >
              {group.label}
            </h3>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/40">
              {String(index + 1).padStart(2, "0")}/
              {String(total).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {group.blurb}
          </p>
          {/* gradient underline */}
          <span
            aria-hidden
            className={`mt-2 block h-px w-12 bg-linear-to-r ${group.textGlow} opacity-70`}
          />
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.25, delay: i * 0.025, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/30 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md hover:shadow-indigo-500/20 dark:bg-white/10"
          >
            <SkillIcon name={item} className="h-3.5 w-3.5 shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/20 pt-5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3 w-3" />
          {group.items.length} technologies
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/50">
          {group.id}
        </span>
      </div>
    </>
  );
}

/** Desktop card: parallax depth driven by scrollYProgress. */
function ParallaxCard({
  group,
  index,
  total,
  progress,
}: {
  group: Group;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - slice * 0.5), start, end, Math.min(1, end + slice * 0.5)],
    [0.5, 1, 1, 0.5],
  );
  const scale = useTransform(progress, [start, (start + end) / 2, end], [
    0.94,
    1,
    0.97,
  ]);
  const y = useTransform(progress, [start, end], [50, -10]);

  return (
    <motion.article
      style={{ opacity, scale, y }}
      className="group relative flex h-136 w-[44vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-7 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 lg:w-[38vw] xl:w-[34vw] dark:bg-black/20 dark:hover:shadow-indigo-400/10"
    >
      <SkillCardBody group={group} index={index} total={total} />
    </motion.article>
  );
}

export function Skills() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Only enable scroll-pinned mode on desktop, after hydration, when motion is allowed.
  const useScrollDriven = mounted && isDesktop && !reduced;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The track is N cards wide; we shift by (N-1)/N to fully reveal the last card.
  const xPercent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((GROUPS.length - 1) / GROUPS.length) * 100}%`],
  );

  // Pinned section length: ~110vh per "page" so each card has its own scroll lane.
  const sectionHeight = `${(GROUPS.length - 1) * 110 + 100}vh`;

  return (
    <section
      id="skills"
      aria-label="Toolkit"
      className="relative scroll-mt-24"
    >
      {/* ambient ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-linear-to-br from-indigo-400/15 via-sky-400/10 to-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-linear-to-br from-violet-400/10 via-indigo-400/10 to-sky-400/10 blur-3xl"
      />

      <div
        ref={containerRef}
        style={useScrollDriven ? { height: sectionHeight } : undefined}
        className="relative"
      >
        {/* ===== Mobile / Tablet: native horizontal swipe ===== */}
        {!useScrollDriven && (
          <div className="mx-auto max-w-7xl py-20 sm:py-24">
            <div className="px-4 sm:px-6">
              <Header />
            </div>

            <motion.div
              role="region"
              aria-label="Skill categories — swipe horizontally"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 flex snap-x snap-mandatory touch-pan-x scroll-pl-4 scroll-pr-10 gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] sm:scroll-pl-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
            >
              {GROUPS.map((g, i) => (
                <motion.article
                  key={g.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex h-128 w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:scale-[1.015] hover:shadow-xl hover:shadow-indigo-500/15 sm:h-120 sm:w-[60vw] md:w-[44vw] dark:bg-black/20"
                >
                  <SkillCardBody group={g} index={i} total={GROUPS.length} />
                </motion.article>
              ))}
              {/* trailing spacer so last card never feels cut */}
              <div aria-hidden className="w-2 shrink-0" />
            </motion.div>

            <SwipeHint />
          </div>
        )}

        {/* ===== Desktop: scroll-pinned horizontal transform with parallax ===== */}
        {useScrollDriven && (
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <Header />
            </div>

            <div className="mt-10 overflow-hidden">
              <motion.div
                style={{ x: xPercent }}
                className="flex gap-8 px-[6vw] will-change-transform"
              >
                {GROUPS.map((g, i) => (
                  <ParallaxCard
                    key={g.id}
                    group={g}
                    index={i}
                    total={GROUPS.length}
                    progress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="mx-auto mt-10 flex w-[min(640px,80%)] items-center gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                01
              </span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20 dark:bg-white/10">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                  className="h-full w-full origin-left bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500"
                />
              </div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                {String(GROUPS.length).padStart(2, "0")}
              </span>
            </div>

            <ScrollHint />
          </div>
        )}
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <p className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
        Toolkit
      </p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        The stack I{" "}
        <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
          build with
        </span>
        .
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        A focused stack picked for shipping real-world, full-stack products
        quickly and reliably.
      </p>
    </motion.div>
  );
}

function SwipeHint() {
  return (
    <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
      <motion.span
        aria-hidden
        animate={{ x: [-4, 4, -4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        ←
      </motion.span>
      <span>swipe to explore the toolkit</span>
      <motion.span
        aria-hidden
        animate={{ x: [4, -4, 4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        →
      </motion.span>
    </div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"
    >
      <span>Scroll to explore the toolkit</span>
      <motion.span
        aria-hidden
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex"
      >
        <ChevronDown className="h-3.5 w-3.5" />
      </motion.span>
    </motion.div>
  );
}
