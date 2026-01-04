import { Battery, Signal, Wifi } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatusBarProps {
	className?: string
}

export default function StatusBar({ className = '' }: StatusBarProps) {
	return (
		<div className={cn('absolute top-0 left-0 right-0 h-14 flex items-end justify-between px-8 pb-1', className)}>
			<span
				className="text-sm font-semibold text-neutral-900 dark:text-white"
				style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
			>
				Status
			</span>
			<div className="flex items-center gap-1.5 text-neutral-900 dark:text-white">
				<Signal className="size-5" />
				<Wifi className="size-5" />
				<Battery className="size-5" />
			</div>
		</div>
	)
}
