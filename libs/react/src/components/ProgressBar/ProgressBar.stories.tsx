import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProgressBar from './ProgressBar';

export default {
  title: 'component/Indicators/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

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
  progress: 75,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  disabled: true,
};