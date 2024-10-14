import StatusDots from './StatusDots.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<StatusDots> = {
  title: 'component/Indicators/StatusDots',
  component: StatusDots,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['online', 'offline', 'busy', 'idle'] },
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
    status: 'offline',
  }
};

export const Online: Story = {
  args: {
    status: 'online',
  }
};

export const Offline: Story = {
  args: {
    status: 'offline',
  }
};

export const Busy: Story = {
  args: {
    status: 'busy',
  }
};

export const Idle: Story = {
  args: {
    status: 'idle',
  }
};