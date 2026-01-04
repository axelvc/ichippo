import { Label, SegmentedControl, Switch } from '@/components/ui'
import type { DateMode, DaysLeftMode } from './types'

interface DaysLeftControlsProps {
	enabled: boolean
	setEnabled: (enabled: boolean) => void
	mode: DaysLeftMode
	setMode: (mode: DaysLeftMode) => void
	dateMode: DateMode
	setDateMode: (dateMode: DateMode) => void
}

export function DaysLeftControls({ enabled, setEnabled, mode, setMode, dateMode, setDateMode }: DaysLeftControlsProps) {
	return (
		<>
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Days Left</h3>
				<Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
			</div>

			{enabled && (
				<>
					<div className="mb-4">
						<Label className="mb-2 block">Mode</Label>
						<SegmentedControl
							value={mode}
							onChange={setMode}
							options={[
								{ value: 'count', label: 'COUNT' },
								{ value: 'daysLeft', label: 'LEFT' },
								{ value: 'percentage', label: 'ELAPSED' },
							]}
						/>
					</div>

					<div className="mb-4">
						<Label className="mb-2 block">Date Mode</Label>
						<SegmentedControl
							value={dateMode}
							onChange={setDateMode}
							options={[
								{ value: 'week', label: 'WEEK' },
								{ value: 'month', label: 'MONTH' },
								{ value: 'year', label: 'YEAR' },
							]}
						/>
					</div>
				</>
			)}
		</>
	)
}
