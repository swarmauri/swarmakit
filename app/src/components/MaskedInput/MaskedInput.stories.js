import React, { useState } from 'react';
import MaskedInput from './MaskedInput';

export default {
  title: 'Forms/MaskedInput',
  component: MaskedInput,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <MaskedInput {...args} value={value} onChange={setValue} />;
};

export const Masked = Template.bind({});
Masked.args = {
  mask: (value) => value.replace(/./g, '*'),
  placeholder: 'Enter text...',
};

export const Unmasked = Template.bind({});
Unmasked.args = {
  placeholder: 'Enter text...',
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Focus to see effect...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled input...',
};