import { Field, FieldLegend, SegmentedControl, Select, Switch } from '@/components/ui'
import { LANGUAGES } from '@/features/widgets/phrase/constants'
import type { CalendarLang, DotStyle, TimeMode, WeekStart } from './types'

interface CalendarControlsProps {
	enabled: boolean
	setEnabled: (enabled: boolean) => void
	timeMode: TimeMode
	setTimeMode: (mode: TimeMode) => void
	showLabel: boolean
	setShowLabel: (show: boolean) => void
	labelLang: CalendarLang
	setLabelLang: (lang: CalendarLang) => void
	dotStyle: DotStyle
	setDotStyle: (style: DotStyle) => void
	weekStart: WeekStart
	setWeekStart: (start: WeekStart) => void
}

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
}: CalendarControlsProps) {
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
								{ value: 'dots', label: '●' },
								{ value: 'squares', label: '■' },
								{ value: 'lines', label: '│' },
							]}
						/>
					</Field>

					<Field label="Show Label" orientation="horizontal">
						<Switch checked={showLabel} onChange={() => setShowLabel(!showLabel)} />
					</Field>

					{showLabel && (
						<Field label="Label Lang">
							<Select
								value={labelLang}
								onChange={(v) => setLabelLang(v as CalendarLang)}
								options={[
									{ value: 'ja', label: '日本語' },
									...Object.entries(LANGUAGES).map(([code, name]) => ({
										value: code,
										label: name,
									})),
								]}
							/>
						</Field>
					)}
				</>
			)}
		</div>
	)
}
