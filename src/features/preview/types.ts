import type { ModelName } from '@/features/controls/constants'

export type WidgetId = 'phrase' | 'calendar' | 'daysLeft'

export interface WidgetOffsets {
	phrase: number
	calendar: number
	daysLeft: number
}

export interface PreviewState {
	selectedModel: ModelName
	isPreview: boolean
	size: {
		width: number
		height: number
	}
	widgetOffsets: WidgetOffsets
}

export interface PreviewActions {
	setSelectedModel: (model: ModelName) => void
	setIsPreview: (preview: boolean) => void
	setWidgetOffset: (widget: WidgetId, offset: number) => void
}
