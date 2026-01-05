import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from './Button'

interface SegmentedControlProps<T extends string> {
	value: T
	onChange: (value: T) => void
	options: { value: T; label: ReactNode }[]
	size?: ButtonProps['size']
}

export function SegmentedControl<T extends string>({
	value,
	onChange,
	options,
	size = 'sm',
}: SegmentedControlProps<T>) {
	return (
		<div className="flex bg-zinc-900 gap-0.5">
			{options.map((option) => (
				<Button
					key={option.value}
					size={size}
					onClick={() => onChange(option.value)}
					variant={value === option.value ? 'primary' : 'secondary'}
					className={cn(
						'flex-1 border-transparent focus:ring-offset-0',
						value === option.value && 'focus:ring-accent-300',
					)}
				>
					{option.label}
				</Button>
			))}
		</div>
	)
}
