import en from "./languages/en.json";
import es from "./languages/es.json";

export const languages = {
	en: "English",
	es: "Español",
};
export const defaultLang = "en";
export const supportedLangs = Object.keys(
	languages
) as (keyof typeof languages)[];
export const ui = {
	en,
	es,
} as const;
