import React from 'react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Secondary Action',
  onClick: () => alert('Secondary Button Clicked!'),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Secondary Action',
  onClick: () => alert('Secondary Button Clicked!'),
  disabled: true,
};