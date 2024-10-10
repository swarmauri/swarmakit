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
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
    { header: 'Country', key: 'country' },
  ],
  data: [
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'UK' },
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