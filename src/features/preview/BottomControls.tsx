import { Camera, Flashlight } from 'lucide-react'

export default function BottomControls() {
	return (
		<div className="absolute bottom-3 left-0 right-0 px-12 flex justify-between items-end text-neutral-900 dark:text-white">
			{/* Flashlight */}
			<div className="mb-8 size-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
				<Flashlight className="size-6" />
			</div>
			{/* Home Indicator */}
			<div className="w-1/2 h-1 bg-current rounded-full opacity-60" />
			{/* Camera */}
			<div className="mb-8 size-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
				<Camera className="size-6" />
			</div>
		</div>
	)
}
