import {test, expect} from '@playwright/test'

test.describe('F6 Demo App', () => {
  test('should display header (navbar)', async ({page}) => {
    await page.goto('/')

    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(
      header.getByRole('heading', {name: 'F6 Demo', level: 1}),
    ).toBeVisible()

    // Verify navigation links in navbar
    await expect(header.getByRole('link', {name: 'Home'})).toBeVisible()
    await expect(header.getByRole('link', {name: 'Features'})).toBeVisible()
    await expect(header.getByRole('link', {name: 'Docs'})).toBeVisible()
    await expect(header.getByRole('link', {name: 'Contact'})).toBeVisible()

    // Verify Get Started button
    await expect(
      header.getByRole('button', {name: 'Get Started'}),
    ).toBeVisible()
  })

  test('should display sidebar', async ({page}) => {
    await page.goto('/')

    // Verify aside sidebar is present
    const sidebar = page.locator('aside')
    await expect(sidebar).toBeVisible()
    await expect(
      sidebar.getByRole('heading', {name: 'Navigation'}),
    ).toBeVisible()

    // Check sidebar navigation items
    await expect(sidebar.getByRole('link', {name: 'Dashboard'})).toBeVisible()
    await expect(sidebar.getByRole('link', {name: 'Analytics'})).toBeVisible()
    await expect(sidebar.getByRole('link', {name: 'Settings'})).toBeVisible()
    await expect(sidebar.getByRole('link', {name: 'Profile'})).toBeVisible()

    // Check help widget
    await expect(
      sidebar.getByRole('heading', {name: 'Need Help?'}),
    ).toBeVisible()
    await expect(sidebar.getByRole('button', {name: 'View Docs'})).toBeVisible()
  })

  test('should display main content area', async ({page}) => {
    await page.goto('/')

    // Verify main content is present
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Check main heading
    await expect(
      main.getByRole('heading', {name: 'Welcome to F6 Demo', level: 1}),
    ).toBeVisible()

    // Check feature cards
    await expect(main.getByText('Feature One')).toBeVisible()
    await expect(main.getByText('Feature Two')).toBeVisible()
    await expect(main.getByText('Feature Three')).toBeVisible()

    // Check interactive demo section
    await expect(
      main.getByRole('heading', {name: 'Interactive Demo', level: 2}),
    ).toBeVisible()
    await expect(
      main.getByRole('button', {name: 'Primary Action'}),
    ).toBeVisible()
    await expect(
      main.getByRole('button', {name: 'Secondary Action'}),
    ).toBeVisible()
    await expect(
      main.getByRole('button', {name: 'Tertiary Action'}),
    ).toBeVisible()
  })

  test('should display footer', async ({page}) => {
    await page.goto('/')

    // Verify footer is present
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check footer content
    await expect(
      footer.getByRole('heading', {name: 'F6 Demo', level: 3}),
    ).toBeVisible()
    await expect(footer.getByText('Quick Links')).toBeVisible()
    await expect(footer.getByText('Company')).toBeVisible()

    // Check footer links
    await expect(
      footer.getByRole('link', {name: 'Documentation'}),
    ).toBeVisible()
    await expect(footer.getByRole('link', {name: 'About Us'})).toBeVisible()

    // Check copyright
    await expect(
      footer.getByText('© 2024 F6 Demo. All rights reserved.'),
    ).toBeVisible()
  })
})
