import type { LanguageCode } from '../shared/types'
import type { Phrase, PhraseCategory, PhraseMode, SubtextMode } from './types'

export const LANGUAGES: Record<LanguageCode, string> = {
	ja: '日本語',
	en: 'English',
	es: 'Español',
	fr: 'Français',
	de: 'Deutsch',
	pt: 'Português',
}

export const CATEGORY_LABELS: Record<PhraseMode, string> = {
	motivation: 'Daily Motivation',
	affirmation: 'Affirmations',
	haiku: 'Haiku',
	word: 'Word of the Day',
	custom: 'Custom',
}

export const SUBTEXT_MODE_LABELS: Record<SubtextMode, string> = {
	none: 'None',
	translation: 'Translation',
	romaji: 'Romaji',
	custom: 'Custom',
}

export const MOTIVATIONS: Phrase[] = [
	{
		id: 'perseverance',
		romaji: 'Ippo ippo, mae e susumu',
		texts: {
			ja: '一歩一歩、前へ進む',
			en: 'Step by step, moving forward',
			es: 'Paso a paso, avanzando',
			fr: 'Pas à pas, avancer',
			de: 'Schritt für Schritt vorwärts',
			pt: 'Passo a passo, seguindo em frente',
		},
	},
	{
		id: 'growth',
		romaji: 'Hibi seichō',
		texts: {
			ja: '日々成長',
			en: 'Growing every day',
			es: 'Creciendo cada día',
			fr: 'Grandir chaque jour',
			de: 'Jeden Tag wachsen',
			pt: 'Crescendo a cada dia',
		},
	},
	{
		id: 'mindfulness',
		romaji: 'Ima wo ikiru',
		texts: {
			ja: '今を生きる',
			en: 'Live in the present',
			es: 'Vivir el presente',
			fr: 'Vivre le présent',
			de: 'Im Moment leben',
			pt: 'Viver o presente',
		},
	},
	{
		id: 'strength',
		romaji: 'Nana korobi ya oki',
		texts: {
			ja: '七転び八起き',
			en: 'Fall seven times, rise eight',
			es: 'Cae siete veces, levántate ocho',
			fr: 'Tomber sept fois, se relever huit',
			de: 'Siebenmal fallen, achtmal aufstehen',
			pt: 'Cair sete vezes, levantar oito',
		},
	},
	{
		id: 'persistence',
		romaji: 'Keizoku wa chikara nari',
		texts: {
			ja: '継続は力なり',
			en: 'Persistence is power',
			es: 'La persistencia es poder',
			fr: 'La persévérance est le pouvoir',
			de: 'Beharrlichkeit ist Stärke',
			pt: 'Persistência é poder',
		},
	},
	{
		id: 'beginners-mind',
		romaji: 'Shoshin wasuru bekarazu',
		texts: {
			ja: '初心忘るべからず',
			en: "Never forget beginner's mind",
			es: 'Nunca olvides la mente del principiante',
			fr: "N'oublie jamais l'esprit du débutant",
			de: 'Vergiss nie den Geist des Anfängers',
			pt: 'Nunca esqueça a mente de iniciante',
		},
	},
	{
		id: 'one-meeting',
		romaji: 'Ichi-go ichi-e',
		texts: {
			ja: '一期一会',
			en: 'One time, one meeting',
			es: 'Un momento, un encuentro',
			fr: 'Une fois, une rencontre',
			de: 'Eine Zeit, eine Begegnung',
			pt: 'Um momento, um encontro',
		},
	},
	{
		id: 'action',
		romaji: 'Yūgen jikkō',
		texts: {
			ja: '有言実行',
			en: 'Words into action',
			es: 'Palabras en acción',
			fr: 'Des paroles aux actes',
			de: 'Worte in Taten umsetzen',
			pt: 'Palavras em ação',
		},
	},
]

