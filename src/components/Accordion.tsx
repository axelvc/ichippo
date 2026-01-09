'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionProps {
	title: string
	defaultOpen?: boolean
	className?: string
	children: React.ReactNode
}

export function Accordion({ title, defaultOpen = false, className, children }: AccordionProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen)

	return (
		<div className={cn('border border-zinc-800', className)}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between px-3 py-3 text-left transition-colors hover:text-zinc-200"
				aria-expanded={isOpen}
			>
				<span className="font-medium text-zinc-300">{title}</span>
				<ChevronDown className={cn('size-4 text-zinc-500 transition-transform duration-200', isOpen && 'rotate-180')} />
			</button>
			<div
				className={cn(
					'overflow-auto transition-all duration-200 ease-in-out',
					isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
				)}
			>
				<div className="px-3 pb-4 text-sm text-zinc-400">{children}</div>
			</div>
		</div>
	)
}
