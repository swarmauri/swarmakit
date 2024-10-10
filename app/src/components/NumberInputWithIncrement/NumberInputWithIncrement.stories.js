import React, { useState } from 'react';
import NumberInputWithIncrement from './NumberInputWithIncrement';

export default {
  title: 'Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
};

const Template = (args) => {
  const [value, setValue] = useState(0);
  return <NumberInputWithIncrement {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Increment = Template.bind({});
Increment.args = {
  value: 5,
};

export const Decrement = Template.bind({});
Decrement.args = {
  value: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};