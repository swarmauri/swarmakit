import React from 'react';
import FilterableList from './FilterableList';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
};

const Template = (args) => <FilterableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
};

export const NoResults = Template.bind({});
NoResults.args = {
  items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
};