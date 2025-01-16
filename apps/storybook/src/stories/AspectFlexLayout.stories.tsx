import {AspectFlexLayout} from '@kijewoku/kijui/layout';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/ScreenLayout',
  component: AspectFlexLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AspectFlexLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Le composant `ScreenLayout` affiche un conteneur avec une gestion de l\'aspect ratio et un bouton pour activer le mode plein écran.',
      },
    },
  },
};
