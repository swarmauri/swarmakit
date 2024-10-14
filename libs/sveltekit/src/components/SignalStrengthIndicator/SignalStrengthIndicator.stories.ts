import SignalStrengthIndicator from './SignalStrengthIndicator.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<SignalStrengthIndicator> = {
  title: 'component/Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  tags: ['autodocs'],
  argTypes: {
    strength: { control: 'select', options: ['full', 'weak', 'none'] },
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
    strength: 'none',
  }
};

export const FullSignal: Story = {
  args: {
    strength: 'full',
  }
};

export const WeakSignal: Story = {
  args: {
    strength: 'weak',
  }
};

export const NoSignal: Story = {
  args: {
    strength: 'none',
  }
};