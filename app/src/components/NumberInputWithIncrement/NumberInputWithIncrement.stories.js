import React from 'react';
import NumberInputWithIncrement from './NumberInputWithIncrement';

export default {
  title: 'Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  argTypes: {
    onChange: { action: 'value changed' },
  },
};

const Template = (args) => <NumberInputWithIncrement {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0,
  step: 1,
  disabled: false,
};

export const Increment = Template.bind({});
Increment.args = {
  value: 5,
  step: 1,
  disabled: false,
};

export const Decrement = Template.bind({});
Decrement.args = {
  value: 5,
  step: -1,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 0,
  step: 1,
  disabled: true,
};