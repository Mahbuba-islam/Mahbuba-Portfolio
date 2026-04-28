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

  return (
    <section
      id="writing"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Writing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 text-muted-foreground">
            Short, practical notes on the things I&apos;m building and learning.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          All posts <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-indigo-300">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400">
                Read post
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 sm:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All posts <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
