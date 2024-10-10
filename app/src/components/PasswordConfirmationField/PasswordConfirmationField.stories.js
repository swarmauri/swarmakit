import React from 'react';
import PasswordConfirmationField from './PasswordConfirmationField';

export default {
  title: 'Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  argTypes: {
    onChange: { action: 'passwords changed' },
  },
};

const Template = (args) => <PasswordConfirmationField {...args} />;

export const Default = Template.bind({});
Default.args = {
  password: '',
  confirmPassword: '',
  disabled: false,
};

export const Matching = Template.bind({});
Matching.args = {
  password: 'password123',
  confirmPassword: 'password123',
  disabled: false,
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  password: 'password123',
  confirmPassword: 'password321',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  password: '',
  confirmPassword: '',
  disabled: true,
};