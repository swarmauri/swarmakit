import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchLocationInput, { SearchLocationInputProps } from './SearchLocationInput';

export default {
  title: 'component/Map Navigation/SearchLocationInput',
  component: SearchLocationInput,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SearchLocationInputProps> = (args) => <SearchLocationInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search for a location',
  onSearch: (query) => console.log('Searching for:', query),
};

export const Typing = Template.bind({});
Typing.args = {
  placeholder: 'Type to search...',
  onSearch: (query) => console.log('Typing:', query),
};

export const SuggestionsVisible = Template.bind({});
SuggestionsVisible.args = {
  placeholder: 'Suggestions visible',
  onSearch: (query) => console.log('Suggestions for:', query),
};

export const NoResults = Template.bind({});
NoResults.args = {
  placeholder: 'No results found',
  onSearch: (query) => console.log('No results for:', query),
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
  onSearch: (query) => console.log('Disabled input:', query),
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Focused input',
  onSearch: (query) => console.log('Focused input:', query),
};
Focused.parameters = {
  pseudo: { focus: true },
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  placeholder: 'Unfocused input',
  onSearch: (query) => console.log('Unfocused input:', query),
};