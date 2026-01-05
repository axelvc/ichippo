import { Edit2, Eye, EyeOff } from 'lucide-react'
import { Button, Select, type SelectOptions } from '@/components'
import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from './constants'

interface TopControlsProps {
	selectedModel: ModelName
	setSelectedModel: (model: ModelName) => void
	isPreview: boolean
	setIsPreview: (preview: boolean) => void
}


export function TopControls({ selectedModel, setSelectedModel, isPreview, setIsPreview }: TopControlsProps) {
	return (
		<div className="fixed top-4 right-4 left-4 md:left-auto md:top-6 md:right-6 flex flex-col items-end justify-end gap-2 md:gap-3 z-50">
			<Select value={selectedModel} onChange={(v) => setSelectedModel(v as ModelName)} options={options} />

			<div className="flex gap-2">
			</div>
		</div>
	)
}
