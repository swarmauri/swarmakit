import React, { useState } from 'react';
import PasswordInputField from './PasswordInputField';

export default {
  title: 'Components/PasswordInputField',
  component: PasswordInputField,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <PasswordInputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  placeholder: 'Enter your password',
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: 'Secure Password',
  placeholder: 'Enter a secure password',
};