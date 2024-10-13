import MultiselectList from './MultiselectList.svelte';

export default {
  title: 'Lists/MultiselectList',
  component: MultiselectList,
  tags: ['autodocs'],
};

const items = [
  { id: 1, name: 'Item 1', selected: false },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: false },
];

export const Default = {
  args: {
    items,
    disabled: false,
  },
};

export const ItemSelected = {
  args: {
    items: items.map((item, index) => ({ ...item, selected: index === 0 })),
    disabled: false,
  },
};

export const ItemDeselected = {
  args: {
    items,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    items,
    disabled: true,
  },
};

export const Hover = {
  args: {
    items,
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: '.multiselect-item',
    },
  },
};