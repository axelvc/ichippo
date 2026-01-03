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
		<div className="flex bg-zinc-800 p-0.5">
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					onClick={() => onChange(option.value)}
					className={`
						flex-1 ${sizeClasses} font-mono font-medium transition-all duration-150
						focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset
						${
							value === option.value
								? 'bg-violet-500 text-white'
								: 'bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
						}
					`}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}
