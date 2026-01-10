import { motion, useMotionValue } from 'motion/react'
import { type ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface DraggableWrapperProps {
	children: ReactNode
	className?: string
	/** 0-1 range representing percentage of container height */
	yOffsetPercent?: number
	onOffsetChange?: (offsetPercent: number) => void
	isDraggable?: boolean
	/** Container height in pixels - used to calculate drag constraints */
	containerHeight?: number
}

export function DraggableWrapper({
	children,
	className,
	yOffsetPercent = 0,
	onOffsetChange,
	isDraggable = true,
	containerHeight = 0,
}: DraggableWrapperProps) {
	const elementRef = useRef<HTMLDivElement>(null)
	const [elementHeight, setElementHeight] = useState(0)
	const [currentPercent, setCurrentPercent] = useState(yOffsetPercent)

	const y = useMotionValue(0)

	// Measure element height for accurate constraints
	useLayoutEffect(() => {
		const element = elementRef.current
		if (!element) return

		const observer = new ResizeObserver(() => {
			setElementHeight(element.offsetHeight)
		})

		observer.observe(element)
		setElementHeight(element.offsetHeight)

		return () => observer.disconnect()
	}, [])

	// Clamp position when element or container size changes
	useEffect(() => {
		if (containerHeight <= 0 || elementHeight <= 0) return

		// Calculate max allowed percent so element stays within container
		const maxPercent = Math.max(0, (containerHeight - elementHeight) / containerHeight)
		const clampedPercent = Math.max(0, Math.min(maxPercent, currentPercent))

		if (clampedPercent !== currentPercent) {
			setCurrentPercent(clampedPercent)
			onOffsetChange?.(clampedPercent)
		}
	}, [containerHeight, currentPercent, elementHeight, onOffsetChange])

	// Calculate drag constraints manually based on container and element dimensions
	// because motion doesn't update constraints when container size changes
	const dragConstraints = useMemo(() => {
		if (containerHeight <= 0) return { top: 0, bottom: 0 }

		const currentTopPx = currentPercent * containerHeight
		const maxBottom = containerHeight - currentTopPx - elementHeight

		return {
			top: -currentTopPx,
			bottom: Math.max(0, maxBottom),
		}
	}, [containerHeight, currentPercent, elementHeight])

	function handleDragEnd() {
		if (containerHeight <= 0) return

		const moveOffset = y.get() / containerHeight
		// Round to 3 decimal places to avoid floating point errors
		const newPercent = Math.round(Math.max(0, Math.min(1, currentPercent + moveOffset)) * 1000) / 1000

		y.set(0)
		setCurrentPercent(newPercent)
		onOffsetChange?.(newPercent)
	}

	return (
		<motion.div
			ref={elementRef}
			drag={isDraggable && 'y'}
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={dragConstraints}
			whileDrag={{ cursor: 'grabbing' }}
			onDragEnd={handleDragEnd}
			style={{ top: `${currentPercent * 100}%`, y }}
			className={cn('absolute select-none w-full', isDraggable && 'cursor-grab', className)}
		>
			{children}
		</motion.div>
	)
}
