import type { CalendarActions, CalendarState } from '@/features/calendar'
import { CalendarControls } from '@/features/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/days-left'
import { DaysLeftControls } from '@/features/days-left'
import type { PhraseActions, PhraseState } from '@/features/phrase'
import { PhraseControls } from '@/features/phrase'

interface ControlsPanelProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
}

export default function ControlsPanel({ phrase, calendar, daysLeft }: ControlsPanelProps) {
	return (
		<div className="fixed bottom-0 left-0 right-0 h-[30vh] md:h-auto md:left-6 md:right-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-72 bg-zinc-900 border-t md:border border-zinc-800 p-5 shadow-2xl z-50 overflow-y-auto font-mono transition-all duration-300">
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
			<div className="border-t border-zinc-700 my-5" />

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
			<div className="border-t border-zinc-700 my-5" />

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
