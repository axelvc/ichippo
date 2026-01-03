import { PHRASES, LANGUAGES, type LanguageCode, type PhraseMode, type TimeMode, type DotStyle, type WeekStart, type ProgressMode } from '../../data/constants'

interface ControlsPanelProps {
	// Phrase settings
	phraseMode: PhraseMode
	setPhraseMode: (mode: PhraseMode) => void
	selectedPhraseIndex: number
	setSelectedPhraseIndex: (index: number) => void
	showHiragana: boolean
	setShowHiragana: (show: boolean) => void
	showTranslation: boolean
	setShowTranslation: (show: boolean) => void
	translationLang: LanguageCode
	setTranslationLang: (lang: LanguageCode) => void
	customText: string
	setCustomText: (text: string) => void
	customSubtext: string
	setCustomSubtext: (text: string) => void
	// CalendarDots settings
	timeMode: TimeMode
	setTimeMode: (mode: TimeMode) => void
	showLabel: boolean
	setShowLabel: (show: boolean) => void
	labelLang: LanguageCode | 'ja'
	setLabelLang: (lang: LanguageCode | 'ja') => void
	dotStyle: DotStyle
	setDotStyle: (style: DotStyle) => void
	weekStart: WeekStart
	setWeekStart: (start: WeekStart) => void
	// DaysLeft settings
	showDay: boolean
	setShowDay: (show: boolean) => void
	dayMode: ProgressMode
	setDayMode: (mode: ProgressMode) => void
	showPercentage: boolean
	setShowPercentage: (show: boolean) => void
	percentageMode: ProgressMode
	setPercentageMode: (mode: ProgressMode) => void
	showDaysLeft: boolean
	setShowDaysLeft: (show: boolean) => void
	daysLeftMode: ProgressMode
	setDaysLeftMode: (mode: ProgressMode) => void
}

