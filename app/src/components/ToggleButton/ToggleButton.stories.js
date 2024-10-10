import React from 'react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};

const Template = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelOn: 'On',
  labelOff: 'Off',
  onToggle: (state) => alert(`Toggled: ${state}`),
};

export const CustomLabels = Template.bind({});
CustomLabels.args = {
  labelOn: 'Active',
  labelOff: 'Inactive',
  onToggle: (state) => console.log(`Toggled to: ${state ? 'Active' : 'Inactive'}`),
};