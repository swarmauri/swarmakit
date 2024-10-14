import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'UI Layout/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    onSearch: { action: 'searched' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Typing = Template.bind({});
Typing.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Empty = Template.bind({});
Empty.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Searching = Template.bind({});
Searching.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Cleared = Template.bind({});
Cleared.args = {
  placeholder: 'Search...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Search...',
  disabled: true,
};