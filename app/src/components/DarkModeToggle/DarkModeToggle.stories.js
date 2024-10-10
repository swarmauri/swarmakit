import React from 'react';
import DarkModeToggle from './DarkModeToggle';

export default {
  title: 'Miscellaneous/DarkModeToggle',
  component: DarkModeToggle,
};

const Template = (args) => <DarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialMode: 'light',
};

export const LightMode = Template.bind({});
LightMode.args = {
  initialMode: 'light',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  initialMode: 'dark',
};