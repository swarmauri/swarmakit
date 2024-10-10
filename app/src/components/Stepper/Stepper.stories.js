import React from 'react';
import Stepper from './Stepper';

export default {
  title: 'Indicators/Stepper',
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  step: 1,
  state: 'disabled',
};

export const Completed = Template.bind({});
Completed.args = {
  step: 1,
  state: 'completed',
};

export const Active = Template.bind({});
Active.args = {
  step: 1,
  state: 'active',
};

export const Disabled = Template.bind({});
Disabled.args = {
  step: 1,
  state: 'disabled',
};