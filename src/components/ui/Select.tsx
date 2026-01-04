import { ChevronDown } from 'lucide-react'

interface SelectOption {
	value: string
	label: string
}

interface SelectProps {
	value: string
	onChange: (value: string) => void
	options: SelectOption[]
	placeholder?: string
}

export function Select({ value, onChange, options, placeholder }: SelectProps) {
	return (
		<div className="relative">
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="
					w-full appearance-none bg-zinc-800 border border-zinc-700
					px-3 py-2 pr-10 text-xs font-mono text-zinc-200
					focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
					cursor-pointer
				"
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
		</div>
	)
}
