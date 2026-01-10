import { useEffect, useMemo, useRef, useState } from 'react'
import { type CalendarActions, CalendarDisplay, type CalendarState } from '@/features/widgets/calendar'
import { type DaysLeftActions, DaysLeftDisplay, type DaysLeftState } from '@/features/widgets/days-left'
import { type PhraseActions, PhraseDisplay, type PhraseState } from '@/features/widgets/phrase'
import type dayjs from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { DraggableWrapper } from './DraggableWrapper'
import { PhoneOverlay } from './PhoneOverlay'
import type { PreviewActions, PreviewState } from './types'

interface MobilePreviewProps {
	activeTab: string
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
	preview: PreviewState & PreviewActions
	now: dayjs.Dayjs
	className?: string
	isMobile?: boolean
}

export function MobilePreview({
	activeTab,
	phrase,
	calendar,
	daysLeft,
	preview,
	now,
	className,
	isMobile,
}: MobilePreviewProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [containerHeight, setContainerHeight] = useState(preview.size.height)

	useEffect(() => {
		if (!isMobile) return setContainerHeight(preview.size.height)
		if (!containerRef.current) return setContainerHeight(0)

		setContainerHeight(containerRef.current.clientHeight)
	}, [isMobile, preview.size.height])

	return (
		<div
			ref={containerRef}
			className={cn(
				'dark relative overflow-hidden bg-white dark:bg-black rounded-[70px] transition-all duration-200 shadow-2xl ring-4 ring-zinc-800 font-apple',
				className,
			)}
			style={
				isMobile
					? {}
					: {
							width: `${preview.size.width}px`,
							height: `${preview.size.height}px`,
						}
			}
		>
			{preview.isPreview && <PhoneOverlay />}

			{phrase.enabled && (
				<DraggableWrapper
					containerHeight={containerHeight}
					yOffsetPercent={preview.widgetOffsets.phrase}
					onOffsetChange={(offset) => preview.setWidgetOffset('phrase', offset)}
					isDraggable={activeTab === 'customize' || activeTab === 'preview'}
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
					containerHeight={containerHeight}
					yOffsetPercent={preview.widgetOffsets.calendar}
					onOffsetChange={(offset) => preview.setWidgetOffset('calendar', offset)}
					isDraggable={activeTab === 'customize' || activeTab === 'preview'}
				>
					<CalendarDisplay
						now={now}
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
					containerHeight={containerHeight}
					yOffsetPercent={preview.widgetOffsets.daysLeft}
					onOffsetChange={(offset) => preview.setWidgetOffset('daysLeft', offset)}
					isDraggable={activeTab === 'customize' || activeTab === 'preview'}
				>
					<DaysLeftDisplay now={now} mode={daysLeft.mode} dateMode={daysLeft.dateMode} weekStart={daysLeft.weekStart} />
				</DraggableWrapper>
			)}
		</div>
	)
}
