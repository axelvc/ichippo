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
				'relative inline-flex h-5 w-8 shrink-0 cursor-pointer border-3 border-transparent transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
				'after:content-[""] after:absolute after:-inset-2',
				checked ? 'bg-zinc-100' : 'bg-zinc-700',
			)}
		>
			<span
				className={cn(
					'pointer-events-none inline-block size-3.5 transform shadow transition duration-200',
					checked ? 'translate-x-3 bg-zinc-800' : 'translate-x-0 bg-zinc-100',
				)}
			/>
		</button>
	)
}
