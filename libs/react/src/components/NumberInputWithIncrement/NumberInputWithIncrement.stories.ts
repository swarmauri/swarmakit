import React from 'react';
import { Meta, Story } from '@storybook/react';
import NumberInputWithIncrement from './NumberInputWithIncrement';

export default {
  title: 'component/Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <NumberInputWithIncrement {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export const Increment = Template.bind({});
Increment.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export const Decrement = Template.bind({});
Decrement.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: true,
};