import { Field, FieldLegend, SegmentedControl, Switch } from '@/components'
import type { DateMode, DaysLeftMode, WeekStart } from './types'

interface DaysLeftControlsProps {
	enabled: boolean
	setEnabled: (enabled: boolean) => void
	mode: DaysLeftMode
	setMode: (mode: DaysLeftMode) => void
	dateMode: DateMode
	setDateMode: (dateMode: DateMode) => void
	weekStart: WeekStart
	setWeekStart: (start: WeekStart) => void
}

export function DaysLeftControls({
	enabled,
	setEnabled,
	mode,
	setMode,
	dateMode,
	setDateMode,
	weekStart,
	setWeekStart,
}: DaysLeftControlsProps) {
	return (
		<div className="space-y-4">
			<Field orientation="horizontal">
				<FieldLegend>Days Left</FieldLegend>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</Field>

			{enabled && (
				<>
					<Field label="Mode">
						<SegmentedControl
							value={mode}
							onChange={setMode}
							options={[
								{ value: 'count', label: 'COUNT' },
								{ value: 'daysLeft', label: 'LEFT' },
								{ value: 'percentage', label: 'ELAPSED' },
							]}
						/>
					</Field>

					<Field label="Date Mode">
						<SegmentedControl
							value={dateMode}
							onChange={setDateMode}
							options={[
								{ value: 'week', label: 'WEEK' },
								{ value: 'month', label: 'MONTH' },
								{ value: 'year', label: 'YEAR' },
							]}
						/>
					</Field>

					{dateMode === 'week' && (
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
					)}
				</>
			)}
		</div>
	)
}
