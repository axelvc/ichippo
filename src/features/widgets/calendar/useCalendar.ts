import { useState } from 'react'
import type { CalendarActions, CalendarState, DotStyle, TimeMode, WeekStart } from './types'
import type { LanguageCode } from '../shared/types'

export function useCalendar(): CalendarState & CalendarActions {
	const [enabled, setEnabled] = useState(true)
	const [timeMode, setTimeMode] = useState<TimeMode>('week')
	const [showLabel, setShowLabel] = useState(true)
	const [labelLang, setLabelLang] = useState<LanguageCode>('ja')
	const [dotStyle, setDotStyle] = useState<DotStyle>('dots')
	const [weekStart, setWeekStart] = useState<WeekStart>('monday')

	return {
		enabled,
		timeMode,
		showLabel,
		labelLang,
		dotStyle,
		weekStart,
		setEnabled,
		setTimeMode,
		setShowLabel,
		setLabelLang,
		setDotStyle,
		setWeekStart,
	}
}
