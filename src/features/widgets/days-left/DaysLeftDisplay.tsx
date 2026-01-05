import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear.js'
import isoWeek from 'dayjs/plugin/isoWeek.js'
import { type RefObject, useMemo } from 'react'
import { DraggableWrapper } from '../shared/components/DraggableWrapper'
import type { DateMode, DaysLeftMode, WeekStart } from './types'

dayjs.extend(isoWeek)
dayjs.extend(isLeapYear)

interface DaysLeftDisplayProps {
	dateMode: DateMode
	mode: DaysLeftMode
	weekStart: WeekStart
	containerRef?: RefObject<HTMLDivElement | null>
}

export function DaysLeftDisplay({ mode, dateMode, weekStart, containerRef }: DaysLeftDisplayProps) {
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

	return (
		<DraggableWrapper
			containerRef={containerRef}
			className="top-[calc(100%-80px)] text-center text-zinc-400 dark:text-zinc-600 text-sm font-light"
		>
			<span>{displayText}</span>
		</DraggableWrapper>
	)
}
