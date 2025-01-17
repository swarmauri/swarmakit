import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ActivityIndicators, { ActivityIndicatorsProps } from './ActivityIndicators';

export default {
  title: 'component/Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ActivityIndicatorsProps> = (args) => <ActivityIndicators{...args} />;

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