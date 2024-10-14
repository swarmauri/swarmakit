import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
};

const Template = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};