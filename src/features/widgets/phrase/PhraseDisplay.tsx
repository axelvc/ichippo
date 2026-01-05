import type { RefObject } from 'react'
import { DraggableWrapper } from '../shared/components/DraggableWrapper'
import type { LanguageCode } from '../shared/types'
import { PHRASES } from './constants'
import type { PhraseMode } from './types'

interface PhraseDisplayProps {
	mode: PhraseMode
	selectedIndex: number
	showHiragana: boolean
	showTranslation: boolean
	translationLang: LanguageCode
	customText: string
	customSubtext: string
	containerRef?: RefObject<HTMLDivElement>
}

export function PhraseDisplay({
	mode,
	selectedIndex,
	showHiragana,
	showTranslation,
	translationLang,
	customText,
	customSubtext,
	containerRef,
}: PhraseDisplayProps) {
	const phrase = PHRASES[selectedIndex]

	const isCustom = mode === 'custom'
	const text = isCustom ? customText : phrase.text

	const subTexts = [
		isCustom && customSubtext,
		!isCustom && showHiragana && phrase.reading,
		!isCustom && showTranslation && phrase.translations[translationLang],
	].filter(Boolean)

	return (
		<DraggableWrapper containerRef={containerRef} className="rounded-lg px-8 w-full top-[calc(50%-50px)]">
			<div className="flex flex-col items-center gap-1">
				{text && <p className="mb-1 text-2xl font-medium text-center text-zinc-900 dark:text-zinc-100">{text}</p>}
				{subTexts.map((text, i) => (
					<p key={String(i)} className="text-sm font-light text-center text-zinc-400 dark:text-zinc-500">
						{text}
					</p>
				))}
			</div>
		</DraggableWrapper>
	)
}
