interface ToggleProps {
	enabled: boolean
	onChange: () => void
}

export function Toggle({ enabled, onChange }: ToggleProps) {
	return (
		<button
			onClick={onChange}
			className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 ${
				enabled ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-700'
			}`}
		>
			<div
				className={`size-4 rounded-full bg-white dark:bg-neutral-900 transition-transform mx-1 ${
					enabled ? 'translate-x-4' : 'translate-x-0'
				}`}
			/>
		</button>
	)
}
