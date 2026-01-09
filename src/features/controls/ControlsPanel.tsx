import { Button } from '@/components'
import type { PreviewActions, PreviewState } from '@/features/preview'
import type { CalendarActions, CalendarState } from '@/features/widgets/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/widgets/days-left'
import type { PhraseActions, PhraseState } from '@/features/widgets/phrase'
import { useConfigUrl } from '@/lib/useConfigUrl'
import { AboutTab } from './AboutTab'
import { CustomizeTab } from './CustomizeTab'
import { InstructionsTab } from './InstructionsTab'

export type TabId = 'instructions' | 'customize' | 'about'

interface ControlsPanelProps {
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
	preview: PreviewState & PreviewActions
	activeTab: TabId
	onTabChange: (tab: TabId) => void
}

export function ControlsPanel({ phrase, calendar, daysLeft, preview, activeTab, onTabChange }: ControlsPanelProps) {
	const configUrl = useConfigUrl({
		model: preview.selectedModel,
		preview,
		phrase,
		calendar,
		daysLeft,
	})

	return (
		<div className="w-90">
			<div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 border-b-0">
				<Button
					size="md"
					variant={activeTab === 'instructions' ? 'secondary' : 'ghost'}
					onClick={() => onTabChange('instructions')}
					className="flex-1"
				>
					Instructions
				</Button>
				<Button
					size="md"
					variant={activeTab === 'customize' ? 'secondary' : 'ghost'}
					onClick={() => onTabChange('customize')}
					className="flex-1"
				>
					Customize
				</Button>
				<Button
					size="md"
					variant={activeTab === 'about' ? 'secondary' : 'ghost'}
					onClick={() => onTabChange('about')}
					className="flex-1"
				>
					About
				</Button>
			</div>

			<div className="max-h-230 overflow-auto bg-zinc-900 border border-zinc-800 p-3 shadow-2xl">
				{activeTab === 'instructions' && <InstructionsTab configUrl={configUrl} />}

				{activeTab === 'customize' && (
					<CustomizeTab phrase={phrase} calendar={calendar} daysLeft={daysLeft} preview={preview} />
				)}

				{activeTab === 'about' && <AboutTab />}
			</div>
		</div>
	)
}
