import { ChevronDown } from 'lucide-react'
import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from '@/data/constants'

interface ModelSelectorProps {
	selectedModel: ModelName
	setSelectedModel: (model: ModelName) => void
}

export default function ModelSelector({ selectedModel, setSelectedModel }: ModelSelectorProps) {
	return (
		<div className="relative">
			<select
				value={selectedModel}
				onChange={(e) => setSelectedModel(e.target.value as ModelName)}
				className="
					appearance-none bg-zinc-800 border border-zinc-700
					px-3 py-1.5 pr-10 text-xs font-mono text-zinc-200
					focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
					cursor-pointer
				"
			>
				{Object.entries(MODEL_GROUPS).map(([series, models]) => (
					<optgroup key={series} label={series} className="bg-zinc-800 font-mono">
						{models.map((model) => (
							<option key={model} value={model} className="bg-zinc-800 font-mono">
								{model} ({IPHONE_MODELS[model].width}×{IPHONE_MODELS[model].height})
							</option>
						))}
					</optgroup>
				))}
			</select>
			<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
		</div>
	)
}
