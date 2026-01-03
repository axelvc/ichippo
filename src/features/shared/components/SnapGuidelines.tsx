import type { ActiveGuideline } from '../hooks/useSnapGuidelines'

interface SnapGuidelinesProps {
	guidelines: ActiveGuideline[]
	containerWidth: number
	containerHeight: number
}

export function SnapGuidelines({ guidelines, containerWidth, containerHeight }: SnapGuidelinesProps) {
	if (guidelines.length === 0) return null

	return (
		<div className="absolute inset-0 pointer-events-none z-50">
			{guidelines.map((guideline, index) => {
				if (guideline.orientation === 'vertical') {
					return (
						<div
							key={`${guideline.type}-${index}`}
							className="absolute top-0 bottom-0 w-px bg-blue-500 animate-fade-in"
							style={{
								left: `${guideline.position}px`,
								boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.3)',
							}}
						>
							<div
								className="absolute top-0 bottom-0 w-px"
								style={{
									background:
										'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(59, 130, 246, 0.8) 4px, rgba(59, 130, 246, 0.8) 8px)',
								}}
							/>
						</div>
					)
				} else {
					return (
						<div
							key={`${guideline.type}-${index}`}
							className="absolute left-0 right-0 h-px bg-blue-500 animate-fade-in"
							style={{
								top: `${guideline.position}px`,
								boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.3)',
							}}
						>
							<div
								className="absolute left-0 right-0 h-px"
								style={{
									background:
										'repeating-linear-gradient(to right, transparent, transparent 4px, rgba(59, 130, 246, 0.8) 4px, rgba(59, 130, 246, 0.8) 8px)',
								}}
							/>
						</div>
					)
				}
			})}
		</div>
	)
}
