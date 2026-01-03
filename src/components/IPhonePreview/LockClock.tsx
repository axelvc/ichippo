interface LockClockProps {
	time: string
	date: string
}

export default function LockClock({ time, date }: LockClockProps) {
	return (
		<div className="absolute top-20 left-0 right-0 text-center">
			<p
				className="text-7xl font-light text-neutral-900 dark:text-white tracking-tight"
				style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
			>
				{time}
			</p>
			<p
				className="text-lg font-light text-neutral-900 dark:text-white mt-1"
				style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
			>
				{date}
			</p>
		</div>
	)
}
