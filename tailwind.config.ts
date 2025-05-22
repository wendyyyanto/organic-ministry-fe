import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				clash: ["var(--font-clash)"],
				melodrama: ["var(--font-melodrama)"]
			},
			colors: {
				primary: "#178E96",
				secondary: "#FDE3C8",
				white: "#ffffff",
				black: "#111111"
			},
			margin: {
				8: "2.125rem",
				9: "2.375rem"
			},
			gridTemplateColumns: {
				medium: "repeat(12, 80px)",
				large: "repeat(12, 120px)"
			}
		}
	},
	plugins: []
} satisfies Config;
