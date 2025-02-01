import { Typography } from "@kijewoku/kijui";
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

const { Text, Title1, Title2, Title3 } = Typography;

const meta: Meta = {
  title: 'General/Typography',
  component: Title1,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const FullHeightContainer = styled.div`
    height: 100dvh;
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const AllExamples: Story = {
  args: {
    children: 'This is a default Typography component',
  },
  render: () => (
    <FullHeightContainer>
      <Container>
        <Title1>This is a Title1</Title1>
        <Title2>This is a Title2</Title2>
        <Title3>This is a Title3</Title3>
        <Text>This is a regular text paragraph.</Text>

        <Title1 bold>This is bold Title1</Title1>
        <Title2 italic>This is italic Title2</Title2>
        <Title3 color="#FF6347">This is colored Title3</Title3>
        <Text color="#FF6347">This is colored text</Text>

        <Title1>This is a Title1</Title1>
        <Title2>This is a Title2</Title2>
        <Title3>This is a Title3</Title3>
        <Text>This is a regular text paragraph.</Text>
      </Container>
    </FullHeightContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This page demonstrates all Typography components and their variations, such as bold, italic, and color.',
      },
    },
  },
};
