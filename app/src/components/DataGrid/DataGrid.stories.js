import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
};

const Template = (args) => <DataGrid {...args} />;

const columns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Name', accessor: 'name' },
  { label: 'Age', accessor: 'age' },
];

const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Green', age: 45 },
  { id: 4, name: 'Chris Johnson', age: 22 },
  { id: 5, name: 'Pat Brown', age: 31 },
  { id: 6, name: 'Alex White', age: 29 },
];

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const Paginated = Template.bind({});
Paginated.args = {
  columns,
  data,
  rowsPerPage: 3,
};

export const Search = Template.bind({});
Search.args = {
  columns,
  data,
};

export const Resizable = Template.bind({});
Resizable.args = {
  columns,
  data,
};