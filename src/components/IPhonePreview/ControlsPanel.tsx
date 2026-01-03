import { PHRASES, LANGUAGES, type LanguageCode, type PhraseMode } from '../../data/constants'

interface ControlsPanelProps {
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
}: ControlsPanelProps) {
	return (
		<div className="fixed left-6 top-1/2 -translate-y-1/2 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-lg z-50">
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Phrase Settings</h3>

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
					{/* Topic Selection */}
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

					{/* Hiragana Toggle */}
					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Hiragana</label>
						<button
							onClick={() => setShowHiragana(!showHiragana)}
							className={`w-10 h-6 rounded-full transition-colors ${
								showHiragana ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-700'
							}`}
						>
							<div
								className={`w-4 h-4 rounded-full bg-white dark:bg-neutral-900 transition-transform mx-1 ${
									showHiragana ? 'translate-x-4' : 'translate-x-0'
								}`}
							/>
						</button>
					</div>

					{/* Translation Toggle */}
					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Translation</label>
						<button
							onClick={() => setShowTranslation(!showTranslation)}
							className={`w-10 h-6 rounded-full transition-colors ${
								showTranslation ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-700'
							}`}
						>
							<div
								className={`w-4 h-4 rounded-full bg-white dark:bg-neutral-900 transition-transform mx-1 ${
									showTranslation ? 'translate-x-4' : 'translate-x-0'
								}`}
							/>
						</button>
					</div>

					{/* Language Selection */}
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

			{/* Custom Options */}
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
		</div>
	)
}
