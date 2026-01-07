import { Field, FieldLegend, Input, Select, Switch } from '@/components'
import type { LanguageCode } from '../shared/types'
import { CATEGORY_LABELS, LANGUAGES, SUBTEXT_MODE_LABELS } from './constants'
import type { PhraseActions, PhraseMode, PhraseState, SubtextMode } from './types'

const MODE_OPTIONS = Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
	value,
	label,
}))

const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([code, name]) => ({
	value: code,
	label: name,
}))

const SUBTEXT_OPTIONS = Object.entries(SUBTEXT_MODE_LABELS).map(([value, label]) => ({
	value,
	label,
}))

const SUBTEXT_OPTIONS_WITHOUT_ROMAJI = SUBTEXT_OPTIONS.filter((opt) => opt.value !== 'romaji')

export function PhraseControls({
	enabled,
	setEnabled,
	mode,
	setMode,
	mainLang,
	setMainLang,
	subtextMode,
	setSubtextMode,
	subtextLang,
	setSubtextLang,
	customText,
	setCustomText,
	customSubtext,
	setCustomSubtext,
}: PhraseState & PhraseActions) {
	const isCustom = mode === 'custom'
	const isPreset = !isCustom
	const isJapanese = mainLang === 'ja'

	const subtextOptions = isJapanese ? SUBTEXT_OPTIONS : SUBTEXT_OPTIONS_WITHOUT_ROMAJI

	function handleMainLangChange(lang: LanguageCode) {
		if (subtextMode === 'translation' && lang === subtextLang) {
			setSubtextLang(mainLang)
		}

		setMainLang(lang)

		if (lang !== 'ja' && subtextMode === 'romaji') {
			setSubtextMode('translation')
		}
	}

	return (
		<div className="space-y-4">
			<Field orientation="horizontal">
				<FieldLegend>Phrase</FieldLegend>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</Field>

			{enabled && (
				<>
					<Field label="Type">
						<Select value={mode} onChange={(v) => setMode(v as PhraseMode)} options={MODE_OPTIONS} />
					</Field>

					{isPreset && (
						<>
							<p className="text-xs text-zinc-500">
								This is a sample phrase. Your wallpaper will show the actual daily phrase.
							</p>

							<Field label="Language">
								<Select
									value={mainLang}
									onChange={(v) => handleMainLangChange(v as LanguageCode)}
									options={LANGUAGE_OPTIONS}
								/>
							</Field>

							<Field label="Subtext">
								<Select
									value={subtextMode}
									onChange={(v) => setSubtextMode(v as SubtextMode)}
									options={subtextOptions}
								/>
							</Field>

							{subtextMode === 'translation' && (
								<Field label="Translation Language">
									<Select
										value={subtextLang}
										onChange={(v) => setSubtextLang(v as LanguageCode)}
										options={LANGUAGE_OPTIONS.filter((opt) => opt.value !== mainLang)}
									/>
								</Field>
							)}

							{subtextMode === 'custom' && (
								<Field label="Custom Subtext">
									<Input value={customSubtext} onChange={setCustomSubtext} placeholder="Enter subtext..." />
								</Field>
							)}
						</>
					)}

					{isCustom && (
						<>
							<Field label="Main Text">
								<Input value={customText} onChange={setCustomText} placeholder="Enter main text..." />
							</Field>

							<Field label="Subtext">
								<Input value={customSubtext} onChange={setCustomSubtext} placeholder="Enter subtext..." />
							</Field>
						</>
					)}
				</>
			)}
		</div>
	)
}
