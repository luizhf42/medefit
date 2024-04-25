const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			screens: {
				xs: "460px",
			},
			fontFamily: {
				sans: ["Plus Jakarta Sans", "sans-serif"],
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".default-wrapper": {
					"background-color": "white",
					"border-radius": "0.5rem",
					margin: "auto",
					"box-shadow": "0 0 4px 0 rgba(0, 0, 0, 0.1)",
					width: "90%",
				},
				".button": {
					background: "#3b82f6",
					color: "white",
					"font-weight": "bold",
					padding: "8px 16px",
					"border-radius": "0.375rem",
				},
			});
		}),
	],
};
