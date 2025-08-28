/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2563eb', // blue-600
					dark: '#4f46e5', // indigo-600
				},
				secondary: {
					DEFAULT: '#be185d', // pink-700
					light: '#FDE6EA', // FDE6EA
				},
				accent: {
					teal: '#0d9488', // teal-600
					rose: '#e11d48', // rose-600
					indigo: '#312e81', // indigo-900
				},
				gray: {
					// Redefine gray to include specific shades used
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
				},
				blue: {
					// Redefine blue to include specific shades used
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
				},
				indigo: {
					// Redefine indigo to include specific shades used
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					900: '#312e81',
				},
				pink: {
					// Redefine pink to include specific shades used
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				teal: {
					// Redefine teal to include specific shades used
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
				},
				rose: {
					// Redefine rose to include specific shades used
					500: '#f43f5e',
					600: '#e11d48',
					700: '#be123c',
				},
				sky: {
					// Redefine sky to include specific shades used
					400: '#38bdf8',
					500: '#0ea5e9',
				},
				green: {
					// Redefine green to include specific shades used
					400: '#4ade80',
					600: '#22c55e',
				},
			},
		},
	},
	plugins: [],
}
