import type { DefaultTheme } from 'styled-components';
import {CONTRAST_DARK, CONTRAST_LIGHT, PRIMARY_COLOR, SECONDARY_COLOR} from "./colors.const.ts";
import {getContrastTextColor} from "./getLuminence.theme.ts";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    background: CONTRAST_LIGHT,
    text: CONTRAST_DARK,
    primaryAccent: '#EAB6DB',
    secondaryAccent: '#95DFE3',
    neutralLight: '#F5F5F5',
    neutralDark: '#333540',
  },
  contrastText: {
    primary: getContrastTextColor(PRIMARY_COLOR),
    secondary: getContrastTextColor(SECONDARY_COLOR),
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    background: CONTRAST_DARK,
    text: CONTRAST_LIGHT,
    primaryAccent: '#B15498',
    secondaryAccent: '#4BA6A9',
    neutralLight: '#333540',
    neutralDark: '#1c1c1e',
  },
  contrastText: {
    primary: getContrastTextColor(PRIMARY_COLOR),
    secondary: getContrastTextColor(SECONDARY_COLOR),
  },
};
