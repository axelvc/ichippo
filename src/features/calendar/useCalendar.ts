import { useState } from 'react'
import type { TimeMode, DotStyle, WeekStart, CalendarLang, CalendarState, CalendarActions } from './types'

export function useCalendar(): CalendarState & CalendarActions {
	const [timeMode, setTimeMode] = useState<TimeMode>('week')
	const [showLabel, setShowLabel] = useState(true)
	const [labelLang, setLabelLang] = useState<CalendarLang>('ja')
	const [dotStyle, setDotStyle] = useState<DotStyle>('dots')
	const [weekStart, setWeekStart] = useState<WeekStart>('monday')

	return {
		timeMode,
		showLabel,
		labelLang,
		dotStyle,
		weekStart,
		setTimeMode,
		setShowLabel,
		setLabelLang,
		setDotStyle,
		setWeekStart,
	}
}
