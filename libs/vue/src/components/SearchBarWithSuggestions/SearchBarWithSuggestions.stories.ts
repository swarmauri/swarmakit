import SearchBarWithSuggestions from './SearchBarWithSuggestions.vue';

export default {
  title: 'components/Data/SearchBarWithSuggestions',
  component: SearchBarWithSuggestions,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { SearchBarWithSuggestions },
  setup() {
    return { args };
  },
  template: '<SearchBarWithSuggestions v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  suggestions: ['apple', 'banana', 'grape', 'orange', 'strawberry'],
};

export const Searching = Template.bind({});
Searching.args = {
  ...Default.args,
};

export const SuggestionsVisible = Template.bind({});
SuggestionsVisible.args = {
  ...Default.args,
  suggestions: ['apple', 'apricot', 'avocado'],
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
  suggestions: [],
};