import React, { useState } from 'react';
import PasswordConfirmationField from './PasswordConfirmationField';

export default {
  title: 'Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
};

const Template = (args) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <PasswordConfirmationField
      {...args}
      password={password}
      onPasswordChange={setPassword}
      confirmPassword={confirmPassword}
      onConfirmPasswordChange={setConfirmPassword}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Matching = Template.bind({});
Matching.args = {
  password: 'password123',
  confirmPassword: 'password123',
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  password: 'password123',
  confirmPassword: 'password321',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};