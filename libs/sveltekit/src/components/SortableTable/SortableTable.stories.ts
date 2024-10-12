import SortableTable from './SortableTable.svelte';
import type { Column, Row } from './SortableTable.svelte';

export default {
  title: 'Lists/SortableTable',
  component: SortableTable,
  argTypes: {
    columns: { control: 'object' },
    rows: { control: 'object' },
    onSort: { action: 'onSort' },
    onFilter: { action: 'onFilter' },
    onSelectRow: { action: 'onSelectRow' },
  },
};

const Template = (args) => ({
  Component: SortableTable,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'age', title: 'Age', sortable: true },
    { key: 'location', title: 'Location', sortable: false },
  ],
  rows: [
    { id: 1, name: 'John Doe', age: 29, location: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, location: 'London' },
    { id: 3, name: 'Sam Green', age: 23, location: 'Sydney' },
  ],
  onSort: (key: string) => console.log(`Sorted by ${key}`),
  onFilter: (key: string, value: string) => console.log(`Filtered ${key} by ${value}`),
  onSelectRow: (id: number) => console.log(`Selected row ${id}`),
};

export const Sorting = Template.bind({});
Sorting.args = {
  ...Default.args,
  columns: [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'age', title: 'Age', sortable: true },
    { key: 'location', title: 'Location', sortable: false },
  ],
};

export const Filtering = Template.bind({});
Filtering.args = {
  ...Default.args,
  columns: Default.args.columns,
};

export const RowSelection = Template.bind({});
RowSelection.args = {
  ...Default.args,
  rows: Default.args.rows.map((row, index) => ({
    ...row,
    selected: index === 0,
  })),
};