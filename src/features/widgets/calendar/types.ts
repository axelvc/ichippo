import type { LanguageCode } from '../shared/types'

export type TimeMode = 'week' | 'month'
export type DotStyle = 'dots' | 'lines' | 'squares'
export type WeekStart = 'monday' | 'sunday'

export interface CalendarState {
	enabled: boolean
	timeMode: TimeMode
	showLabel: boolean
	labelLang: LanguageCode
	dotStyle: DotStyle
	weekStart: WeekStart
}

export interface CalendarDisplayProps extends Omit<CalendarState, 'enabled'> {
	now?: import('dayjs').Dayjs
}

export interface CalendarActions {
	setEnabled: (enabled: boolean) => void
	setTimeMode: (mode: TimeMode) => void
	setShowLabel: (show: boolean) => void
	setLabelLang: (lang: LanguageCode) => void
	setDotStyle: (style: DotStyle) => void
	setWeekStart: (start: WeekStart) => void
}

export interface CalendarDayState {
	past: boolean
	current: boolean
	active: boolean
}
