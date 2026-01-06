import type { LanguageCode } from '../shared/types'

export type PhraseCategory = 'motivation' | 'affirmation' | 'haiku' | 'word'
export type PhraseMode = PhraseCategory | 'custom'
export type SubtextMode = 'none' | 'translation' | 'romaji' | 'custom'

export interface Phrase {
	id: string
	texts: Record<LanguageCode, string>
	romaji: string
}

export interface PhraseState {
	enabled: boolean
	mode: PhraseMode
	mainLang: LanguageCode
	subtextMode: SubtextMode
	subtextLang: LanguageCode
	customText: string
	customSubtext: string
}

export interface PhraseActions {
	setEnabled: (enabled: boolean) => void
	setMode: (mode: PhraseMode) => void
	setMainLang: (lang: LanguageCode) => void
	setSubtextMode: (mode: SubtextMode) => void
	setSubtextLang: (lang: LanguageCode) => void
	setCustomText: (text: string) => void
	setCustomSubtext: (text: string) => void
}
