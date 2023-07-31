/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media', // or 'media' or 'class'
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cairo Variable', 'sans-serif']
			}
				
		},
	},
	plugins: [],
}
