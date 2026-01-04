import { Label, SegmentedControl, Select, Switch } from '@/components/ui'
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
		<>
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Calendar</h3>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</div>

			{enabled && (
				<>
					<div className="mb-4">
						<Label className="mb-2 block">Mode</Label>
						<SegmentedControl
							value={timeMode}
							onChange={setTimeMode}
							options={[
								{ value: 'week', label: 'WEEK' },
								{ value: 'month', label: 'MONTH' },
							]}
						/>
					</div>

					<div className="mb-4">
						<Label className="mb-2 block">Week Starts</Label>
						<SegmentedControl
							value={weekStart}
							onChange={setWeekStart}
							options={[
								{ value: 'monday', label: 'MON' },
								{ value: 'sunday', label: 'SUN' },
							]}
						/>
					</div>

					<div className="mb-4">
						<Label className="mb-2 block">Style</Label>
						<SegmentedControl
							value={dotStyle}
							onChange={setDotStyle}
							options={[
								{ value: 'dots', label: '●' },
								{ value: 'squares', label: '■' },
								{ value: 'lines', label: '│' },
							]}
						/>
					</div>

					<div className="mb-4 flex items-center justify-between">
						<Label>Show Label</Label>
						<Switch checked={showLabel} onChange={() => setShowLabel(!showLabel)} />
					</div>

					{showLabel && (
						<div className="mb-4">
							<Label className="mb-2 block">Label Lang</Label>
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
						</div>
					)}
				</>
			)}
		</>
	)
}
