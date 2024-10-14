import BadgeWithCounts from './BadgeWithCounts.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<BadgeWithCounts> = {
  title: 'component/Indicators/BadgeWithCounts',
  component: BadgeWithCounts,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
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
    count: 5,
    maxCount: 99,
  }
};

export const Zero: Story = {
  args: {
    count: 0,
    maxCount: 99,
  }
};

export const Active: Story = {
  args: {
    count: 42,
    maxCount: 99,
  }
};

export const Overflow: Story = {
  args: {
    count: 150,
    maxCount: 99,
  }
};