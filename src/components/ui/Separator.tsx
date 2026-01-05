import { cn } from '@/lib/utils'

interface SeparatorProps {
	className?: string
	orientation?: 'horizontal' | 'vertical'
}

export function Separator({ className, orientation = 'horizontal' }: SeparatorProps) {
	return (
		<div
			className={cn('bg-zinc-800', orientation === 'horizontal' ? 'h-px w-full my-5' : 'w-px h-full mx-5', className)}
		/>
	)
}
