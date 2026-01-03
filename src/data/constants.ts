// Display resolutions (pixels) - width x height in portrait
export const IPHONE_MODELS = {
	'iPhone 13 mini': { width: 1080, height: 2340 },
	'iPhone 13': { width: 1170, height: 2532 },
	'iPhone 13 Pro': { width: 1170, height: 2532 },
	'iPhone 13 Pro Max': { width: 1284, height: 2778 },
	'iPhone 14': { width: 1170, height: 2532 },
	'iPhone 14 Plus': { width: 1284, height: 2778 },
	'iPhone 14 Pro': { width: 1179, height: 2556 },
	'iPhone 14 Pro Max': { width: 1290, height: 2796 },
	'iPhone 15': { width: 1179, height: 2556 },
	'iPhone 15 Plus': { width: 1290, height: 2796 },
	'iPhone 15 Pro': { width: 1179, height: 2556 },
	'iPhone 15 Pro Max': { width: 1290, height: 2796 },
	'iPhone 16': { width: 1179, height: 2556 },
	'iPhone 16 Plus': { width: 1290, height: 2796 },
	'iPhone 16 Pro': { width: 1206, height: 2622 },
	'iPhone 16 Pro Max': { width: 1320, height: 2868 },
	'iPhone 17': { width: 1179, height: 2556 },
	'iPhone 17 Air': { width: 1290, height: 2796 },
	'iPhone 17 Pro': { width: 1206, height: 2622 },
	'iPhone 17 Pro Max': { width: 1320, height: 2868 },
} as const

export type ModelName = keyof typeof IPHONE_MODELS

export const MODEL_GROUPS: Record<string, ModelName[]> = {
	'iPhone 13': ['iPhone 13 mini', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
	'iPhone 14': ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max'],
	'iPhone 15': ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'],
	'iPhone 16': ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max'],
	'iPhone 17': ['iPhone 17', 'iPhone 17 Air', 'iPhone 17 Pro', 'iPhone 17 Pro Max'],
}

export const LANGUAGES = {
	en: 'English',
	es: 'Español',
	fr: 'Français',
	de: 'Deutsch',
	pt: 'Português',
} as const

export type LanguageCode = keyof typeof LANGUAGES

export const PHRASES = [
	{
		id: 'perseverance',
		text: '一歩一歩、前へ進む',
		reading: 'いっぽいっぽ、まえへすすむ',
		translations: {
			en: 'Step by step, moving forward',
			es: 'Paso a paso, avanzando',
			fr: 'Pas à pas, avancer',
			de: 'Schritt für Schritt vorwärts',
			pt: 'Passo a passo, seguindo em frente',
		},
	},
	{
		id: 'growth',
		text: '日々成長',
		reading: 'ひびせいちょう',
		translations: {
			en: 'Growing every day',
			es: 'Creciendo cada día',
			fr: 'Grandir chaque jour',
			de: 'Jeden Tag wachsen',
			pt: 'Crescendo a cada dia',
		},
	},
	{
		id: 'mindfulness',
		text: '今を生きる',
		reading: 'いまをいきる',
		translations: {
			en: 'Live in the present',
			es: 'Vivir el presente',
			fr: 'Vivre le présent',
			de: 'Im Moment leben',
			pt: 'Viver o presente',
		},
	},
	{
		id: 'strength',
		text: '七転び八起き',
		reading: 'ななころびやおき',
		translations: {
			en: 'Fall seven times, rise eight',
			es: 'Cae siete veces, levántate ocho',
			fr: 'Tomber sept fois, se relever huit',
			de: 'Siebenmal fallen, achtmal aufstehen',
			pt: 'Cair sete vezes, levantar oito',
		},
	},
	{
		id: 'harmony',
		text: '和を以て貴しとなす',
		reading: 'わをもってとうとしとなす',
		translations: {
			en: 'Harmony is to be valued',
			es: 'La armonía debe ser valorada',
			fr: "L'harmonie doit être valorisée",
			de: 'Harmonie ist wertvoll',
			pt: 'A harmonia deve ser valorizada',
		},
	},
	{
		id: 'komorebi',
		text: '木漏れ日',
		reading: 'こもれび',
		translations: {
			en: 'Sunlight filtering through leaves',
			es: 'Luz del sol filtrándose entre hojas',
			fr: 'Lumière du soleil à travers les feuilles',
			de: 'Sonnenlicht durch Blätter',
			pt: 'Luz do sol através das folhas',
		},
	},
	{
		id: 'wabisabi',
		text: '侘寂',
		reading: 'わびさび',
		translations: {
			en: 'Beauty in imperfection',
			es: 'Belleza en la imperfección',
			fr: "Beauté dans l'imperfection",
			de: 'Schönheit in der Unvollkommenheit',
			pt: 'Beleza na imperfeição',
		},
	},
	{
		id: 'ikigai',
		text: '生きがい',
		reading: 'いきがい',
		translations: {
			en: 'Reason for being',
			es: 'Razón de ser',
			fr: "Raison d'être",
			de: 'Lebenssinn',
			pt: 'Razão de viver',
		},
	},
	{
		id: 'kintsugi',
		text: '金継ぎ',
		reading: 'きんつぎ',
		translations: {
			en: 'Golden repair',
			es: 'Reparación dorada',
			fr: 'Réparation dorée',
			de: 'Goldene Reparatur',
			pt: 'Reparo dourado',
		},
	},
	{
		id: 'shinrinyoku',
		text: '森林浴',
		reading: 'しんりんよく',
		translations: {
			en: 'Forest bathing',
			es: 'Baño de bosque',
			fr: 'Bain de forêt',
			de: 'Waldbaden',
			pt: 'Banho de floresta',
		},
	},
] as const

export const SCALE_FACTOR = 3

export type PhraseMode = 'preset' | 'custom'

// WeekDots settings
export type TimeMode = 'week' | 'month'
export type DotStyle = 'dots' | 'lines' | 'squares'
export type WeekStart = 'monday' | 'sunday'

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
