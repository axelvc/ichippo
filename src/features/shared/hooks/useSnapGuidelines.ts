import { useMemo } from 'react'

export interface SnapPoint {
	value: number
	type: 'left' | 'right' | 'center-x' | 'top' | 'bottom' | 'center-y'
}

export interface ActiveGuideline {
	position: number
	orientation: 'vertical' | 'horizontal'
	type: string
}

export interface SnapResult {
	x: number
	y: number
	guidelines: ActiveGuideline[]
}

interface UseSnapGuidelinesProps {
	containerWidth: number
	containerHeight: number
	elementWidth: number
	elementHeight: number
	currentX: number
	currentY: number
	snapThreshold?: number
	padding?: number
}

export function useSnapGuidelines({
	containerWidth,
	containerHeight,
	elementWidth,
	elementHeight,
	currentX,
	currentY,
	snapThreshold = 12,
	padding = 0,
}: UseSnapGuidelinesProps): SnapResult {
	return useMemo(() => {
		const guidelines: ActiveGuideline[] = []
		let snappedX = currentX
		let snappedY = currentY

		// Calculate element edges
		const elementLeft = currentX
		const elementRight = currentX + elementWidth
		const elementCenterX = currentX + elementWidth / 2

		const elementTop = currentY
		const elementBottom = currentY + elementHeight
		const elementCenterY = currentY + elementHeight / 2

		// Container snap points
		const containerCenterX = containerWidth / 2
		const containerCenterY = containerHeight / 2

		// Vertical guidelines (for horizontal alignment)
		const verticalSnapPoints: SnapPoint[] = [
			{ value: padding, type: 'left' }, // Left edge of container
			{ value: containerWidth - padding, type: 'right' }, // Right edge of container
			{ value: containerCenterX, type: 'center-x' }, // Center of container
		]

		// Horizontal guidelines (for vertical alignment)
		const horizontalSnapPoints: SnapPoint[] = [
			{ value: padding, type: 'top' }, // Top edge of container
			{ value: containerHeight - padding, type: 'bottom' }, // Bottom edge of container
			{ value: containerCenterY, type: 'center-y' }, // Center of container
		]

		// Check vertical guidelines (snap element edges/center to container points)
		for (const snapPoint of verticalSnapPoints) {
			// Check left edge
			if (Math.abs(elementLeft - snapPoint.value) < snapThreshold) {
				snappedX = snapPoint.value
				guidelines.push({
					position: snapPoint.value,
					orientation: 'vertical',
					type: snapPoint.type,
				})
				break
			}
			// Check right edge
			if (Math.abs(elementRight - snapPoint.value) < snapThreshold) {
				snappedX = snapPoint.value - elementWidth
				guidelines.push({
					position: snapPoint.value,
					orientation: 'vertical',
					type: snapPoint.type,
				})
				break
			}
			// Check center
			if (Math.abs(elementCenterX - snapPoint.value) < snapThreshold) {
				snappedX = snapPoint.value - elementWidth / 2
				guidelines.push({
					position: snapPoint.value,
					orientation: 'vertical',
					type: snapPoint.type,
				})
				break
			}
		}

		// Check horizontal guidelines (snap element edges/center to container points)
		for (const snapPoint of horizontalSnapPoints) {
			// Check top edge
			if (Math.abs(elementTop - snapPoint.value) < snapThreshold) {
				snappedY = snapPoint.value
				guidelines.push({
					position: snapPoint.value,
					orientation: 'horizontal',
					type: snapPoint.type,
				})
				break
			}
			// Check bottom edge
			if (Math.abs(elementBottom - snapPoint.value) < snapThreshold) {
				snappedY = snapPoint.value - elementHeight
				guidelines.push({
					position: snapPoint.value,
					orientation: 'horizontal',
					type: snapPoint.type,
				})
				break
			}
			// Check center
			if (Math.abs(elementCenterY - snapPoint.value) < snapThreshold) {
				snappedY = snapPoint.value - elementHeight / 2
				guidelines.push({
					position: snapPoint.value,
					orientation: 'horizontal',
					type: snapPoint.type,
				})
				break
			}
		}

		return {
			x: snappedX,
			y: snappedY,
			guidelines,
		}
	}, [containerWidth, containerHeight, elementWidth, elementHeight, currentX, currentY, snapThreshold, padding])
}
