import React from 'react';
import ErrorWarningIcon from './ErrorWarningIcon';

export default {
  title: 'Icons/ErrorWarningIcon',
  component: ErrorWarningIcon,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['error', 'warning'],
    },
    message: { control: 'text' },
  },
};

const Template = (args) => <ErrorWarningIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'error',
  message: 'This is an error message.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message.',
};

export const WithoutMessage = Template.bind({});
WithoutMessage.args = {
  type: 'error',
  message: '',
};