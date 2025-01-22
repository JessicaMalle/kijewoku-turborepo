import {AspectFlexLayout, DualBackgroundLayout} from '@kijewoku/kijui/layout';
import type {Meta, StoryObj} from '@storybook/react';

import styled, { keyframes } from 'styled-components';

const rotateA = keyframes`
  0% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`;

const rotateB = keyframes`
  0% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  100% { transform: rotate(2deg); }
`;

const AnimatedTextVariantA = styled.div`
  display: inline-block;
  animation: ${rotateA} 2s infinite;
  font-size: 7rem;
`;
const AnimatedTextVariantB = styled.div`
  display: inline-block;
  animation: ${rotateB} 2s infinite;
  font-size: 3rem;
`;

const TopChildren = <AnimatedTextVariantA>TOP</AnimatedTextVariantA>;
const BottomChildren = <AnimatedTextVariantB>BOTTOM</AnimatedTextVariantB>;

const meta = {
  title: 'Page/CombinedLayout',
  component: DualBackgroundLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DualBackgroundLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Combined: Story = {
  render: () => (
    <AspectFlexLayout>
      <DualBackgroundLayout
        topChildren={TopChildren}
        bottomChildren={BottomChildren}
      />
    </AspectFlexLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story combines `DualBackgroundLayout` and `AspectFlexLayout` to create a complex page layout.',
      },
    },
  },
};
