import { useState } from 'react'
import type { LanguageCode, PhraseActions, PhraseMode, PhraseState } from './types'

export function usePhrase(): PhraseState & PhraseActions {
	const [mode, setMode] = useState<PhraseMode>('preset')
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [showHiragana, setShowHiragana] = useState(true)
	const [showTranslation, setShowTranslation] = useState(true)
	const [translationLang, setTranslationLang] = useState<LanguageCode>('en')
	const [customText, setCustomText] = useState('')
	const [customSubtext, setCustomSubtext] = useState('')

	return {
		mode,
		selectedIndex,
		showHiragana,
		showTranslation,
		translationLang,
		customText,
		customSubtext,
		setMode,
		setSelectedIndex,
		setShowHiragana,
		setShowTranslation,
		setTranslationLang,
		setCustomText,
		setCustomSubtext,
	}
}
