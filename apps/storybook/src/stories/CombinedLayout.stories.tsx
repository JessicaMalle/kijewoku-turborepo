import { AspectFlexLayout, DualBackgroundLayout } from '@kijewoku/kijui/layout';
import type { Meta, StoryObj } from '@storybook/react';
import styled, { keyframes } from 'styled-components';
import customBgImage from './assets/images/winnie-the-pooh-clicker-1x1.webp';

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

export const CombinedWithCustomColors: Story = {
  render: () => (
    <AspectFlexLayout>
      <DualBackgroundLayout
        topChildren={TopChildren}
        bottomChildren={BottomChildren}
        topBackgroundColor='#a18ca8'
        topAccentColor='#c5a0c5'
      />
    </AspectFlexLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story combines `DualBackgroundLayout` and `AspectFlexLayout` with custom colors for the top background.',
      },
    },
  },
};

export const CombinedWithImage: Story = {
  render: () => (
    <AspectFlexLayout>
      <DualBackgroundLayout
        topChildren={TopChildren}
        bottomChildren={BottomChildren}
        topBackgroundImage={customBgImage}
      />
    </AspectFlexLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story combines `DualBackgroundLayout` and `AspectFlexLayout` with an image for the top background.',
      },
    },
  },
};
