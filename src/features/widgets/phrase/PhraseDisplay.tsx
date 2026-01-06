import { PHRASES } from './constants'
import type { PhraseState } from './types'

export function PhraseDisplay({
	mode,
	selectedIndex,
	showHiragana,
	showTranslation,
	translationLang,
	customText,
	customSubtext,
}: Omit<PhraseState, 'enabled'>) {
	const phrase = PHRASES[selectedIndex]

	const isCustom = mode === 'custom'
	const text = isCustom ? customText : phrase.text

	const subTexts = [
		isCustom && customSubtext,
		!isCustom && showHiragana && phrase.reading,
		!isCustom && showTranslation && phrase.translations[translationLang],
	].filter(Boolean)

	return (
		<div className="flex flex-col items-center gap-1 font-zen rounded-lg px-8 w-full">
			{text && <p className="mb-1 text-2xl font-medium text-center text-zinc-900 dark:text-zinc-100">{text}</p>}
			{subTexts.map((text, i) => (
				<p key={String(i)} className="text-sm font-light text-center text-zinc-400 dark:text-zinc-500">
					{text}
				</p>
			))}
		</div>
	)
}
