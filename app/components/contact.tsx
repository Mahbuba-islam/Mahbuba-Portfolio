"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Failed to send");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build{" "}
              <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
                something together.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m looking for a junior full-stack internship in New York or
              remote. Drop me a message — I read everything.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <Link
                  href="mailto:mahbubaislam7010@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl backdrop-saturate-150 transition-colors hover:border-indigo-300/60 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-indigo-500 via-sky-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30 ring-1 ring-white/30">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90 group-hover:text-foreground">
                    mahbubaislam7010@gmail.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl backdrop-saturate-150 transition-colors hover:border-indigo-300/60 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-slate-300 via-slate-100 to-white text-slate-900 shadow-md shadow-black/20 ring-1 ring-white/30">
                    <GithubIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90 group-hover:text-foreground">
                    GitHub
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl backdrop-saturate-150 transition-colors hover:border-indigo-300/60 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-sky-400 via-blue-500 to-indigo-500 text-white shadow-md shadow-sky-500/30 ring-1 ring-white/30">
                    <LinkedinIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90 group-hover:text-foreground">
                    LinkedIn
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150 sm:p-8 dark:bg-white/5 dark:shadow-black/40"
          >
            {/* soft gradient sheen behind the glass */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-linear-to-br from-indigo-400/20 via-sky-400/10 to-cyan-400/20 opacity-60"
            />
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Jane Doe"
                  className="border-white/20 bg-white/30 text-foreground placeholder:text-muted-foreground/80 focus-visible:border-indigo-300/60 focus-visible:ring-indigo-300/40 dark:bg-white/10"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="border-white/20 bg-white/30 text-foreground placeholder:text-muted-foreground/80 focus-visible:border-indigo-300/60 focus-visible:ring-indigo-300/40 dark:bg-white/10"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Tell me a little about your team or role..."
                  className="border-white/20 bg-white/30 text-foreground placeholder:text-muted-foreground/80 focus-visible:border-indigo-300/60 focus-visible:ring-indigo-300/40 dark:bg-white/10"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/20 hover:from-indigo-400 hover:via-sky-400 hover:to-cyan-400"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </Button>

              {status === "error" && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
