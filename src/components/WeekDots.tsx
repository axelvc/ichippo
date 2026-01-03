const days = ['日', '月', '火', '水', '木', '金', '土']

export default function WeekDots() {
	const today = new Date().getDay()

	return (
		<div className="flex gap-4">
			{days.map((day, i) => (
				<div key={day} className="flex flex-col items-center gap-1.5">
					<div
						className={`w-2.5 h-2.5 rounded-full transition-colors ${
							i <= today ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-200 dark:bg-neutral-800'
						}`}
					/>
					<span className="text-[10px] font-light text-neutral-400 dark:text-neutral-600">{day}</span>
				</div>
			))}
		</div>
	)
}
