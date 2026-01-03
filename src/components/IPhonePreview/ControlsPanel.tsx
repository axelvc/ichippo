import { PhraseControls } from '../../features/phrase'
import { CalendarControls } from '../../features/calendar'
import { DaysLeftControls } from '../../features/days-left'
import type { PhraseState, PhraseActions } from '../../features/phrase'
import type { CalendarState, CalendarActions } from '../../features/calendar'
import type { DaysLeftState, DaysLeftActions } from '../../features/days-left'

interface ControlsPanelProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
}

export default function ControlsPanel({ phrase, calendar, daysLeft }: ControlsPanelProps) {
	return (
		<div className="fixed left-6 top-1/2 -translate-y-1/2 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-lg z-50 max-h-[90vh] overflow-y-auto">
			{/* Phrase Settings */}
			<PhraseControls
				mode={phrase.mode}
				setMode={phrase.setMode}
				selectedIndex={phrase.selectedIndex}
				setSelectedIndex={phrase.setSelectedIndex}
				showHiragana={phrase.showHiragana}
				setShowHiragana={phrase.setShowHiragana}
				showTranslation={phrase.showTranslation}
				setShowTranslation={phrase.setShowTranslation}
				translationLang={phrase.translationLang}
				setTranslationLang={phrase.setTranslationLang}
				customText={phrase.customText}
				setCustomText={phrase.setCustomText}
				customSubtext={phrase.customSubtext}
				setCustomSubtext={phrase.setCustomSubtext}
			/>

			{/* Divider */}
			<div className="border-t border-neutral-200 dark:border-neutral-800 my-4" />

			{/* Calendar Settings */}
			<CalendarControls
				timeMode={calendar.timeMode}
				setTimeMode={calendar.setTimeMode}
				showLabel={calendar.showLabel}
				setShowLabel={calendar.setShowLabel}
				labelLang={calendar.labelLang}
				setLabelLang={calendar.setLabelLang}
				dotStyle={calendar.dotStyle}
				setDotStyle={calendar.setDotStyle}
				weekStart={calendar.weekStart}
				setWeekStart={calendar.setWeekStart}
			/>

			{/* Divider */}
			<div className="border-t border-neutral-200 dark:border-neutral-800 my-4" />

			{/* Days Left Settings */}
			<DaysLeftControls
				showDay={daysLeft.showDay}
				setShowDay={daysLeft.setShowDay}
				dayMode={daysLeft.dayMode}
				setDayMode={daysLeft.setDayMode}
				showPercentage={daysLeft.showPercentage}
				setShowPercentage={daysLeft.setShowPercentage}
				percentageMode={daysLeft.percentageMode}
				setPercentageMode={daysLeft.setPercentageMode}
				showDaysLeft={daysLeft.showDaysLeft}
				setShowDaysLeft={daysLeft.setShowDaysLeft}
				daysLeftMode={daysLeft.daysLeftMode}
				setDaysLeftMode={daysLeft.setDaysLeftMode}
			/>
		</div>
	)
}
