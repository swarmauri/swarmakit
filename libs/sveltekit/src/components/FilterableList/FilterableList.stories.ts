import FilterableList from './FilterableList.svelte';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Cherry' },
      { title: 'Date' },
      { title: 'Elderberry' },
    ],
  },
};

export const FilterApplied = {
  args: {
    items: [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Cherry' },
      { title: 'Date' },
      { title: 'Elderberry' },
    ],
  },
  parameters: {
    pseudo: {
      user: {
        input: 'an',
      },
    },
  },
};

export const NoResults = {
  args: {
    items: [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Cherry' },
      { title: 'Date' },
      { title: 'Elderberry' },
    ],
  },
  parameters: {
    pseudo: {
      user: {
        input: 'xyz',
      },
    },
  },
};

export const ClearFilter = {
  args: {
    items: [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Cherry' },
      { title: 'Date' },
      { title: 'Elderberry' },
    ],
  },
};