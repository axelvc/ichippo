import type { LanguageCode } from "../shared/types"

// Sunday-first order (JS default)
export const WEEK_LABELS_SUNDAY: Record<LanguageCode, string[]> = {
	en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
	fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
	pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
}

// Monday-first order
export const WEEK_LABELS_MONDAY: Record<LanguageCode, string[]> = {
	en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	es: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
	fr: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
	de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
	pt: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
}

export const WEEK_LABELS_JA_SUNDAY = ['日', '月', '火', '水', '木', '金', '土']
export const WEEK_LABELS_JA_MONDAY = ['月', '火', '水', '木', '金', '土', '日']
