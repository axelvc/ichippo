import { Circle, Square } from 'lucide-react'
import { Field, FieldLegend, SegmentedControl, Select, Switch } from '@/components'
import { LANGUAGES } from '@/features/widgets/phrase/constants'
import type { LanguageCode } from '../shared/types'
import type { CalendarActions, CalendarState } from './types'

const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([code, name]) => ({
	value: code,
	label: name,
}))

export function CalendarControls({
	enabled,
	setEnabled,
	timeMode,
	setTimeMode,
	showLabel,
	setShowLabel,
	labelLang,
	setLabelLang,
	dotStyle,
	setDotStyle,
	weekStart,
	setWeekStart,
}: CalendarState & CalendarActions) {
	return (
		<div className="space-y-4">
			<Field orientation="horizontal">
				<FieldLegend>Calendar</FieldLegend>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</Field>

			{enabled && (
				<>
					<Field label="Mode">
						<SegmentedControl
							value={timeMode}
							onChange={setTimeMode}
							options={[
								{ value: 'week', label: 'WEEK' },
								{ value: 'month', label: 'MONTH' },
							]}
						/>
					</Field>

					<Field label="Week Starts">
						<SegmentedControl
							value={weekStart}
							onChange={setWeekStart}
							options={[
								{ value: 'monday', label: 'MON' },
								{ value: 'sunday', label: 'SUN' },
							]}
						/>
					</Field>

					<Field label="Style">
						<SegmentedControl
							value={dotStyle}
							onChange={setDotStyle}
							options={[
								{ value: 'dots', label: <Circle className="size-3 fill-current" /> },
								{ value: 'squares', label: <Square className="size-3 fill-current" /> },
								{ value: 'lines', label: <div className="w-0.5 h-3 bg-current" /> },
							]}
						/>
					</Field>

					<Field label="Show Label" orientation="horizontal">
						<Switch checked={showLabel} onChange={() => setShowLabel(!showLabel)} />
					</Field>

					{showLabel && (
						<Field label="Label Lang">
							<Select value={labelLang} onChange={(v) => setLabelLang(v as LanguageCode)} options={LANGUAGE_OPTIONS} />
						</Field>
					)}
				</>
			)}
		</div>
	)
}
