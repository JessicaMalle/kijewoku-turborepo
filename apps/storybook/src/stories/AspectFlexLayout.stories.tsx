import type { Meta, StoryObj } from '@storybook/react';
import {AspectFlexLayout} from '@kijewoku/kijui/layout';

const meta = {
  title: 'Example/ScreenLayout',
  component: AspectFlexLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Met le composant en plein écran dans Storybook
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
