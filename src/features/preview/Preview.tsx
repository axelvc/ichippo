import { useRef } from 'react'
import { ControlsPanel } from '@/features/controls'
import { CalendarDisplay, useCalendar } from '@/features/widgets/calendar'
import { DaysLeftDisplay, useDaysLeft } from '@/features/widgets/days-left'
import { PhraseDisplay, usePhrase } from '@/features/widgets/phrase'
import { DraggableWrapper } from './DraggableWrapper.tsx'
import { PhoneOverlay } from './PhoneOverlay'
import { usePreviewState } from './usePreviewState.ts'

export function Preview() {
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
				className="dark relative overflow-hidden bg-white dark:bg-black rounded-[70px] transition-all duration-200 shadow-2xl ring-4 ring-zinc-800 font-apple"
				style={{
					width: `${preview.size.width}px`,
					height: `${preview.size.height}px`,
				}}
			>
				{preview.isPreview && <PhoneOverlay />}

				{phrase.enabled && (
					<DraggableWrapper
						container={containerRef}
						yOffsetPercent={preview.widgetOffsets.phrase}
						onOffsetChange={(offset) => preview.setWidgetOffset('phrase', offset)}
					>
						<PhraseDisplay
							mode={phrase.mode}
							mainLang={phrase.mainLang}
							subtextMode={phrase.subtextMode}
							subtextLang={phrase.subtextLang}
							customText={phrase.customText}
							customSubtext={phrase.customSubtext}
						/>
					</DraggableWrapper>
				)}
				{calendar.enabled && (
					<DraggableWrapper
						container={containerRef}
						yOffsetPercent={preview.widgetOffsets.calendar}
						onOffsetChange={(offset) => preview.setWidgetOffset('calendar', offset)}
					>
						<CalendarDisplay
							timeMode={calendar.timeMode}
							showLabel={calendar.showLabel}
							labelLang={calendar.labelLang}
							dotStyle={calendar.dotStyle}
							weekStart={calendar.weekStart}
						/>
					</DraggableWrapper>
				)}
				{daysLeft.enabled && (
					<DraggableWrapper
						container={containerRef}
						yOffsetPercent={preview.widgetOffsets.daysLeft}
						onOffsetChange={(offset) => preview.setWidgetOffset('daysLeft', offset)}
					>
						<DaysLeftDisplay mode={daysLeft.mode} dateMode={daysLeft.dateMode} weekStart={daysLeft.weekStart} />
					</DraggableWrapper>
				)}
			</main>
		</div>
	)
}
