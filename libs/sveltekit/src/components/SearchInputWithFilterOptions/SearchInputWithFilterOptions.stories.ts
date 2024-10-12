import SearchInputWithFilterOptions from './SearchInputWithFilterOptions.svelte';

export default {
  title: 'Components/Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    query: { control: 'text' },
    filtersActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    noResults: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: SearchInputWithFilterOptions,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  query: '',
  filtersActive: false,
  disabled: false,
  noResults: false,
};

export const Searching = Template.bind({});
Searching.args = {
  placeholder: 'Search...',
  query: 'Searching...',
  filtersActive: false,
  disabled: false,
  noResults: false,
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  placeholder: 'Search...',
  query: '',
  filtersActive: true,
  disabled: false,
  noResults: false,
};

export const NoResults = Template.bind({});
NoResults.args = {
  placeholder: 'Search...',
  query: 'No match',
  filtersActive: false,
  disabled: false,
  noResults: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Search...',
  query: '',
  filtersActive: false,
  disabled: true,
  noResults: false,
};