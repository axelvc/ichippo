import { useRef } from 'react'
import { ControlsPanel } from '@/features/controls/ControlsPanel'
import { CalendarDisplay, useCalendar } from '@/features/widgets/calendar'
import { DaysLeftDisplay, useDaysLeft } from '@/features/widgets/days-left'
import { PhraseDisplay, usePhrase } from '@/features/widgets/phrase'
import PhoneOverlay from './PhoneOverlay'
import { usePreviewState } from './usePreviewState.ts'

export default function Preview() {
	// Feature hooks
	const phrase = usePhrase()
	const calendar = useCalendar()
	const daysLeft = useDaysLeft()
	const preview = usePreviewState()

	const containerRef = useRef<HTMLDivElement>(null)

	return (
		<div className="w-220 grid grid-cols-[auto_1fr] place-items-center gap-8">
			<ControlsPanel phrase={phrase} calendar={calendar} daysLeft={daysLeft} preview={preview} />

			<main
				ref={containerRef}
				className="box-content relative overflow-hidden bg-white dark:bg-black rounded-[70px] transition-all duration-200 shadow-2xl border-4 border-zinc-800"
				style={{
					width: `${preview.size.width}px`,
					height: `${preview.size.height}px`,
				}}
			>
				{preview.isPreview && <PhoneOverlay />}

				{phrase.enabled && (
					<PhraseDisplay
						mode={phrase.mode}
						selectedIndex={phrase.selectedIndex}
						showHiragana={phrase.showHiragana}
						showTranslation={phrase.showTranslation}
						translationLang={phrase.translationLang}
						customText={phrase.customText}
						customSubtext={phrase.customSubtext}
						containerRef={containerRef}
					/>
				)}
				{calendar.enabled && (
					<CalendarDisplay
						timeMode={calendar.timeMode}
						showLabel={calendar.showLabel}
						labelLang={calendar.labelLang}
						dotStyle={calendar.dotStyle}
						weekStart={calendar.weekStart}
						containerRef={containerRef}
					/>
				)}
				{daysLeft.enabled && (
					<DaysLeftDisplay
						mode={daysLeft.mode}
						dateMode={daysLeft.dateMode}
						weekStart={daysLeft.weekStart}
						containerRef={containerRef}
					/>
				)}
			</main>
		</div>
	)
}
