import { useMemo, useState } from 'react'
import { IPHONE_MODELS, type ModelName } from '@/features/controls/constants'
import { SCALE_FACTOR } from './constants'

export interface PreviewState {
	selectedModel: ModelName
	isPreview: boolean
	size: {
		width: number
		height: number
	}
}

export interface PreviewActions {
	setSelectedModel: (model: ModelName) => void
	setIsPreview: (preview: boolean) => void
}

export function usePreviewState(): PreviewState & PreviewActions {
	const [isPreview, setIsPreview] = useState(false)
	const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')

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
		setSelectedModel,
		setIsPreview,
	}
}
