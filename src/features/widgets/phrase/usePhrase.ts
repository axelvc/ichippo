import { useState } from 'react'
import type { LanguageCode } from '../shared/types'
import type { PhraseActions, PhraseMode, PhraseState, SubtextMode } from './types'

export function usePhrase(initial?: Partial<PhraseState>): PhraseState & PhraseActions {
	const [enabled, setEnabled] = useState(initial?.enabled ?? true)
	const [mode, setMode] = useState<PhraseMode>(initial?.mode ?? 'motivation')
	const [mainLang, setMainLang] = useState<LanguageCode>(initial?.mainLang ?? 'ja')
	const [subtextMode, setSubtextMode] = useState<SubtextMode>(initial?.subtextMode ?? 'translation')
	const [subtextLang, setSubtextLang] = useState<LanguageCode>(initial?.subtextLang ?? 'en')
	const [customText, setCustomText] = useState(initial?.customText ?? '')
	const [customSubtext, setCustomSubtext] = useState(initial?.customSubtext ?? '')

	return {
		enabled,
		mode,
		mainLang,
		subtextMode,
		subtextLang,
		customText,
		customSubtext,
		setEnabled,
		setMode,
		setMainLang,
		setSubtextMode,
		setSubtextLang,
		setCustomText,
		setCustomSubtext,
	}
}
