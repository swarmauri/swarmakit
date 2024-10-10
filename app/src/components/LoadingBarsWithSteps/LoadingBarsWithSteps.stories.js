import React from 'react';
import LoadingBarsWithSteps from './LoadingBarsWithSteps';

export default {
  title: 'Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
};

const Template = (args) => <LoadingBarsWithSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 1,
};

export const StepActive = Template.bind({});
StepActive.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 2,
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 3,
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 0,
};