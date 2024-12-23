import React from 'react';
import { Meta, Story } from '@storybook/react';
import SortableTable, { SortableTableProps } from './SortableTable';

export default {
  title: 'component/Lists/SortableTable',
  component: SortableTable,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SortableTableProps> = (args) => <SortableTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ],
  rows: [
    { id: '1', name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: '2', name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: '3', name: 'Charlie', age: 35, email: 'charlie@example.com' },
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