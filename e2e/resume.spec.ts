import { test, expect } from "@playwright/test";

test("resume page renders with contact + sections + print button", async ({
  page,
}) => {
  await page.goto("/resume");

  await expect(
    page.getByRole("heading", { level: 1, name: /Mahbuba Akter/i }),
  ).toBeVisible();

  // Email link
  await expect(
    page.getByRole("link", { name: /mahbubaislam7010@gmail\.com/ }),
  ).toBeVisible();

  // All section headings
  for (const title of [
    "Summary",
    "Skills",
    "Experience",
    "Selected Projects",
    "Education",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: title }),
    ).toBeVisible();
  }

  await expect(
    page.getByRole("button", { name: /Print \/ Save PDF/i }),
  ).toBeVisible();
});
