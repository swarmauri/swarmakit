import React from 'react';
import StepIndicatorEGMultiStepForm from './StepIndicatorEGMultiStepForm';

export default {
  title: 'Components/StepIndicatorEGMultiStepForm',
  component: StepIndicatorEGMultiStepForm,
  argTypes: {
    steps: { control: 'array' },
    currentStep: { control: { type: 'number', min: 0 } },
    activeColor: { control: 'color' },
    inactiveColor: { control: 'color' },
  },
};

const Template = (args) => <StepIndicatorEGMultiStepForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 1,
  activeColor: '#4caf50',
  inactiveColor: '#e0e0e0',
};

export const FirstStep = Template.bind({});
FirstStep.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 0,
  activeColor: '#2196f3',
  inactiveColor: '#f0f0f0',
};

export const LastStep = Template.bind({});
LastStep.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 2,
  activeColor: '#ff9800',
  inactiveColor: '#f5f5f5',
};

export const CustomSteps = Template.bind({});
CustomSteps.args = {
  steps: ['Start', 'Middle', 'Almost Done', 'Complete'],
  currentStep: 2,
  activeColor: '#4caf50',
  inactiveColor: '#e0e0e0',
};