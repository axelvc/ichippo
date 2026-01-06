import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps {
	value: string
	onChange?: (value: string) => void
	placeholder?: string
	readOnly?: boolean
	className?: string
	type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export function Input({ value, onChange, placeholder, readOnly, type = 'text', className }: InputProps) {
	return (
		<input
			type={type}
			value={value}
			readOnly={readOnly}
			onChange={(e) => onChange?.(e.target.value)}
			placeholder={placeholder}
			className={cn(
				'w-full bg-zinc-800 border border-zinc-700 px-3 py-2 text-xs font-mono text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500',
				className,
			)}
		/>
	)
}
