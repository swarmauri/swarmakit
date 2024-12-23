import React from 'react';
import { Meta, Story } from '@storybook/react';
import ActivityIndicators from './ActivityIndicators';

export default {
  title: 'component/Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <ActivityIndicators {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
};