import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
	value: string
	label: string
}

export interface SelectOptGroup {
	label: string
	options: SelectOption[]
}

export type SelectOptions = SelectOption[] | SelectOptGroup[]

interface SelectProps {
	value: string
	onChange: (value: string) => void
	options: SelectOptions
	placeholder?: string
	className?: string
}

export function Select({ value, onChange, options, placeholder, className }: SelectProps) {
	const hasGroups = options.length > 0 && 'options' in options[0]

	return (
		<div className={cn('relative', className)}>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full appearance-none bg-zinc-800 border border-zinc-700 px-3 py-2 pr-10 text-xs font-mono text-zinc-200 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 cursor-pointer"
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{hasGroups
					? (options as SelectOptGroup[]).map((group) => (
							<optgroup key={group.label} label={group.label} className="bg-zinc-800 font-mono">
								{group.options.map((option) => (
									<option key={option.value} value={option.value} className="bg-zinc-800 font-mono">
										{option.label}
									</option>
								))}
							</optgroup>
						))
					: (options as SelectOption[]).map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
			</select>
			<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
		</div>
	)
}
