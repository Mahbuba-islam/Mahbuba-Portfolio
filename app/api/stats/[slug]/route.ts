import { NextResponse } from "next/server";
import { z } from "zod";
import { getPostBySlug } from "@/lib/posts";
import { stats } from "@/lib/stats";

const ParamsSchema = z.object({ slug: z.string().min(1).max(200) });
const BodySchema = z.object({
  action: z.enum(["view", "like", "unlike"]),
});

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  const parsed = ParamsSchema.safeParse(await params);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  const { slug } = parsed.data;
  if (!getPostBySlug(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const data = await stats.get(slug);
  return NextResponse.json(data);
}

export async function POST(req: Request, { params }: Ctx) {
  const parsed = ParamsSchema.safeParse(await params);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  const { slug } = parsed.data;
  if (!getPostBySlug(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const bodyParsed = BodySchema.safeParse(body);
  if (!bodyParsed.success) {
    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 },
    );
  }

  const { action } = bodyParsed.data;
  let data;
  switch (action) {
    case "view":
      data = await stats.incrementViews(slug);
      break;
    case "like":
      data = await stats.incrementLikes(slug, 1);
      break;
    case "unlike":
      data = await stats.incrementLikes(slug, -1);
      break;
  }
  return NextResponse.json(data);
}
