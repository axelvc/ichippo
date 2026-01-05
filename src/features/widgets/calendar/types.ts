import type { LanguageCode } from '../shared/types'

export type TimeMode = 'week' | 'month'
export type DotStyle = 'dots' | 'lines' | 'squares'
export type WeekStart = 'monday' | 'sunday'

export type CalendarLang = LanguageCode | 'ja'

export interface CalendarState {
	enabled: boolean
	timeMode: TimeMode
	showLabel: boolean
	labelLang: CalendarLang
	dotStyle: DotStyle
	weekStart: WeekStart
}

export interface CalendarActions {
	setEnabled: (enabled: boolean) => void
	setTimeMode: (mode: TimeMode) => void
	setShowLabel: (show: boolean) => void
	setLabelLang: (lang: CalendarLang) => void
	setDotStyle: (style: DotStyle) => void
	setWeekStart: (start: WeekStart) => void
}

export interface CalendarDayState {
	past: boolean
	current: boolean
	active: boolean
}
