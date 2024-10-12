import DataTable from './DataTable.svelte';
import type { DataTableState } from './DataTable.svelte';

export default {
  title: 'UI Layout/DataTable',
  component: DataTable,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'rendered', 'empty', 'sorted', 'filtered', 'paginated', 'selected'],
    },
    data: { control: 'object' },
    columns: { control: 'array' },
  },
};

const Template = (args: { state: DataTableState; data: Array<{ [key: string]: any }>; columns: Array<string> }) => ({
  Component: DataTable,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'rendered',
  data: [
    { Name: 'Alice', Age: 30 },
    { Name: 'Bob', Age: 25 },
  ],
  columns: ['Name', 'Age'],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  data: [],
  columns: [],
};

export const Rendered = Template.bind({});
Rendered.args = {
  state: 'rendered',
  data: [
    { Name: 'Alice', Age: 30 },
    { Name: 'Bob', Age: 25 },
  ],
  columns: ['Name', 'Age'],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  data: [],
  columns: ['Name', 'Age'],
};

export const Sorted = Template.bind({});
Sorted.args = {
  state: 'sorted',
  data: [
    { Name: 'Bob', Age: 25 },
    { Name: 'Alice', Age: 30 },
  ],
  columns: ['Name', 'Age'],
};

export const Filtered = Template.bind({});
Filtered.args = {
  state: 'filtered',
  data: [
    { Name: 'Alice', Age: 30 },
  ],
  columns: ['Name', 'Age'],
};

export const Paginated = Template.bind({});
Paginated.args = {
  state: 'paginated',
  data: [
    { Name: 'Alice', Age: 30 },
    { Name: 'Bob', Age: 25 },
    { Name: 'Charlie', Age: 35 },
  ],
  columns: ['Name', 'Age'],
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
  data: [
    { Name: 'Alice', Age: 30, selected: true },
    { Name: 'Bob', Age: 25, selected: false },
  ],
  columns: ['Name', 'Age'],
};