import FilterableList from './FilterableList.svelte';
import type { ListState } from './FilterableList.svelte';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ListState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: FilterableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: ListState.Default,
  items: ['Apple', 'Banana', 'Cherry', 'Date'],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  state: ListState.FilterApplied,
  items: ['Apple', 'Banana', 'Cherry', 'Date'],
  filter: 'a',
};

export const NoResults = Template.bind({});
NoResults.args = {
  state: ListState.NoResults,
  items: ['Apple', 'Banana', 'Cherry', 'Date'],
  filter: 'z',
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  state: ListState.ClearFilter,
  items: ['Apple', 'Banana', 'Cherry', 'Date'],
};