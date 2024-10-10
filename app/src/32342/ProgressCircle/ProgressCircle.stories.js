import React from 'react';
import ProgressCircle from './ProgressCircle';

export default {
  title: 'Indicators/ProgressCircle',
  component: ProgressCircle,
};

const Template = (args) => <ProgressCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  state: 'active',
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  state: 'complete',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 25,
  state: 'incomplete',
};

export const Paused = Template.bind({});
Paused.args = {
  progress: 50,
  state: 'paused',
};

export const Active = Template.bind({});
Active.args = {
  progress: 70,
  state: 'active',
};