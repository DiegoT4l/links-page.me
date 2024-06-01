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
				'custom-gradient': 'linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, rgb(9, 9, 11) 95%, rgb(9, 9, 11))',
			},
			fontFamily: {
				'rounabold': ['rounabold'],
			}
		},
	},
	plugins: [],
}
