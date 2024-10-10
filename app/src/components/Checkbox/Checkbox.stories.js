import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: false,
};