export interface Education {
	institution: string;
	degree: string;
	field: string;
	location: string;
	startDate: string;
	endDate: string | "present";
	description?: string;
	achievements?: string[];
	logo?: string;
	url?: string;
}
export const education: Education[] = [
	{
		institution: "Universidad de Málaga",
		degree: "Grado en Ingeniería Informática",
		field: "Desarrollo de Software",
		location: "Málaga, España",
		startDate: "2022",
		endDate: "2027",
		description:
			"Enfoque en desarrollo web, bases de datos y arquitectura de software.",
		achievements: [],
		logo: "/education/universidad.webp",
		url: "https://universidad.com",
	},
];

export function getCurrentEducation(): Education | undefined {
	return education.find((edu) => edu.endDate === "present");
}
