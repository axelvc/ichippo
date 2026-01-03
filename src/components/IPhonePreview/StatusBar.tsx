interface StatusBarProps {
	className?: string
}

export default function StatusBar({ className = '' }: StatusBarProps) {
	return (
		<div className={`absolute top-0 left-0 right-0 h-14 flex items-end justify-between px-8 pb-1 ${className}`}>
			<span
				className="text-sm font-semibold text-neutral-900 dark:text-white"
				style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
			>
				9:41
			</span>
			<div className="flex items-center gap-1.5">
				{/* Signal */}
				<svg className="w-4 h-4 text-neutral-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
					<rect x="1" y="14" width="4" height="6" rx="1" />
					<rect x="7" y="10" width="4" height="10" rx="1" />
					<rect x="13" y="6" width="4" height="14" rx="1" />
					<rect x="19" y="2" width="4" height="18" rx="1" />
				</svg>
				{/* WiFi */}
				<svg className="w-4 h-4 text-neutral-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4.9-2.3l1.4 1.4C9.4 16.4 10.6 16 12 16s2.6.4 3.5 1.1l1.4-1.4C15.6 14.6 13.9 14 12 14s-3.6.6-4.9 1.7zm-2.8-2.8l1.4 1.4C7.3 13 9.5 12 12 12s4.7 1 6.3 2.3l1.4-1.4C17.7 11.2 15 10 12 10s-5.7 1.2-7.7 2.9zM2 10.1l1.4 1.4C5.3 9.9 8.5 9 12 9s6.7.9 8.6 2.5l1.4-1.4C19.6 8.1 16 7 12 7s-7.6 1.1-10 3.1z" />
				</svg>
				{/* Battery */}
				<div className="flex items-center">
					<div className="w-6 h-3 border border-neutral-900 dark:border-white rounded-sm relative">
						<div className="absolute inset-0.5 bg-neutral-900 dark:bg-white rounded-xs" style={{ width: '85%' }} />
					</div>
					<div className="w-0.5 h-1.5 bg-neutral-900 dark:bg-white rounded-r-sm ml-px" />
				</div>
			</div>
		</div>
	)
}
