interface SwitchProps {
	checked: boolean
	onChange: () => void
	disabled?: boolean
}

export function Switch({ checked, onChange, disabled = false }: SwitchProps) {
	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			disabled={disabled}
			onClick={onChange}
			className={`
				relative inline-flex h-6 w-11 shrink-0 cursor-pointer
				border-2 border-transparent transition-colors duration-200
				focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900
				disabled:cursor-not-allowed disabled:opacity-50
				${checked ? 'bg-purple-500' : 'bg-zinc-700'}
			`}
		>
			<span
				className={`
					pointer-events-none inline-block h-5 w-5 transform
					bg-zinc-100 shadow ring-0 transition duration-200
					${checked ? 'translate-x-5' : 'translate-x-0'}
				`}
			/>
		</button>
	)
}
