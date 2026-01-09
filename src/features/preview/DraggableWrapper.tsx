import { motion, useMotionValue, useTransform } from 'motion/react'
import type { ReactNode, RefObject } from 'react'
import { cn } from '@/lib/utils'

interface DraggableWrapperProps {
	children: ReactNode
	container?: RefObject<HTMLDivElement | null>
	className?: string
	/** 0-1 range representing percentage of container height */
	yOffsetPercent?: number
	onOffsetChange?: (offsetPercent: number) => void
	isDraggable?: boolean
}

export function DraggableWrapper({
	children,
	container,
	className,
	yOffsetPercent = 0,
	onOffsetChange,
	isDraggable = true,
}: DraggableWrapperProps) {
	const yPercent = useMotionValue(yOffsetPercent)
	const top = useTransform(yPercent, [0, 1], ['0%', '100%'])
	const y = useMotionValue(0)

	function handleDragEnd() {
		const containerHeight = container?.current?.clientHeight ?? 0
		const moveOffset = containerHeight > 0 ? y.get() / containerHeight : 0
		const newPercent = yPercent.get() + moveOffset

		y.set(0)
		yPercent.set(newPercent)
		onOffsetChange?.(newPercent)
	}

	return (
		<motion.div
			drag={isDraggable ? 'y' : false}
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={container}
			onDragEnd={handleDragEnd}
			style={{ top, y }}
			whileDrag={{ cursor: 'grabbing' }}
			className={cn('absolute select-none w-full', isDraggable && 'cursor-grab', className)}
		>
			{children}
		</motion.div>
	)
}
