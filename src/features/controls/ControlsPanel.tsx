import type { CalendarActions, CalendarState } from '@/features/widgets/calendar'
import { CalendarControls } from '@/features/widgets/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/widgets/days-left'
import { DaysLeftControls } from '@/features/widgets/days-left'
import type { PhraseActions, PhraseState } from '@/features/widgets/phrase'
import { PhraseControls } from '@/features/widgets/phrase'

interface ControlsPanelProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
}

export function ControlsPanel({ phrase, calendar, daysLeft }: ControlsPanelProps) {
	return (
		<div className="fixed bottom-0 left-0 right-0 max-h-1/3 md:max-h-9/10 md:left-6 md:right-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-72 bg-zinc-900 border-t md:border border-zinc-800 p-5 shadow-2xl z-50 overflow-y-auto font-mono transition-all duration-300">
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
				enabled={calendar.enabled}
				setEnabled={calendar.setEnabled}
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
				enabled={daysLeft.enabled}
				setEnabled={daysLeft.setEnabled}
				mode={daysLeft.mode}
				setMode={daysLeft.setMode}
				dateMode={daysLeft.dateMode}
				setDateMode={daysLeft.setDateMode}
				weekStart={daysLeft.weekStart}
				setWeekStart={daysLeft.setWeekStart}
			/>
		</div>
	)
}
