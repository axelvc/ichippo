import { Field, Select, type SelectOptions, Separator, Switch } from '@/components'
import type { PreviewActions, PreviewState } from '@/features/preview/usePreviewState'
import type { CalendarActions, CalendarState } from '@/features/widgets/calendar'
import { CalendarControls } from '@/features/widgets/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/widgets/days-left'
import { DaysLeftControls } from '@/features/widgets/days-left'
import type { PhraseActions, PhraseState } from '@/features/widgets/phrase'
import { PhraseControls } from '@/features/widgets/phrase'
import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from './constants'

interface ControlsPanelProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
	preview: PreviewState & PreviewActions
}

const options: SelectOptions = Object.entries(MODEL_GROUPS).map(([series, models]) => ({
	label: series,
	options: models.map((model) => ({
		value: model,
		label: `${model} (${IPHONE_MODELS[model].width}×${IPHONE_MODELS[model].height})`,
	})),
}))

export function ControlsPanel({ phrase, calendar, daysLeft, preview }: ControlsPanelProps) {
	return (
		<div className="w-80 max-h-240 overflow-auto bg-zinc-900 border border-zinc-800 p-5 shadow-2xl">
			<div className="space-y-4">
				<Field label="Model">
					<Select
						value={preview.selectedModel}
						onChange={(v) => preview.setSelectedModel(v as ModelName)}
						options={options}
					/>
				</Field>

				<Field label="Preview" orientation="horizontal">
					<Switch checked={preview.isPreview} onChange={() => preview.setIsPreview(!preview.isPreview)} />
				</Field>
			</div>

			<Separator />

			<PhraseControls
				enabled={phrase.enabled}
				setEnabled={phrase.setEnabled}
				mode={phrase.mode}
				setMode={phrase.setMode}
				selectedIndex={phrase.selectedIndex}
				setSelectedIndex={phrase.setSelectedIndex}
				showHiragana={phrase.showHiragana}
				setShowHiragana={phrase.setShowHiragana}
				showTranslation={phrase.showTranslation}
				setShowTranslation={phrase.setShowTranslation}
				translationLang={phrase.translationLang}
				setTranslationLang={phrase.setTranslationLang}
				customText={phrase.customText}
				setCustomText={phrase.setCustomText}
				customSubtext={phrase.customSubtext}
				setCustomSubtext={phrase.setCustomSubtext}
			/>

			<Separator />

			<CalendarControls
				enabled={calendar.enabled}
				setEnabled={calendar.setEnabled}
				timeMode={calendar.timeMode}
				setTimeMode={calendar.setTimeMode}
				showLabel={calendar.showLabel}
				setShowLabel={calendar.setShowLabel}
				labelLang={calendar.labelLang}
				setLabelLang={calendar.setLabelLang}
				dotStyle={calendar.dotStyle}
				setDotStyle={calendar.setDotStyle}
				weekStart={calendar.weekStart}
				setWeekStart={calendar.setWeekStart}
			/>

			<Separator />

			<DaysLeftControls
				enabled={daysLeft.enabled}
				setEnabled={daysLeft.setEnabled}
				mode={daysLeft.mode}
				setMode={daysLeft.setMode}
				dateMode={daysLeft.dateMode}
				setDateMode={daysLeft.setDateMode}
				weekStart={daysLeft.weekStart}
				setWeekStart={daysLeft.setWeekStart}
			/>
		</div>
	)
}
