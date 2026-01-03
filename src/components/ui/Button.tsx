import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
	icon?: ReactNode
}

export function Button({ children, variant = 'secondary', size = 'sm', icon, className = '', ...props }: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center font-mono font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed'

	const variants = {
		primary: 'bg-violet-500 text-white hover:bg-violet-600',
		secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700',
		ghost: 'bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800',
	}

	const sizes = {
		sm: 'px-3 py-1.5 text-xs gap-2',
		md: 'px-4 py-2 text-sm gap-2',
		lg: 'px-6 py-3 text-base gap-3',
	}

	return (
		<button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
			{icon && <span className="shrink-0">{icon}</span>}
			{children}
		</button>
	)
}
