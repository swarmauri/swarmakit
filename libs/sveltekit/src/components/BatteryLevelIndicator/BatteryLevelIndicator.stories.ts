import BatteryLevelIndicator from './BatteryLevelIndicator.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<BatteryLevelIndicator> = {
  title: 'component/Indicators/BatteryLevelIndicator',
  component: BatteryLevelIndicator,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'number' },
    isCharging: { control: 'boolean' },
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
    level: 50,
    isCharging: false,
  }
};

export const Charging: Story = {
  args: {
    level: 50,
    isCharging: true,
  }
};

export const Full: Story = {
  args: {
    level: 100,
    isCharging: false,
  }
};

export const LowBattery: Story = {
  args: {
    level: 20,
    isCharging: false,
  }
};

export const Critical: Story = {
  args: {
    level: 5,
    isCharging: false,
  }
};