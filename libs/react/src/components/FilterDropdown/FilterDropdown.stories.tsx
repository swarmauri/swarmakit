import React from 'react';
import { Meta, Story } from '@storybook/react';
import FilterDropdown, { FilterDropdownProps } from './FilterDropdown';

export default {
  title: 'component/UI Layout/FilterDropdown',
  component: FilterDropdown,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FilterDropdownProps> = (args) => <FilterDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'closed',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};

export const Open = Template.bind({});
Open.args = {
  state: 'open',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};

export const Closed = Template.bind({});
Closed.args = {
  state: 'closed',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};

export const Applied = Template.bind({});
Applied.args = {
  state: 'applied',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};

export const Cleared = Template.bind({});
Cleared.args = {
  state: 'cleared',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onApply: (selected) => console.log(`Applied filters: ${selected.join(', ')}`),
  onClear: () => console.log('Filters cleared'),
};