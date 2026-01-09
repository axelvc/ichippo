# Ichippo

> `一日一歩` → Ichinichi Ippo → Ichippo
> "One day, one step" - A step forward every day

A customizable phone wallpaper generator built with Astro, React, and Tailwind CSS v4. Create personalized wallpapers with calendar, countdown, and phrase widgets that inspire daily progress.

![Preview](public/Screenshot.png)

## Features

- **Visual Editor**: Interactive preview to customize your wallpaper in real-time.
- **Multiple Widgets**:
  - **Calendar**: Display the current month or week with customizable styles and week starts
  - **Days Left**: Countdown to the end of year, month, or week
  - **Phrase**: Add motivational quotes or custom text in multiple languages
- **Device Support**: Optimized for various iPhone models with automatic aspect ratio adjustments
- **Export**: Take a screenshot to save your customized wallpaper
- **URL-based Configuration**: Share your wallpaper configurations via URL parameters

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator with server-side rendering
- **UI Library**: [React](https://react.dev) - Interactive components and state management
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- **Animation**: [Motion](https://motion.dev) (Framer Motion) - Smooth drag-and-drop interactions
- **Date Utilities**: [Day.js](https://day.js.org) - Lightweight date manipulation
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful icon set
- **Code Quality**: [Biome](https://biomejs.dev) - Fast formatter and linter

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- [pnpm](https://pnpm.io)

### Installation

```bash
git clone https://github.com/axelvc/ichippo
cd ichippo
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` to view the app.

### Build

Build the project for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components (Button, Input, etc.)
├── features/            # Feature-specific modules
│   ├── controls/        # Control panel UI
│   ├── preview/         # Phone preview logic
│   └── widgets/         # Widget implementations (calendar, days-left, phrase)
├── lib/                 # Utility functions and configuration
├── pages/               # Astro pages and API routes
└── styles/              # Global styles
```

## Scripts

- `pnpm dev`: Start the local development server.
- `pnpm build`: Build the project for production.
- `pnpm preview`: Preview the production build locally.
- `pnpm format`: Format code using Biome.
- `pnpm lint`: Lint code using Biome.
- `pnpm check`: Run Biome checks (formatting + linting).

## Configuration

The application uses `biome.json` for code formatting and linting rules.

### Adding New Widgets

To add a new widget, refer to the `src/features/widgets` directory structure. Each widget consists of:

- **`types.ts`**: TypeScript type definitions for widget state
- **`constants.ts`**: Default configuration values
- **`use[Widget].ts`**: Custom React hook for widget state management
- **`[Widget]Display.tsx`**: Visual component rendered in the preview
- **`[Widget]Controls.tsx`**: Settings panel component for customization
- **`index.ts`**: Barrel export for clean imports

See existing widgets (calendar, days-left, phrase) for implementation examples.

## Contributing

Contributions are welcome! Please follow the code style guidelines in `AGENTS.md` when submitting PRs.
