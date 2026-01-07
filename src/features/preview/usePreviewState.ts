import { useMemo, useState } from 'react'
import { IPHONE_MODELS, type ModelName } from '@/features/controls/constants'
import { SCALE_FACTOR } from './constants'
import type { PreviewActions, PreviewState, WidgetId, WidgetOffsets } from './types'

const DEFAULT_OFFSETS: WidgetOffsets = {
	phrase: -50,
	calendar: 50,
	daysLeft: -75,
}

export function usePreviewState(): PreviewState & PreviewActions {
	const [isPreview, setIsPreview] = useState(false)
	const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')
	const [widgetOffsets, setWidgetOffsets] = useState<WidgetOffsets>(DEFAULT_OFFSETS)

	function setWidgetOffset(widget: WidgetId, position: number) {
		setWidgetOffsets((prev) => ({ ...prev, [widget]: position }))
	}

	const size = useMemo(() => {
		const { width, height } = IPHONE_MODELS[selectedModel]
		return {
			width: Math.round(width / SCALE_FACTOR),
			height: Math.round(height / SCALE_FACTOR),
		}
	}, [selectedModel])

	return {
		selectedModel,
		isPreview,
		size,
		widgetOffsets,
		setSelectedModel,
		setIsPreview,
		setWidgetOffset,
	}
}
