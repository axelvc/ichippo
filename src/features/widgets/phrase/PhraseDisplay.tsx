import { useMemo, useRef } from 'react'
import dayjs from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { PHRASES_BY_CATEGORY } from './constants'
import type { Phrase, PhraseCategory, PhraseState } from './types'

function getDayBasedPhrase(mode: PhraseCategory): Phrase {
	const phrases = PHRASES_BY_CATEGORY[mode]
	const daysSinceEpoch = dayjs().diff(dayjs(0), 'day')
	const phraseIndex = daysSinceEpoch % phrases.length

	return phrases[phraseIndex]
}

export function PhraseDisplay({
	mode,
	mainLang,
	subtextMode,
	subtextLang,
	customText,
	customSubtext,
}: Omit<PhraseState, 'enabled'>) {
	const isCustom = mode === 'custom'
	const prevModeRef = useRef(mode)
	const phrase = useMemo(() => {
		if (isCustom) return null

		prevModeRef.current = mode
		return getDayBasedPhrase(mode)
	}, [mode, isCustom])

	const text = phrase?.texts[mainLang] || customText

	const subtext = useMemo(() => {
		if (isCustom) return customSubtext

		switch (subtextMode) {
			case 'none':
				return null
			case 'translation':
				return phrase?.texts[subtextLang]
			case 'romaji':
				return phrase?.romaji
		}
	}, [isCustom, subtextMode, subtextLang, customSubtext, phrase])

	const isHaiku = mode === 'haiku'

	return (
		<div className="flex flex-col items-center gap-1 rounded-lg px-8 w-full">
			{text && (
				<p
					className={cn(
						'mb-1 text-2xl font-medium text-center text-zinc-900 dark:text-zinc-100',
						!isCustom && mainLang === 'ja' && 'font-zen',
						isHaiku && 'text-xl leading-relaxed whitespace-pre-line',
					)}
				>
					{text}
				</p>
			)}
			{subtext && (
				<p
					className={cn(
						'text-sm font-extralight text-center text-zinc-400 dark:text-zinc-500',
						!isCustom && subtextLang === 'ja' && 'font-zen',
						isHaiku && 'whitespace-pre-line',
					)}
				>
					{subtext}
				</p>
			)}
		</div>
	)
}
