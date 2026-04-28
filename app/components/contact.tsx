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
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m looking for a junior full-stack internship in New York or
              remote. Drop me a message — I read everything.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <Link
                  href="mailto:mahbubaislam7010@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 px-3 py-2 backdrop-blur transition-colors hover:border-indigo-400/40"
                >
                  <Mail className="h-4 w-4 text-indigo-300" />
                  <span className="text-muted-foreground group-hover:text-foreground">
                    mahbubaislam7010@gmail.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 px-3 py-2 backdrop-blur transition-colors hover:border-indigo-400/40"
                >
                  <GithubIcon className="h-4 w-4 text-indigo-300" />
                  <span className="text-muted-foreground group-hover:text-foreground">
                    GitHub
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 px-3 py-2 backdrop-blur transition-colors hover:border-indigo-400/40"
                >
                  <LinkedinIcon className="h-4 w-4 text-indigo-300" />
                  <span className="text-muted-foreground group-hover:text-foreground">
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
            className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" required minLength={2} placeholder="Jane Doe" />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Tell me a little about your team or role..."
                />
              </div>

              <Button type="submit" disabled={status === "loading"} className="mt-2">
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
