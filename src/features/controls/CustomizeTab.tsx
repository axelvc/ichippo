import { Field, Select, type SelectOptions, Separator, Switch } from '@/components'
import { DEVICE_DPR, type PreviewActions, type PreviewState } from '@/features/preview'
import type { CalendarActions, CalendarState } from '@/features/widgets/calendar'
import { CalendarControls } from '@/features/widgets/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/widgets/days-left'
import { DaysLeftControls } from '@/features/widgets/days-left'
import type { PhraseActions, PhraseState } from '@/features/widgets/phrase'
import { PhraseControls } from '@/features/widgets/phrase'
import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from './constants'

export interface CustomizeTabProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
	preview: PreviewState & PreviewActions
}

const options: SelectOptions = Object.entries(MODEL_GROUPS).map(([series, models]) => ({
	label: series,
	options: models.map((model) => ({
		value: model,
		label: `${model} (${IPHONE_MODELS[model].width / DEVICE_DPR}×${IPHONE_MODELS[model].height / DEVICE_DPR})`,
	})),
}))

export function CustomizeTab({ phrase, calendar, daysLeft, preview }: CustomizeTabProps) {
	return (
		<>
			<p className="text-xs text-zinc-500 mb-4">Drag widgets on the preview to arrange them as you like.</p>

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

			<PhraseControls {...phrase} />

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
		</>
	)
}
