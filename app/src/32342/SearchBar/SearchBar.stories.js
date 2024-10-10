import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <SearchBar {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  isFocused: false,
  isDisabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  isFocused: true,
  isDisabled: false,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  isFocused: false,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isFocused: false,
  isDisabled: true,
};