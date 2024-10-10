import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
};

const Template = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Email', accessor: 'email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { name: 'Alice Johnson', age: 29, email: 'alice@example.com' },
  ],
};

export const Paginated = Template.bind({});
Paginated.args = {
  ...Default.args,
  paginated: true,
};

export const Search = Template.bind({});
Search.args = {
  ...Default.args,
  searchable: true,
};

export const Resizable = Template.bind({});
Resizable.args = {
  ...Default.args,
  resizable: true,
};