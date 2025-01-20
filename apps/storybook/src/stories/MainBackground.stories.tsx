import { DualBackgroundLayout } from '@kijewoku/kijui/layout';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

const meta = {
  title: 'Layout/DualBackgroundLayout',
  component: DualBackgroundLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DualBackgroundLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const FullHeightContainer = styled.div`
  height: 100dvh;
  width: 100%;
`;

export const Default: Story = {
  args: {
    topChildren: <p>Pattern Content</p>,
    bottomChildren: <p>Stripe Content</p>,
  },
  render: (args) => (
    <FullHeightContainer>
      <DualBackgroundLayout {...args} />
    </FullHeightContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The `DualBackgroundLayout` component displays a background with a pattern and stripe sections.',
      },
    },
  },
};
