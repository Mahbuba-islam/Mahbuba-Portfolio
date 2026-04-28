"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Sparkles, Brain } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Trained at Programming Hero",
    body: "Completed Level 1 and Level 2 of the Programming Hero Full Stack Web Development Bootcamp covering modern JavaScript, React, Node.js, databases, and deployment.",
  },
  {
    icon: Rocket,
    title: "Full-stack mindset",
    body: "I love taking ideas from a Figma sketch to a deployed product — designing the data model, building the API, and crafting the UI.",
  },
  {
    icon: Brain,
    title: "Real-time & AI features",
    body: "Curious about WebSockets, streaming UIs, and integrating AI features into everyday products to make them feel magical.",
  },
  {
    icon: Sparkles,
    title: "UX-driven engineer",
    body: "Care deeply about polish — accessibility, motion, typography, and the small details that make software feel premium.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              About
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              An aspiring full-stack engineer based in New York.
            </h2>
            <p className="mt-5 text-muted-foreground">
              I finished my HSC in Bangladesh in 2015 and recently completed
              Programming Hero&apos;s full-stack bootcamp. I&apos;m now looking for
              an internship where I can ship real product, learn from senior
              engineers, and grow into a strong, dependable web developer.
            </p>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <motion.li
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
                  <h.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{h.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
