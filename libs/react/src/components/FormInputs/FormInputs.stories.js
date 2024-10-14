// FormInputs.stories.js
import React from 'react';
import FormInputs from './FormInputs';

export default {
  title: 'Components/FormInputs',
  component: FormInputs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelText: { control: 'text' },
    inputType: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    placeholderText: { control: 'text' },
    isRequired: { control: 'boolean' },
  },
};

const Template = (args) => <FormInputs {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: 'Name',
  inputType: 'text',
  placeholderText: 'Enter your name',
  isRequired: true,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  labelText: 'Email',
  inputType: 'email',
  placeholderText: 'Enter your email',
  isRequired: true,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  labelText: 'Password',
  inputType: 'password',
  placeholderText: 'Enter your password',
  isRequired: true,
};

export const OptionalInput = Template.bind({});
OptionalInput.args = {
  labelText: 'Phone Number',
  inputType: 'number',
  placeholderText: 'Enter your phone number',
  isRequired: false,
};