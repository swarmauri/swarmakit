import FilterableList from './FilterableList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/FilterableList',
  component: FilterableList,
  tags: ['autodocs'],
  argTypes: {
    filterText: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: FilterableList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  filterText: '',
  items: [
    { id: 1, title: 'Apple' },
    { id: 2, title: 'Banana' },
    { id: 3, title: 'Cherry' },
  ],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  filterText: 'a',
  items: Default.args.items,
};

export const NoResults = Template.bind({});
NoResults.args = {
  filterText: 'z',
  items: Default.args.items,
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  filterText: '',
  items: Default.args.items,
};