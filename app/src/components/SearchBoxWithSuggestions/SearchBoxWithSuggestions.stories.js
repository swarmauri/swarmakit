import React from 'react';
import SearchBoxWithSuggestions from './SearchBoxWithSuggestions';

export default {
  title: 'Components/SearchBoxWithSuggestions',
  component: SearchBoxWithSuggestions,
};

const Template = (args) => <SearchBoxWithSuggestions {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple'],
  onSearch: (value) => console.log('Search for:', value),
};

export const WithNoSuggestions = Template.bind({});
WithNoSuggestions.args = {
  suggestions: [],
  onSearch: (value) => console.log('Search for:', value),
};