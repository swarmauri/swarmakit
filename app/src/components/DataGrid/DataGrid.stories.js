import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
};

const Template = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Country'],
  data: [
    { Name: 'John Doe', Age: 28, Country: 'USA' },
    { Name: 'Jane Smith', Age: 34, Country: 'UK' },
    { Name: 'Sam Brown', Age: 23, Country: 'Canada' },
  ],
};

export const Paginated = Template.bind({});
Paginated.args = {
  columns: ['Name', 'Age', 'Country'],
  data: [
    { Name: 'John Doe', Age: 28, Country: 'USA' },
    { Name: 'Jane Smith', Age: 34, Country: 'UK' },
    { Name: 'Sam Brown', Age: 23, Country: 'Canada' },
  ],
  paginated: true,
};

export const Search = Template.bind({});
Search.args = {
  columns: ['Name', 'Age', 'Country'],
  data: [
    { Name: 'John Doe', Age: 28, Country: 'USA' },
    { Name: 'Jane Smith', Age: 34, Country: 'UK' },
    { Name: 'Sam Brown', Age: 23, Country: 'Canada' },
  ],
  searchable: true,
};

export const Resizable = Template.bind({});
Resizable.args = {
  columns: ['Name', 'Age', 'Country'],
  data: [
    { Name: 'John Doe', Age: 28, Country: 'USA' },
    { Name: 'Jane Smith', Age: 34, Country: 'UK' },
    { Name: 'Sam Brown', Age: 23, Country: 'Canada' },
  ],
  resizable: true,
};