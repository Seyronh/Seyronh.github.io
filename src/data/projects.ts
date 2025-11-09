import type { ImageMetadata } from "astro";

// Importar todas las imágenes dinámicamente
const images = import.meta.glob<{ default: ImageMetadata }>(
	"@assets/projects/*.{png,jpg,jpeg,webp,gif}",
	{ eager: true }
);

export interface Project {
	title: string;
	description: string;
	longDescription?: string;
	image: string; // Nombre del archivo en src/assets/projects/
	technologies: string[];
	languages: string[];
	category: "web" | "mobile" | "desktop" | "other";
	links: {
		github?: string;
		website?: string;
	};
	date: string;
	status: "completed" | "in-progress" | "archived";
}

// Helper para obtener la imagen importada
export function getProjectImage(imageName: string): ImageMetadata {
	const imagePath = `/src/assets/projects/${imageName}`;
	const image = images[imagePath];

	if (!image) {
		throw new Error(`Image not found: ${imagePath}`);
	}

	return image.default;
}

export const projects: Project[] = [
	{
		title: "Credymás",
		description: "Página web para la empresa de servicios financieros Credymás.",
		longDescription:
			"Sitio web corporativo desarrollado para una empresa de servicios financieros, con enfoque en rendimiento y SEO.",
		image: "credymas.webp", // Solo el nombre del archivo
		technologies: ["Astro"],
		languages: ["TypeScript", "HTML", "CSS", "JavaScript"],
		category: "web",
		links: {
			website: "https://www.credymas.es",
		},
		date: "2025-11-08",
		status: "completed",
	},
	{
		title: "Portafolio Personal",
		description:
			"Un sitio web personal para mostrar mis proyectos y habilidades.",
		longDescription:
			"Portfolio desarrollado con Astro, diseñado para mostrar proyectos, habilidades y experiencia profesional de manera moderna y eficiente.",
		image: "portfolio.webp", // Solo el nombre del archivo
		technologies: ["Astro"],
		languages: ["TypeScript", "HTML", "CSS", "JavaScript"],
		category: "web",
		links: {
			github: "https://github.com/Seyronh/Seyronh.github.io",
			website: "https://seyronh.github.io",
		},
		date: "2025-11-08",
		status: "in-progress",
	},
];

export type Proyecto = Project;
export const proyectos = projects;

export function getProjectsByCategory(
	category: Project["category"]
): Project[] {
	return projects.filter((project) => project.category === category);
}

export function getAllTechnologies(): string[] {
	const techs = new Set<string>();
	projects.forEach((project) => {
		project.technologies.forEach((tech) => techs.add(tech));
	});
	return Array.from(techs).sort();
}

export function getProjectsByStatus(status: Project["status"]): Project[] {
	return projects.filter((project) => project.status === status);
}

export function getRecentProjects(limit: number = 3): Project[] {
	return [...projects]
		.sort((a, b) => b.date.localeCompare(a.date))
		.slice(0, limit);
}
