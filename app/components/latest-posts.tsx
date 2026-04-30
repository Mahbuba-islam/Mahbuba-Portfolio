import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function LatestPosts(): React.ReactElement | null {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;
  const [featured, ...rest] = posts;

  return (
    <section
      id="writing"
      className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-linear-to-br from-indigo-400/15 via-sky-400/10 to-cyan-400/15 blur-3xl"
      />

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
            Writing
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            From the{" "}
            <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
              blog
            </span>
            .
          </h2>
          <p className="mt-3 text-muted-foreground">
            Short, practical notes on the things I&apos;m building and learning.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-xl transition-all hover:border-indigo-400/50 hover:bg-white/20 hover:text-foreground dark:bg-white/5"
        >
          All posts
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative isolate overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl backdrop-saturate-150 transition-all hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-9 lg:col-span-7 lg:row-span-2 dark:bg-white/5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-linear-to-br from-indigo-400/30 via-sky-400/20 to-cyan-400/30 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
          />

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 px-2.5 py-1 font-semibold uppercase tracking-widest text-indigo-700 ring-1 ring-inset ring-white/20 dark:text-indigo-200">
              Featured
            </span>
            {featured.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-foreground/80 backdrop-blur dark:bg-white/5"
              >
                #{t}
              </span>
            ))}
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {featured.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {featured.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              <span aria-hidden>·</span>
              <span>{featured.readingTime}</span>
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 via-sky-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/30 transition-transform group-hover:-rotate-12 group-hover:scale-110">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        {rest.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10 lg:col-span-5 dark:bg-white/5"
          >
            <span className="font-mono text-[11px] font-semibold tracking-widest text-foreground/40">
              0{idx + 2}
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-700 dark:group-hover:text-indigo-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
