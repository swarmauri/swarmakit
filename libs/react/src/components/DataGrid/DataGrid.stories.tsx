import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataGrid, { DataGridProps } from './DataGrid';

export default {
  title: 'component/UI Layout/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DataGridProps> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'John Doe', Age: 30, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  columns: [],
  data: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  columns: ['Name', 'Age', 'Email'],
  data: [
    { Name: 'Alice Johnson', Age: 28, Email: 'alice@example.com' },
    { Name: 'Bob Brown', Age: 35, Email: 'bob@example.com' },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  columns: ['Name', 'Age', 'Email'],
  data: [],
};

export const Resized = Template.bind({});
Resized.args = {
  state: 'resized',
  columns: ['Name', 'Age'],
  data: [
    { Name: 'Alice Johnson', Age: 25 },
    { Name: 'John Doe', Age: 30 },
  ],
};

export const Sorted = Template.bind({});
Sorted.args = {
  state: 'sorted',
  columns: ['Name', 'Age'],
  data: [
    { Name: 'Alice Johnson', Age: 25 },
    { Name: 'John Doe', Age: 30 },
  ],
};

export const Filtered = Template.bind({});
Filtered.args = {
  state: 'filtered',
  columns: ['Name', 'Email'],
  data: [
    { Name: 'Jane Smith', Email: 'jane@example.com' },
  ],
};

export const Paginated = Template.bind({});
Paginated.args = {
  state: 'paginated',
  columns: ['Name', 'Age'],
  data: [
    { Name: 'John Doe', Age: 30 },
    { Name: 'Jane Smith', Age: 25 },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
  columns: ['Name', 'Email'],
  data: [
    { Name: 'Alice Johnson', Email: 'alice@example.com' },
  ],
};