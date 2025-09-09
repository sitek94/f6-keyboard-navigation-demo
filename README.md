# F6 Navigation Demo

Simple demo showcasing keyboard-accessible F6 navigation between page sections.

## The Problem
Web applications often have multiple sections (header, sidebar, main content, footer) but no easy way to navigate between them with just the keyboard. The F6 key is a standard accessibility feature that should cycle through these major page sections.

## The Approach
This demo implements F6 navigation by:
- Detecting available sections on each page
- Focusing the first interactive element within each section when F6 is pressed
- Using Shift+F6 for reverse navigation
- Automatically skipping missing sections on different page layouts

The navigation logic is handled by the `useF6Navigation` hook located in `src/hooks/use-f6-navigation.ts`.

## Try It Out

```bash
bun install
bun dev
```

Then press **F6** to navigate between sections!

- **F6**: Navigate to next section
- **Shift+F6**: Navigate to previous section

Visit different pages (`/`, `/features`, `/docs`, `/contact`) to see how navigation adapts to different layouts.