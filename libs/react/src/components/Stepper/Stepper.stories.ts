import React from 'react';
import { Meta, Story } from '@storybook/react';
import Stepper from './Stepper';

export default {
  title: 'component/Indicators/Stepper',
  component: Stepper,
  tags: ['autodocs'],
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: 5,
  currentStep: 2,
  status: 'active',
};

export const Completed = Template.bind({});
Completed.args = {
  steps: 5,
  currentStep: 5,
  status: 'completed',
};

export const Active = Template.bind({});
Active.args = {
  steps: 5,
  currentStep: 3,
  status: 'active',
};

export const Disabled = Template.bind({});
Disabled.args = {
  steps: 5,
  currentStep: 1,
  status: 'disabled',
};