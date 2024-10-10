import React from 'react';
import Button from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'primary',
  disabled: false,
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Active = Template.bind({});
Active.args = {
  variant: 'primary',
  disabled: false,
};
Active.parameters = {
  pseudo: { active: true },
};