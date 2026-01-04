import { useState } from 'react'
import type { DateMode, DaysLeftActions, DaysLeftMode, DaysLeftState } from './types'

export function useDaysLeft(): DaysLeftState & DaysLeftActions {
	const [enabled, setEnabled] = useState(true)
	const [mode, setMode] = useState<DaysLeftMode>('count')
	const [dateMode, setDateMode] = useState<DateMode>('year')

	return {
		enabled,
		mode,
		dateMode,
		setEnabled,
		setMode,
		setDateMode,
	}
}
