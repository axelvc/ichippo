import StatusBar from './StatusBar'
import LockClock from './LockClock'
import BottomControls from './BottomControls'

interface PhoneOverlayProps {
	isVisible: boolean
	time: string
	date: string
}

export default function PhoneOverlay({ isVisible, time, date }: PhoneOverlayProps) {
	return (
		<div
			className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<StatusBar />
			<LockClock time={time} date={date} />
			<BottomControls />
		</div>
	)
}
