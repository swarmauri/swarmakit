import React from 'react';
import DataTable from './DataTable';

export default {
  title: 'UI Layout/DataTable',
  component: DataTable,
  argTypes: {
    data: { control: 'array' },
    columns: { control: 'array' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
    { Name: 'Bob', Age: 30, Location: 'San Francisco' },
  ],
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [],
  loading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
    { Name: 'Bob', Age: 30, Location: 'San Francisco' },
  ],
  loading: false,
};

export const Empty = Template.bind({});
Empty.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [],
  loading: false,
};

export const Sorted = Template.bind({});
Sorted.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
    { Name: 'Bob', Age: 30, Location: 'San Francisco' },
  ],
  loading: false,
};

export const Filtered = Template.bind({});
Filtered.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
  ],
  loading: false,
};

export const Paginated = Template.bind({});
Paginated.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
    { Name: 'Bob', Age: 30, Location: 'San Francisco' },
    { Name: 'Charlie', Age: 35, Location: 'Los Angeles' },
    { Name: 'David', Age: 40, Location: 'Chicago' },
    { Name: 'Eve', Age: 45, Location: 'Houston' },
  ],
  loading: false,
};

export const Selected = Template.bind({});
Selected.args = {
  columns: ['Name', 'Age', 'Location'],
  data: [
    { Name: 'Alice', Age: 25, Location: 'New York' },
    { Name: 'Bob', Age: 30, Location: 'San Francisco' },
  ],
  loading: false,
};