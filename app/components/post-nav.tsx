import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export function PostNav({
  previous,
  next,
}: {
  previous: PostMeta | null;
  next: PostMeta | null;
}): React.ReactElement | null {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Post navigation"
      className="mt-16 grid gap-3 border-t border-border/60 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group flex flex-col rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur transition-colors hover:border-indigo-400/40"
        >
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-medium tracking-tight group-hover:text-indigo-300">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col rounded-2xl border border-border/60 bg-card/60 p-4 text-right backdrop-blur transition-colors hover:border-indigo-400/40 sm:items-end"
        >
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            Next <ArrowRight className="h-3 w-3" />
          </span>
          <span className="mt-1 line-clamp-2 text-sm font-medium tracking-tight group-hover:text-indigo-300">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </nav>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function RelatedPosts({
  posts,
}: {
  posts: PostMeta[];
}): React.ReactElement | null {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xs font-medium uppercase tracking-widest text-indigo-400">
        Related posts
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur transition-colors hover:border-indigo-400/40"
            >
              <span className="text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden> · </span>
                <span>{post.readingTime}</span>
              </span>
              <span className="mt-1 line-clamp-2 text-sm font-medium tracking-tight group-hover:text-indigo-300">
                {post.title}
              </span>
              <span className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {post.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
