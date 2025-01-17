import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchWithAutocomplete, { SearchWithAutocompleteProps } from './SearchWithAutocomplete';

export default {
  title: 'component/Miscellaneous/SearchWithAutocomplete',
  component: SearchWithAutocomplete,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SearchWithAutocompleteProps> = (args) => <SearchWithAutocomplete {...args} />;

export const Typing = Template.bind({});
Typing.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'],
};

export const ShowingResults = Template.bind({});
ShowingResults.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'],
};

export const NoResults = Template.bind({});
NoResults.args = {
  suggestions: [],
};