import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Sam Green', Age: 23, Email: 'sam@example.com' },
  ],
};

export const Paginated = Template.bind({});
Paginated.args = {
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Sam Green', Age: 23, Email: 'sam@example.com' },
    { Name: 'Alice Brown', Age: 45, Email: 'alice@example.com' },
    { Name: 'Bob White', Age: 29, Email: 'bob@example.com' },
  ],
  paginated: true,
};

export const Search = Template.bind({});
Search.args = {
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Sam Green', Age: 23, Email: 'sam@example.com' },
  ],
  searchEnabled: true,
};

export const Resizable = Template.bind({});
Resizable.args = {
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Sam Green', Age: 23, Email: 'sam@example.com' },
  ],
  resizable: true,
};