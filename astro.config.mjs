// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import robotsTxt from "astro-robots-txt";

import min from "astro-min";

import playformInline from "@playform/inline";

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
	integrations: [
		sitemap(),
		robotsTxt(),
		playformInline(),
		min(),
		playformCompress({
			CSS: true,
			HTML: false,
			Image: true,
			JavaScript: false,
			SVG: true,
		}),
	],
});
