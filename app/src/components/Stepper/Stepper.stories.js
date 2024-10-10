import React from 'react';
import Stepper from './Stepper';

export default {
  title: 'Indicators/Stepper',
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 0,
};

export const Completed = Template.bind({});
Completed.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 3,
};

export const Active = Template.bind({});
Active.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 0,
};