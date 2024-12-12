import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './SearchBar';

export default {
  title: 'component/UI Layout/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'unfocused',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: 'unfocused',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Filled = Template.bind({});
Filled.args = {
  state: 'filled',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Searching = Template.bind({});
Searching.args = {
  state: 'searching',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Cleared = Template.bind({});
Cleared.args = {
  state: 'cleared',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  onSearch: (query) => console.log(`Searching for: ${query}`),
  onClear: () => console.log('Search cleared'),
};