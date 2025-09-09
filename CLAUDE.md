# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **bun** as the package manager. All commands should be run with `bun` instead of npm/yarn.

### Core Commands
- `bun dev` - Start development server with HMR
- `bun run build` - Build for production (runs TypeScript compilation then Vite build)
- `bun run lint` - Run ESLint on the codebase
- `bun run preview` - Preview the production build locally

### Package Management
- `bun install` - Install dependencies
- `bun add <package>` - Add new dependency
- `bun add -d <package>` - Add dev dependency

## Project Architecture

### Tech Stack
- **React 19.1+** with TypeScript
- **Vite 7+** for build tooling and dev server
- **ESLint 9+** with flat config format for linting
- **bun** as package manager

### Project Structure
```
src/
├── main.tsx          # Entry point with React.StrictMode
├── app.tsx           # Main application component
├── index.css         # Global styles
├── vite-env.d.ts     # Vite TypeScript declarations
└── assets/           # Static assets
```

### Key Configuration Files
- `vite.config.ts` - Vite configuration using @vitejs/plugin-react
- `eslint.config.js` - Flat ESLint config with TypeScript, React hooks, and React refresh plugins
- `tsconfig.json` - TypeScript project references setup (delegates to app/node configs)
- `tsconfig.app.json` - Main application TypeScript config
- `tsconfig.node.json` - Node.js/tooling TypeScript config

### Development Notes
- Uses ES modules (`"type": "module"` in package.json)
- Configured with React 19's latest patterns (StrictMode, createRoot)
- ESLint configured with modern flat config format and recommended React rules
- Built-in HMR (Hot Module Replacement) for fast development

### Conventions

- kebab-case for ALL file names