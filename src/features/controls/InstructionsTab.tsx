import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button, Input, Separator } from '@/components'
import { cn } from '@/lib/utils'

export function InstructionsTab() {
	const configUrl = 'https://localhost:4321'
	const [copied, setCopied] = useState(false)
	const copyClearRef = useRef(0)

	function handleCopy() {
		navigator.clipboard.writeText(configUrl)
		setCopied(true)
		clearTimeout(copyClearRef.current)
		copyClearRef.current = window.setTimeout(() => setCopied(false), 1000)
	}

	return (
		<div className="space-y-4">
			<Section idx="1" title="Create Your Shortcut">
				<div className="space-y-4 text-sm text-zinc-400">
					<div className="space-y-2">
						<h4 className="font-medium text-zinc-300">Quick Setup</h4>
						<p>
							Add this{' '}
							<a href="#shortcut" target="_blank" rel="noopener noreferrer">
								pre-made shortcut
							</a>{' '}
							to your iPhone. Then replace the default URL with yours:
						</p>

						<div className="flex mt-3">
							<Input value={configUrl} readOnly className="text-zinc-400 h-7" />
							<Button
								onClick={handleCopy}
								className={cn('size-7 p-0 shrink-0 transition-colors')}
								variant={copied ? 'primary' : 'secondary'}
							>
								{copied ? <Check className="size-4" /> : <Copy className="size-4" />}
							</Button>
						</div>
					</div>

					<div className="space-y-2">
						<h4 className="font-medium text-zinc-300">Manual Setup</h4>
						<p className="text-zinc-500 mb-2">Prefer to build it yourself? Here's how:</p>
						<ol className="space-y-2 list-decimal list-inside">
							<li>
								Open <a href="shortcuts://">Shortcuts</a> and go to the Library tab
							</li>
							<li>
								Tap <kbd className="bg-zinc-700 select-none inline-block size-4 leading-none text-center">+</kbd> to
								create a new shortcut
							</li>
							<li>Add these two actions:</li>
							<ul className="ml-4 space-y-2">
								<li>
									<dl>
										<dt className="text-zinc-200">Get Contents of URL</dt>
										<dd className="ml-4 mt-1">Paste the URL from above</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt className="text-zinc-200">Set Wallpaper Photo</dt>
										<dd className="ml-4 mt-1">
											Disable <span className="text-zinc-100">Show Preview</span> and{' '}
											<span className="text-zinc-100">Crop to Subject</span>
										</dd>
									</dl>
								</li>
							</ul>
							<li>Save your shortcut</li>
						</ol>
					</div>
				</div>
			</Section>

			<Separator />

			<Section idx="2" title="Automate Daily Updates">
				<p className="text-zinc-500 text-sm mb-3">Set your wallpaper to refresh automatically each day:</p>
				<ol className="text-zinc-400 text-sm space-y-2 list-decimal list-inside">
					<li>Go to the Automation tab in Shortcuts</li>
					<li>
						Tap <kbd className="bg-zinc-700 select-none inline-block size-4 leading-none text-center">+</kbd> to create
						a new automation
					</li>
					<li>
						Choose <span className="text-zinc-200">Time of Day</span> as the trigger
					</li>
					<li>Pick when you want your wallpaper to update</li>
					<li>Select your wallpaper shortcut as the action</li>
				</ol>
			</Section>
		</div>
	)
}

function Section({ title, idx, children }: { title: string; idx?: string; children: React.ReactNode }) {
	return (
		<section>
			<div className="flex items-center gap-2 mb-3">
				{idx && (
					<div className="size-4 bg-zinc-100 text-zinc-900 font-mono font-semibold text-xs grid place-items-center">
						{idx}
					</div>
				)}
				<h3 className="font-medium text-zinc-200">{title}</h3>
			</div>

			{children}
		</section>
	)
}
