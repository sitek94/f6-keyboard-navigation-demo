import {expect, test} from '@playwright/test'
import {testIds} from '../constants'

test.describe('Home Page: header, left sidebar, main content, footer', () => {
	test('should navigate forward through sections with F6', async ({page}) => {
		await page.goto('/')

		// Initial F6 focuses header
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.header).getByRole('link', {name: 'Home'})).toBeFocused()

		// Second F6 focuses left sidebar
		await page.keyboard.press('F6')
		await expect(
			page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Dashboard'}),
		).toBeFocused()

		// Press F6 again to navigate to main content
		await page.keyboard.press('F6')
		await expect(
			page.getByTestId(testIds.main).getByRole('button', {name: 'Primary Action'}),
		).toBeFocused()

		// Press F6 again to navigate to footer
		await page.keyboard.press('F6')
		await expect(
			page.getByTestId(testIds.footer).getByRole('link', {name: 'Documentation'}),
		).toBeFocused()

		// Press F6 again to loop back to header
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.header).getByRole('link', {name: 'Home'})).toBeFocused()
	})

	test('should navigate backward through sections with Shift+F6', async ({page}) => {
		await page.goto('/')

		// Start from header and focus first element
		await page.keyboard.press('F6')
		await page.getByTestId(testIds.header).getByRole('link', {name: 'Home'}).focus()

		// Press F6 to go to left sidebar
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Dashboard'})).toBeFocused()

		// Press Shift+F6 to go back to header
		await page.keyboard.press('Shift+F6')
		await expect(page.getByTestId(testIds.header).getByRole('link', {name: 'Home'})).toBeFocused()

		// Press Shift+F6 to go to footer (reverse loop)
		await page.keyboard.press('Shift+F6')
		await expect(page.getByTestId(testIds.footer).getByRole('link', {name: 'Documentation'})).toBeFocused()

		// Press Shift+F6 to go to main content
		await page.keyboard.press('Shift+F6')
		await expect(page.getByTestId(testIds.main).getByRole('button', {name: 'Primary Action'})).toBeFocused()

		// Press Shift+F6 to go to sidebar
		await page.keyboard.press('Shift+F6')
		await expect(page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Dashboard'})).toBeFocused()
	})

	test('should complete full forward cycle', async ({page}) => {
		await page.goto('/')

		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.header).getByRole('link', {name: 'Home'})).toBeFocused()
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Dashboard'})).toBeFocused()
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.main).getByRole('button', {name: 'Primary Action'})).toBeFocused()
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.footer).getByRole('link', {name: 'Documentation'})).toBeFocused()
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.header).getByRole('link', {name: 'Home'})).toBeFocused()
	})

	test('should handle F6 when starting from different focus positions', async ({page}) => {
		await page.goto('/')

		// Focus on a different element first (e.g., in sidebar)
		await page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Analytics'}).focus()
		await expect(page.getByTestId(testIds.leftSidebar).getByRole('link', {name: 'Analytics'})).toBeFocused()

		// Press F6 - should still go to main content (next section)
		await page.keyboard.press('F6')
		await expect(page.getByTestId(testIds.main).getByRole('button', {name: 'Primary Action'})).toBeFocused()
	})
})
