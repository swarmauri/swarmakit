import React from 'react';
import GhostButtonOutline from './GhostButtonOutline';

export default {
  title: 'Components/GhostButtonOutline',
  component: GhostButtonOutline,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <GhostButtonOutline {...args} />;

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
  className: 'custom-ghost-button-outline',
};