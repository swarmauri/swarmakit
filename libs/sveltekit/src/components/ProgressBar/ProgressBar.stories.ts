import ProgressBar from './ProgressBar.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ProgressBar> = {
  title: 'component/Indicators/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    disabled: false,
  }
};

export const Complete: Story = {
  args: {
    progress: 100,
    disabled: false,
  }
};

export const Incomplete: Story = {
  args: {
    progress: 25,
    disabled: false,
  }
};

export const Hover: Story = {
  args: {
    progress: 70,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    progress: 50,
    disabled: true,
  }
};