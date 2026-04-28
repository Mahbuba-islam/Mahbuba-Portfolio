import { test, expect } from "@playwright/test";

test("/api/blog returns posts json", async ({ request }) => {
  const res = await request.get("/api/blog");
  expect(res.ok()).toBeTruthy();
  const json = (await res.json()) as { posts: unknown[] };
  expect(Array.isArray(json.posts)).toBe(true);
  expect(json.posts.length).toBeGreaterThan(0);
});

test("/robots.txt is served", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body.toLowerCase()).toContain("user-agent");
});
