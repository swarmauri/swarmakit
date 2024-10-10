import React from 'react';
import LoadingBarsWithSteps from './LoadingBarsWithSteps';

export default {
  title: 'Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
};

const Template = (args) => <LoadingBarsWithSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
  activeStep: 1,
};

export const StepActive = Template.bind({});
StepActive.args = {
  steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
  activeStep: 2,
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
  activeStep: 4,
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
  activeStep: 0,
};