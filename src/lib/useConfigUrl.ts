import { useMemo } from 'react'
import type { ModelName } from '@/features/controls'
import type { PreviewState } from '@/features/preview'
import type { CalendarState } from '@/features/widgets/calendar'
import type { DaysLeftState } from '@/features/widgets/days-left'
import type { PhraseState } from '@/features/widgets/phrase'
import { buildConfig, buildConfigUrl } from './config'

const BASE_URL = import.meta.env.PUBLIC_BASE_URL || 'http://localhost:4321'

interface UseConfigUrlParams {
	model: ModelName
	preview: PreviewState
	phrase: PhraseState
	calendar: CalendarState
	daysLeft: DaysLeftState
}

export function useConfigUrl({ model, preview, phrase, calendar, daysLeft }: UseConfigUrlParams): string {
	return useMemo(() => {
		const config = buildConfig(model, preview.widgetOffsets, phrase, calendar, daysLeft)
		return buildConfigUrl(BASE_URL, config)
	}, [model, preview.widgetOffsets, phrase, calendar, daysLeft])
}
