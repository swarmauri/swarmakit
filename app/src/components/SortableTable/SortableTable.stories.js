import React from 'react';
import SortableTable from './SortableTable';

export default {
  title: 'Lists/SortableTable',
  component: SortableTable,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <SortableTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { name: 'Sam Green', age: 45, email: 'sam@example.com' },
  ],
};

export const Sorting = Template.bind({});
Sorting.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { name: 'Sam Green', age: 45, email: 'sam@example.com' },
  ],
};

export const Filtering = Template.bind({});
Filtering.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { name: 'Sam Green', age: 45, email: 'sam@example.com' },
  ],
};

export const RowSelection = Template.bind({});
RowSelection.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { name: 'Sam Green', age: 45, email: 'sam@example.com' },
  ],
};