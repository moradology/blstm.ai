/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// Warm browns from logo - sienna family
				sienna: {
					50: "#FAF6F1",
					100: "#F2EBE3",
					200: "#E5D7C8",
					300: "#D4BBA3",
					400: "#B8936D",
					500: "#9C6644", // Primary - matches logo
					600: "#895838", // Accent - user specified (137,88,56)
					700: "#704A24",
					800: "#5A3C1E",
					900: "#3D2814",
				},
				// Warm parchment/linen background
				parchment: {
					50: "#FAF8F4",
					100: "#F5F2EB",
					200: "#F0EEDC", // Primary background (240,238,220)
					300: "#E8E2D0",
					400: "#DDD3BE",
					500: "#CCC0A6",
				},
				// Deep warm brown for text
				earth: {
					800: "#3D3428",
					900: "#2C2416",
					950: "#1A160E",
				},
			},
			fontFamily: {
				sans: ['"DM Sans"', "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
