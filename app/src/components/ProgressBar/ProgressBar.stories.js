import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
    height: { control: 'text' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  height: '20px',
  color: '#4caf50',
  backgroundColor: '#e0e0e0',
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  progress: 50,
  height: '20px',
  color: '#2196f3',
  backgroundColor: '#f0f0f0',
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  height: '20px',
  color: '#4caf50',
  backgroundColor: '#e0e0e0',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  progress: 75,
  height: '30px',
  color: '#ff9800',
  backgroundColor: '#f5f5f5',
};