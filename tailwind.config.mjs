/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				wheat: {
					50: "#fdfbf7",
					100: "#f5f0e6",
					200: "#e8dcc6",
					500: "#8b6914",
					600: "#6b5010",
					700: "#4a380b",
				},
			},
		},
	},
	plugins: [],
};
