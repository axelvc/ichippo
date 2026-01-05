import { Edit2, Eye, EyeOff } from 'lucide-react'
import { Button, Select, type SelectOptions } from '@/components'
import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from './constants'

interface TopControlsProps {
	selectedModel: ModelName
	setSelectedModel: (model: ModelName) => void
	showControls: boolean
	setShowControls: (show: boolean) => void
	isPreview: boolean
	setIsPreview: (preview: boolean) => void
}

const options: SelectOptions = Object.entries(MODEL_GROUPS).map(([series, models]) => ({
	label: series,
	options: models.map((model) => ({
		value: model,
		label: `${model} (${IPHONE_MODELS[model].width}×${IPHONE_MODELS[model].height})`,
	})),
}))

export function TopControls({
	selectedModel,
	setSelectedModel,
	showControls,
	setShowControls,
	isPreview,
	setIsPreview,
}: TopControlsProps) {
	return (
		<div className="fixed top-4 right-4 left-4 md:left-auto md:top-6 md:right-6 flex flex-col items-end justify-end gap-2 md:gap-3 z-50">
			<Select value={selectedModel} onChange={(v) => setSelectedModel(v as ModelName)} options={options} />

			<div className="flex gap-2">
				<Button
					onClick={() => setShowControls(!showControls)}
					icon={<Edit2 className="size-4" />}
					variant={showControls ? 'primary' : 'secondary'}
					size="sm"
				>
					{showControls ? 'DONE' : 'EDIT'}
				</Button>

				<Button
					onClick={() => setIsPreview(!isPreview)}
					icon={isPreview ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
					variant={isPreview ? 'primary' : 'secondary'}
					size="sm"
				>
					PREVIEW
				</Button>
			</div>
		</div>
	)
}
