// @ts-check

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': '/src',
			},
		},
	},
	integrations: [react()],
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Hanken Grotesk',
				cssVariable: '--font-sans',
				weights: [200, 400, 500, 600],
			},
			{
				provider: fontProviders.google(),
				name: 'Zen Maru Gothic',
				cssVariable: '--font-zen',
				weights: [200, 400, 500, 600],
			},
			{
				provider: fontProviders.google(),
				name: 'IBM Plex Mono',
				cssVariable: '--font-mono',
				weights: [200, 400, 500, 600],
			},
		],
	},
	output: 'server',
	adapter: vercel({
		edgeMiddleware: true,
	}),
})
