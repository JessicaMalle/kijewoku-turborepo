import { CONTRAST_DARK, CONTRAST_LIGHT } from "./colors.const.ts";

const getLuminance = (hex: string): number => {
	const cleanedHex = hex.replace("#", "");

	// Check the length of the hex format
	if (cleanedHex.length !== 6) {
		throw new Error("Invalid hex color format. Expected a 6-character string.");
	}

	// Extract the RGB components
	const rgb = cleanedHex
		.match(/.{2}/g)
		?.map((x) => Number.parseInt(x, 16) / 255);

	if (!rgb || rgb.length !== 3) {
		throw new Error("Invalid RGB conversion. Unable to parse the hex color.");
	}

	// Calculate the luminance
	const [r, g, b] = rgb.map((c) =>
		c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
	);

	if (r === undefined || g === undefined || b === undefined) {
		throw new Error("RGB values are undefined.");
	}

	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const getContrastTextColor = (hex: string) =>
	getLuminance(hex) > 0.5 ? CONTRAST_DARK : CONTRAST_LIGHT;
