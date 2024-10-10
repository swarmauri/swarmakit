import React from 'react';
import InputFields from './InputFields';

export default {
  title: 'Forms/InputFields',
  component: InputFields,
  argTypes: {
    onChange: { action: 'value changed' },
  },
};

const Template = (args) => <InputFields {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: '',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: '',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter password',
  value: '',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Enter email',
  value: '',
};