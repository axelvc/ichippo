/** biome-ignore-all lint/suspicious/noArrayIndexKey: Week labels are hardcoded */
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek.js'
import { Circle, Square } from 'lucide-react'
import { type RefObject, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { DraggableWrapper } from '../shared/components/DraggableWrapper'
import type { LanguageCode } from '../shared/types'
import { WEEK_LABELS_MONDAY, WEEK_LABELS_SUNDAY } from './constants'
import type { CalendarDayState, CalendarState } from './types'

dayjs.extend(isoWeek)

interface CalendarDisplayProps {
	containerRef?: RefObject<HTMLDivElement | null>
}

export function CalendarDisplay({
	timeMode,
	showLabel,
	labelLang,
	dotStyle,
	weekStart,
	containerRef,
}: Omit<CalendarState, 'enabled'> & CalendarDisplayProps) {
	const cells = useMemo<CalendarDayState[]>(() => {
		const now = dayjs()
		const today = now.startOf('day')

		if (timeMode === 'week') {
			const weekStartDay = weekStart === 'monday' ? now.isoWeekday(1) : now.day(0)

			return Array.from({ length: 7 }, (_, i) => {
				const day = weekStartDay.add(i, 'day').startOf('day')

				return {
					past: false,
					current: day.isSame(today, 'day'),
					active: day.isBefore(today, 'day') || day.isSame(today, 'day'),
				}
			})
		}

		// Month mode
		const firstDayOfMonth = now.startOf('month')
		const lastDayOfMonth = now.endOf('month')

		const firstDayWeekday =
			weekStart === 'monday'
				? firstDayOfMonth.isoWeekday() - 1 // isoWeekday: 1 = Monday
				: firstDayOfMonth.day() // day: 0 = Sunday

		const daysFromPrevMonth = firstDayWeekday
		const daysInMonth = lastDayOfMonth.date()
		const totalCells = Math.ceil((daysFromPrevMonth + daysInMonth) / 7) * 7

		return Array.from({ length: totalCells }, (_, i) => {
			let day: dayjs.Dayjs
			let isPast = false

			if (i < daysFromPrevMonth) {
				// Days from previous month
				day = firstDayOfMonth.subtract(daysFromPrevMonth - i, 'day')
				isPast = true
			} else if (i < daysFromPrevMonth + daysInMonth) {
				// Days from current month
				day = firstDayOfMonth.add(i - daysFromPrevMonth, 'day')
			} else {
				// Days from next month (to fill the grid)
				day = lastDayOfMonth.add(i - daysFromPrevMonth - daysInMonth + 1, 'day')
				isPast = true
			}

			return {
				past: isPast,
				current: day.isSame(today, 'day'),
				active: !isPast && (day.isBefore(today, 'day') || day.isSame(today, 'day')),
			}
		})
	}, [timeMode, weekStart])

	const weekLabels =
		weekStart === 'monday'
			? WEEK_LABELS_MONDAY[labelLang as LanguageCode]
			: WEEK_LABELS_SUNDAY[labelLang as LanguageCode]

	return (
		<DraggableWrapper containerRef={containerRef} className="top-[calc(50%+100px)] grid justify-center">
			<div className="grid grid-cols-7 gap-4 justify-items-center">
				{showLabel &&
					weekLabels.map((label, i) => (
						<span
							key={i}
							className={cn(
								'text-xs text-zinc-400 dark:text-zinc-500 text-center -mb-1 size-3',
								labelLang === 'ja' && 'font-zen',
							)}
						>
							{label}
						</span>
					))}

				{cells.map((cell, i) => (
					<div
						key={i}
						className={cn(
							'text-zinc-200 dark:text-zinc-800',
							cell.past && 'opacity-50',
							cell.active && 'text-zinc-900 dark:text-zinc-100',
							cell.current && 'text-accent-500 dark:text-accent-400',
						)}
					>
						{dotStyle === 'dots' && <Circle className="size-3 fill-current" />}
						{dotStyle === 'squares' && <Square className="size-3 fill-current" />}
						{dotStyle === 'lines' && <div className="w-0.5 h-3 bg-current" />}
					</div>
				))}
			</div>
		</DraggableWrapper>
	)
}
