import { Button } from '@/components'
import type { PreviewActions, PreviewState } from '@/features/preview'
import { MobilePreview } from '@/features/preview/MobilePreview'
import type { CalendarActions, CalendarState } from '@/features/widgets/calendar'
import type { DaysLeftActions, DaysLeftState } from '@/features/widgets/days-left'
import type { PhraseActions, PhraseState } from '@/features/widgets/phrase'
import type dayjs from '@/lib/dayjs'
import { useConfigUrl } from '@/lib/useConfigUrl'
import { cn } from '@/lib/utils'
import { AboutTab } from './AboutTab'
import { CustomizeTab } from './CustomizeTab'
import { InstructionsTab } from './InstructionsTab'

export type TabId = 'instructions' | 'customize' | 'about' | 'preview'

interface ControlsPanelProps {
	now: dayjs.Dayjs
	phrase: PhraseState & PhraseActions
	calendar: CalendarState & CalendarActions
	daysLeft: DaysLeftState & DaysLeftActions
	preview: PreviewState & PreviewActions
	activeTab: TabId
	onTabChange: (tab: TabId) => void
}

export function ControlsPanel({
	now,
	phrase,
	calendar,
	daysLeft,
	preview,
	activeTab,
	onTabChange,
}: ControlsPanelProps) {
	const configUrl = useConfigUrl({
		model: preview.selectedModel,
		preview,
		phrase,
		calendar,
		daysLeft,
	})

	return (
		<div className="w-dvw md:w-90 h-full flex flex-col md:block md:h-auto">
			<div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 border-b-0 overflow-auto">
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
					variant={activeTab === 'preview' ? 'secondary' : 'ghost'}
					onClick={() => onTabChange('preview')}
					className="flex-1 md:hidden"
				>
					Preview
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

			<div className="md:max-h-230 overflow-auto bg-zinc-900 border border-zinc-800 shadow-2xl p-3 flex-1">
				{activeTab === 'instructions' && <InstructionsTab configUrl={configUrl} />}

				{activeTab === 'customize' && (
					<CustomizeTab phrase={phrase} calendar={calendar} daysLeft={daysLeft} preview={preview} />
				)}

				{activeTab === 'about' && <AboutTab />}

				{activeTab === 'preview' && (
					<MobilePreview
						activeTab={activeTab}
						phrase={phrase}
						calendar={calendar}
						daysLeft={daysLeft}
						preview={preview}
						now={now}
						className="w-auto h-full aspect-9/19 mx-auto"
						isMobile
					/>
				)}
			</div>
		</div>
	)
}
