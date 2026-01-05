import { useState } from 'react'
import type { DateMode, DaysLeftActions, DaysLeftMode, DaysLeftState, WeekStart } from './types'

export function useDaysLeft(): DaysLeftState & DaysLeftActions {
	const [enabled, setEnabled] = useState(true)
	const [mode, setMode] = useState<DaysLeftMode>('count')
	const [dateMode, setDateMode] = useState<DateMode>('year')
	const [weekStart, setWeekStart] = useState<WeekStart>('monday')

	return {
		enabled,
		mode,
		dateMode,
		weekStart,
		setEnabled,
		setMode,
		setDateMode,
		setWeekStart,
	}
}
