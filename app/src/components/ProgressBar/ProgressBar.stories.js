import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Indicators/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  isComplete: false,
  isDisabled: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  isComplete: true,
  isDisabled: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 50,
  isComplete: false,
  isDisabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  progress: 75,
  isComplete: false,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  isComplete: false,
  isDisabled: true,
};