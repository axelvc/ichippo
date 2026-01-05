interface InputProps {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	type?: 'text' | 'number' | 'email'
}

export function Input({ value, onChange, placeholder, type = 'text' }: InputProps) {
	return (
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className="
				w-full bg-zinc-800 border border-zinc-700
				px-3 py-2 text-xs font-mono text-zinc-200
				placeholder:text-zinc-500
				focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
			"
		/>
	)
}
