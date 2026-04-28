import { test, expect } from "@playwright/test";

const ROUTES = {
  RESUME: "/resume",
};

const CONTACT = {
  name: /Mahbuba Akter/i,
  email: /mahbubaislam7010@gmail\.com/i,
};

const SECTIONS = [
  "Summary",
  "Skills",
  "Experience",
  "Selected Projects",
  "Education",
];

test.describe("Resume Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.RESUME);
  });

  test("renders main contact info", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: CONTACT.name })
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: CONTACT.email })
    ).toBeVisible();
  });

  test("renders all resume sections", async ({ page }) => {
    for (const title of SECTIONS) {
      await expect(
        page.getByRole("heading", { level: 2, name: title })
      ).toBeVisible();
    }
  });

  test("has print button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /Print \/ Save PDF/i })
    ).toBeVisible();
  });
});
