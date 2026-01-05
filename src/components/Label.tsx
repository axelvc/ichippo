/** biome-ignore-all lint/a11y/noLabelWithoutControl: input are inside label */
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LabelProps {
	children: ReactNode
	className?: string
}

export function Label({ children, className = '' }: LabelProps) {
	return <label className={cn('text-xs font-mono text-zinc-400 uppercase tracking-wider', className)}>{children}</label>
}
