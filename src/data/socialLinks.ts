export interface SocialLink {
	name: string;
	url: string;
	icon: string;
	username?: string;
	color?: string;
	showInHeader?: boolean;
	showInFooter?: boolean;
	showInContact?: boolean;
}
export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/seyronh",
		icon: "mdi:github",
		username: "seyronh",
		color: "#181717",
		showInHeader: true,
		showInFooter: true,
		showInContact: true,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/sergio-bueno-g%C3%B3mez-307481334/",
		icon: "mdi:linkedin",
		username: "Sergio Bueno Gómez",
		color: "#0A66C2",
		showInHeader: true,
		showInFooter: true,
		showInContact: true,
	},
	{
		name: "Twitter",
		url: "https://x.com/Seyronh",
		icon: "mdi:twitter",
		username: "@Seyronh",
		color: "#1DA1F2",
		showInHeader: false,
		showInFooter: true,
		showInContact: false,
	},
	{
		name: "Email",
		url: "mailto:seyron@proton.me",
		icon: "mdi:email",
		username: "seyron@proton.me",
		color: "#EA4335",
		showInHeader: false,
		showInFooter: true,
		showInContact: true,
	},
	{
		name: "Instagram",
		url: "https://instagram.com/seyronh",
		icon: "mdi:instagram",
		username: "@seyronh",
		color: "#E4405F",
		showInHeader: false,
		showInFooter: true,
		showInContact: false,
	},
	{
		name: "Discord",
		url: "https://discord.com/users/seyron",
		icon: "mdi:discord",
		username: "seyron",
		color: "#5865F2",
		showInHeader: false,
		showInFooter: false,
		showInContact: true,
	},
];

export function getSocialLinksByLocation(
	location: "header" | "footer" | "contact"
): SocialLink[] {
	const locationKey =
		`showIn${location.charAt(0).toUpperCase() + location.slice(1)}` as keyof SocialLink;
	return socialLinks.filter((link) => link[locationKey] === true);
}

export function getSocialLinkByName(name: string): SocialLink | undefined {
	return socialLinks.find(
		(link) => link.name.toLowerCase() === name.toLowerCase()
	);
}

export function getPrimarySocialLinks(): SocialLink[] {
	return getSocialLinksByLocation("header");
}

export function getAllSocialLinks(): SocialLink[] {
	return socialLinks;
}
