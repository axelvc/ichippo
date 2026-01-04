export type DateMode = 'week' | 'month' | 'year'

export type DaysLeftMode = 'count' | 'daysLeft' | 'percentage'

export interface DaysLeftState {
	enabled: boolean
	mode: DaysLeftMode
	dateMode: DateMode
}

export interface DaysLeftActions {
	setEnabled: (enabled: boolean) => void
	setMode: (mode: DaysLeftMode) => void
	setDateMode: (dateMode: DateMode) => void
}
