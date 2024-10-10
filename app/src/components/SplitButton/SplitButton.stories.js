import React from 'react';
import SplitButton from './SplitButton';

export default {
  title: 'Components/SplitButton',
  component: SplitButton,
};

const Template = (args) => <SplitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Actions',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onOptionSelect: (option) => alert(`Selected: ${option}`),
};

export const WithCustomOptions = Template.bind({});
WithCustomOptions.args = {
  label: 'More Options',
  options: ['Custom 1', 'Custom 2'],
  onOptionSelect: (option) => alert(`Selected: ${option}`),
};