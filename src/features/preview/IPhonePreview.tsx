import { useEffect, useRef, useState } from 'react'
import { ControlsPanel } from '@/features/controls/ControlsPanel'
import { IPHONE_MODELS, type ModelName } from '@/features/controls/constants.ts'
import { TopControls } from '@/features/controls/TopControls'
import { CalendarDisplay, useCalendar } from '@/features/widgets/calendar'
import { DaysLeftDisplay, useDaysLeft } from '@/features/widgets/days-left'
import { PhraseDisplay, usePhrase } from '@/features/widgets/phrase'
import { SCALE_FACTOR } from './constants.ts'
import PhoneOverlay from './PhoneOverlay'

export default function IPhonePreview() {
	const [isPreview, setIsPreview] = useState(false)
	const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')
	const [showControls, setShowControls] = useState(true)
	const [viewportScale, setViewportScale] = useState(1)

	// Feature hooks
	const phrase = usePhrase()
	const calendar = useCalendar()
	const daysLeft = useDaysLeft()

	const containerRef = useRef<HTMLDivElement>(null)

	const currentDevice = IPHONE_MODELS[selectedModel]
	const scaledWidth = Math.round(currentDevice.width / SCALE_FACTOR)
	const scaledHeight = Math.round(currentDevice.height / SCALE_FACTOR)

	// Viewport scaling logic
	useEffect(() => {
		const updateScale = () => {
			const padding = 48 // total padding
			const availableWidth = window.innerWidth - padding
			if (availableWidth < scaledWidth) {
				setViewportScale(availableWidth / scaledWidth)
			} else {
				setViewportScale(1)
			}
		}

		updateScale()
		window.addEventListener('resize', updateScale)
		return () => window.removeEventListener('resize', updateScale)
	}, [scaledWidth])

	return (
		<>
			<TopControls
				selectedModel={selectedModel}
				setSelectedModel={setSelectedModel}
				showControls={showControls}
				setShowControls={setShowControls}
				isPreview={isPreview}
				setIsPreview={setIsPreview}
			/>

			{showControls && <ControlsPanel phrase={phrase} calendar={calendar} daysLeft={daysLeft} />}

			{/* iPhone Frame Container */}
			<main
				ref={containerRef}
				className="relative overflow-hidden bg-white dark:bg-black rounded-[50px] transition-all duration-200 shadow-2xl"
				style={{
					width: `${scaledWidth}px`,
					height: `${scaledHeight}px`,
					transform: `scale(${viewportScale})`,
				}}
			>
				{isPreview && <PhoneOverlay />}

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
		</>
	)
}
