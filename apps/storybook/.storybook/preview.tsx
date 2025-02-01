// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {DimensionsProvider} from "@kijewoku/kijui/store";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {GlobalStyle, ThemeProvider } from "@kijewoku/kijui/theme";
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DimensionsProvider>
          <GlobalStyle />
          <Story />
        </DimensionsProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;
