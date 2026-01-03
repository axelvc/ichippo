export default function BottomControls() {
	return (
		<div className="absolute bottom-3 left-0 right-0 px-12 flex justify-between items-end">
			{/* Flashlight */}
			<div className="mb-8 w-12 h-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
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
			{/* Home Indicator */}
			<div className="w-1/2 h-1 bg-neutral-900 dark:bg-white rounded-full opacity-60" />
			{/* Camera */}
			<div className="mb-8 w-12 h-12 rounded-full bg-neutral-900/20 dark:bg-white/20 backdrop-blur-md flex items-center justify-center">
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
					<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
				</svg>
			</div>
		</div>
	)
}
