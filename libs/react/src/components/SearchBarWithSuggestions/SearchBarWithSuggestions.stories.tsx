import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBarWithSuggestions, { SearchBarWithSuggestionsProps } from './SearchBarWithSuggestions';

export default {
  title: 'component/Data/SearchBarWithSuggestions',
  component: SearchBarWithSuggestions,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SearchBarWithSuggestionsProps> = (args) => <SearchBarWithSuggestions {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'],
  onSearch: (query) => console.log(`Search: ${query}`),
};

export const Searching = Template.bind({});
Searching.args = {
  ...Default.args,
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'],
};

export const SuggestionsVisible = Template.bind({});
SuggestionsVisible.args = {
  ...Default.args,
};

export const NoResults = Template.bind({});
NoResults.args = {
  suggestions: [],
  onSearch: (query) => console.log(`Search: ${query}`),
};