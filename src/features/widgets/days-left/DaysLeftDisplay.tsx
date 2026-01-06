import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear.js'
import isoWeek from 'dayjs/plugin/isoWeek.js'
import { useMemo } from 'react'
import type { DaysLeftState } from './types'

dayjs.extend(isoWeek)
dayjs.extend(isLeapYear)

export function DaysLeftDisplay({ mode, dateMode, weekStart }: Omit<DaysLeftState, 'enabled'>) {
	const { currentDay, total } = useMemo(() => {
		const today = dayjs()

		if (dateMode === 'year') {
			const startOfYear = today.startOf('year')
			return {
				currentDay: today.diff(startOfYear, 'day') + 1,
				total: today.isLeapYear() ? 366 : 365,
			}
		}

		if (dateMode === 'month') {
			return {
				currentDay: today.date(),
				total: today.daysInMonth(),
			}
		}

		return {
			currentDay: weekStart === 'monday' ? today.isoWeekday() : today.day() + 1,
			total: 7,
		}
	}, [dateMode, weekStart])

	const displayText = useMemo(() => {
		if (mode === 'count') {
			return `${currentDay}/${total}`
		}

		if (mode === 'daysLeft') {
			const daysLeft = total - currentDay
			return `${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left`
		}

		const percentage = Math.round((currentDay / total) * 100)
		return `${percentage}%`
	}, [mode, currentDay, total])

	return <div className="text-center text-zinc-400 dark:text-zinc-600 text-sm font-light">{displayText}</div>
}
