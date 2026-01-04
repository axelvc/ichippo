import type { LanguageCode } from '../shared/types'

export type PhraseMode = 'preset' | 'custom'

export interface Phrase {
	id: string
	text: string
	reading: string
	translations: Record<LanguageCode, string>
}

export interface PhraseState {
	mode: PhraseMode
	selectedIndex: number
	showHiragana: boolean
	showTranslation: boolean
	translationLang: LanguageCode
	customText: string
	customSubtext: string
}

export interface PhraseActions {
	setMode: (mode: PhraseMode) => void
	setSelectedIndex: (index: number) => void
	setShowHiragana: (show: boolean) => void
	setShowTranslation: (show: boolean) => void
	setTranslationLang: (lang: LanguageCode) => void
	setCustomText: (text: string) => void
	setCustomSubtext: (text: string) => void
}
