import React from 'react';
import MaskedInput from './MaskedInput';

export default {
  title: 'Forms/MaskedInput',
  component: MaskedInput,
  argTypes: {
    onChange: { action: 'value changed' },
  },
};

const Template = (args) => <MaskedInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  mask: true,
  value: '',
  disabled: false,
};

export const Masked = Template.bind({});
Masked.args = {
  mask: true,
  value: '',
  disabled: false,
};

export const Unmasked = Template.bind({});
Unmasked.args = {
  mask: false,
  value: '',
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  mask: true,
  value: '',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  mask: true,
  value: '',
  disabled: true,
};