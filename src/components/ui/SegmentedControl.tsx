import type { ReactNode } from 'react'

interface SegmentedControlProps<T extends string> {
	value: T
	onChange: (value: T) => void
	options: { value: T; label: ReactNode }[]
	size?: 'sm' | 'md'
}

export function SegmentedControl<T extends string>({
	value,
	onChange,
	options,
	size = 'sm',
}: SegmentedControlProps<T>) {
	const sizeClasses = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'

	return (
		<div className="flex bg-zinc-900 gap-0.5">
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					onClick={() => onChange(option.value)}
					className={`
						flex-1 ${sizeClasses} font-mono font-medium transition-colors duration-150
						focus:outline-none focus:ring-2 focus:ring-zinc-700
						${
							value === option.value
								? 'bg-purple-500 text-white'
								: 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
						}
					`}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}
