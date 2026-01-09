import { Check, ChevronRight, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import { Accordion, Button, Input, Separator } from '@/components'
import { cn } from '@/lib/utils'

interface InstructionsTabProps {
	configUrl: string
}

export function InstructionsTab({ configUrl }: InstructionsTabProps) {
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
			<Section idx="1" title="Set Up Your Shortcut">
				<div className="space-y-4 text-sm text-zinc-400">
					<div className="space-y-2">
						<h4 className="font-medium text-zinc-300">The Easy Way</h4>
						<p>
							Add this{' '}
							<a
								href="https://www.icloud.com/shortcuts/46ed14a38dbb4e9ea7722aebbb46e33b"
								target="_blank"
								rel="noopener noreferrer"
							>
								pre-made shortcut
							</a>{' '}
							to your iPhone. Then replace the default URL with this:
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

					<Accordion title="Build It Yourself">
						<div className="space-y-5 mt-4">
							<div className="text-zinc-400">
								<span className="text-zinc-300">Shortcuts</span>
								<ChevronRight size={12} className="inline mx-1 text-zinc-600" />
								<span className="text-zinc-300">Library</span>
								<ChevronRight size={12} className="inline mx-1 text-zinc-600" />
								<kbd className="bg-zinc-700 text-zinc-200 select-none inline-flex items-center justify-center size-5 text-xs">
									+
								</kbd>
							</div>

							<ol className="space-y-3 pl-1 list-decimal list-inside">
								<InstructionStep title="Get Contents of URL">
									<div className="space-y-1">
										<ul>
											<li className="text-zinc-400">
												<span className="text-zinc-300">X-Width</span> ={' '}
												<span className="text-zinc-300">Device Details</span>
												<ChevronRight size={12} className="inline mx-1 text-zinc-600" />
												Screen Width
											</li>
											<li className="text-zinc-400">
												<span className="text-zinc-300">X-Height</span> ={' '}
												<span className="text-zinc-300">Device Details</span>
												<ChevronRight size={12} className="inline mx-1 text-zinc-600" />
												Screen Height
											</li>
										</ul>
									</div>
								</InstructionStep>

								<InstructionStep title="Make PDF from URL">
									<ul className="text-zinc-400">
										<li>
											<span className="text-zinc-300">Include Margins</span> = OFF
										</li>
									</ul>
								</InstructionStep>

								<InstructionStep title="Convert PDF to Image" />

								<InstructionStep title="Crop Image">
									<ul className="space-y-1 text-zinc-400">
										<li>
											<span className="text-zinc-300">Position</span> = Top Left
										</li>
										<li>
											<span className="text-zinc-300">Width</span> = Screen Width × 3
										</li>
										<li>
											<span className="text-zinc-300">Height</span> = Screen Height × 3
										</li>
									</ul>
								</InstructionStep>

								<InstructionStep title="Set Wallpaper">
									<ul className="space-y-1 text-zinc-400">
										<li>
											<span className="text-zinc-300">Show Preview</span> = OFF
										</li>
										<li>
											<span className="text-zinc-300">Crop to Subject</span> = OFF
										</li>
									</ul>
								</InstructionStep>
							</ol>

							<p className="text-zinc-400">Name your shortcut and save — you're all set!</p>
						</div>
					</Accordion>
				</div>
			</Section>

			<Separator />

			<Section idx="2" title="Automate Daily Updates">
				<div className="space-y-5 text-sm text-zinc-400">
					<div className="text-zinc-400">
						<span className="text-zinc-300">Automation</span>
						<ChevronRight size={12} className="inline mx-1 text-zinc-600" />
						<kbd className="bg-zinc-700 text-zinc-200 select-none inline-flex items-center justify-center size-5 text-xs">
							+
						</kbd>
					</div>

					<ol className="space-y-4 pl-1 list-decimal list-inside">
						<InstructionStep title="Set Trigger">
							<div className="text-zinc-400">
								Select <span className="text-zinc-300">Time of Day</span>
							</div>
						</InstructionStep>

						<InstructionStep title="Choose Time">
							<div className="text-zinc-400">Pick your preferred refresh time</div>
						</InstructionStep>

						<InstructionStep title="Select Shortcut">
							<div className="text-zinc-400">Choose your wallpaper shortcut — done!</div>
						</InstructionStep>
					</ol>
				</div>
			</Section>
		</div>
	)
}

function Section({ title, idx, children }: { title: string; idx?: string; children: React.ReactNode }) {
	return (
		<section>
			<div className="flex items-center gap-2 mb-3">
				{idx && (
					<div className="size-4 bg-zinc-100 text-zinc-900 font-mono font-semibold text-xs grid place-items-center select-none">
						{idx}
					</div>
				)}
				<h3 className="font-medium text-zinc-200">{title}</h3>
			</div>

			{children}
		</section>
	)
}

function InstructionStep({ title, children }: { title: string; children?: React.ReactNode }) {
	return (
		<li>
			<span className="text-zinc-300">{title}</span>
			{children && <div className="ml-4">{children}</div>}
		</li>
	)
}
