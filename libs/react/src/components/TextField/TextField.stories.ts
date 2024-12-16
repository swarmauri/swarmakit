import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'component/Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
};

export const Focused = Template.bind({});
Focused.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
};
Focused.parameters = {
  pseudo: { focus: true },
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Sample text',
  onChange: (value: string) => console.log(`Value: ${value}`),
};

export const Error = Template.bind({});
Error.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
  error: true,
  helperText: 'This field has an error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'Read-only text',
  onChange: (value: string) => console.log(`Value: ${value}`),
  readOnly: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
  helperText: 'This is a helper text',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  value: '',
  onChange: (value: string) => console.log(`Value: ${value}`),
  placeholder: 'Enter text here...',
};