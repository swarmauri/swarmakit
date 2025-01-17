import React from 'react';
import { Meta, Story } from '@storybook/react';
import DarkModeToggle, { DarkModeToggleProps } from './DarkModeToggle';

export default {
  title: 'component/Miscellaneous/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DarkModeToggleProps> = (args) => <DarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  onToggle: (isDarkMode) => alert(`Dark Mode: ${isDarkMode}`),
};

export const LightMode = Template.bind({});
LightMode.args = {
  ...Default.args,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
};