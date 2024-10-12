import DataGrid from './DataGrid.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['paginated', 'search', 'resizable'],
    },
    data: {
      control: { type: 'array' },
    },
    columns: {
      control: { type: 'array' },
    },
    pageSize: {
      control: { type: 'number' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: DataGrid,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'paginated',
  data: [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' },
    { name: 'David', age: 40, city: 'Houston' },
    { name: 'Eve', age: 45, city: 'Phoenix' },
    { name: 'Frank', age: 50, city: 'Philadelphia' },
    { name: 'Grace', age: 55, city: 'San Antonio' },
    { name: 'Hank', age: 60, city: 'San Diego' },
    { name: 'Ivy', age: 65, city: 'Dallas' },
    { name: 'Jack', age: 70, city: 'San Jose' },
  ],
  columns: ['name', 'age', 'city'],
  pageSize: 5,
};

export const Search = Template.bind({});
Search.args = {
  state: 'search',
  data: Default.args.data,
  columns: Default.args.columns,
};

export const Resizable = Template.bind({});
Resizable.args = {
  state: 'resizable',
  data: Default.args.data,
  columns: Default.args.columns,
};