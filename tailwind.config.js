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
	// plugins: [
	//   plugin(function({ addComponents }) {
	//     addComponents({
	// 			".default-label": {

	// 			}
	// 		})
	//   })
	// ]
};
