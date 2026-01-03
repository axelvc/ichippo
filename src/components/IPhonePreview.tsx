import { useState, useEffect } from 'react'

interface Props {
	children: React.ReactNode
}

export default function IPhonePreview({ children }: Props) {
	const [isPreview, setIsPreview] = useState(false)
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')

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

	return (
		<>
			{/* Toggle Button */}
			<button
				onClick={() => setIsPreview(!isPreview)}
				className="fixed top-6 right-6 px-3 py-1.5 text-xs font-light rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors z-50"
			>
				{isPreview ? 'Exit Preview' : 'Preview'}
			</button>

			{/* iPhone Frame Container */}
			<div className="relative w-full max-w-[428px] h-[926px] flex items-center justify-center">
				{/* iPhone Overlay */}
				<div
					className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 ${
						isPreview ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{/* Status Bar */}
					<div className="absolute top-0 left-0 right-0 h-14 flex items-end justify-between px-8 pb-1">
						<span
							className="text-sm font-semibold text-neutral-900 dark:text-white"
							style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
						>
							9:41
						</span>
						<div className="flex items-center gap-1.5">
							{/* Signal */}
							<svg className="w-4 h-4 text-neutral-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
								<rect x="1" y="14" width="4" height="6" rx="1" />
								<rect x="7" y="10" width="4" height="10" rx="1" />
								<rect x="13" y="6" width="4" height="14" rx="1" />
								<rect x="19" y="2" width="4" height="18" rx="1" />
							</svg>
							{/* WiFi */}
							<svg className="w-4 h-4 text-neutral-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4.9-2.3l1.4 1.4C9.4 16.4 10.6 16 12 16s2.6.4 3.5 1.1l1.4-1.4C15.6 14.6 13.9 14 12 14s-3.6.6-4.9 1.7zm-2.8-2.8l1.4 1.4C7.3 13 9.5 12 12 12s4.7 1 6.3 2.3l1.4-1.4C17.7 11.2 15 10 12 10s-5.7 1.2-7.7 2.9zM2 10.1l1.4 1.4C5.3 9.9 8.5 9 12 9s6.7.9 8.6 2.5l1.4-1.4C19.6 8.1 16 7 12 7s-7.6 1.1-10 3.1z" />
							</svg>
							{/* Battery */}
							<div className="flex items-center">
								<div className="w-6 h-3 border border-neutral-900 dark:border-white rounded-sm relative">
									<div
										className="absolute inset-0.5 bg-neutral-900 dark:bg-white rounded-xs"
										style={{ width: '85%' }}
									/>
								</div>
								<div className="w-0.5 h-1.5 bg-neutral-900 dark:bg-white rounded-r-sm ml-px" />
							</div>
						</div>
					</div>

					{/* Clock */}
					<div className="absolute top-20 left-0 right-0 text-center">
						<p
							className="text-7xl font-light text-neutral-900 dark:text-white tracking-tight"
							style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
						>
							{time}
						</p>
						<p
							className="text-lg font-light text-neutral-900 dark:text-white mt-1"
							style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
						>
							{date}
						</p>
					</div>

					{/* Bottom Controls */}
					<div className="absolute bottom-8 left-0 right-0 px-12">
						<div className="flex justify-center mb-6">
							<div className="w-32 h-1 bg-neutral-900 dark:bg-white rounded-full opacity-60" />
						</div>
						<div className="flex justify-between items-center">
							<div className="w-12 h-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
								<svg
									className="w-6 h-6 text-neutral-900 dark:text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 3h6l1 4H8L9 3zM8 7h8v3a2 2 0 01-2 2h-4a2 2 0 01-2-2V7zM10 12v8a1 1 0 001 1h2a1 1 0 001-1v-8"
									/>
								</svg>
							</div>
							<div className="w-12 h-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
								<svg
									className="w-6 h-6 text-neutral-900 dark:text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<main
					className={`w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-[50px] flex flex-col justify-center items-center gap-3 transition-all duration-300 ${
						isPreview ? 'shadow-2xl' : ''
					}`}
				>
					{children}
				</main>
			</div>
		</>
	)
}
