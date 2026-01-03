import { useState, useEffect } from 'react'
import {
	IPHONE_MODELS,
	PHRASES,
	SCALE_FACTOR,
	type ModelName,
	type LanguageCode,
	type PhraseMode,
	type TimeMode,
	type DotStyle,
	type WeekStart,
} from '../../data/constants'
import CalendarDots from '../CalendarDots'
import ModelSelector from './ModelSelector'
import ControlsPanel from './ControlsPanel'
import PhoneOverlay from './PhoneOverlay'

export default function IPhonePreview() {
	const [isPreview, setIsPreview] = useState(false)
	const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const [showControls, setShowControls] = useState(false)

	// Phrase controls
	const [phraseMode, setPhraseMode] = useState<PhraseMode>('preset')
	const [selectedPhraseIndex, setSelectedPhraseIndex] = useState(0)
	const [showHiragana, setShowHiragana] = useState(false)
	const [showTranslation, setShowTranslation] = useState(true)
	const [translationLang, setTranslationLang] = useState<LanguageCode>('en')
	const [customText, setCustomText] = useState('Your phrase here')
	const [customSubtext, setCustomSubtext] = useState('Your subtext here')

	// CalendarDots controls
	const [timeMode, setTimeMode] = useState<TimeMode>('week')
	const [showLabel, setShowLabel] = useState(true)
	const [labelLang, setLabelLang] = useState<LanguageCode | 'ja'>('ja')
	const [dotStyle, setDotStyle] = useState<DotStyle>('dots')
	const [weekStart, setWeekStart] = useState<WeekStart>('monday')

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

	// Get current phrase content
	const getPhraseContent = () => {
		if (phraseMode === 'custom') {
			return { text: customText, subtext: customSubtext }
		}

		const phrase = PHRASES[selectedPhraseIndex]
		let subtext = ''

		if (showHiragana && showTranslation) {
			subtext = `${phrase.reading}\n${phrase.translations[translationLang]}`
		} else if (showHiragana) {
			subtext = phrase.reading
		} else if (showTranslation) {
			subtext = phrase.translations[translationLang]
		}

		return { text: phrase.text, subtext }
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
				<ControlsPanel
					phraseMode={phraseMode}
					setPhraseMode={setPhraseMode}
					selectedPhraseIndex={selectedPhraseIndex}
					setSelectedPhraseIndex={setSelectedPhraseIndex}
					showHiragana={showHiragana}
					setShowHiragana={setShowHiragana}
					showTranslation={showTranslation}
					setShowTranslation={setShowTranslation}
					translationLang={translationLang}
					setTranslationLang={setTranslationLang}
					customText={customText}
					setCustomText={setCustomText}
					customSubtext={customSubtext}
					setCustomSubtext={setCustomSubtext}
					timeMode={timeMode}
					setTimeMode={setTimeMode}
					showLabel={showLabel}
					setShowLabel={setShowLabel}
					labelLang={labelLang}
					setLabelLang={setLabelLang}
					dotStyle={dotStyle}
					setDotStyle={setDotStyle}
					weekStart={weekStart}
					setWeekStart={setWeekStart}
				/>
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
					className={`w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-[50px] flex flex-col justify-center items-center gap-3 transition-all duration-300 ${
						isPreview ? 'shadow-2xl' : ''
					}`}
				>
					<p className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 tracking-widest">
						{phraseContent.text}
					</p>
					<p className="text-sm font-light text-neutral-400 dark:text-neutral-500 mb-8 whitespace-pre-line text-center">
						{phraseContent.subtext}
					</p>
					<CalendarDots timeMode={timeMode} showLabel={showLabel} labelLang={labelLang} dotStyle={dotStyle} weekStart={weekStart} />
				</main>
			</div>

			{/* Resolution indicator */}
			<div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-400 dark:text-neutral-600">
				{currentDevice.width} × {currentDevice.height}
			</div>
		</>
	)
}
