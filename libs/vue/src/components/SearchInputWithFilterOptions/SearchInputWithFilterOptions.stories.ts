import SearchInputWithFilterOptions from './SearchInputWithFilterOptions.vue';

export default {
  title: 'Forms/SearchInputWithFilterOptions',
  component: SearchInputWithFilterOptions,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    filterOptions: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { SearchInputWithFilterOptions },
  setup() {
    return { args };
  },
  template: '<SearchInputWithFilterOptions v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Searching = Template.bind({});
Searching.args = {
  placeholder: 'Searching...',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const FiltersActive = Template.bind({});
FiltersActive.args = {
  placeholder: 'Search...',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const NoResults = Template.bind({});
NoResults.args = {
  placeholder: 'Search...',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Search...',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};