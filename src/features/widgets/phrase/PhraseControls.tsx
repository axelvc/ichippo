import { Input, Label, SegmentedControl, Select, Switch } from '@/components/ui'
import type { LanguageCode } from '../shared/types'
import { LANGUAGES, PHRASES } from './constants'
import type { PhraseMode } from './types'

interface PhraseControlsProps {
	mode: PhraseMode
	setMode: (mode: PhraseMode) => void
	selectedIndex: number
	setSelectedIndex: (index: number) => void
	showHiragana: boolean
	setShowHiragana: (show: boolean) => void
	showTranslation: boolean
	setShowTranslation: (show: boolean) => void
	translationLang: LanguageCode
	setTranslationLang: (lang: LanguageCode) => void
	customText: string
	setCustomText: (text: string) => void
	customSubtext: string
	setCustomSubtext: (text: string) => void
}

export function PhraseControls({
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
}: PhraseControlsProps) {
	return (
		<>
			<h3 className="text-sm font-semibold text-zinc-200 mb-4 uppercase tracking-wider">Phrase</h3>

			{/* Mode Toggle */}
			<div className="mb-4">
				<SegmentedControl
					value={mode}
					onChange={setMode}
					options={[
						{ value: 'preset', label: 'PRESET' },
						{ value: 'custom', label: 'CUSTOM' },
					]}
				/>
			</div>

			{mode === 'preset' && (
				<>
					<div className="mb-4">
						<Label className="mb-2 block">Topic</Label>
						<Select
							value={String(selectedIndex)}
							onChange={(v) => setSelectedIndex(Number(v))}
							options={PHRASES.map((phrase, i) => ({
								value: String(i),
								label: phrase.text,
							}))}
						/>
					</div>

					<div className="mb-4 flex items-center justify-between">
						<Label>Hiragana</Label>
						<Switch checked={showHiragana} onChange={() => setShowHiragana(!showHiragana)} />
					</div>

					<div className="mb-4 flex items-center justify-between">
						<Label>Translation</Label>
						<Switch checked={showTranslation} onChange={() => setShowTranslation(!showTranslation)} />
					</div>

					{showTranslation && (
						<div className="mb-4">
							<Label className="mb-2 block">Language</Label>
							<Select
								value={translationLang}
								onChange={(v) => setTranslationLang(v as LanguageCode)}
								options={Object.entries(LANGUAGES).map(([code, name]) => ({
									value: code,
									label: name,
								}))}
							/>
						</div>
					)}
				</>
			)}

			{mode === 'custom' && (
				<>
					<div className="mb-4">
						<Label className="mb-2 block">Main Text</Label>
						<Input value={customText} onChange={setCustomText} placeholder="Enter main text..." />
					</div>
					<div className="mb-4">
						<Label className="mb-2 block">Subtext</Label>
						<Input value={customSubtext} onChange={setCustomSubtext} placeholder="Enter subtext..." />
					</div>
				</>
			)}
		</>
	)
}
