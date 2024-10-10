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
    { label: 'Name', accessor: 'name' },
    { label: 'Age', accessor: 'age' },
    { label: 'Country', accessor: 'country' },
  ],
  data: [
    { name: 'Alice', age: 30, country: 'UK' },
    { name: 'Bob', age: 25, country: 'USA' },
    { name: 'Charlie', age: 35, country: 'Canada' },
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