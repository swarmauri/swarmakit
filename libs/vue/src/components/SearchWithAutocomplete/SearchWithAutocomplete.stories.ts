import SearchWithAutocomplete from './SearchWithAutocomplete.vue';

export default {
  title: 'Miscellaneous/SearchWithAutocomplete',
  component: SearchWithAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    results: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { SearchWithAutocomplete },
  setup() {
    return { args };
  },
  template: '<SearchWithAutocomplete v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  results: ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'],
};

export const Typing = Template.bind({});
Typing.args = {
  results: ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'],
  query: 'Ap',
};

export const ShowingResults = Template.bind({});
ShowingResults.args = {
  results: ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'],
  query: 'Ap',
};

export const NoResults = Template.bind({});
NoResults.args = {
  results: [],
  query: 'Unknown',
};