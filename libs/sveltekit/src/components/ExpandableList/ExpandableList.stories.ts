import ExpandableList from './ExpandableList.svelte';

export default {
  title: 'Lists/ExpandableList',
  component: ExpandableList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { title: 'Item 1', content: 'Content 1', expanded: false },
      { title: 'Item 2', content: 'Content 2', expanded: false },
      { title: 'Item 3', content: 'Content 3', expanded: false },
    ],
    selectedItemIndex: null,
  },
};

export const ItemExpanded = {
  args: {
    items: [
      { title: 'Item 1', content: 'Content 1', expanded: true },
      { title: 'Item 2', content: 'Content 2', expanded: false },
      { title: 'Item 3', content: 'Content 3', expanded: false },
    ],
    selectedItemIndex: null,
  },
};

export const ItemCollapsed = {
  args: {
    items: [
      { title: 'Item 1', content: 'Content 1', expanded: false },
      { title: 'Item 2', content: 'Content 2', expanded: false },
      { title: 'Item 3', content: 'Content 3', expanded: false },
    ],
    selectedItemIndex: null,
  },
};

export const Hover = {
  args: {
    items: [
      { title: 'Item 1', content: 'Content 1', expanded: false },
      { title: 'Item 2', content: 'Content 2', expanded: false },
      { title: 'Item 3', content: 'Content 3', expanded: false },
    ],
    selectedItemIndex: null,
  },
};

export const Selected = {
  args: {
    items: [
      { title: 'Item 1', content: 'Content 1', expanded: false },
      { title: 'Item 2', content: 'Content 2', expanded: false },
      { title: 'Item 3', content: 'Content 3', expanded: false },
    ],
    selectedItemIndex: 1,
  },
};