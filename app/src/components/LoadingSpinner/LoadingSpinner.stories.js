import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
};

const Template = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  inactive: false,
};

export const Active = Template.bind({});
Active.args = {
  inactive: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  inactive: true,
};