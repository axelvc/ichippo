import { Label, SegmentedControl, Select, Switch } from '@/components/ui'
import { LANGUAGES } from '@/features/widgets/phrase/constants'
import type { CalendarLang, DotStyle, TimeMode, WeekStart } from './types'

interface CalendarControlsProps {
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
			<h3 className="text-sm font-semibold text-zinc-200 mb-4 uppercase tracking-wider">Progress</h3>

			{/* Time Mode */}
			<div className="mb-4">
				<Label className="mb-2 block">Show</Label>
				<SegmentedControl
					value={timeMode}
					onChange={setTimeMode}
					options={[
						{ value: 'week', label: 'WEEK' },
						{ value: 'month', label: 'MONTH' },
					]}
				/>
			</div>

			{/* Week Start */}
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

			{/* Show Label (only for week) */}
			{timeMode === 'week' && (
				<>
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

			{/* Style */}
			<div className="mb-4">
				<Label className="mb-2 block">Style</Label>
				<SegmentedControl
					value={dotStyle}
					onChange={setDotStyle}
					options={[
						{ value: 'dots', label: '●' },
						{ value: 'lines', label: '│' },
						{ value: 'squares', label: '■' },
					]}
				/>
			</div>
		</>
	)
}
