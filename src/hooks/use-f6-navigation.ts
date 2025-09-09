import {useEffect} from 'react'
import {elementIds} from '../constants'

export function useF6Navigation() {
	useEffect(() => {
		const header = document.getElementById(elementIds.header)
		const leftSidebar = document.getElementById(elementIds.leftSidebar)
		const main = document.getElementById(elementIds.main)
		const rightSidebar = document.getElementById(elementIds.rightSidebar)
		const footer = document.getElementById(elementIds.footer)

		// Order here determines navigation order
		const sections = [header, leftSidebar, main, rightSidebar, footer].filter(Boolean)

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key !== 'F6') return

			event.preventDefault()

			const activeSectionIndex = sections.findIndex(section =>
				section.contains(document.activeElement),
			)
			// if shift key is pressed, go backwards, otherwise go forwards
			const increment = event.shiftKey ? -1 : 1
			const nextSectionIndex = (activeSectionIndex + increment + sections.length) % sections.length
			const nextSection = sections[nextSectionIndex]

			if (nextSection) {
				const firstFocusableElement = nextSection.querySelector<HTMLElement>(
					'a, button, input, textarea, select, details, summary, [tabindex]:not([tabindex="-1"])',
				)
				firstFocusableElement?.focus()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])
}
