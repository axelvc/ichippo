import { motion } from 'motion/react'
import { type ReactNode, type RefObject, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface DraggableWrapperProps {
	children: ReactNode
	container?: RefObject<HTMLDivElement | null>
	className?: string
}

export function DraggableWrapper({ children, container, className }: DraggableWrapperProps) {
	const [isDragging, setIsDragging] = useState(false)
	const elementRef = useRef<HTMLDivElement>(null)

	return (
		<motion.div
			ref={elementRef}
			drag="y"
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={container}
			onDragStart={() => setIsDragging(true)}
			onDragEnd={() => setIsDragging(false)}
			className={cn('absolute select-none w-full', isDragging ? 'cursor-grabbing' : 'cursor-grab', className)}
		>
			{children}
		</motion.div>
	)
}
