// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},

	image: {
		responsiveStyles: true,
		layout: "full-width",
	},

	site: "https://seyronh.github.io",
	integrations: [sitemap(), robotsTxt()],

	vite: {
		plugins: [tailwindcss()],
	},
});
