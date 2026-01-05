import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LabelProps {
	children: ReactNode
	htmlFor?: string
	className?: string
}

export function Label({ children, className, htmlFor }: LabelProps) {
	return (
		<label htmlFor={htmlFor} className={cn('text-xs font-mono text-zinc-400 uppercase tracking-wider select-none', className)}>
			{children}
		</label>
	)
}
