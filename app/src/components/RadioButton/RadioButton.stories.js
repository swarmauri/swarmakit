import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  argTypes: {
    onChange: { action: 'radio button clicked' },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  selected: false,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Option 1',
  selected: true,
  disabled: false,
};

export const Unselected = Template.bind({});
Unselected.args = {
  label: 'Option 1',
  selected: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 1',
  selected: false,
  disabled: true,
};