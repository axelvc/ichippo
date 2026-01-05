/** biome-ignore-all lint/suspicious/noArrayIndexKey: Week labels are hardcoded */
import { cn } from '@/lib/utils'
import { DraggableWrapper, type DraggableWrapperProps } from '../shared'
import type { LanguageCode } from '../shared/types'
import { WEEK_LABELS_JA_MONDAY, WEEK_LABELS_JA_SUNDAY, WEEK_LABELS_MONDAY, WEEK_LABELS_SUNDAY } from './constants'
import type { CalendarLang, DotStyle, TimeMode, WeekStart } from './types'

interface CalendarDisplayProps extends Pick<DraggableWrapperProps, 'containerWidth' | 'containerHeight'> {
	enabled: boolean
	timeMode: TimeMode
	showLabel: boolean
	labelLang: CalendarLang
	dotStyle: DotStyle
	weekStart: WeekStart
}

export function CalendarDisplay({
	enabled,
	timeMode,
	showLabel,
	labelLang,
	dotStyle,
	weekStart,
	containerHeight,
	containerWidth,
}: CalendarDisplayProps) {
	if (!enabled) return null

	const now = new Date()
	const jsDay = now.getDay()
	const currentDate = now.getDate()
	const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
	const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay()
	const isWeek = timeMode === 'week'

	const getWeekLabels = () => {
		if (labelLang === 'ja') {
			return weekStart === 'monday' ? WEEK_LABELS_JA_MONDAY : WEEK_LABELS_JA_SUNDAY
		}
		return weekStart === 'monday'
			? WEEK_LABELS_MONDAY[labelLang as LanguageCode]
			: WEEK_LABELS_SUNDAY[labelLang as LanguageCode]
	}

	const getDayIndex = (jsDay: number) => {
		if (weekStart === 'monday') {
			return jsDay === 0 ? 6 : jsDay - 1
		}
		return jsDay
	}

	const todayIndex = getDayIndex(jsDay)
	const firstDayIndex = getDayIndex(firstDayOfMonth)

	const isActive = (index: number) => {
		if (isWeek) return index <= todayIndex
		return index + 1 <= currentDate
	}

	const weekLabels = getWeekLabels()

	const cells = isWeek
		? Array.from({ length: 7 }, (_, i) => ({
				empty: false,
				day: i + 1,
				index: i,
			}))
		: [
				...Array.from({ length: firstDayIndex }, (_, i) => ({
					empty: true,
					day: 0,
					index: i,
				})),
				...Array.from({ length: daysInMonth }, (_, i) => ({
					empty: false,
					day: i + 1,
					index: firstDayIndex + i,
				})),
			]

	const dotStyleClasses = {
		dots: 'w-2.5 h-2.5 rounded-full',
		squares: 'w-2.5 h-2.5 rounded-xs',
		lines: 'w-0.5 h-4 rounded-full',
	}

	return (
		<DraggableWrapper
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			initialY={containerHeight / 2 + 100}
			centerHorizontal
		>
			<div className="flex flex-col gap-1">
				<div className={cn('grid grid-cols-7 gap-4 mb-1', !showLabel && 'opacity-0')}>
					{weekLabels.map((label, i) => (
						<span key={i} className="text-xs font-light text-zinc-400 dark:text-zinc-600 text-center">
							{label}
						</span>
					))}
				</div>

				<div className="grid grid-cols-7 gap-4">
					{cells.map((cell, i) => (
						<div key={i} className="flex justify-center">
							{cell.empty ? (
								<div className="w-2.5 h-2.5" />
							) : (
								<div
									className={cn(
										'transition-colors',
										isActive(cell.index) ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-200 dark:bg-zinc-800',
										dotStyleClasses[dotStyle],
									)}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</DraggableWrapper>
	)
}
