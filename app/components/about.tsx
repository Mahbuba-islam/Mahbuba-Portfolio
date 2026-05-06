"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  User,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

const PORTRAIT_SRC = "/img/my-new-portfolio-img-about.jpg";

const FACTS = [
  { icon: User, label: "Name", value: "Mahbuba Akter" },
  { icon: MapPin, label: "Location", value: "New York, USA" },
  { icon: Mail, label: "Email", value: "mahbubaislam7010@gmail.com" },
  { icon: Phone, label: "Available", value: "Internship & FT roles" },
];

const SOCIALS: Array<{
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}> = [
  { Icon: GithubIcon, label: "GitHub", href: "https://github.com/" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/" },
  { Icon: MessageCircle, label: "Chat", href: "https://twitter.com/" },
  { Icon: Mail, label: "Email", href: "mailto:mahbubaislam7010@gmail.com" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-5  sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full blur-3xl opacity-60 bg-blue-500/25" />
              <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full blur-3xl opacity-60 bg-cyan-400/25" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-xl shadow-blue-500/10">
              <span
                aria-hidden
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb, #0ea5e9, #22d3ee)",
                }}
              />

              <div className="relative h-[400px] sm:h-[440px] w-full overflow-hidden rounded-[1.85rem]">
                <Image
                  src={PORTRAIT_SRC}
                  alt="Mahbuba Akter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-6 flex justify-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="group relative grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/20 shadow-md transition hover:-translate-y-0.5 hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-90" />
                  <span className="absolute inset-[2px] rounded-full bg-background" />
                  <s.Icon className="relative h-4 w-4 text-foreground group-hover:text-blue-500" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-1.5 text-sm font-semibold backdrop-blur-md dark:bg-white/10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                About Me
              </span>
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Full Stack Developer
            </h2>

            {/* ✅ UPDATED TEXT */}
            <p className="mt-5  leading-relaxed text-muted-foreground text-xs">
              I’m a Junior Full Stack Developer who enjoys turning ideas into real applications. I focus on building intuitive and user-centered web applications that deliver real value.
              <br /><br />
              I’ve completed Programming Hero’s Level 1 & 2 bootcamps and learned through hands-on practice. I work with both frontend and backend, building APIs, managing data, and creating responsive interfaces while continuously improving my skills.
            </p>

            {/* INFO */}
            <dl className="mt-7 grid gap-4 rounded-2xl border border-white/15 bg-white/60 p-5 backdrop-blur-xl sm:grid-cols-2 dark:bg-white/5">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                    <f.icon className="h-3.5 w-3.5" />
                  </span>

                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="text-xs font-medium text-foreground">
                      {f.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
              >
                <Link href="#contact">
                  Contact me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/resume">
                  <Download className="h-4 w-4" /> Download resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}