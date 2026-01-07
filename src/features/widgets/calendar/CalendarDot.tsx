import { Circle, Square } from 'lucide-react'
import type { DotStyle } from './types'

interface CalendarDotProps {
	style: DotStyle
}

export function CalendarDot({ style }: CalendarDotProps) {
	switch (style) {
		case 'dots':
			return <Circle className="size-3 fill-current" />
		case 'squares':
			return <Square className="size-3 fill-current" />
		case 'lines':
			return <div className="w-0.5 h-3 bg-current" />
	}
}
