import React from 'react';
import Button from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'primary',
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Hover Button',
  variant: 'primary',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  variant: 'primary',
};