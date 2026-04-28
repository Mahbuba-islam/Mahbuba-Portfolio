import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string;
  format: "md" | "mdx";
};

export type Post = PostMeta & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir(): void {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

export function getPostSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  ensureDir();
  const realSlug = slug.replace(/\.mdx?$/, "");
  const mdPath = path.join(POSTS_DIR, `${realSlug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${realSlug}.mdx`);
  const filePath = fs.existsSync(mdPath)
    ? mdPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;
  const format: "md" | "mdx" = filePath.endsWith(".mdx") ? "mdx" : "md";

  return {
    slug: realSlug,
    title: fm.title ?? realSlug,
    date: fm.date ?? new Date().toISOString(),
    description: fm.description ?? "",
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    readingTime: readingTime(content).text,
    format,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type AdjacentPosts = {
  previous: PostMeta | null;
  next: PostMeta | null;
};

export function getAdjacentPosts(slug: string): AdjacentPosts {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { previous: null, next: null };
  // posts are sorted newest -> oldest, so "next" (newer) is at idx-1
  return {
    previous: posts[idx + 1] ?? null,
    next: posts[idx - 1] ?? null,
  };
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const posts = getAllPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  const tagSet = new Set(current.tags);
  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => tagSet.has(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.post);
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
  );
}

export function getPostsByTag(tag: string): PostMeta[] {
  const lower = tag.toLowerCase();
  return getAllPosts().filter((p) =>
    p.tags.some((t) => t.toLowerCase() === lower),
  );
}

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
