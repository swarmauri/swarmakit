import React from 'react';
import ValidationMessages from './ValidationMessages';

export default {
  title: 'Forms/ValidationMessages',
  component: ValidationMessages,
};

const Template = (args) => <ValidationMessages {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'success',
  message: 'This is a default success message.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success message.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error message.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message.',
};