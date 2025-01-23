import { DualBackgroundLayout } from '@kijewoku/kijui/layout';
import type { Meta, StoryObj } from '@storybook/react';
import styled, { keyframes } from 'styled-components';

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

export const Default: Story = {
  args: {
    topChildren: TopChildren,
    bottomChildren: BottomChildren,
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

export const CustomColors1: Story = {
  args: {
    topChildren: TopChildren,
    bottomChildren: BottomChildren,
    topBackgroundColor: '#a18ca8',
    topAccentColor: '#c5a0c5',
  },
  render: (args) => (
    <FullHeightContainer>
      <DualBackgroundLayout {...args} />
    </FullHeightContainer>
  ),
};

export const CustomColors2: Story = {
  args: {
    topChildren: TopChildren,
    bottomChildren: BottomChildren,
    topBackgroundColor: '#33FF57',
    topAccentColor: '#39C700',
  },
  render: (args) => (
    <FullHeightContainer>
      <DualBackgroundLayout {...args} />
    </FullHeightContainer>
  ),
};

export const CustomColors3: Story = {
  args: {
    topChildren: TopChildren,
    bottomChildren: BottomChildren,
    topBackgroundColor: '#b5bcdc',
    topAccentColor: '#8a95b2',
  },
  render: (args) => (
    <FullHeightContainer>
      <DualBackgroundLayout {...args} />
    </FullHeightContainer>
  ),
};
