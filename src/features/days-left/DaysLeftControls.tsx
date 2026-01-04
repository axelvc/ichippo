import { Label, SegmentedControl, Switch } from '@/components/ui'
import type { ProgressMode } from './types'

interface DaysLeftControlsProps {
	showDay: boolean
	setShowDay: (show: boolean) => void
	dayMode: ProgressMode
	setDayMode: (mode: ProgressMode) => void
	showPercentage: boolean
	setShowPercentage: (show: boolean) => void
	percentageMode: ProgressMode
	setPercentageMode: (mode: ProgressMode) => void
	showDaysLeft: boolean
	setShowDaysLeft: (show: boolean) => void
	daysLeftMode: ProgressMode
	setDaysLeftMode: (mode: ProgressMode) => void
}

function ModeSelector({ mode, setMode }: { mode: ProgressMode; setMode: (mode: ProgressMode) => void }) {
	return (
		<div className="mb-4 ml-4">
			<SegmentedControl
				value={mode}
				onChange={setMode}
				options={[
					{ value: 'week', label: 'W' },
					{ value: 'month', label: 'M' },
					{ value: 'year', label: 'Y' },
				]}
			/>
		</div>
	)
}

export function DaysLeftControls({
	showDay,
	setShowDay,
	dayMode,
	setDayMode,
	showPercentage,
	setShowPercentage,
	percentageMode,
	setPercentageMode,
	showDaysLeft,
	setShowDaysLeft,
	daysLeftMode,
	setDaysLeftMode,
}: DaysLeftControlsProps) {
	return (
		<>
			<h3 className="text-sm font-semibold text-zinc-200 mb-4 uppercase tracking-wider">Days Left</h3>

			{/* Day - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<Label>Day</Label>
				<Switch checked={showDay} onChange={() => setShowDay(!showDay)} />
			</div>

			{showDay && <ModeSelector mode={dayMode} setMode={setDayMode} />}

			{/* Percentage - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<Label>Percentage</Label>
				<Switch checked={showPercentage} onChange={() => setShowPercentage(!showPercentage)} />
			</div>

			{showPercentage && <ModeSelector mode={percentageMode} setMode={setPercentageMode} />}

			{/* Days Left - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<Label>Days Left</Label>
				<Switch checked={showDaysLeft} onChange={() => setShowDaysLeft(!showDaysLeft)} />
			</div>

			{showDaysLeft && <ModeSelector mode={daysLeftMode} setMode={setDaysLeftMode} />}
		</>
	)
}
