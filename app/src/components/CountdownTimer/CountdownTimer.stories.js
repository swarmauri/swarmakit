import React from 'react';
import CountdownTimer from './CountdownTimer';

export default {
  title: 'Indicators/CountdownTimer',
  component: CountdownTimer,
};

const Template = (args) => <CountdownTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialTime: 60,
  isRunning: true,
};

export const Running = Template.bind({});
Running.args = {
  initialTime: 30,
  isRunning: true,
};

export const Paused = Template.bind({});
Paused.args = {
  initialTime: 30,
  isRunning: false,
};

export const Completed = Template.bind({});
Completed.args = {
  initialTime: 0,
  isRunning: false,
};