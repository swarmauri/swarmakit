import React, { useState } from 'react';
import Textarea from './Textarea';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Textarea is disabled',
  disabled: true,
};