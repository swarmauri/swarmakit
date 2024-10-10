import React from 'react';
import ValidationMessages from './ValidationMessages';

export default {
  title: 'Forms/ValidationMessages',
  component: ValidationMessages,
};

const Template = (args) => <ValidationMessages {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default success message.',
  type: 'success',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This action was successful!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'There was an error processing your request.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message.',
  type: 'warning',
};