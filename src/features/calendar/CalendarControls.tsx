import { Toggle } from '../shared'
import { LANGUAGES } from '../phrase/constants'
import type { TimeMode, DotStyle, WeekStart, CalendarLang } from './types'

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
			<h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Progress</h3>

			{/* Time Mode */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Show</label>
				<div className="flex gap-1">
					{(['week', 'month'] as TimeMode[]).map((mode) => (
						<button
							key={mode}
							onClick={() => setTimeMode(mode)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								timeMode === mode
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{mode === 'week' ? 'Week' : 'Month'}
						</button>
					))}
				</div>
			</div>

			{/* Week Start */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Week starts on</label>
				<div className="flex gap-1">
					{(['monday', 'sunday'] as WeekStart[]).map((start) => (
						<button
							key={start}
							onClick={() => setWeekStart(start)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								weekStart === start
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{start === 'monday' ? 'Mon' : 'Sun'}
						</button>
					))}
				</div>
			</div>

			{/* Show Label (only for week) */}
			{timeMode === 'week' && (
				<>
					<div className="mb-4 flex items-center justify-between">
						<label className="text-xs text-neutral-500 dark:text-neutral-500">Show Label</label>
						<Toggle enabled={showLabel} onChange={() => setShowLabel(!showLabel)} />
					</div>

					{showLabel && (
						<div className="mb-4">
							<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Label Language</label>
							<select
								value={labelLang}
								onChange={(e) => setLabelLang(e.target.value as CalendarLang)}
								className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 outline-none"
							>
								<option value="ja">日本語</option>
								{Object.entries(LANGUAGES).map(([code, name]) => (
									<option key={code} value={code}>
										{name}
									</option>
								))}
							</select>
						</div>
					)}
				</>
			)}

			{/* Style */}
			<div className="mb-4">
				<label className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 block">Style</label>
				<div className="flex gap-1">
					{(['dots', 'lines', 'squares'] as DotStyle[]).map((style) => (
						<button
							key={style}
							onClick={() => setDotStyle(style)}
							className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${
								dotStyle === style
									? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
									: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
							}`}
						>
							{style.charAt(0).toUpperCase() + style.slice(1)}
						</button>
					))}
				</div>
			</div>
		</>
	)
}
