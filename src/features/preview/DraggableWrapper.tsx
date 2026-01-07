import { motion, useMotionValue } from 'motion/react'
import { type ReactNode, type RefObject, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface DraggableWrapperProps {
	children: ReactNode
	container?: RefObject<HTMLDivElement | null>
	className?: string
	yOffset?: number
	onOffsetChange?: (offset: number) => void
}

export function DraggableWrapper({
	children,
	container,
	className,
	yOffset = 0,
	onOffsetChange,
}: DraggableWrapperProps) {
	const [isDragging, setIsDragging] = useState(false)
	const y = useMotionValue(yOffset)

	useEffect(() => {
		y.set(yOffset)
	}, [yOffset, y])

	function handleDragEnd() {
		setIsDragging(false)
		onOffsetChange?.(y.get())
	}

	return (
		<motion.div
			drag="y"
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={container}
			onDragStart={() => setIsDragging(true)}
			onDragEnd={handleDragEnd}
			style={{ y }}
			className={cn('absolute select-none w-full', isDragging ? 'cursor-grabbing' : 'cursor-grab', className)}
		>
			{children}
		</motion.div>
	)
}
