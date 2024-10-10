import React from 'react';
import ActivityIndicators from './ActivityIndicators';

export default {
  title: 'Indicators/ActivityIndicators',
  component: ActivityIndicators,
};

const Template = (args) => <ActivityIndicators {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};