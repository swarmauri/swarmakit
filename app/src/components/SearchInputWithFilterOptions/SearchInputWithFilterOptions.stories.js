import React from 'react';
import SearchInputWithFilterOptions from './SearchInputWithFilterOptions';

export default {
  title: 'Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
};

const Template = (args) => <SearchInputWithFilterOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  filtersActive: false,
  disabled: false,
};

export const Searching = Template.bind({});
Searching.args = {
  placeholder: 'Type to search...',
  filtersActive: false,
  disabled: false,
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  placeholder: 'Search with filters...',
  filtersActive: true,
  disabled: false,
};

export const NoResults = Template.bind({});
NoResults.args = {
  placeholder: 'No results found',
  filtersActive: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Search...',
  filtersActive: false,
  disabled: true,
};