import React from 'react';
import FilterableList from './FilterableList';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <FilterableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};

export const NoResults = Template.bind({});
NoResults.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};