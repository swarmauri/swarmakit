import React from 'react';
import { Meta, Story } from '@storybook/react';
import ValidationMessages from './ValidationMessages';

export default {
  title: 'component/Forms/ValidationMessages',
  component: ValidationMessages,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <ValidationMessages {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Operation was successful!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'An error occurred. Please try again.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Warning: Please check your input.',
};