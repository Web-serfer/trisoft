// @ts-check
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel';


import solidJs from '@astrojs/solid-js';


// https://astro.build/config
export default defineConfig({
  site: 'https://trisoft.ru',
  integrations: [icon(), solidJs()],
  vite: {
  	plugins: [tailwindcss()]
  },
  adapter: vercel(),
  output: 'server'
})