---
title: "Getting Started with Next.js 16 (App Router)"
date: "2026-04-10"
description: "A quick tour of what's new and how I structure a fresh Next.js 16 project for shipping fast."
tags: ["nextjs", "react", "guide"]
---

Next.js 16 ships with the App Router as the recommended way to build modern
React apps. Here's the lean setup I use on every new project.

## Folder layout

```ts
app/
  layout.tsx
  page.tsx
  components/
  blog/
  api/
lib/
content/
```

I keep route-level components inside `app/components` and shared primitives in
`components/ui`. Domain logic lives in `lib/`.

## Async params

Dynamic route handlers receive `params` as a Promise, so always `await` it:

```ts
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
```

## What I always install

- `tailwindcss` for styling
- `framer-motion` for animation
- `zod` for runtime validation
- `gray-matter` + `remark` for content

That's enough to ship a clean, content-driven site.
