import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  isFocused: false,
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Search...',
  isFocused: true,
  disabled: false,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  placeholder: 'Search...',
  isFocused: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Search...',
  isFocused: false,
  disabled: true,
};