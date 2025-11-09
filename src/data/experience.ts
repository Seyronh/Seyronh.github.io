export interface Experience {
	company: string;
	position: string;
	location: string;
	locationType: "remote" | "hybrid" | "on-site";
	startDate: string;
	endDate: string | "present";
	description: string;
	responsibilities: string[];
	achievements?: string[];
	technologies: string[];
	companyUrl?: string;
	logo?: string;
}

export const experiences: Experience[] = [];

export function getCurrentExperience(): Experience | undefined {
	return experiences.find((exp) => exp.endDate === "present");
}

export function getPastExperiences(): Experience[] {
	return experiences.filter((exp) => exp.endDate !== "present");
}

export function getExperiencesByCompany(company: string): Experience[] {
	return experiences.filter((exp) =>
		exp.company.toLowerCase().includes(company.toLowerCase())
	);
}

export function getTotalYearsOfExperience(): number {
	const now = new Date();
	let totalMonths = 0;

	experiences.forEach((exp) => {
		const start = new Date(exp.startDate + "-01");
		const end = exp.endDate === "present" ? now : new Date(exp.endDate + "-01");

		const months =
			(end.getFullYear() - start.getFullYear()) * 12 +
			(end.getMonth() - start.getMonth());
		totalMonths += months;
	});

	return Math.round((totalMonths / 12) * 10) / 10;
}
