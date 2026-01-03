import { useState } from 'react'
import type { DaysLeftActions, DaysLeftState, ProgressMode } from './types'

export function useDaysLeft(): DaysLeftState & DaysLeftActions {
	const [showDay, setShowDay] = useState(true)
	const [dayMode, setDayMode] = useState<ProgressMode>('year')
	const [showPercentage, setShowPercentage] = useState(true)
	const [percentageMode, setPercentageMode] = useState<ProgressMode>('year')
	const [showDaysLeft, setShowDaysLeft] = useState(true)
	const [daysLeftMode, setDaysLeftMode] = useState<ProgressMode>('year')

	return {
		showDay,
		dayMode,
		showPercentage,
		percentageMode,
		showDaysLeft,
		daysLeftMode,
		setShowDay,
		setDayMode,
		setShowPercentage,
		setPercentageMode,
		setShowDaysLeft,
		setDaysLeftMode,
	}
}
