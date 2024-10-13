import CollapsibleMenuList from './CollapsibleMenuList.svelte';

export default {
  title: 'Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { id: 1, label: 'Menu 1', expanded: false },
      { id: 2, label: 'Menu 2', expanded: false },
      { id: 3, label: 'Menu 3', expanded: false },
    ],
  },
};

export const Expanded = {
  args: {
    items: [
      { id: 1, label: 'Menu 1', expanded: true },
      { id: 2, label: 'Menu 2', expanded: true },
      { id: 3, label: 'Menu 3', expanded: true },
    ],
  },
};

export const Collapsed = {
  args: {
    items: [
      { id: 1, label: 'Menu 1', expanded: false },
      { id: 2, label: 'Menu 2', expanded: false },
      { id: 3, label: 'Menu 3', expanded: false },
    ],
  },
};

export const Hover = {
  args: {
    items: [
      { id: 1, label: 'Menu 1', expanded: false },
      { id: 2, label: 'Menu 2', expanded: false },
      { id: 3, label: 'Menu 3', expanded: false },
    ],
  },
};

export const Active = {
  args: {
    items: [
      { id: 1, label: 'Menu 1', expanded: false, active: true },
      { id: 2, label: 'Menu 2', expanded: false },
      { id: 3, label: 'Menu 3', expanded: false },
    ],
  },
};