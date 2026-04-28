import { NextResponse, type NextRequest } from "next/server";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    const post = getPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  }
  return NextResponse.json({ posts: getAllPosts() });
}
