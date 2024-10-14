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
  isPaused: false,
};

export const Running = Template.bind({});
Running.args = {
  initialTime: 30,
  isPaused: false,
};

export const Paused = Template.bind({});
Paused.args = {
  initialTime: 30,
  isPaused: true,
};

export const Completed = Template.bind({});
Completed.args = {
  initialTime: 0,
  isPaused: false,
};