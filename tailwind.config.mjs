/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				customBackgroundStart: 'rgba(250,250,250,0)',
				customBackgroundEnd: 'rgb(9, 9, 11)',
				'custom-transparent': 'rgba(250,250,250,0)',
				'custom-black': 'rgb(9, 9, 11)',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(#09090b00, #09090b)',
			},
			fontFamily: {
				'rounabold': ['rounabold'],
			}
		},
	},
	plugins: [],
}
