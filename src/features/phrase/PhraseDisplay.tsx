import type { PhraseMode, LanguageCode } from './types'
import { PHRASES } from './constants'

interface PhraseDisplayProps {
	mode: PhraseMode
	selectedIndex: number
	showHiragana: boolean
	showTranslation: boolean
	translationLang: LanguageCode
	customText: string
	customSubtext: string
}

export function PhraseDisplay({
	mode,
	selectedIndex,
	showHiragana,
	showTranslation,
	translationLang,
	customText,
	customSubtext,
}: PhraseDisplayProps) {
	const phrase = PHRASES[selectedIndex]

	if (mode === 'custom') {
		return (
			<div className="flex flex-col items-center gap-2 px-8">
				{customText && (
					<p className="text-2xl font-medium text-center text-neutral-900 dark:text-neutral-100">
						{customText}
					</p>
				)}
				{customSubtext && (
					<p className="text-sm font-light text-center text-neutral-500 dark:text-neutral-400">
						{customSubtext}
					</p>
				)}
			</div>
		)
	}

	return (
		<div className="flex flex-col items-center gap-2 px-8">
			<p className="text-2xl font-medium text-center text-neutral-900 dark:text-neutral-100">
				{phrase.text}
			</p>
			{showHiragana && (
				<p className="text-sm font-light text-center text-neutral-500 dark:text-neutral-400">
					{phrase.reading}
				</p>
			)}
			{showTranslation && (
				<p className="text-xs font-light text-center text-neutral-400 dark:text-neutral-500 mt-1">
					{phrase.translations[translationLang]}
				</p>
			)}
		</div>
	)
}
