import { Toggle } from '../shared'
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

function ModeSelector({
	label,
	mode,
	setMode,
}: {
	label: string
	mode: ProgressMode
	setMode: (mode: ProgressMode) => void
}) {
	return (
		<div className="mb-4">
			<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">{label}</label>
			<div className="flex gap-1">
				{(['week', 'month', 'year'] as ProgressMode[]).map((m) => (
					<button
						key={m}
						onClick={() => setMode(m)}
						className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
							mode === m
								? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
								: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
						}`}
					>
						{m.charAt(0).toUpperCase() + m.slice(1)}
					</button>
				))}
			</div>
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
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Days Left</h3>

			{/* Day - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Day</label>
				<Toggle enabled={showDay} onChange={() => setShowDay(!showDay)} />
			</div>

			{showDay && <ModeSelector label="Day Mode" mode={dayMode} setMode={setDayMode} />}

			{/* Percentage - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Percentage</label>
				<Toggle enabled={showPercentage} onChange={() => setShowPercentage(!showPercentage)} />
			</div>

			{showPercentage && <ModeSelector label="Percentage Mode" mode={percentageMode} setMode={setPercentageMode} />}

			{/* Days Left - with toggle */}
			<div className="mb-4 flex items-center justify-between">
				<label className="text-xs text-neutral-500 dark:text-neutral-500">Days Left</label>
				<Toggle enabled={showDaysLeft} onChange={() => setShowDaysLeft(!showDaysLeft)} />
			</div>

			{showDaysLeft && <ModeSelector label="Days Left Mode" mode={daysLeftMode} setMode={setDaysLeftMode} />}
		</>
	)
}