export const AFFIRMATIONS: Phrase[] = [
	{
		id: 'capable',
		romaji: 'Watashi wa dekiru',
		texts: {
			ja: '私はできる',
			en: 'I am capable',
			es: 'Soy capaz',
			fr: 'Je suis capable',
			de: 'Ich bin fähig',
			pt: 'Eu sou capaz',
		},
	},
	{
		id: 'enough',
		romaji: 'Watashi wa jūbun da',
		texts: {
			ja: '私は十分だ',
			en: 'I am enough',
			es: 'Soy suficiente',
			fr: 'Je suis suffisant',
			de: 'Ich bin genug',
			pt: 'Eu sou suficiente',
		},
	},
	{
		id: 'grateful',
		romaji: 'Kansha no kokoro',
		texts: {
			ja: '感謝の心',
			en: 'I am grateful',
			es: 'Estoy agradecido',
			fr: 'Je suis reconnaissant',
			de: 'Ich bin dankbar',
			pt: 'Eu sou grato',
		},
	},
	{
		id: 'peace',
		romaji: 'Kokoro ni heiwa',
		texts: {
			ja: '心に平和',
			en: 'Peace in my heart',
			es: 'Paz en mi corazón',
			fr: 'Paix dans mon cœur',
			de: 'Frieden in meinem Herzen',
			pt: 'Paz no meu coração',
		},
	},
	{
		id: 'strength-within',
		romaji: 'Uchi naru tsuyosa',
		texts: {
			ja: '内なる強さ',
			en: 'Strength lies within me',
			es: 'La fuerza está dentro de mí',
			fr: 'La force est en moi',
			de: 'Die Stärke liegt in mir',
			pt: 'A força está dentro de mim',
		},
	},
	{
		id: 'worthy',
		romaji: 'Watashi wa kachi ga aru',
		texts: {
			ja: '私は価値がある',
			en: 'I am worthy of love',
			es: 'Soy digno de amor',
			fr: "Je suis digne d'amour",
			de: 'Ich bin der Liebe würdig',
			pt: 'Eu sou digno de amor',
		},
	},
	{
		id: 'choose-joy',
		romaji: 'Kyō, yorokobi wo erabu',
		texts: {
			ja: '今日、喜びを選ぶ',
			en: 'Today I choose joy',
			es: 'Hoy elijo la alegría',
			fr: "Aujourd'hui je choisis la joie",
			de: 'Heute wähle ich Freude',
			pt: 'Hoje eu escolho a alegria',
		},
	},
	{
		id: 'trust-journey',
		romaji: 'Tabi wo shinjiru',
		texts: {
			ja: '旅を信じる',
			en: 'I trust my journey',
			es: 'Confío en mi camino',
			fr: 'Je fais confiance à mon chemin',
			de: 'Ich vertraue meinem Weg',
			pt: 'Eu confio na minha jornada',
		},
	},
]

