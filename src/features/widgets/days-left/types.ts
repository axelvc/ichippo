export type DateMode = 'week' | 'month' | 'year'
export type WeekStart = 'monday' | 'sunday'

export type DaysLeftMode = 'count' | 'daysLeft' | 'percentage'

export interface DaysLeftState {
	enabled: boolean
	mode: DaysLeftMode
	dateMode: DateMode
	weekStart: WeekStart
}

export interface DaysLeftActions {
	setEnabled: (enabled: boolean) => void
	setMode: (mode: DaysLeftMode) => void
	setDateMode: (dateMode: DateMode) => void
	setWeekStart: (start: WeekStart) => void
}
