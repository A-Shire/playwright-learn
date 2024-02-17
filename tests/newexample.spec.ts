import { test, expect } from '@playwright/test';
test.only('check Java page', async ({page}) =>  {
    page.goto('https://playwright.dev');
    await page.getByRole('link', {name: 'Get Started'}).click();
    await page.getByRole('button' , {name: 'Node.js' }).hover();
    await page.getByText('Java' , {exact: true}).click();

    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');//assertion step
    await page.getByText('Playwright is distributed as a set of Maven modules.', {exact: true});
    expect (await page.getByText ('Installing Playwright').isVisible()).toBe(false);
})