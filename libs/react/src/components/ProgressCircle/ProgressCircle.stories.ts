import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProgressCircle from './ProgressCircle';

export default {
  title: 'component/Indicators/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ProgressCircleProps> = (args) => <ProgressCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  status: 'in-progress',
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  status: 'complete',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 0,
  status: 'incomplete',
};

export const InProgress = Template.bind({});
InProgress.args = {
  progress: 50,
  status: 'in-progress',
};

export const Paused = Template.bind({});
Paused.args = {
  progress: 50,
  status: 'paused',
};

export const Active = Template.bind({});
Active.args = {
  progress: 75,
  status: 'active',
};