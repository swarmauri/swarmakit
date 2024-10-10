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
  disabled: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  disabled: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 25,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  progress: 50,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  disabled: true,
};