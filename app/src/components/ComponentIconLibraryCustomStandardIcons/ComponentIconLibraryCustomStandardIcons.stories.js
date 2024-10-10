import React from 'react';
import ComponentIconLibraryCustomStandardIcons from './ComponentIconLibraryCustomStandardIcons';

export default {
  title: 'Icons/ComponentIconLibraryCustomStandardIcons',
  component: ComponentIconLibraryCustomStandardIcons,
};

const Template = (args) => <ComponentIconLibraryCustomStandardIcons {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconType: 'home',
  size: 'medium',
  color: '#000',
};

export const LargeSettingsIcon = Template.bind({});
LargeSettingsIcon.args = {
  iconType: 'settings',
  size: 'large',
  color: '#1E90FF',
};

export const SmallUserIcon = Template.bind({});
SmallUserIcon.args = {
  iconType: 'user',
  size: 'small',
  color: '#32CD32',
};

export const CustomColorSearchIcon = Template.bind({});
CustomColorSearchIcon.args = {
  iconType: 'search',
  size: 'medium',
  color: '#FF4500',
};