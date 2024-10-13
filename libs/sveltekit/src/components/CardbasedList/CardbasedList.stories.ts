import CardbasedList from './CardbasedList.svelte';

export default {
  title: 'Lists/CardbasedList',
  component: CardbasedList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { id: 1, title: 'Card 1', description: 'Description for card 1' },
      { id: 2, title: 'Card 2', description: 'Description for card 2' },
      { id: 3, title: 'Card 3', description: 'Description for card 3' },
    ],
    selectedId: null,
    isDisabled: false,
  },
};

export const Hover = {
  args: {
    items: [
      { id: 1, title: 'Card 1', description: 'Description for card 1' },
      { id: 2, title: 'Card 2', description: 'Description for card 2' },
      { id: 3, title: 'Card 3', description: 'Description for card 3' },
    ],
    selectedId: null,
    isDisabled: false,
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const Selected = {
  args: {
    items: [
      { id: 1, title: 'Card 1', description: 'Description for card 1' },
      { id: 2, title: 'Card 2', description: 'Description for card 2' },
      { id: 3, title: 'Card 3', description: 'Description for card 3' },
    ],
    selectedId: 2,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    items: [
      { id: 1, title: 'Card 1', description: 'Description for card 1' },
      { id: 2, title: 'Card 2', description: 'Description for card 2' },
      { id: 3, title: 'Card 3', description: 'Description for card 3' },
    ],
    selectedId: null,
    isDisabled: true,
  },
};