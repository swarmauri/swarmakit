import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchInputWithFilterOptions from './SearchInputWithFilterOptions';

export default {
  title: 'component/Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <SearchInputWithFilterOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterOptions: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
  onSearch: (query: string) => console.log(`Searching for: ${query}`),
  onFilterChange: (selectedFilters: string[]) => console.log(`Selected filters: ${selectedFilters}`),
};

export const Searching = Template.bind({});
Searching.args = {
  ...Default.args,
  filterOptions: [],
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  ...Default.args,
  filterOptions: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
  onSearch: () => console.log('No results found'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};