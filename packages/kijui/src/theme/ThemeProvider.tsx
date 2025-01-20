import type {ReactNode} from "react";
import {ThemeProvider as StyledComponentThemeProvider} from "styled-components";
import {lightTheme} from "./theme.ts";


function ThemeProvider({children}: {children: ReactNode}): ReactNode {
  return (
    <StyledComponentThemeProvider theme={lightTheme}>
      {children}
    </StyledComponentThemeProvider>
  )
}

export default ThemeProvider;
