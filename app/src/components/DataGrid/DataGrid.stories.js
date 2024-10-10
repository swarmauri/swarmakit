import React from 'react';
import DataGrid from './DataGrid';

export default {
  title: 'UI Layout/DataGrid',
  component: DataGrid,
  argTypes: {
    data: { control: 'array' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  data: [],
  loading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  loading: false,
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
  loading: false,
};

export const Resized = Template.bind({});
Resized.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  loading: false,
};

export const Sorted = Template.bind({});
Sorted.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'].sort(),
  loading: false,
};

export const Filtered = Template.bind({});
Filtered.args = {
  data: ['Item 1', 'Item 3'],
  loading: false,
};

export const Paginated = Template.bind({});
Paginated.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  loading: false,
};

export const Selected = Template.bind({});
Selected.args = {
  data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  loading: false,
};