import { Toggle } from '../shared'
import { PHRASES, LANGUAGES } from './constants'
import type { PhraseMode, LanguageCode } from './types'

interface PhraseControlsProps {
	mode: PhraseMode
	setMode: (mode: PhraseMode) => void
	selectedIndex: number
	setSelectedIndex: (index: number) => void
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

export function PhraseControls({
	mode,
	setMode,
	selectedIndex,
	setSelectedIndex,
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
}: PhraseControlsProps) {
	return (
		<>
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Phrase</h3>

			{/* Mode Toggle */}
			<div className="mb-4">
				<div className="flex gap-1">
					{(['preset', 'custom'] as PhraseMode[]).map((m) => (
						<button
							key={m}
							onClick={() => setMode(m)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								mode === m
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{m === 'preset' ? 'Preset' : 'Custom'}
						</button>
					))}
				</div>
			</div>

			{mode === 'preset' && (
				<>
					<div className="mb-4">
						<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Topic</label>
						<select
							value={selectedIndex}
							onChange={(e) => setSelectedIndex(Number(e.target.value))}
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

			{mode === 'custom' && (
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
		</>
	)
}
