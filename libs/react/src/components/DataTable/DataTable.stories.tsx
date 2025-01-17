import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataTable, { DataTableProps } from './DataTable';

export default {
  title: 'component/Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
} as Meta;

const columns = [
  { key: 'name', header: 'Name', width: '25%', align: 'left' },
  { key: 'age', header: 'Age', width: '15%', align: 'center' },
  { key: 'email', header: 'Email', width: '30%', align: 'left' },
  { key: 'action', header: 'Action', width: '30%', align: 'right' },
];

const data = [
  { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  { name: 'Sam Johnson', age: 45, email: 'sam.johnson@example.com' },
];

const Template: Story<DataTableProps> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
  loading: false,
  onSort: (key) => console.log(`Sorted by: ${key}`),
  onFilter: (key, value) => console.log(`Filtered by: ${key} with value: ${value}`),
  onSelectRow: (row) => console.log(`Row selected: ${JSON.stringify(row)}`),
  onDeleteRow: (row) => console.log(`Row deleted: ${JSON.stringify(row)}`),
  onEditRow: (row) => console.log(`Row edited: ${JSON.stringify(row)}`),
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Paginated = Template.bind({});
Paginated.args = {
  ...Default.args,
};

export const Sorted = Template.bind({});
Sorted.args = {
  ...Default.args,
};

export const Filtered = Template.bind({});
Filtered.args = {
  ...Default.args,
};

export const RowSelected = Template.bind({});
RowSelected.args = {
  ...Default.args,
};