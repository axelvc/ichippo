import { Field, FieldLegend, Input, SegmentedControl, Select, Switch } from '@/components'
import type { LanguageCode } from '../shared/types'
import { LANGUAGES, PHRASES } from './constants'
import type { PhraseActions, PhraseState } from './types'

export function PhraseControls({
	enabled,
	setEnabled,
	mode,
	setMode,
	selectedIndex,
	setSelectedIndex,
	showHiragana,
	setShowHiragana,
	showTranslation,
	setShowTranslation,
	translationLang,
	setTranslationLang,
	customText,
	setCustomText,
	customSubtext,
	setCustomSubtext,
}: PhraseState & PhraseActions) {
	return (
		<div className="space-y-4">
			<Field orientation="horizontal">
				<FieldLegend>Phrase</FieldLegend>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</Field>

			{enabled && (
				<>
					<SegmentedControl
						value={mode}
						onChange={setMode}
						options={[
							{ value: 'preset', label: 'PRESET' },
							{ value: 'custom', label: 'CUSTOM' },
						]}
					/>

					{mode === 'preset' && (
						<>
							<Field label="Topic">
								<Select
									value={String(selectedIndex)}
									onChange={(v) => setSelectedIndex(Number(v))}
									options={PHRASES.map((phrase, i) => ({
										value: String(i),
										label: phrase.text,
									}))}
								/>
							</Field>

							<Field label="Hiragana" orientation="horizontal">
								<Switch checked={showHiragana} onChange={() => setShowHiragana(!showHiragana)} />
							</Field>

							<Field label="Translation" orientation="horizontal">
								<Switch checked={showTranslation} onChange={() => setShowTranslation(!showTranslation)} />
							</Field>

							{showTranslation && (
								<Field label="Language">
									<Select
										value={translationLang}
										onChange={(v) => setTranslationLang(v as LanguageCode)}
										options={Object.entries(LANGUAGES).map(([code, name]) => ({
											value: code,
											label: name,
										}))}
									/>
								</Field>
							)}
						</>
					)}

					{mode === 'custom' && (
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
