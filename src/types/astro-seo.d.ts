declare module "astro-seo" {
	export interface SEOProps {
		title?: string;
		titleTemplate?: string;
		titleDefault?: string;
		description?: string;
		canonical?: string;
		noindex?: boolean;
		nofollow?: boolean;
		charset?: string;
		languageAlternates?: Array<{ href: string; hrefLang: string }>;
		openGraph?: {
			basic?: {
				title: string;
				type: string;
				image: string;
				url: string;
			};
			optional?: {
				description?: string;
				locale?: string;
				siteName?: string;
			};
			article?: {
				publishedTime?: string;
				modifiedTime?: string;
				authors?: string[];
				section?: string;
				tags?: string[];
			};
			image?: {
				alt?: string;
			};
		};
		twitter?: {
			card?: string;
			site?: string;
			creator?: string;
			title?: string;
			description?: string;
			image?: string;
			imageAlt?: string;
		};
	}

	export const SEO: (_props: SEOProps) => any;
}
