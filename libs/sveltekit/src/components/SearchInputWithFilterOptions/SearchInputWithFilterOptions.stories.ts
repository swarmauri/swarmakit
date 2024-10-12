import SearchInputWithFilterOptions from './SearchInputWithFilterOptions.svelte';

export default {
  title: 'Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  argTypes: {
    searchTerm: { control: 'text' },
    filters: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: SearchInputWithFilterOptions,
  props: args,
  on: {
    search: args.onSearch,
    filter: args.onFilter,
  },
});

export const Default = Template.bind({});
Default.args = {
  searchTerm: '',
  filters: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
  onSearch: (term) => console.log('Search term:', term),
  onFilter: (filter) => console.log('Filter selected:', filter),
};

export const Searching = Template.bind({});
Searching.args = {
  searchTerm: 'Searching...',
  filters: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
  onSearch: (term) => console.log('Search term:', term),
  onFilter: (filter) => console.log('Filter selected:', filter),
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  searchTerm: '',
  filters: ['Active Filter 1', 'Active Filter 2'],
  disabled: false,
  onSearch: (term) => console.log('Search term:', term),
  onFilter: (filter) => console.log('Filter selected:', filter),
};

export const NoResults = Template.bind({});
NoResults.args = {
  searchTerm: 'No Results',
  filters: [],
  disabled: false,
  onSearch: (term) => console.log('Search term:', term),
  onFilter: (filter) => console.log('Filter selected:', filter),
};

export const Disabled = Template.bind({});
Disabled.args = {
  searchTerm: '',
  filters: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
  onSearch: (term) => console.log('Search term:', term),
  onFilter: (filter) => console.log('Filter selected:', filter),
};