import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  disabled: false,
  className: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
  className: '',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  label: 'Custom Style',
  disabled: false,
  className: 'custom-primary-button',
};