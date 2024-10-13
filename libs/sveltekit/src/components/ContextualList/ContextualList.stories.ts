import ContextualList from './ContextualList.svelte';

export default {
  title: 'Lists/ContextualList',
  component: ContextualList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { id: 1, label: 'Item 1', actionTriggered: false },
      { id: 2, label: 'Item 2', actionTriggered: false },
      { id: 3, label: 'Item 3', actionTriggered: false },
    ],
  },
};

export const ActionTriggered = {
  args: {
    items: [
      { id: 1, label: 'Item 1', actionTriggered: true },
      { id: 2, label: 'Item 2', actionTriggered: false },
      { id: 3, label: 'Item 3', actionTriggered: false },
    ],
  },
};

export const Dismissed = {
  args: {
    items: [
      { id: 1, label: 'Item 1', actionTriggered: false },
      { id: 2, label: 'Item 2', actionTriggered: false },
      { id: 3, label: 'Item 3', actionTriggered: false },
    ],
  },
};