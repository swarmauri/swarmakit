import React from 'react';
import FilterDropdown from './FilterDropdown';

export default {
  title: 'UI Layout/FilterDropdown',
  component: FilterDropdown,
  argTypes: {
    options: { control: 'array' },
    onApply: { action: 'applied' },
    onClear: { action: 'cleared' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <FilterDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Open = Template.bind({});
Open.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Closed = Template.bind({});
Closed.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Applied = Template.bind({});
Applied.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Cleared = Template.bind({});
Cleared.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};