import NumberedList from './NumberedList.svelte';

export default {
  title: 'Lists/NumberedList',
  component: NumberedList,
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

export const Selected = {
  args: {
    items: items.map((item, index) => ({ ...item, selected: index === 0 })),
    disabled: false,
  },
};

export const Hover = {
  args: {
    items,
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: '.numbered-item',
    },
  },
};

export const Disabled = {
  args: {
    items,
    disabled: true,
  },
};