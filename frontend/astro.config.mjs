// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'
import icon from 'astro-icon'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	site: 'http://trisoft.ru',
	integrations: [preact(), icon()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
				'react/jsx-runtime': 'preact/jsx-runtime',
			},
		},
	},
	output: 'server',
	adapter: vercel(),
})
