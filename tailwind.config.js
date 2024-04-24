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
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".default-wrapper": {
					backgroundColor: "white",
					borderRadius: "0.5rem",
					margin: "auto",
					boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
					width: "90%",
				},
				".button": {
					"background": "#3b82f6",
					"color": "white",
					"font-weight": "bold",
					"padding": "8px 16px",
					"border-radius": "0.375rem",
				},
			});
		}),
	],
};
