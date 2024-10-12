import SearchWithAutocomplete from './SearchWithAutocomplete.svelte';

export default {
  title: 'Miscellaneous/SearchWithAutocomplete',
  component: SearchWithAutocomplete,
  argTypes: {
    suggestions: { control: 'array' },
    query: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: SearchWithAutocomplete,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango'],
  query: '',
};

export const Typing = Template.bind({});
Typing.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango'],
  query: 'Ap',
};

export const ShowingResults = Template.bind({});
ShowingResults.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango'],
  query: 'An',
};

export const NoResults = Template.bind({});
NoResults.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango'],
  query: 'Zzzz',
};