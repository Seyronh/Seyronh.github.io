// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},
	site: "https://seyronh.is-a.dev",
	integrations: [sitemap(), robotsTxt(), compressor()],

	vite: {
		plugins: [tailwindcss()],
	},
});
