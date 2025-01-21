import {AspectFlexLayout, DualBackgroundLayout} from '@kijewoku/kijui/layout';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'Page/CombinedLayout',
  component: DualBackgroundLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DualBackgroundLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const TopChildren = <div>KIJEWOKU</div>

export const Combined: Story = {
  args: {
    topChildren: (
      <AspectFlexLayout>
        <DualBackgroundLayout
          topChildren={TopChildren}
          bottomChildren={TopChildren}
        />
      </AspectFlexLayout>
    ),
    bottomChildren: <p>Stripe Content</p>,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story combines `DualBackgroundLayout` and `AspectFlexLayout` to create a complex page layout.',
      },
    },
  },
};
