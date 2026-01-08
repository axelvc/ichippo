import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { platform } from 'node:os'
import chromium from '@sparticuz/chromium'
import type { APIRoute } from 'astro'
import puppeteer from 'puppeteer-core'
import { IPHONE_MODELS } from '@/features/controls'
import { decodeConfig } from '@/lib/config'

export const prerender = false

const CHROMIUM_PACK_URL = import.meta.env.DEV
	? undefined
	: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/chromium-pack.tar`

function findLocalChromium(): string | null {
	const os = platform()

	const paths: string[] = []

	if (os === 'darwin') {
		// macOS paths for Chrome, Chromium, Edge, Brave
		paths.push(
			'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
			'/Applications/Chromium.app/Contents/MacOS/Chromium',
			'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
			'/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
			'/Applications/Arc.app/Contents/MacOS/Arc',
		)
	} else if (os === 'linux') {
		// Linux paths
		paths.push(
			'/usr/bin/google-chrome',
			'/usr/bin/chromium',
			'/usr/bin/chromium-browser',
			'/usr/bin/microsoft-edge',
			'/usr/bin/brave-browser',
			'/snap/bin/chromium',
		)
	} else if (os === 'win32') {
		// Windows paths
		const programFiles = process.env['ProgramFiles'] || 'C:\\Program Files'
		const programFilesX86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)'

		paths.push(
			`${programFiles}\\Google\\Chrome\\Application\\chrome.exe`,
			`${programFilesX86}\\Google\\Chrome\\Application\\chrome.exe`,
			`${programFiles}\\Chromium\\Application\\chrome.exe`,
			`${programFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
			`${programFilesX86}\\Microsoft\\Edge\\Application\\msedge.exe`,
			`${programFiles}\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`,
		)
	}

	// Find first existing executable
	for (const path of paths) {
		if (existsSync(path)) {
			return path
		}
	}

	// Try using 'which' command on Unix-like systems
	if (os !== 'win32') {
		const commands = ['google-chrome', 'chromium', 'chromium-browser', 'microsoft-edge', 'brave-browser']
		for (const cmd of commands) {
			try {
				const result = execSync(`which ${cmd}`, { encoding: 'utf8' }).trim()
				if (result) {
					return result
				}
			} catch {
				// Command not found, continue
			}
		}
	}

	return null
}

export const GET: APIRoute = async ({ url, request }) => {
	const configParam = url.searchParams.get('config')

	if (!configParam) {
		return new Response('Missing config parameter', { status: 400 })
	}

	const config = decodeConfig(configParam)
	if (!config) {
		return new Response('Invalid config', { status: 400 })
	}

	// Get dimensions from headers or fallback to model defaults
	const widthHeader = request.headers.get('X-Width')
	const heightHeader = request.headers.get('X-Height')

	let width: number
	let height: number

	if (widthHeader && heightHeader) {
		const parsedWidth = Number.parseInt(widthHeader, 10)
		const parsedHeight = Number.parseInt(heightHeader, 10)

		// Use parsed values if valid, otherwise fallback to model defaults
		if (!Number.isNaN(parsedWidth) && !Number.isNaN(parsedHeight) && parsedWidth > 0 && parsedHeight > 0) {
			width = parsedWidth
			height = parsedHeight
		} else {
			const dimensions = IPHONE_MODELS[config.model]
			width = dimensions.width
			height = dimensions.height
		}
	} else {
		const dimensions = IPHONE_MODELS[config.model]
		width = dimensions.width
		height = dimensions.height
	}

	const renderUrl = new URL('/wallpaper/render', url.origin)
	renderUrl.searchParams.set('config', configParam)

	let browser = null
	try {
		const isDev = import.meta.env.DEV
		const executablePath = isDev ? findLocalChromium() : await chromium.executablePath(CHROMIUM_PACK_URL)

		if (!executablePath) {
			return new Response('No Chromium-based browser found. Please install Chrome, Chromium, Edge, or Brave.', {
				status: 500,
			})
		}

		browser = await puppeteer.launch({
			args: isDev ? ['--no-sandbox', '--disable-setuid-sandbox'] : chromium.args,
			defaultViewport: { width, height, deviceScaleFactor: 1 },
			executablePath,
			headless: 'shell',
		})

		const page = await browser.newPage()

		// Navigate to render page and wait for fonts
		await page.goto(renderUrl.toString(), {
			waitUntil: 'networkidle0',
			timeout: 30000,
		})

		// Wait for fonts to load
		await page.evaluate(() => document.fonts.ready)

		// Small delay to ensure everything is rendered
		await new Promise((resolve) => setTimeout(resolve, 100))

		// Take screenshot of the wallpaper element
		const element = await page.$('#wallpaper')
		if (!element) {
			return new Response('Failed to find wallpaper element', { status: 500 })
		}

		const screenshot = await element.screenshot({
			type: 'png',
		})

		return new Response(Buffer.from(screenshot), {
			headers: {
				'Content-Type': 'image/png',
				'Cache-Control': 'public, max-age=86400',
			},
		})
	} catch (error) {
		console.error('Wallpaper generation failed:', error)
		return new Response(`Failed to generate wallpaper: ${error}`, { status: 500 })
	} finally {
		if (browser) {
			await browser.close()
		}
	}
}
