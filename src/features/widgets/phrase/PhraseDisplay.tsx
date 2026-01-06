import { cn } from '@/lib/utils'
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

	return (
		<div className="flex flex-col items-center gap-1 rounded-lg px-8 w-full)">
			{text && (
				<p
					className={cn(
						'mb-1 text-2xl font-medium text-center text-zinc-901 dark:text-zinc-100',
						mode === 'preset' && 'font-zen',
					)}
				>
					{text}
				</p>
			)}
			<div className="text-sm font-extralight text-center text-zinc-400 dark:text-zinc-500">
				{isCustom && customSubtext && <p>{customSubtext}</p>}
				{!isCustom && showHiragana && <p className="font-zen">{phrase.reading}</p>}
				{!isCustom && showTranslation && <p>{phrase.translations[translationLang]}</p>}
			</div>
		</div>
	)
}
