import React from 'react';
import SortableTable from './SortableTable';

export default {
  title: 'Lists/SortableTable',
  component: SortableTable,
};

const Template = (args) => <SortableTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'location', label: 'Location' },
  ],
  data: [
    { name: 'Alice', age: 30, location: 'New York' },
    { name: 'Bob', age: 25, location: 'San Francisco' },
    { name: 'Charlie', age: 35, location: 'London' },
  ],
};

export const Sorting = Template.bind({});
Sorting.args = {
  ...Default.args,
};

export const Filtering = Template.bind({});
Filtering.args = {
  ...Default.args,
};

export const RowSelection = Template.bind({});
RowSelection.args = {
  ...Default.args,
};