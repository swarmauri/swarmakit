import React from 'react';
import ActivityIndicators from './ActivityIndicators';

export default {
  title: 'Indicators/ActivityIndicators',
  component: ActivityIndicators,
};

const Template = (args) => <ActivityIndicators {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  status: 'loading',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
};