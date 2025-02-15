import type { DefaultTheme } from "styled-components";
import {
	CONTRAST_DARK,
	CONTRAST_LIGHT,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
} from "./colors.const.ts";
import { getContrastTextColor } from "./getLuminence.theme.ts";

interface ThemeColors {
	primary: string;
	secondary: string;
	background: string;
	text: string;
	primaryAccent: string;
	secondaryAccent: string;
	neutralLight: string;
	neutralDark: string;
}

interface ContrastText {
	primary: string;
	secondary: string;
}

interface CustomTheme extends DefaultTheme {
	colors: ThemeColors;
	contrastText: ContrastText;
}

export const lightTheme: CustomTheme = {
	colors: {
		primary: PRIMARY_COLOR,
		secondary: SECONDARY_COLOR,
		background: CONTRAST_LIGHT,
		text: CONTRAST_DARK,
		primaryAccent: "#EAB6DB",
		secondaryAccent: "#95DFE3",
		neutralLight: "#F5F5F5",
		neutralDark: "#333540",
	},
	contrastText: {
		primary: getContrastTextColor(PRIMARY_COLOR),
		secondary: getContrastTextColor(SECONDARY_COLOR),
	},
};

export const darkTheme: CustomTheme = {
	colors: {
		primary: PRIMARY_COLOR,
		secondary: SECONDARY_COLOR,
		background: CONTRAST_DARK,
		text: CONTRAST_LIGHT,
		primaryAccent: "#B15498",
		secondaryAccent: "#4BA6A9",
		neutralLight: "#333540",
		neutralDark: "#1c1c1e",
	},
	contrastText: {
		primary: getContrastTextColor(PRIMARY_COLOR),
		secondary: getContrastTextColor(SECONDARY_COLOR),
	},
};
