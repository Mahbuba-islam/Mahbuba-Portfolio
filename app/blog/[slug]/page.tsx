import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { extractToc, markdownToHtml } from "@/lib/markdown";
import { TableOfContents } from "@/app/components/toc";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);
  const toc = extractToc(post.content);

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahbuba.dev";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Mahbuba Akter", url: SITE_URL },
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 xl:grid-cols-[minmax(0,1fr)_220px]">
      <article className="mx-auto w-full max-w-3xl xl:mx-0">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All posts
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
          {post.tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-1.5">
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
        </header>

        <div
          className="prose prose-zinc dark:prose-invert mt-10 max-w-none prose-headings:scroll-mt-24 prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60 prose-pre:bg-zinc-950/80 prose-code:before:hidden prose-code:after:hidden"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <aside>
        <TableOfContents items={toc} />
      </aside>
    </div>
  );
}
