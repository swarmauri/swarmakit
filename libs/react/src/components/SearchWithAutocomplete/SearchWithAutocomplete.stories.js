import React from 'react';
import SearchWithAutocomplete from './SearchWithAutocomplete';

export default {
  title: 'Miscellaneous/SearchWithAutocomplete',
  component: SearchWithAutocomplete,
};

const Template = (args) => <SearchWithAutocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange'],
};

export const Typing = Template.bind({});
Typing.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange'],
};

export const ShowingResults = Template.bind({});
ShowingResults.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange'],
};

export const NoResults = Template.bind({});
NoResults.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange'],
};