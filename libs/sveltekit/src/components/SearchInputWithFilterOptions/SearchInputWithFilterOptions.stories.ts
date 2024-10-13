import SearchInputWithFilterOptions from './SearchInputWithFilterOptions.svelte';

export default {
  title: 'Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  },
};

export const Searching = {
  args: {
    query: 'Searching...',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  },
};

export const FiltersActive = {
  args: {
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: ['Option 1', 'Option 2'],
    disabled: false,
  },
};

export const NoResults = {
  args: {
    query: 'No results found',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: false,
  },
};

export const Disabled = {
  args: {
    query: '',
    filters: ['Option 1', 'Option 2', 'Option 3'],
    activeFilters: [],
    disabled: true,
  },
};