export default function ControlsPanel({
	phraseMode,
	setPhraseMode,
	selectedPhraseIndex,
	setSelectedPhraseIndex,
	showHiragana,
	setShowHiragana,
	showTranslation,
	setShowTranslation,
	translationLang,
	setTranslationLang,
	customText,
	setCustomText,
	customSubtext,
	setCustomSubtext,
	timeMode,
	setTimeMode,
	showLabel,
	setShowLabel,
	labelLang,
	setLabelLang,
	dotStyle,
	setDotStyle,
	weekStart,
	setWeekStart,
	showDay,
	setShowDay,
	dayMode,
	setDayMode,
	showPercentage,
	setShowPercentage,
	percentageMode,
	setPercentageMode,
	showDaysLeft,
	setShowDaysLeft,
	daysLeftMode,
	setDaysLeftMode,
}: ControlsPanelProps) {
	// Reusable toggle component
	const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
		<button
			onClick={onChange}
			className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 ${
				enabled ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-700'
			}`}
		>
			<div
				className={`w-4 h-4 rounded-full bg-white dark:bg-neutral-900 transition-transform mx-1 ${
					enabled ? 'translate-x-4' : 'translate-x-0'
				}`}
			/>
		</button>
	)

	return (
		<div className="fixed left-6 top-1/2 -translate-y-1/2 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-lg z-50 max-h-[90vh] overflow-y-auto">
			{/* Phrase Settings */}
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Phrase</h3>

			{/* Mode Toggle */}
			<div className="mb-4">
				<div className="flex gap-1">
					{(['preset', 'custom'] as PhraseMode[]).map((mode) => (
						<button
							key={mode}
							onClick={() => setPhraseMode(mode)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								phraseMode === mode
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{mode === 'preset' ? 'Preset' : 'Custom'}
						</button>
					))}
				</div>
			</div>

			{phraseMode === 'preset' && (
				<>
					<div className="mb-4">
						<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Topic</label>
						<select
							value={selectedPhraseIndex}
							onChange={(e) => setSelectedPhraseIndex(Number(e.target.value))}
							className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
						>
							{PHRASES.map((phrase, i) => (
								<option key={phrase.id} value={i}>
									{phrase.text}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Hiragana</label>
						<Toggle enabled={showHiragana} onChange={() => setShowHiragana(!showHiragana)} />
					</div>

					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Translation</label>
						<Toggle enabled={showTranslation} onChange={() => setShowTranslation(!showTranslation)} />
					</div>

					{showTranslation && (
						<div className="mb-4">
							<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Language</label>
							<select
								value={translationLang}
								onChange={(e) => setTranslationLang(e.target.value as LanguageCode)}
								className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
							>
								{Object.entries(LANGUAGES).map(([code, name]) => (
									<option key={code} value={code}>
										{name}
									</option>
								))}
							</select>
						</div>
					)}
				</>
			)}

			{phraseMode === 'custom' && (
				<>
					<div className="mb-4">
						<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Main Text</label>
						<input
							type="text"
							value={customText}
							onChange={(e) => setCustomText(e.target.value)}
							className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
							placeholder="Enter main text..."
						/>
					</div>
					<div className="mb-4">
						<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Subtext</label>
						<input
							type="text"
							value={customSubtext}
							onChange={(e) => setCustomSubtext(e.target.value)}
							className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
							placeholder="Enter subtext..."
						/>
					</div>
				</>
			)}

			{/* Divider */}
			<div className="border-t border-neutral-200 dark:border-neutral-800 my-4" />

			{/* Progress Settings */}
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Progress</h3>

			{/* Time Mode */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Show</label>
				<div className="flex gap-1">
					{(['week', 'month'] as TimeMode[]).map((mode) => (
						<button
							key={mode}
							onClick={() => setTimeMode(mode)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								timeMode === mode
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{mode === 'week' ? 'Week' : 'Month'}
						</button>
					))}
				</div>
			</div>

			{/* Week Start */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Week starts on</label>
				<div className="flex gap-1">
					{(['monday', 'sunday'] as WeekStart[]).map((start) => (
						<button
							key={start}
							onClick={() => setWeekStart(start)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								weekStart === start
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{start === 'monday' ? 'Mon' : 'Sun'}
						</button>
					))}
				</div>
			</div>

			{/* Show Label (only for week) */}
			{timeMode === 'week' && (
				<>
					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Show Label</label>
						<Toggle enabled={showLabel} onChange={() => setShowLabel(!showLabel)} />
					</div>

					{showLabel && (
						<div className="mb-4">
							<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Label Language</label>
							<select
								value={labelLang}
								onChange={(e) => setLabelLang(e.target.value as LanguageCode | 'ja')}
								className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
							>
								<option value="ja">日本語</option>
								{Object.entries(LANGUAGES).map(([code, name]) => (
									<option key={code} value={code}>
										{name}
									</option>
								))}
							</select>
						</div>
					)}
				</>
			)}

			{/* Style */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Style</label>
				<div className="flex gap-1">
					{(['dots', 'lines', 'squares'] as DotStyle[]).map((style) => (
						<button
							key={style}
							onClick={() => setDotStyle(style)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								dotStyle === style
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{style.charAt(0).toUpperCase() + style.slice(1)}
						</button>
					))}
				</div>
			</div>

			{/* Divider */}
			<div className="border-t border-neutral-200 dark:border-neutral-800 my-4" />

			{/* Days Left Settings */}
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Days Left</h3>

			{/* Day - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Day</label>
				<Toggle enabled={showDay} onChange={() => setShowDay(!showDay)} />
			</div>

			{showDay && (
				<div className="mb-4">
					<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Day Mode</label>
					<div className="flex gap-1">
						{(['week', 'month', 'year'] as ProgressMode[]).map((mode) => (
							<button
								key={mode}
								onClick={() => setDayMode(mode)}
								className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
									dayMode === mode
										? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
										: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
								}`}
							>
								{mode.charAt(0).toUpperCase() + mode.slice(1)}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Percentage - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Percentage</label>
				<Toggle enabled={showPercentage} onChange={() => setShowPercentage(!showPercentage)} />
			</div>

			{showPercentage && (
				<div className="mb-4">
					<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Percentage Mode</label>
					<div className="flex gap-1">
						{(['week', 'month', 'year'] as ProgressMode[]).map((mode) => (
							<button
								key={mode}
								onClick={() => setPercentageMode(mode)}
								className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
									percentageMode === mode
										? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
										: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
								}`}
							>
								{mode.charAt(0).toUpperCase() + mode.slice(1)}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Days Left - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Days Left</label>
				<Toggle enabled={showDaysLeft} onChange={() => setShowDaysLeft(!showDaysLeft)} />
			</div>

			{showDaysLeft && (
				<div className="mb-4">
					<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Days Left Mode</label>
					<div className="flex gap-1">
						{(['week', 'month', 'year'] as ProgressMode[]).map((mode) => (
							<button
								key={mode}
								onClick={() => setDaysLeftMode(mode)}
								className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
									daysLeftMode === mode
										? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
										: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
								}`}
							>
								{mode.charAt(0).toUpperCase() + mode.slice(1)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
