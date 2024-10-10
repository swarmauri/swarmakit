import React from 'react';
import DropdownButton from './DropdownButton';

export default {
  title: 'Components/DropdownButton',
  component: DropdownButton,
};

const Template = (args) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (option) => alert(`Selected: ${option}`),
};

export const WithCustomOptions = Template.bind({});
WithCustomOptions.args = {
  label: 'Choose a fruit',
  options: ['Apple', 'Banana', 'Cherry'],
  onSelect: (option) => alert(`Selected: ${option}`),
};