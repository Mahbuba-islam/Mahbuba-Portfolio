import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test("renders hero, key sections, and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Mahbuba Akter/);

    // Hero name appears as H1
    await expect(
      page.getByRole("heading", { level: 1, name: /Mahbuba Akter/i }),
    ).toBeVisible();

    // Section anchors exist
    for (const id of ["about", "skills", "projects", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    // Navbar Resume link
    await expect(page.getByRole("link", { name: /^Resume$/ })).toBeVisible();
  });

  test("command palette opens with Ctrl+K and finds Resume", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Control+K");

    const dialog = page.getByRole("dialog", { name: /command palette/i });
    await expect(dialog).toBeVisible();

    const input = dialog.getByRole("textbox", {
      name: /command palette search/i,
    });
    await input.fill("resume");

    await expect(dialog.getByRole("button", { name: /Resume/ })).toBeVisible();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/resume$/);
  });
});
