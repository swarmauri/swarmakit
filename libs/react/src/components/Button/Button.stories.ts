import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'component/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => alert('Button clicked'),
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary Button clicked'),
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary Button clicked'),
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Disabled Button clicked'),
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Hover Button',
  onClick: () => alert('Hover Button clicked'),
};

export const Active = Template.bind({});
Active.args = {
  label: 'Active Button',
  onClick: () => alert('Active Button clicked'),
};