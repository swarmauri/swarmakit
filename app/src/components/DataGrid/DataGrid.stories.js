import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'number' },
    paginated: { control: 'boolean' },
    onSearch: { action: 'searched' },
    resizable: { control: 'boolean' },
  },
};

const Template = (args) => <DataGrid {...args} />;

const sampleData = [
  { name: 'John Doe', age: 28, occupation: 'Engineer' },
  { name: 'Jane Smith', age: 34, occupation: 'Designer' },
  { name: 'Sam Green', age: 22, occupation: 'Developer' },
  { name: 'Lisa Brown', age: 45, occupation: 'Manager' },
];

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns: 3,
  paginated: false,
  resizable: false,
};

export const Paginated = Template.bind({});
Paginated.args = {
  ...Default.args,
  paginated: true,
};

export const Search = Template.bind({});
Search.args = {
  ...Default.args,
  onSearch: (term) => console.log(term),
};

export const Resizable = Template.bind({});
Resizable.args = {
  ...Default.args,
  resizable: true,
};