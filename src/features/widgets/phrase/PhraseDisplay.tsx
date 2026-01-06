import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { getDailyPhrase } from './constants'
import type { PhraseState } from './types'

export function PhraseDisplay({
	mode,
	mainLang,
	subtextMode,
	subtextLang,
	customText,
	customSubtext,
}: Omit<PhraseState, 'enabled'>) {
	const isCustom = mode === 'custom'

	const phrase = useMemo(() => {
		if (isCustom) return null
		return getDailyPhrase(mode)
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
