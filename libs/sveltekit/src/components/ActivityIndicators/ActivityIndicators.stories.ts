import ActivityIndicators from './ActivityIndicators.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<ActivityIndicators> = {
  title: 'component/Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
  argTypes: {
    state: { 
      control: { type: 'select' },
      options: ['loading', 'success', 'error']
    },
  },
  parameters: {
    layout: 'fullscreen',
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
    state: 'loading',
  }
};

export const Loading: Story = {
  args: {
    state: 'loading',
  }
};

export const Success: Story = {
  args: {
    state: 'success',
  }
};

export const Error: Story = {
  args: {
    state: 'error',
  }
};