import type { ModelName } from '@/features/controls'
import type { WidgetOffsets } from '@/features/preview'
import type { CalendarState } from '@/features/widgets/calendar'
import type { DaysLeftState } from '@/features/widgets/days-left'
import type { PhraseState } from '@/features/widgets/phrase'

export const CONFIG_VERSION = 1

export interface WallpaperConfig {
	version: number
	model: ModelName
	offsets: WidgetOffsets
	phrase: Omit<PhraseState, 'enabled'> & { enabled: boolean }
	calendar: Omit<CalendarState, 'enabled'> & { enabled: boolean }
	daysLeft: Omit<DaysLeftState, 'enabled'> & { enabled: boolean }
}

export function encodeConfig(config: WallpaperConfig): string {
	const json = JSON.stringify(config)
	const base64 = btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
	return base64
}

export function decodeConfig(encoded: string): WallpaperConfig | null {
	try {
		let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/')

		const padding = base64.length % 4
		if (padding) {
			base64 += '='.repeat(4 - padding)
		}

		const json = atob(base64)
		const parsed = JSON.parse(json)

		if (typeof parsed.version !== 'number') {
			return null
		}

		return parsed as WallpaperConfig
	} catch {
		return null
	}
}

export function buildConfig(
	model: ModelName,
	offsets: WidgetOffsets,
	phrase: PhraseState,
	calendar: CalendarState,
	daysLeft: DaysLeftState,
): WallpaperConfig {
	return {
		version: CONFIG_VERSION,
		model,
		offsets,
		phrase: {
			enabled: phrase.enabled,
			mode: phrase.mode,
			mainLang: phrase.mainLang,
			subtextMode: phrase.subtextMode,
			subtextLang: phrase.subtextLang,
			customText: phrase.customText,
			customSubtext: phrase.customSubtext,
		},
		calendar: {
			enabled: calendar.enabled,
			timeMode: calendar.timeMode,
			showLabel: calendar.showLabel,
			labelLang: calendar.labelLang,
			dotStyle: calendar.dotStyle,
			weekStart: calendar.weekStart,
		},
		daysLeft: {
			enabled: daysLeft.enabled,
			mode: daysLeft.mode,
			dateMode: daysLeft.dateMode,
			weekStart: daysLeft.weekStart,
		},
	}
}

export function buildConfigUrl(baseUrl: string, config: WallpaperConfig): string {
	const encoded = encodeConfig(config)
	const url = new URL('/wallpaper', baseUrl)
	url.searchParams.set('config', encoded)
	return url.toString()
}
