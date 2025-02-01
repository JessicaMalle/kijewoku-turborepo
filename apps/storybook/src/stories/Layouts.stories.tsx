import {useGoldenRatio} from "@kijewoku/hooks/screen";
import {Typography} from "@kijewoku/kijui";
import {Cartridge} from "@kijewoku/kijui/data-display";
import { AspectFlexLayout, DualBackgroundLayout, Layout } from '@kijewoku/kijui/layout';
import {useDimensions} from "@kijewoku/kijui/store";
import type { Meta, StoryObj } from '@storybook/react';

const {Header, Footer} = Layout;
const {Text} = Typography;

const TopChildren = () => {
  const { dimensions } = useDimensions();
  const { get } = useGoldenRatio(dimensions);

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: '100%',
    }}>
      <Header>
        <span>Logo</span>
        <span>Menu</span>
      </Header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: get(1),
        height: '100%',
      }}>
        <Cartridge />
        <Cartridge />
        <Cartridge />
      </div>
    </div>
  );
};
const BottomChildren = <Footer><Text italic>Footer</Text></Footer>;

const meta = {
  title: 'Page/Layout',
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        height: '100%',
      }}>
        <DualBackgroundLayout
          topChildren={<TopChildren />}
          bottomChildren={BottomChildren}
        />
      </div>
    </AspectFlexLayout>
  ),
  parameters: {
        story: 'This story combines `DualBackgroundLayout` and `AspectFlexLayout` to create a complex page layout.',
  },
};
