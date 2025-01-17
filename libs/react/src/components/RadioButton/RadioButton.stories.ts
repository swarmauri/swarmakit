import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'component/Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'radioGroup',
  value: 'option1',
  checked: false,
  disabled: false,
  onChange: (value: string) => console.log(value),
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Option 1',
  name: 'radioGroup',
  value: 'option1',
  checked: true,
  disabled: false,
  onChange: (value: string) => console.log(value),
};

export const Unselected = Template.bind({});
Unselected.args = {
  label: 'Option 2',
  name: 'radioGroup',
  value: 'option2',
  checked: false,
  disabled: false,
  onChange: (value: string) => console.log(value),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 3',
  name: 'radioGroup',
  value: 'option3',
  checked: false,
  disabled: true,
  onChange: (value: string) => console.log(value),
};