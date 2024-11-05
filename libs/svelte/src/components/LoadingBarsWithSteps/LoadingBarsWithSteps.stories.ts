import LoadingBarsWithSteps from './LoadingBarsWithSteps.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<LoadingBarsWithSteps> = {
  title: 'component/Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  tags: ['autodocs'],
  argTypes: {
    steps: { control: 'object' },
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
    steps: [
      { label: 'Step 1', status: 'active' },
      { label: 'Step 2', status: 'inactive' },
      { label: 'Step 3', status: 'inactive' },
    ],
  }
};

export const StepActive: Story = {
  args: {
    steps: [
      { label: 'Step 1', status: 'completed' },
      { label: 'Step 2', status: 'active' },
      { label: 'Step 3', status: 'inactive' },
    ],
  }
};

export const StepCompleted: Story = {
  args: {
    steps: [
      { label: 'Step 1', status: 'completed' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'active' },
    ],
  }
};

export const StepInactive: Story = {
  args: {
    steps: [
      { label: 'Step 1', status: 'completed' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'inactive' },
    ],
  }
};