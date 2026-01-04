import type { ActiveGuideline } from '../hooks/useSnapGuidelines'

interface SnapGuidelinesProps {
	guidelines: ActiveGuideline[]
}

export function SnapGuidelines({ guidelines }: SnapGuidelinesProps) {
	if (guidelines.length === 0) return null

	return (
		<div className="absolute inset-0 pointer-events-none z-50">
			{guidelines.map((guideline, index) => (
				<div
					key={`${guideline.type}-${index}`}
					className={`bg-purple-500 animate-fade-in ${
						guideline.orientation === 'vertical' ? 'absolute top-0 bottom-0 w-px' : 'absolute left-0 right-0 h-px'
					}`}
					style={
						guideline.orientation === 'vertical'
							? { left: `${guideline.position}px` }
							: { top: `${guideline.position}px` }
					}
				/>
			))}
		</div>
	)
}
