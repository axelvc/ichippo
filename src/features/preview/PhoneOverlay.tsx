import { Battery, Camera, Flashlight, Signal, Wifi } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function PhoneOverlay() {
	return (
		<div className="absolute inset-0 z-10 pointer-events-none">
			{/* Status bar */}
			<div className="absolute top-0 inset-x-8 h-13 flex items-end justify-between font-apple">
				<span className="text-sm font-semibold text-neutral-900 dark:text-white">Status</span>
				<div className="flex items-center gap-1.5 text-neutral-900 dark:text-white">
					<Signal className="size-5" />
					<Wifi className="size-5" />
					<Battery className="size-5" />
				</div>
			</div>

			<Clock />

			{/* Bottom controls */}
			<div className="absolute bottom-3 inset-x-12 flex justify-between items-end text-neutral-900 dark:text-white">
				<div className="mb-8 size-12 rounded-full bg-neutral-900/20 dark:bg-white/20 grid place-items-center">
					<Flashlight className="size-6" />
				</div>
				<div className="w-1/2 h-1 bg-current/60 rounded-full" />
				<div className="mb-8 size-12 rounded-full bg-neutral-900/20 dark:bg-white/20 grid place-items-center">
					<Camera className="size-6" />
				</div>
			</div>
		</div>
	)
}

function Clock() {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')

	useEffect(() => {
		const updateClock = () => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes().toString().padStart(2, '0')

			setTime(`${hours}:${minutes}`)
			setDate(
				now.toLocaleDateString(navigator.language || 'en-US', {
					weekday: 'short',
					month: 'short',
					day: 'numeric',
				}),
			)
		}

		updateClock()
		const interval = setInterval(updateClock, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="absolute top-21 inset-x-0 text-center text-neutral-900 dark:text-white font-apple">
			<p className="text-lg font-light -mb-2">{date}</p>
			<p className="text-8xl font-bold">{time}</p>
		</div>
	)
}
