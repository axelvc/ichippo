import type { DateMode, DaysLeftMode } from './types'

interface DaysLeftDisplayProps {
	enabled: boolean
	mode: DaysLeftMode
	dateMode: DateMode
}

export function DaysLeftDisplay({ enabled, mode, dateMode }: DaysLeftDisplayProps) {
	if (!enabled) return null

	const now = new Date()
	const year = now.getFullYear()
	const month = now.getMonth()
	const dayOfMonth = now.getDate()
	const dayOfWeek = now.getDay()

	const getDayNumber = (mode: DateMode) => {
		switch (mode) {
			case 'week':
				return dayOfWeek === 0 ? 7 : dayOfWeek
			case 'month':
				return dayOfMonth
			case 'year': {
				const startOfYear = new Date(year, 0, 0)
				const diff = now.getTime() - startOfYear.getTime()
				return Math.floor(diff / (1000 * 60 * 60 * 24))
			}
		}
	}

	const getTotalDays = (mode: DateMode) => {
		switch (mode) {
			case 'week':
				return 7
			case 'month':
				return new Date(year, month + 1, 0).getDate()
			case 'year': {
				const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
				return isLeapYear ? 366 : 365
			}
		}
	}

	const currentDay = getDayNumber(dateMode)
	const totalDays = getTotalDays(dateMode)
	const percentage = Math.round((currentDay / totalDays) * 100)
	const daysLeft = totalDays - currentDay

	return (
		<div className="flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-600 text-xs font-light">
			{mode === 'count' && (
				<span>
					{currentDay}/{totalDays}
				</span>
			)}
			{mode === 'daysLeft' && (
				<span>
					{daysLeft} {daysLeft === 1 ? 'day' : 'days'} left
				</span>
			)}
			{mode === 'percentage' && <span>{percentage}%</span>}
		</div>
	)
}
