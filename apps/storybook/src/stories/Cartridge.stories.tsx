import {Cartridge} from '@kijewoku/kijui/data-display';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Data Display/Cartridge',
  component: Cartridge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Cartridge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Cartridge />,
  parameters: {
    docs: {
      description: {
        story: 'The `Cartridge` component displays a simple heading.',
      },
    },
  },
};
