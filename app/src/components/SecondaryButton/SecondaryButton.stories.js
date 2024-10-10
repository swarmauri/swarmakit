import React from 'react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <SecondaryButton {...args} />;

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
  className: 'custom-secondary-button',
};