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
} as const
