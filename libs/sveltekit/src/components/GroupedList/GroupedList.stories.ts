import GroupedList from './GroupedList.svelte';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    groups: [
      {
        title: 'Fruits',
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
        ],
      },
      {
        title: 'Vegetables',
        items: [
          { id: 3, name: 'Carrot' },
          { id: 4, name: 'Lettuce' },
        ],
      },
    ],
  },
};

export const GroupExpanded = {
  args: {
    groups: [
      {
        title: 'Fruits',
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
        ],
      },
    ],
  },
  parameters: {
    pseudo: {
      user: {
        expand: 'Fruits',
      },
    },
  },
};

export const GroupCollapsed = {
  args: {
    groups: [
      {
        title: 'Fruits',
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
        ],
      },
    ],
  },
};

export const ItemHover = {
  args: {
    groups: [
      {
        title: 'Fruits',
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
        ],
      },
    ],
  },
  parameters: {
    pseudo: {
      user: {
        hover: 'Apple',
      },
    },
  },
};

export const ItemSelected = {
  args: {
    groups: [
      {
        title: 'Fruits',
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
        ],
      },
    ],
  },
  parameters: {
    pseudo: {
      user: {
        select: 'Apple',
      },
    },
  },
};