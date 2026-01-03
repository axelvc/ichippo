import type { ProgressMode } from './types'

interface DaysLeftDisplayProps {
	showDay: boolean
	dayMode: ProgressMode
	showPercentage: boolean
	percentageMode: ProgressMode
	showDaysLeft: boolean
	daysLeftMode: ProgressMode
}

export function DaysLeftDisplay({
	showDay,
	dayMode,
	showPercentage,
	percentageMode,
	showDaysLeft,
	daysLeftMode,
}: DaysLeftDisplayProps) {
	const now = new Date()
	const year = now.getFullYear()
	const month = now.getMonth()
	const dayOfMonth = now.getDate()
	const dayOfWeek = now.getDay() // 0 = Sunday

	// Day of year (1-365/366)
	const startOfYear = new Date(year, 0, 0)
	const diff = now.getTime() - startOfYear.getTime()
	const oneDay = 1000 * 60 * 60 * 24
	const dayOfYear = Math.floor(diff / oneDay)

	// Total days in year
	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
	const totalDaysInYear = isLeapYear ? 366 : 365

	// Total days in current month
	const totalDaysInMonth = new Date(year, month + 1, 0).getDate()

	// Get current day number based on mode
	const getDayNumber = (mode: ProgressMode) => {
		switch (mode) {
			case 'week':
				return dayOfWeek === 0 ? 7 : dayOfWeek // 1-7 (Mon-Sun)
			case 'month':
				return dayOfMonth
			case 'year':
				return dayOfYear
		}
	}

	// Get total days based on mode
	const getTotalDays = (mode: ProgressMode) => {
		switch (mode) {
			case 'week':
				return 7
			case 'month':
				return totalDaysInMonth
			case 'year':
				return totalDaysInYear
		}
	}

	// Day display
	const dayNumber = getDayNumber(dayMode)

	// Calculate percentage
	const percentageCurrent = getDayNumber(percentageMode)
	const percentageTotal = getTotalDays(percentageMode)
	const percentage = Math.round((percentageCurrent / percentageTotal) * 100)

	// Calculate days left
	const daysLeftCurrent = getDayNumber(daysLeftMode)
	const daysLeftTotal = getTotalDays(daysLeftMode)
	const daysLeft = daysLeftTotal - daysLeftCurrent

	// Don't render if nothing to show
	if (!showDay && !showPercentage && !showDaysLeft) {
		return null
	}

	return (
		<div className="flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-600">
			{showDay && <span className="text-xs font-light">Day {dayNumber}</span>}
			{showPercentage && (
				<span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{percentage}%</span>
			)}
			{showDaysLeft && (
				<span className="text-xs font-light">
					{daysLeft} {daysLeft === 1 ? 'day' : 'days'} left
				</span>
			)}
		</div>
	)
}
