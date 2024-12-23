import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'component/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};