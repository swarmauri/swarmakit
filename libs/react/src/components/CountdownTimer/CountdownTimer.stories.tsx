import React from 'react';
import { Meta, Story } from '@storybook/react';
import CountdownTimer from './CountdownTimer';

export default {
  title: 'component/Indicators/CountdownTimer',
  component: CountdownTimer,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <CountdownTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialTime: 60,
  autoStart: false,
};

export const Running = Template.bind({});
Running.args = {
  initialTime: 60,
  autoStart: true,
};

export const Paused = Template.bind({});
Paused.args = {
  initialTime: 60,
  autoStart: false,
};

export const Completed = Template.bind({});
Completed.args = {
  initialTime: 0,
  autoStart: false,
};