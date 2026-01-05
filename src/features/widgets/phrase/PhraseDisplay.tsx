import { DraggableWrapper, type DraggableWrapperProps } from '../shared'
import type { LanguageCode } from '../shared/types'
import { PHRASES } from './constants'
import type { PhraseMode } from './types'

interface PhraseDisplayProps extends Pick<DraggableWrapperProps, 'containerWidth' | 'containerHeight'> {
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
	containerHeight,
	containerWidth,
}: PhraseDisplayProps) {
	const phrase = PHRASES[selectedIndex]

	if (mode === 'custom') {
		return (
			<div className="flex flex-col items-center gap-2 px-8">
				{customText && (
					<p className="text-2xl font-medium text-center text-zinc-900 dark:text-zinc-100">{customText}</p>
				)}
				{customSubtext && (
					<p className="text-sm font-light text-center text-zinc-500 dark:text-zinc-400">{customSubtext}</p>
				)}
			</div>
		)
	}

	return (
		<DraggableWrapper
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			initialY={containerHeight / 2 - 50}
			centerHorizontal
		>
			<div className="rounded-lg px-8 w-full">
				<p className="text-2xl font-medium text-center text-zinc-900 dark:text-zinc-100">{phrase.text}</p>
				{showHiragana && (
					<p className="text-sm font-light text-center text-zinc-500 dark:text-zinc-400">{phrase.reading}</p>
				)}
				{showTranslation && (
					<p className="text-xs font-light text-center text-zinc-400 dark:text-zinc-500 mt-1">
						{phrase.translations[translationLang]}
					</p>
				)}
			</div>
		</DraggableWrapper>
	)
}
