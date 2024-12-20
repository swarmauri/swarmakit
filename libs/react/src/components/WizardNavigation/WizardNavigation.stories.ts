import React from 'react';
import { Meta, Story } from '@storybook/react';
import WizardNavigation, { WizardNavigationProps } from './WizardNavigation';

export default {
  title: 'component/Navigation/WizardNavigation',
  component: WizardNavigation,
  tags: ['autodocs'],
} as Meta;

const Template: Story<WizardNavigationProps> = (args) => <WizardNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
  ],
  onStepClick: (index) => console.log(`Step ${index} clicked`),
};

export const Completed = Template.bind({});
Completed.args = {
  steps: [
    { label: 'Step 1', isCompleted: true },
    { label: 'Step 2', isCompleted: true },
    { label: 'Step 3' },
  ],
  onStepClick: (index) => console.log(`Step ${index} clicked`),
};

export const CurrentStep = Template.bind({});
CurrentStep.args = {
  steps: [
    { label: 'Step 1', isCompleted: true },
    { label: 'Step 2', isCurrent: true },
    { label: 'Step 3' },
  ],
  onStepClick: (index) => console.log(`Step ${index} clicked`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: [
    { label: 'Step 1', isCompleted: true },
    { label: 'Step 2', isDisabled: true },
    { label: 'Step 3' },
  ],
  onStepClick: (index) => console.log(`Step ${index} clicked`),
};