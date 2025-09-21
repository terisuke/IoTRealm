# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IoTRealm is a digital marketing agency landing page built with Astro and Tailwind CSS. It's a server-rendered website deployed on Vercel, featuring SEO-friendly architecture and mobile-responsive design.

## Essential Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Type check and build production site to ./dist/
- `npm run preview` - Preview production build locally

### Type Checking
- Run `astro check` before committing (automatically runs with `npm run build`)

## Architecture

### Tech Stack
- **Astro 5.0.9** - Static site generator with server-side rendering
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **TypeScript 5.4.5** - Type safety with strict mode enabled
- **Vercel** - Deployment platform

### Project Structure
```
src/
├── pages/           # Routes (file-based routing)
│   ├── articles/    # Blog articles
│   └── services/    # Service pages
├── components/      # Reusable components
│   ├── ui/          # UI components
│   ├── sections/    # Page sections
│   ├── Icons/       # Icon components
│   └── seo/         # SEO components
├── layouts/         # Page layouts
├── content/         # Content and blog posts
├── data/            # Data files
└── styles/          # Custom styles
```

### Key Conventions
- **Import Alias**: Use `@/*` for imports from src directory (e.g., `@/components/ui/Button`)
- **Routing**: Add `.astro` or `.md` files to `src/pages/` for new routes
- **Static Assets**: Place in `public/` directory
- **Environment Variables**: Use `.env` files (already in .gitignore)

### Tailwind Configuration
- Custom colors: `green`, `black`, `dark`, `gray`, `white` (CSS variables)
- Font: Grotesk font family with weights: regular (400), medium (500)
- Breakpoints: sm, md, lg, xl, 2xl

## Development Workflow

Before committing changes:
1. Run `astro check` for type checking
2. Test with `npm run build` to ensure production build works
3. Preview with `npm run preview` to verify changes
4. Verify responsive design across all breakpoints
5. Test all interactive components and navigation