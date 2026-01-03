import { useState, useEffect, useRef } from 'react'
import { IPHONE_MODELS, SCALE_FACTOR, type ModelName } from '../../data/constants'
import { usePhrase, PhraseDisplay, PHRASES } from '../../features/phrase'
import { useCalendar, CalendarDisplay } from '../../features/calendar'
import { useDaysLeft, DaysLeftDisplay } from '../../features/days-left'
import { DraggableWrapper } from '../../features/shared'
import { Button } from '../ui'
import { Edit2, Eye, EyeOff } from 'lucide-react'
import ModelSelector from './ModelSelector'
import ControlsPanel from './ControlsPanel'
import PhoneOverlay from './PhoneOverlay'

export default function IPhonePreview() {
  const [isPreview, setIsPreview] = useState(false)
  const [selectedModel, setSelectedModel] = useState<ModelName>('iPhone 15 Pro Max')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [showControls, setShowControls] = useState(false)
  const [viewportScale, setViewportScale] = useState(1)

  // Feature hooks
  const phrase = usePhrase()
  const calendar = useCalendar()
  const daysLeft = useDaysLeft()

  const containerRef = useRef<HTMLDivElement>(null)

  const currentDevice = IPHONE_MODELS[selectedModel]
  const scaledWidth = Math.round(currentDevice.width / SCALE_FACTOR)
  const scaledHeight = Math.round(currentDevice.height / SCALE_FACTOR)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)

      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      }
      setDate(now.toLocaleDateString('en-US', options))
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  // Viewport scaling logic
  useEffect(() => {
    const updateScale = () => {
      const padding = 48 // total padding
      const availableWidth = window.innerWidth - padding
      if (availableWidth < scaledWidth) {
        setViewportScale(availableWidth / scaledWidth)
      } else {
        setViewportScale(1)
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [scaledWidth])

  // Get current phrase content for legacy display
  const getPhraseContent = () => {
    if (phrase.mode === 'custom') {
      return { text: phrase.customText, subtext: phrase.customSubtext }
    }

    const currentPhrase = PHRASES[phrase.selectedIndex]
    let subtext = ''

    if (phrase.showHiragana && phrase.showTranslation) {
      subtext = `${currentPhrase.reading}\n${currentPhrase.translations[phrase.translationLang]}`
    } else if (phrase.showHiragana) {
      subtext = currentPhrase.reading
    } else if (phrase.showTranslation) {
      subtext = currentPhrase.translations[phrase.translationLang]
    }

    return { text: currentPhrase.text, subtext }
  }

  const phraseContent = getPhraseContent()

  return (
    <>
      {/* Top Controls */}
      <div className="fixed top-4 right-4 left-4 md:left-auto md:top-6 md:right-6 flex flex-col items-end justify-end gap-2 md:gap-3 z-50">
        <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

        <div className="flex gap-2">
          <Button
            onClick={() => setShowControls(!showControls)}
            icon={<Edit2 className="w-4 h-4" />}
            variant={showControls ? 'primary' : 'secondary'}
            size="sm"
          >
            {showControls ? 'DONE' : 'EDIT'}
          </Button>

          <Button
            onClick={() => setIsPreview(!isPreview)}
            icon={isPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            variant={isPreview ? 'primary' : 'secondary'}
            size="sm"
          >
            {isPreview ? 'EXIT' : 'PREVIEW'}
          </Button>
        </div>
      </div>

      {/* Controls Panel */}
      {showControls && <ControlsPanel phrase={phrase} calendar={calendar} daysLeft={daysLeft} />}

      {/* iPhone Frame Container */}
      <div
        className="relative flex items-center justify-center transition-all duration-300 origin-center"
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          transform: `scale(${viewportScale})`,
        }}
      >
        <PhoneOverlay isVisible={isPreview} time={time} date={date} />

        {/* Main Content */}
        <main
          ref={containerRef}
          className={`w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-[50px] flex flex-col justify-center items-center gap-3 transition-all duration-300 relative overflow-hidden ${
            isPreview ? 'shadow-2xl' : ''
          }`}
        >
          <DraggableWrapper
            containerWidth={scaledWidth}
            containerHeight={scaledHeight}
            initialX={scaledWidth / 2 - 100}
            initialY={100}
          >
            <div className="flex flex-col items-center gap-2 px-8">
              <p className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 tracking-widest">
                {phraseContent.text}
              </p>
              <p className="text-sm font-light text-neutral-400 dark:text-neutral-500 whitespace-pre-line text-center">
                {phraseContent.subtext}
              </p>
            </div>
          </DraggableWrapper>

          <DraggableWrapper
            containerWidth={scaledWidth}
            containerHeight={scaledHeight}
            initialX={scaledWidth / 2 - 100}
            initialY={scaledHeight / 2 - 50}
          >
            <CalendarDisplay
              timeMode={calendar.timeMode}
              showLabel={calendar.showLabel}
              labelLang={calendar.labelLang}
              dotStyle={calendar.dotStyle}
              weekStart={calendar.weekStart}
            />
          </DraggableWrapper>

          <DraggableWrapper
            containerWidth={scaledWidth}
            containerHeight={scaledHeight}
            initialX={scaledWidth / 2 - 50}
            initialY={scaledHeight - 150}
          >
            <DaysLeftDisplay
              showDay={daysLeft.showDay}
              dayMode={daysLeft.dayMode}
              showPercentage={daysLeft.showPercentage}
              percentageMode={daysLeft.percentageMode}
              showDaysLeft={daysLeft.showDaysLeft}
              daysLeftMode={daysLeft.daysLeftMode}
            />
          </DraggableWrapper>
        </main>
      </div>

      {/* Resolution indicator */}
      {!showControls && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-neutral-400 dark:text-neutral-600 bg-white/50 dark:bg-black/50 px-2 py-1 backdrop-blur-sm">
          {currentDevice.width} × {currentDevice.height} ({Math.round(viewportScale * 100)}%)
        </div>
      )}
    </>
  )
}
