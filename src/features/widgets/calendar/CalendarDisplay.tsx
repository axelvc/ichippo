/** biome-ignore-all lint/suspicious/noArrayIndexKey: Week labels are hardcoded */
import type { LanguageCode } from '../shared/types'
import { WEEK_LABELS_JA_MONDAY, WEEK_LABELS_JA_SUNDAY, WEEK_LABELS_MONDAY, WEEK_LABELS_SUNDAY } from './constants'
import type { CalendarLang, DotStyle, TimeMode, WeekStart } from './types'

interface CalendarDisplayProps {
	timeMode: TimeMode
	showLabel: boolean
	labelLang: CalendarLang
	dotStyle: DotStyle
	weekStart: WeekStart
}

export function CalendarDisplay({ timeMode, showLabel, labelLang, dotStyle, weekStart }: CalendarDisplayProps) {
	const now = new Date()
	const jsDay = now.getDay() // 0 = Sunday
	const currentDate = now.getDate()
	const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()

	// Get first day of month (0 = Sunday in JS)
	const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay()

	const isWeek = timeMode === 'week'

	// Get the correct label array based on weekStart and language
	const getWeekLabels = () => {
		if (labelLang === 'ja') {
			return weekStart === 'monday' ? WEEK_LABELS_JA_MONDAY : WEEK_LABELS_JA_SUNDAY
		}
		return weekStart === 'monday'
			? WEEK_LABELS_MONDAY[labelLang as LanguageCode]
			: WEEK_LABELS_SUNDAY[labelLang as LanguageCode]
	}

	// Convert JS day (0=Sun) to week index based on weekStart
	const getDayIndex = (jsDay: number) => {
		if (weekStart === 'monday') {
			// Monday = 0, Sunday = 6
			return jsDay === 0 ? 6 : jsDay - 1
		}
		// Sunday = 0 (JS default)
		return jsDay
	}

	const todayIndex = getDayIndex(jsDay)
	const firstDayIndex = getDayIndex(firstDayOfMonth)

	const getLabel = (index: number) => {
		if (!showLabel) return null
		if (isWeek) {
			return getWeekLabels()[index]
		}
		return index + 1
	}

	const isActive = (index: number) => {
		if (isWeek) return index <= todayIndex
		return index + 1 <= currentDate
	}

	const getStyleClasses = (active: boolean) => {
		const baseActive = active ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-200 dark:bg-neutral-800'

		switch (dotStyle) {
			case 'dots':
				return `w-2.5 h-2.5 rounded-full ${baseActive}`
			case 'lines':
				return `w-0.5 h-4 rounded-full ${baseActive}`
			case 'squares':
				return `w-2.5 h-2.5 rounded-sm ${baseActive}`
		}
	}

	// Week mode - simple row
	if (isWeek) {
		return (
			<div className="flex gap-4">
				{Array.from({ length: 7 }, (_, i) => (
					<div key={i} className="flex flex-col items-center gap-2">
						<div className={`transition-colors ${getStyleClasses(isActive(i))}`} />
						{showLabel && (
							<span className="text-xs font-light text-neutral-400 dark:text-neutral-600">{getLabel(i)}</span>
						)}
					</div>
				))}
			</div>
		)
	}

	// Month mode - 7-column grid with proper day alignment
	const weekLabels = getWeekLabels()

	return (
		<div className="flex flex-col gap-1">
			{/* Day labels header */}
			{showLabel && (
				<div className="grid grid-cols-7 gap-4 mb-1">
					{weekLabels.map((label, i) => (
						<span key={i} className="text-xs font-light text-neutral-400 dark:text-neutral-600 text-center">
							{label}
						</span>
					))}
				</div>
			)}

			{/* Days grid */}
			<div className="grid grid-cols-7 gap-4">
				{/* Empty cells before first day */}
				{Array.from({ length: firstDayIndex }, (_, i) => (
					<div key={`empty-${i}`} className="w-2.5 h-2.5" />
				))}

				{/* Actual days */}
				{Array.from({ length: daysInMonth }, (_, i) => (
					<div key={i} className="flex justify-center">
						<div className={`transition-colors ${getStyleClasses(isActive(i))}`} />
					</div>
				))}
			</div>
		</div>
	)
}
