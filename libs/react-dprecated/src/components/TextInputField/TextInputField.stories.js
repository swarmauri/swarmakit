import React, { useState } from 'react';
import TextInputField from './TextInputField';

export default {
  title: 'Components/TextInputField',
  component: TextInputField,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <TextInputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  label: 'Email',
  placeholder: 'Enter your email address',
};