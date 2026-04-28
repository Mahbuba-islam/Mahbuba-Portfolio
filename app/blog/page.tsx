import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and notes on full-stack development, real-time systems, and modern web UI by Mahbuba Akter.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Writing about the things I&apos;m building.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Short, practical posts on full-stack development, real-time systems,
          and modern web UI.
        </p>
      </div>

      <ul className="mt-12 grid gap-4">
        {posts.length === 0 && (
          <li className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
            No posts yet — check back soon.
          </li>
        )}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/5 sm:flex-row sm:items-center"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-1 truncate text-lg font-semibold tracking-tight group-hover:text-indigo-300">
                  {post.title}
                </h2>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        #{t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:block" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
