import {AspectFlexLayout} from '@kijewoku/kijui/layout';
import type { Meta, StoryObj } from '@storybook/react';
import logo from '../../public/kijewoku-logo.png';

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
  args: {
    children: (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img src={logo} alt="logo" style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain'  }} />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Le composant `ScreenLayout` affiche un conteneur avec une gestion de l\'aspect ratio et un bouton pour activer le mode plein écran.',
      },
    },
  },
};
