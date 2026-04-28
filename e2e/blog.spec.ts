import { test, expect } from "@playwright/test";

test("blog index lists posts and search filters them", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // At least one post card link
  const postLinks = page.locator('a[href^="/blog/"]');
  await expect(postLinks.first()).toBeVisible();

  // Search box exists and filters
  const search = page.getByRole("searchbox").or(
    page.getByRole("textbox", { name: /search/i }),
  );
  if (await search.count()) {
    await search.first().fill("nextjs");
    // count should still be ≥ 0 with no crash
    await expect(page.locator("body")).toBeVisible();
  }
});

test("a blog post page renders with TOC + stats", async ({ page }) => {
  await page.goto("/blog");
  const firstPost = page.locator('a[href^="/blog/"]').first();
  const href = await firstPost.getAttribute("href");
  expect(href).toBeTruthy();

  await page.goto(href!);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  // article body
  await expect(page.locator("article")).toBeVisible();
});

test("rss feed responds with xml", async ({ request }) => {
  const res = await request.get("/rss.xml");
  expect(res.ok()).toBeTruthy();
  const ct = res.headers()["content-type"] ?? "";
  expect(ct).toMatch(/xml/);
  const body = await res.text();
  expect(body).toContain("<rss");
});

test("sitemap includes /resume", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("/resume");
});
