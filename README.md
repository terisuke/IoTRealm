# IoTRealm - AI/IoT Solutions Company Website

IoTRealm is a modern, multi-language corporate website built for showcasing AI and IoT solutions. Developed with Astro.js and Tailwind CSS, it provides a professional platform for presenting innovative technology services to global clients.

Built with clean, modern aesthetics and full internationalization support, IoTRealm enables seamless communication with clients across different languages and regions.

[![Static Badge](https://img.shields.io/badge/UI%2FUX-Olga-blue)](https://www.figma.com/@olgaaverchenko) [![View Demo](https://img.shields.io/badge/Develop-Manul_Thanura-red)](https://lk.linkedin.com/in/manulthanura)
[![Static Badge](https://img.shields.io/badge/View_Demo-green)](https://iotrealm.vercel.app)
[![Static Badge](https://img.shields.io/badge/Astro-orange)](https://astro.build/)

![Cover](./public/cover.png)

## Key Features

Leveraging the power of Astro and Tailwind CSS, IoTRealm offers:

- **Multi-language Support**: Full internationalization for Japanese (ja), English (en), Spanish (es), and Chinese (zh)
- **TypeScript**: Complete type safety with strict mode enabled
- **Dynamic Routing**: Language-based routing with automatic path generation
- **SEO Optimized**: Server-side rendering with meta tags and structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Pre-built sections for services, pricing, FAQ, and more
- **Performance Focused**: Optimized images, lazy loading, and minimal JavaScript
- **Vercel Ready**: Pre-configured for deployment on Vercel platform

## 🚀 Project Structure

The project is built using Astro.js and Tailwind CSS. Here's a quick look at the project structure:

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔄 Recent Updates

### Version 2.0.0 (2025-01-22)
- **Complete Multi-language Support**: Implemented full i18n for Japanese, English, Spanish, and Chinese
- **Dynamic Routing**: Migrated from static language-specific pages to dynamic [lang] routes
- **TypeScript Improvements**: Fixed all type errors and added proper type annotations throughout the codebase
- **Chinese Translation Fix**: Resolved missing translations for privacy policy and terms of service pages
- **Code Quality**: Removed unused imports and variables, improved code maintainability
- **Build Optimization**: Ensured clean builds with zero TypeScript errors

### Version 1.1.0 (2025-01-21)
- **Enhanced Branding**: Added prominent IoTRealm text display next to logos in both Navbar and Footer components
- **Improved Typography**: Implemented clean, modern font styling for brand identity
- **Code Refactoring**: Removed inline styles in favor of Tailwind CSS utility classes for better maintainability

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
