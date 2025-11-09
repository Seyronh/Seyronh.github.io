export interface PersonalInfo {
	name: string;
	firstName: string;
	lastName: string;
	title: string;
	tagline: string;
	bio: string;

	location: {
		city: string;
		country: string;
		timezone: string;
	};

	yearsOfExperience: number;
	currentRole?: string;
	currentCompany?: string;
	availability: "available" | "busy" | "not-looking";
	workPreferences: {
		remote: boolean;
		hybrid: boolean;
		onSite: boolean;
		freelance: boolean;
		fullTime: boolean;
		partTime: boolean;
	};

	languages: {
		name: string;
		level: "native" | "fluent" | "intermediate" | "basic";
	}[];

	interests: string[];

	resumeUrl?: string;
}

export const personalInfo: PersonalInfo = {
	name: "Sergio Bueno Gómez",
	firstName: "Sergio",
	lastName: "Bueno Gómez",
	title: "Ingeniero de Software",
	tagline: "Construyendo experiencias web modernas y escalables",
	bio: "Ingeniero de Software apasionado por crear soluciones web innovadoras. Especializado en Node.js.",
	location: {
		city: "Málaga",
		country: "España",
		timezone: "Europe/Madrid",
	},

	yearsOfExperience: 0,
	currentRole: "Estudiante",
	currentCompany: "Universidad de Málaga",
	availability: "not-looking",
	workPreferences: {
		remote: true,
		hybrid: true,
		onSite: false,
		freelance: false,
		fullTime: true,
		partTime: false,
	},

	languages: [
		{ name: "Español", level: "native" },
		{ name: "Inglés", level: "fluent" },
	],

	interests: [
		"Desarrollo Web",
		"Open Source",
		"Fotografía",
		"Música",
		"Gaming",
		"Privacidad Digital",
	],

	resumeUrl: "/cv/curriculum-vitae.pdf",
};

export function getCurrentPosition(): string {
	if (personalInfo.currentRole && personalInfo.currentCompany) {
		return `${personalInfo.currentRole} at ${personalInfo.currentCompany}`;
	}
	return personalInfo.title;
}

export function isAvailableForWork(): boolean {
	return personalInfo.availability === "available";
}

export function getPreferredWorkTypes(): string[] {
	const prefs = personalInfo.workPreferences;
	const types: string[] = [];

	if (prefs.remote) types.push("Remote");
	if (prefs.hybrid) types.push("Hybrid");
	if (prefs.onSite) types.push("On-site");
	if (prefs.freelance) types.push("Freelance");
	if (prefs.fullTime) types.push("Full-time");
	if (prefs.partTime) types.push("Part-time");

	return types;
}
