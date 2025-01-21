// @ts-expect-error
import {GlobalStyle, ThemeProvider } from "@kijewoku/kijui/theme";
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
