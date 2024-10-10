import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  onClick: () => alert('Button Clicked!'),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Click Me',
  onClick: () => alert('Button Clicked!'),
  disabled: true,
};