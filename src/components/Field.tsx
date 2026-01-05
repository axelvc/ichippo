import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Label } from './Label'

interface FieldProps {
	children: ReactNode
	className?: string
	htmlFor?: string
	label?: string
	orientation?: 'horizontal' | 'vertical'
}

export function Field({ label, children, className, htmlFor, orientation = 'vertical' }: FieldProps) {
	return (
		<div className={cn(orientation === 'horizontal' && 'flex items-center justify-between', className)}>
			{label && (
				<Label
					htmlFor={htmlFor}
					className={cn(
						'text-xs font-mono text-zinc-400 uppercase tracking-wider',
						orientation === 'vertical' && 'mb-2 block',
					)}
				>
					{label}
				</Label>
			)}
			{children}
		</div>
	)
}

interface FieldLegendProps {
	children: ReactNode
	className?: string
}

export function FieldLegend({ children, className }: FieldLegendProps) {
	return <h3 className={cn('text-sm font-semibold text-zinc-200 uppercase tracking-wider', className)}>{children}</h3>
}
