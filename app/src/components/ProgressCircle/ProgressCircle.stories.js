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
  isComplete: false,
  isPaused: false,
  isActive: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  isComplete: true,
  isPaused: false,
  isActive: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 50,
  isComplete: false,
  isPaused: false,
  isActive: false,
};

export const Paused = Template.bind({});
Paused.args = {
  progress: 50,
  isComplete: false,
  isPaused: true,
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  progress: 75,
  isComplete: false,
  isPaused: false,
  isActive: true,
};