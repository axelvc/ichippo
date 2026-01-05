import { cn } from '@/lib/utils'

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
			className={cn(
				'relative inline-flex h-5 w-8 shrink-0 cursor-pointer border-3 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50',
				'after:content-[""] after:absolute after:-inset-2',
				checked ? 'bg-accent-500' : 'bg-zinc-700',
			)}
		>
			<span
				className={cn(
					'pointer-events-none inline-block size-3.5 transform bg-zinc-100 shadow ring-0 transition duration-200',
					checked ? 'translate-x-3' : 'translate-x-0',
				)}
			/>
		</button>
	)
}
