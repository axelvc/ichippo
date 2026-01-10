import { useMemo, useState } from 'react'
import { ControlsPanel } from '@/features/controls'
import type { TabId } from '@/features/controls/ControlsPanel.tsx'
import { useCalendar } from '@/features/widgets/calendar'
import { useDaysLeft } from '@/features/widgets/days-left'
import { usePhrase } from '@/features/widgets/phrase'
import dayjs from '@/lib/dayjs'
import { MobilePreview } from './MobilePreview.tsx'
import { usePreviewState } from './usePreviewState.ts'

interface PreviewProps {
	timezone?: string | null
}

export function Preview({ timezone }: PreviewProps) {
	const now = useMemo(() => dayjs().tz(timezone ?? undefined), [timezone])
	const phrase = usePhrase()
	const calendar = useCalendar()
	const daysLeft = useDaysLeft()
	const preview = usePreviewState()

	const [activeTab, setActiveTab] = useState<TabId>('instructions')

	return (
		<div className="h-dvh md:w-220 md:grid md:grid-cols-[auto_1fr] place-items-center gap-8">
			<ControlsPanel
				phrase={phrase}
				calendar={calendar}
				daysLeft={daysLeft}
				preview={preview}
				activeTab={activeTab}
				onTabChange={setActiveTab}
				now={now}
			/>

			<MobilePreview
				activeTab={activeTab}
				phrase={phrase}
				calendar={calendar}
				daysLeft={daysLeft}
				preview={preview}
				now={now}
				className='hidden md:block'
			/>
		</div>
	)
}