export const HAIKUS: Phrase[] = [
	{
		id: 'frog',
		romaji: 'Furu ike ya\nKawazu tobikomu\nMizu no oto',
		texts: {
			ja: '古池や\n蛙飛び込む\n水の音',
			en: 'Old pond—\na frog jumps in,\nsound of water',
			es: 'Viejo estanque—\nuna rana salta,\nsonido del agua',
			fr: "Vieil étang—\nune grenouille plonge,\nbruit de l'eau",
			de: 'Alter Teich—\nein Frosch springt hinein,\nKlang des Wassers',
			pt: 'Velho lago—\num sapo salta,\nsom da água',
		},
	},
	{
		id: 'autumn',
		romaji: 'Aki fukaki\nTonari wa nani wo\nSuru hito zo',
		texts: {
			ja: '秋深き\n隣は何を\nする人ぞ',
			en: 'Deep autumn—\nmy neighbor,\nwhat does he do?',
			es: 'Otoño profundo—\nmi vecino,\n¿qué hace?',
			fr: 'Automne profond—\nmon voisin,\nque fait-il?',
			de: 'Tiefer Herbst—\nmein Nachbar,\nwas tut er?',
			pt: 'Outono profundo—\nmeu vizinho,\no que faz?',
		},
	},
	{
		id: 'spring',
		romaji: 'Haru no umi\nHinemosu notari\nNotari kana',
		texts: {
			ja: '春の海\nひねもすのたり\nのたりかな',
			en: 'Spring sea—\nall day long, gently\nrising and falling',
			es: 'Mar de primavera—\ntodo el día, suavemente\nsubiendo y bajando',
			fr: 'Mer de printemps—\ntoute la journée, doucement\nmontant et descendant',
			de: 'Frühlingsmeer—\nden ganzen Tag, sanft\nsteigend und fallend',
			pt: 'Mar de primavera—\no dia todo, suavemente\nsubindo e descendo',
		},
	},
	{
		id: 'cherry',
		romaji: 'Chiru sakura\nNokoru sakura mo\nChiru sakura',
		texts: {
			ja: '散る桜\n残る桜も\n散る桜',
			en: 'Falling cherry blossoms—\nthose remaining\nwill also fall',
			es: 'Flores de cerezo cayendo—\nlas que quedan\ntambién caerán',
			fr: 'Fleurs de cerisier tombant—\ncelles qui restent\ntomberont aussi',
			de: 'Fallende Kirschblüten—\ndie verbleibenden\nwerden auch fallen',
			pt: 'Flores de cerejeira caindo—\nas que restam\ntambém cairão',
		},
	},
	{
		id: 'moon',
		romaji: 'Meigetsu wo\nTotte kurero to\nNaku ko kana',
		texts: {
			ja: '名月を\n取ってくれろと\n泣く子かな',
			en: 'Harvest moon—\nthe child cries,\n"get it for me!"',
			es: 'Luna de cosecha—\nel niño llora,\n"¡tráemela!"',
			fr: 'Lune des moissons—\nl\'enfant pleure,\n"attrape-la moi!"',
			de: 'Erntemond—\ndas Kind weint,\n"hol ihn mir!"',
			pt: 'Lua de colheita—\na criança chora,\n"pegue para mim!"',
		},
	},
	{
		id: 'snow',
		romaji: 'Yuki fureba\nFuyugomori seyo to\nTozasu mon',
		texts: {
			ja: '雪降れば\n冬籠りせよと\n閉ざす門',
			en: 'When snow falls,\nthe gate closes—\ntime to stay inside',
			es: 'Cuando cae la nieve,\nla puerta se cierra—\nhora de quedarse dentro',
			fr: 'Quand la neige tombe,\nle portail se ferme—\ntemps de rester dedans',
			de: 'Wenn Schnee fällt,\nschließt das Tor—\nZeit drinnen zu bleiben',
			pt: 'Quando a neve cai,\no portão se fecha—\nhora de ficar dentro',
		},
	},
	{
		id: 'summer',
		romaji: 'Shizukasa ya\nIwa ni shimiiru\nSemi no koe',
		texts: {
			ja: '閑さや\n岩にしみ入る\n蝉の声',
			en: "Such stillness—\nthe cicada's cry\npierces the rocks",
			es: 'Tal quietud—\nel canto de la cigarra\npenetra las rocas',
			fr: 'Tel silence—\nle cri de la cigale\npénètre les rochers',
			de: 'Solche Stille—\nder Schrei der Zikade\ndurchdringt die Felsen',
			pt: 'Tal quietude—\no canto da cigarra\npenetra as rochas',
		},
	},
	{
		id: 'path',
		romaji: 'Kono michi ya\nYuku hito nashi ni\nAki no kure',
		texts: {
			ja: 'この道や\n行く人なしに\n秋の暮れ',
			en: 'This road—\nno one walks it,\nautumn dusk',
			es: 'Este camino—\nnadie lo recorre,\natardecer de otoño',
			fr: "Ce chemin—\npersonne ne le parcourt,\ncrépuscule d'automne",
			de: 'Dieser Weg—\nniemand geht ihn,\nHerbstdämmerung',
			pt: 'Este caminho—\nninguém o percorre,\nentardecer de outono',
		},
	},
]

