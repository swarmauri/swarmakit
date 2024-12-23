import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoadingBarsWithSteps from './LoadingBarsWithSteps';

export default {
  title: 'component/Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  tags: ['autodocs'],
} as Meta;

const steps = [
  { id: 1, label: 'Step 1', status: 'Completed' },
  { id: 2, label: 'Step 2', status: 'Active' },
  { id: 3, label: 'Step 3', status: 'Inactive' },
];

const Template: Story = (args) => <LoadingBarsWithSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps,
};

export const StepActive = Template.bind({});
StepActive.args = {
  steps: [
    { id: 1, label: 'Step 1', status: 'Completed' },
    { id: 2, label: 'Step 2', status: 'Active' },
    { id: 3, label: 'Step 3', status: 'Inactive' },
  ],
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  steps: [
    { id: 1, label: 'Step 1', status: 'Completed' },
    { id: 2, label: 'Step 2', status: 'Completed' },
    { id: 3, label: 'Step 3', status: 'Inactive' },
  ],
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  steps: [
    { id: 1, label: 'Step 1', status: 'Inactive' },
    { id: 2, label: 'Step 2', status: 'Inactive' },
    { id: 3, label: 'Step 3', status: 'Inactive' },
  ],
};