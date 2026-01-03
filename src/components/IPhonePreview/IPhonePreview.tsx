import { useState, useEffect } from 'react'
import { IPHONE_MODELS, SCALE_FACTOR, type ModelName } from '../../data/constants'
import { usePhrase, PhraseDisplay, PHRASES } from '../../features/phrase'
import { useCalendar, CalendarDisplay } from '../../features/calendar'
import { useDaysLeft, DaysLeftDisplay } from '../../features/days-left'
import ModelSelector from './ModelSelector'
import ControlsPanel from './ControlsPanel'
import PhoneOverlay from './PhoneOverlay'

export default function IPhonePreview() {
	const [isPreview, setIsPreview] = useState(false)
	const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const [showControls, setShowControls] = useState(false)

	// Feature hooks
	const phrase = usePhrase()
	const calendar = useCalendar()
	const daysLeft = useDaysLeft()

	const currentDevice = IPHONE_MODELS[selectedModel]
	const scaledWidth = Math.round(currentDevice.width / SCALE_FACTOR)
	const scaledHeight = Math.round(currentDevice.height / SCALE_FACTOR)

	useEffect(() => {
		const updateClock = () => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes().toString().padStart(2, '0')
			setTime(`${hours}:${minutes}`)

			const options: Intl.DateTimeFormatOptions = {
				weekday: 'long',
				month: 'long',
				day: 'numeric',
			}
			setDate(now.toLocaleDateString('en-US', options))
		}

		updateClock()
		const interval = setInterval(updateClock, 1000)
		return () => clearInterval(interval)
	}, [])

	// Get current phrase content for legacy display
	const getPhraseContent = () => {
		if (phrase.mode === 'custom') {
			return { text: phrase.customText, subtext: phrase.customSubtext }
		}

		const currentPhrase = PHRASES[phrase.selectedIndex]
		let subtext = ''

		if (phrase.showHiragana && phrase.showTranslation) {
			subtext = `${currentPhrase.reading}\n${currentPhrase.translations[phrase.translationLang]}`
		} else if (phrase.showHiragana) {
			subtext = currentPhrase.reading
		} else if (phrase.showTranslation) {
			subtext = currentPhrase.translations[phrase.translationLang]
		}

		return { text: currentPhrase.text, subtext }
	}

	const phraseContent = getPhraseContent()

	return (
		<>
			{/* Top Controls */}
			<div className="fixed top-6 right-6 flex items-center gap-3 z-50">
				<ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

				<button
					onClick={() => setShowControls(!showControls)}
					className="px-3 py-1.5 text-xs font-light rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
				>
					{showControls ? 'Hide' : 'Edit'}
				</button>

				<button
					onClick={() => setIsPreview(!isPreview)}
					className="px-3 py-1.5 text-xs font-light rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
				>
					{isPreview ? 'Exit' : 'Preview'}
				</button>
			</div>

			{/* Controls Panel */}
			{showControls && (
				<ControlsPanel phrase={phrase} calendar={calendar} daysLeft={daysLeft} />
			)}

			{/* iPhone Frame Container */}
			<div
				className="relative flex items-center justify-center transition-all duration-300"
				style={{
					width: `${scaledWidth}px`,
					height: `${scaledHeight}px`,
				}}
			>
				<PhoneOverlay isVisible={isPreview} time={time} date={date} />

				{/* Main Content */}
				<main
					className={`w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-[50px] flex flex-col justify-center items-center gap-3 transition-all duration-300 relative ${
						isPreview ? 'shadow-2xl' : ''
					}`}
				>
					<p className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 tracking-widest">
						{phraseContent.text}
					</p>
					<p className="text-sm font-light text-neutral-400 dark:text-neutral-500 mb-8 whitespace-pre-line text-center">
						{phraseContent.subtext}
					</p>
					<CalendarDisplay
						timeMode={calendar.timeMode}
						showLabel={calendar.showLabel}
						labelLang={calendar.labelLang}
						dotStyle={calendar.dotStyle}
						weekStart={calendar.weekStart}
					/>

					{/* Days Left - bottom center */}
					<div className="absolute bottom-16 left-1/2 -translate-x-1/2">
						<DaysLeftDisplay
							showDay={daysLeft.showDay}
							dayMode={daysLeft.dayMode}
							showPercentage={daysLeft.showPercentage}
							percentageMode={daysLeft.percentageMode}
							showDaysLeft={daysLeft.showDaysLeft}
							daysLeftMode={daysLeft.daysLeftMode}
						/>
					</div>
				</main>
			</div>

			{/* Resolution indicator */}
			<div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-400 dark:text-neutral-600">
				{currentDevice.width} × {currentDevice.height}
			</div>
		</>
	)
}