export const WORDS: Phrase[] = [
	{
		id: 'komorebi',
		romaji: 'Komorebi',
		texts: {
			ja: '木漏れ日',
			en: 'Sunlight filtering through leaves',
			es: 'Luz del sol filtrándose entre hojas',
			fr: 'Lumière du soleil à travers les feuilles',
			de: 'Sonnenlicht durch Blätter',
			pt: 'Luz do sol através das folhas',
		},
	},
	{
		id: 'wabisabi',
		romaji: 'Wabi-sabi',
		texts: {
			ja: '侘寂',
			en: 'Beauty in imperfection',
			es: 'Belleza en la imperfección',
			fr: "Beauté dans l'imperfection",
			de: 'Schönheit in der Unvollkommenheit',
			pt: 'Beleza na imperfeição',
		},
	},
	{
		id: 'ikigai',
		romaji: 'Ikigai',
		texts: {
			ja: '生きがい',
			en: 'Reason for being',
			es: 'Razón de ser',
			fr: "Raison d'être",
			de: 'Lebenssinn',
			pt: 'Razão de viver',
		},
	},
	{
		id: 'kintsugi',
		romaji: 'Kintsugi',
		texts: {
			ja: '金継ぎ',
			en: 'Golden repair — embracing flaws',
			es: 'Reparación dorada — abrazar defectos',
			fr: 'Réparation dorée — embrasser les défauts',
			de: 'Goldene Reparatur — Fehler annehmen',
			pt: 'Reparo dourado — abraçar falhas',
		},
	},
	{
		id: 'shinrinyoku',
		romaji: 'Shinrin-yoku',
		texts: {
			ja: '森林浴',
			en: 'Forest bathing — nature immersion',
			es: 'Baño de bosque — inmersión en la naturaleza',
			fr: 'Bain de forêt — immersion dans la nature',
			de: 'Waldbaden — Eintauchen in die Natur',
			pt: 'Banho de floresta — imersão na natureza',
		},
	},
	{
		id: 'mono-no-aware',
		romaji: 'Mono no aware',
		texts: {
			ja: '物の哀れ',
			en: 'Bittersweet awareness of impermanence',
			es: 'Conciencia agridulce de lo efímero',
			fr: "Conscience douce-amère de l'impermanence",
			de: 'Bittersüßes Bewusstsein der Vergänglichkeit',
			pt: 'Consciência agridoce da impermanência',
		},
	},
	{
		id: 'musubi',
		romaji: 'Musubi',
		texts: {
			ja: '結び',
			en: 'Connection — the energy that binds',
			es: 'Conexión — la energía que une',
			fr: "Connexion — l'énergie qui lie",
			de: 'Verbindung — die Energie, die bindet',
			pt: 'Conexão — a energia que une',
		},
	},
	{
		id: 'yugen',
		romaji: 'Yūgen',
		texts: {
			ja: '幽玄',
			en: 'Profound, mysterious beauty',
			es: 'Belleza profunda y misteriosa',
			fr: 'Beauté profonde et mystérieuse',
			de: 'Tiefe, geheimnisvolle Schönheit',
			pt: 'Beleza profunda e misteriosa',
		},
	},
	{
		id: 'natsukashii',
		romaji: 'Natsukashii',
		texts: {
			ja: '懐かしい',
			en: 'Nostalgic longing for the past',
			es: 'Nostalgia por el pasado',
			fr: 'Nostalgie du passé',
			de: 'Sehnsucht nach der Vergangenheit',
			pt: 'Saudade do passado',
		},
	},
	{
		id: 'shoganai',
		romaji: 'Shōganai',
		texts: {
			ja: 'しょうがない',
			en: "It can't be helped — acceptance",
			es: 'No se puede evitar — aceptación',
			fr: "On n'y peut rien — acceptation",
			de: 'Es lässt sich nicht ändern — Akzeptanz',
			pt: 'Não tem jeito — aceitação',
		},
	},
]

export const PHRASES_BY_CATEGORY: Record<PhraseCategory, Phrase[]> = {
	motivation: MOTIVATIONS,
	affirmation: AFFIRMATIONS,
	haiku: HAIKUS,
	word: WORDS,
}
