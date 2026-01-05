# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

Astro + React + Tailwind CSS v4 application for creating customizable phone wallpaper widgets.
Uses pnpm as package manager.

## Build, Lint, and Development Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm preview          # Preview production build

# Code Quality
pnpm format           # Format code with Biome
pnpm lint             # Lint code with Biome
pnpm check            # Run Biome check (lint + format validation)

# Type Checking
pnpm astro check      # Run Astro type checker (not in scripts, run directly)
```

### No Test Framework Configured

This project does not currently have a test framework. If adding tests, consider Vitest for compatibility with the Vite-based toolchain.

## Code Style Guidelines

### Formatting (Biome)

- **Indentation**: Tabs (not spaces)
- **Line width**: 120 characters
- **Line endings**: LF
- **Quotes**: Single quotes for JS/TS, double quotes for JSX attributes
- **Semicolons**: None (omit semicolons)
- **Trailing commas**: Always (ES5 style)

### TypeScript

- Strict mode enabled
- Use path alias `@/*` for imports from `src/*`
- Explicit type parameters on useState: `useState<Type>(initialValue)`
- Prefer interfaces over type aliases for object shapes
- Use union types for finite options: `type Mode = 'week' | 'month'`

### Imports

Order imports as follows (Biome organizes automatically):
1. External dependencies (react, dayjs, etc.)
2. Internal aliases (@/components, @/features, @/lib)
3. Relative imports (./types, ../shared)

```typescript
// Good
import { useState, useMemo } from 'react'
import dayjs from 'dayjs'
import { Button, Select } from '@/components'
import { useCalendar } from '@/features/widgets/calendar'
import type { CalendarState } from './types'
```

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `CalendarDisplay.tsx` |
| Hooks | camelCase with `use` prefix | `useCalendar.ts` |
| Types/Interfaces | PascalCase | `CalendarState`, `WidgetActions` |
| Constants | SCREAMING_SNAKE_CASE or camelCase | `DEFAULT_CONFIG`, `variants` |
| Files | PascalCase for components, camelCase for utilities | `Button.tsx`, `utils.ts` |

### Component Patterns

```typescript
// Define props interface extending HTML attributes when applicable
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	size?: 'sm' | 'md' | 'lg'
}

// Use named exports (not default exports)
export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(variants[variant], sizes[size], className)}
			{...props}
		/>
	)
}
```

### Custom Hooks Pattern

Hooks should return an object with State and Actions:

```typescript
interface CalendarState {
	currentDate: dayjs.Dayjs
	timeMode: TimeMode
}

interface CalendarActions {
	setCurrentDate: (date: dayjs.Dayjs) => void
	setTimeMode: (mode: TimeMode) => void
}

export function useCalendar(): CalendarState & CalendarActions {
	const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs())
	const [timeMode, setTimeMode] = useState<TimeMode>('month')
	
	return { currentDate, setCurrentDate, timeMode, setTimeMode }
}
```

### Utility Functions

Use `cn()` from `@/lib/utils` for className merging (combines clsx + tailwind-merge):

```typescript
import { cn } from '@/lib/utils'

className={cn(
	'base-styles',
	isActive && 'active-styles',
	className
)}
```

### Barrel Exports

Components and features use barrel exports via `index.ts`:

```typescript
// src/components/index.ts
export { Button } from './Button'
export { Input } from './Input'
export { Select } from './Select'
```

Import from barrel: `import { Button, Input } from '@/components'`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── index.ts         # Barrel exports
├── features/            # Feature modules
│   ├── controls/        # Control panel UI
│   ├── preview/         # Phone preview
│   └── widgets/         # Widget implementations
│       ├── calendar/    # Calendar widget
│       ├── days-left/   # Days left widget
│       ├── phrase/      # Phrase widget
│       └── shared/      # Shared widget utilities
├── lib/                 # Utility functions
├── pages/               # Astro pages
└── styles/              # Global styles
```

### Widget Structure

Each widget follows this pattern:
- `types.ts` - Type definitions
- `constants.ts` - Default values and configuration
- `use[Widget].ts` - State management hook
- `[Widget]Display.tsx` - Visual component for preview
- `[Widget]Controls.tsx` - Settings panel component
- `index.ts` - Barrel exports

## Error Handling

- Use TypeScript strict mode to catch errors at compile time
- Prefer type guards for discriminated unions
- Use optional chaining and nullish coalescing

## Biome Ignore Comments

When necessary, disable rules with:
```typescript
// biome-ignore lint/category/ruleName: explanation
```

## Dependencies

Key libraries:
- **dayjs** - Date manipulation (with plugins: weekOfYear, isoWeek, weekday)
- **lucide-react** - Icons
- **motion** - Animations (Framer Motion)
- **clsx** + **tailwind-merge** - Class name utilities
