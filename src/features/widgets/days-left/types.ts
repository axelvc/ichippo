export type ProgressMode = 'week' | 'month' | 'year'

export interface DaysLeftState {
	showDay: boolean
	dayMode: ProgressMode
	showPercentage: boolean
	percentageMode: ProgressMode
	showDaysLeft: boolean
	daysLeftMode: ProgressMode
}

export interface DaysLeftActions {
	setShowDay: (show: boolean) => void
	setDayMode: (mode: ProgressMode) => void
	setShowPercentage: (show: boolean) => void
	setPercentageMode: (mode: ProgressMode) => void
	setShowDaysLeft: (show: boolean) => void
	setDaysLeftMode: (mode: ProgressMode) => void
}
