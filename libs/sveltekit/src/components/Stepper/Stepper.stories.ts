import Stepper from './Stepper.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: { type: 'object' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Stepper,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1', state: 'completed' },
    { label: 'Step 2', state: 'active' },
    { label: 'Step 3', state: 'disabled' },
  ],
};

export const Completed = Template.bind({});
Completed.args = {
  steps: [
    { label: 'Step 1', state: 'completed' },
    { label: 'Step 2', state: 'completed' },
    { label: 'Step 3', state: 'completed' },
  ],
};

export const Active = Template.bind({});
Active.args = {
  steps: [
    { label: 'Step 1', state: 'active' },
    { label: 'Step 2', state: 'active' },
    { label: 'Step 3', state: 'active' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: [
    { label: 'Step 1', state: 'disabled' },
    { label: 'Step 2', state: 'disabled' },
    { label: 'Step 3', state: 'disabled' },
  ],
};