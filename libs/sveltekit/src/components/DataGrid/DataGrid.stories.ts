import DataGrid from './DataGrid.svelte';
import type { GridState } from './DataGrid.svelte';

export default {
  title: 'Lists/DataGrid',
  component: DataGrid,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(GridState),
    },
    columns: { control: 'array' },
    rows: { control: 'object' },
    pageSize: { control: 'number' },
    searchQuery: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: DataGrid,
  props: args,
});

export const Paginated = Template.bind({});
Paginated.args = {
  state: GridState.Paginated,
  columns: ['Name', 'Age', 'Occupation'],
  rows: [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    // Add more rows as needed
  ],
  pageSize: 5,
};

export const Search = Template.bind({});
Search.args = {
  state: GridState.Search,
  columns: ['Name', 'Age', 'Occupation'],
  rows: [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    // Add more rows as needed
  ],
  searchQuery: '',
};

export const Resizable = Template.bind({});
Resizable.args = {
  state: GridState.Resizable,
  columns: ['Name', 'Age', 'Occupation'],
  rows: [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    // Add more rows as needed
  ],
};