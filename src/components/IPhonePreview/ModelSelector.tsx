import { IPHONE_MODELS, MODEL_GROUPS, type ModelName } from '../../data/constants'

interface ModelSelectorProps {
	selectedModel: ModelName
	setSelectedModel: (model: ModelName) => void
}

export default function ModelSelector({ selectedModel, setSelectedModel }: ModelSelectorProps) {
	return (
		<select
			value={selectedModel}
			onChange={(e) => setSelectedModel(e.target.value as ModelName)}
			className="px-3 py-1.5 text-xs font-light rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer outline-none"
		>
			{Object.entries(MODEL_GROUPS).map(([series, models]) => (
				<optgroup key={series} label={series}>
					{models.map((model) => (
						<option key={model} value={model}>
							{model} ({IPHONE_MODELS[model].width}×{IPHONE_MODELS[model].height})
						</option>
					))}
				</optgroup>
			))}
		</select>
	)
}
