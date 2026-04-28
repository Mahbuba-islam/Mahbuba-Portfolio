import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";

export type TocItem = {
  depth: 2 | 3;
  value: string;
  id: string;
};

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["heading-anchor"] },
    })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  // Strip fenced code blocks so headings inside them don't leak in
  const stripped = markdown.replace(/```[\s\S]*?```/g, "");
  const re = /^(#{2,3})\s+(.+?)\s*#*\s*$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(stripped)) !== null) {
    const depth = m[1].length as 2 | 3;
    const value = m[2].trim();
    items.push({ depth, value, id: slugger.slug(value) });
  }
  return items;
}

