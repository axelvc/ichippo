import type { LanguageCode, Phrase } from './types'

export const LANGUAGES: Record<LanguageCode, string> = {
	en: 'English',
	es: 'Español',
	fr: 'Français',
	de: 'Deutsch',
	pt: 'Português',
}

export const PHRASES: Phrase[] = [
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
]
