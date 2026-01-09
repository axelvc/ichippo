import { Info } from 'lucide-react'
import { Separator } from '@/components'

export function AboutTab() {
	return (
		<div className="space-y-4">
			<section>
				<div className="flex items-center gap-2 mb-3">
					<Info className="size-4 text-zinc-500" />
					<h3 className="font-medium text-zinc-200">What is this?</h3>
				</div>
				<div className="space-y-3 text-sm text-zinc-400">
					<p>
						<span className="text-zinc-200 font-zen">一日一歩</span> (Ichinichi Ippo) means "one step a day" in
						Japanese.
					</p>
					<p>
						This tool generates dynamic wallpapers for your iPhone featuring Japanese phrases, a minimal calendar, and
						progress trackers. Customize your design, then use Apple Shortcuts to automatically update your wallpaper
						daily.
					</p>
					<p>
						Your configuration is saved in the URL, so you can bookmark it or share it with others. No account needed,
						no data stored on servers.
					</p>
				</div>
			</section>

			<Separator />

			<section>
				<div className="text-sm text-zinc-400 flex justify-between">
					<p>
						Created by{' '}
						<a href="https://x.com/axel__vc" target="_blank" rel="noopener noreferrer">
							@axel__vc
						</a>
					</p>
					<p className="text-xs">
						<a
							href="https://buymeacoffee.com/axelvc"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-500"
						>
							Buy me a coffee
						</a>
					</p>
				</div>
			</section>
		</div>
	)
}
