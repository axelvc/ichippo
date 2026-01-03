import { useState, useRef, useEffect, type ReactNode } from 'react'
import { useSnapGuidelines } from '../hooks/useSnapGuidelines'
import { SnapGuidelines } from './SnapGuidelines'

interface DraggableWrapperProps {
  children: ReactNode
  containerWidth: number
  containerHeight: number
  initialX?: number
  initialY?: number
  onPositionChange?: (x: number, y: number) => void
}

export function DraggableWrapper({
  children,
  containerWidth,
  containerHeight,
  initialX = 0,
  initialY = 0,
  onPositionChange,
}: DraggableWrapperProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  // Get element dimensions
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setElementSize({ width: rect.width, height: rect.height })
    }
  }, [children])

  // Calculate snap guidelines
  const snapResult = useSnapGuidelines({
    containerWidth,
    containerHeight,
    elementWidth: elementSize.width,
    elementHeight: elementSize.height,
    currentX: position.x,
    currentY: position.y,
    snapThreshold: 6,
  })

  // Apply snapped position when dragging
  const currentPosition = isDragging ? snapResult : position

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const containerRect = elementRef.current.parentElement?.getBoundingClientRect()

    if (!containerRect) return

    // Calculate offset from mouse to element's top-left corner
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsDragging(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const containerRect = elementRef.current.parentElement?.getBoundingClientRect()

    if (!containerRect) return

    const touch = e.touches[0]
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    })
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMove = (clientX: number, clientY: number) => {
      if (!elementRef.current?.parentElement) return

      const containerRect = elementRef.current.parentElement.getBoundingClientRect()

      let newX = clientX - containerRect.left - dragOffset.x
      let newY = clientY - containerRect.top - dragOffset.y

      // Constrain to container bounds
      newX = Math.max(0, Math.min(newX, containerWidth - elementSize.width))
      newY = Math.max(0, Math.min(newY, containerHeight - elementSize.height))

      setPosition({ x: newX, y: newY })
    }

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault()
      const touch = e.touches[0]
      handleMove(touch.clientX, touch.clientY)
    }

    const handleUp = () => {
      setIsDragging(false)
      // Apply final snapped position
      setPosition({ x: snapResult.x, y: snapResult.y })
      onPositionChange?.(snapResult.x, snapResult.y)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleUp)
    }
  }, [isDragging, dragOffset, containerWidth, containerHeight, elementSize, snapResult, onPositionChange])

  return (
    <>
      {isDragging && (
        <SnapGuidelines
          guidelines={snapResult.guidelines}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
        />
      )}
      <div
        ref={elementRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`absolute ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} transition-all ${
          isDragging ? 'duration-0' : 'duration-200'
        }`}
        style={{
          left: `${currentPosition.x}px`,
          top: `${currentPosition.y}px`,
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        {children}
      </div>
    </>
  )
}
