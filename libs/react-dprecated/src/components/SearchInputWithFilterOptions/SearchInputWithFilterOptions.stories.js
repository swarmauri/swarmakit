import React from 'react';
import SearchInputWithFilterOptions from './SearchInputWithFilterOptions';

export default {
  title: 'Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  argTypes: {
    onSearch: { action: 'search executed' },
  },
};

const Template = (args) => <SearchInputWithFilterOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  filters: ['Filter 1', 'Filter 2', 'Filter 3'],
  disabled: false,
};

export const Searching = Template.bind({});
Searching.args = {
  filters: ['Filter 1', 'Filter 2', 'Filter 3'],
  disabled: false,
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  filters: ['Filter 1', 'Filter 2', 'Filter 3'],
  disabled: false,
};

export const NoResults = Template.bind({});
NoResults.args = {
  filters: ['Filter 1', 'Filter 2', 'Filter 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  filters: ['Filter 1', 'Filter 2', 'Filter 3'],
  disabled: true,
};