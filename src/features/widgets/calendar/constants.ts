import type { CalendarLang } from './types'

export const WEEK_LABELS_SUNDAY: Record<CalendarLang, string[]> = {
	en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	es: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	fr: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	de: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
	pt: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
	ja: ['日', '月', '火', '水', '木', '金', '土'],
}

export const WEEK_LABELS_MONDAY: Record<CalendarLang, string[]> = {
	en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
	es: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
	fr: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
	de: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
	pt: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
	ja: ['月', '火', '水', '木', '金', '土', '日'],
}
