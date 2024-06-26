// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/style.css"],
	postcss: {
		plugins: {
			"postcss-import": {},
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			title: "Medefit",
			htmlAttrs: {
				lang: "pt-BR",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{
					name: "description",
					content:
						"Calcule seus índices corporais e tenha feedback instantâneo sobre sua saúde.",
				},
			],
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
				},
			],
			script: [
				{
					async: true,
					src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9387011392687218",
					crossorigin: "anonymous",
				},
			],
		},
	},
});
