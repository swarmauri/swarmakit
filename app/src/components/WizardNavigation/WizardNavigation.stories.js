import React, { useState } from 'react';
import WizardNavigation from './WizardNavigation';

export default {
  title: 'Navigation/WizardNavigation',
  component: WizardNavigation,
};

const Template = (args) => {
  const [currentStep, setCurrentStep] = useState(args.currentStep);
  return <WizardNavigation {...args} currentStep={currentStep} onStepClick={setCurrentStep} />;
};

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 0,
};

export const Completed = Template.bind({});
Completed.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 2,
};

export const CurrentStep = Template.bind({});
CurrentStep.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: [
    { label: 'Step 1', disabled: true },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 0,
};