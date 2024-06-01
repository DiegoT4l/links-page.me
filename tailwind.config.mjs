/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', 
	theme: {
		extend: {
			colors: {
				customBackgroundStart: 'rgba(250,250,250,0)',
				customBackgroundEnd: 'rgb(9, 9, 11)',
			},
			gradientPercentages: {
				'0': '0%',
				'95': '95.17178922086148%',
			},
			fontFamily: {
				'rounabold': ['rounabold'],
			}
		},
	},
	plugins: [],
}
