import { cn } from '@/lib/utils'

interface SeparatorProps {
	className?: string
	orientation?: 'horizontal' | 'vertical'
}

const orientations = {
	horizontal: 'h-px w-full my-5',
	vertical: 'w-px h-full mx-5',
} as const

export function Separator({ className, orientation = 'horizontal' }: SeparatorProps) {
	return <div className={cn('bg-zinc-800', orientations[orientation], className)} />
}
