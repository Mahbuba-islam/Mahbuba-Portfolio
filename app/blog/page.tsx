import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags, tagToSlug } from "@/lib/posts";
import { BlogSearch } from "@/app/components/blog-search";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and notes on full-stack development, real-time systems, and modern web UI by Mahbuba Akter.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Writing about the things I&apos;m building.
        </h1>
        <p className="mt-4 text-muted-foreground text-sm">
          Short, practical posts on full-stack development, real-time systems,
          and modern web UI.
        </p>
      </div>

      {tags.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-1.5">
          {tags.map(({ tag, count }) => (
            <li key={tag}>
              <Link
                href={`/blog/tag/${tagToSlug(tag)}`}
                className="inline-flex text-xs items-center gap-1 rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground transition-colors hover:border-indigo-400/40 hover:text-indigo-300"
              >
                #{tag}
                <span className="text-muted-foreground/60">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 ? (
        <div className="mt-12 text-xs rounded-2xl border border-dashed border-border/60 p-10 text-center  text-muted-foreground">
          No posts yet — check back soon.
        </div>
      ) : (
        <BlogSearch posts={posts} />
      )}
    </section>
  );
}
