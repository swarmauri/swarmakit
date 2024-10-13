import FavoritesList from './FavoritesList.svelte';

export default {
  title: 'Lists/FavoritesList',
  component: FavoritesList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { title: 'Item 1', starred: false },
      { title: 'Item 2', starred: false },
      { title: 'Item 3', starred: false },
    ],
    selectedItemIndex: null,
  },
};

export const Starred = {
  args: {
    items: [
      { title: 'Item 1', starred: true },
      { title: 'Item 2', starred: false },
      { title: 'Item 3', starred: false },
    ],
    selectedItemIndex: null,
  },
};

export const Unstarred = {
  args: {
    items: [
      { title: 'Item 1', starred: false },
      { title: 'Item 2', starred: false },
      { title: 'Item 3', starred: false },
    ],
    selectedItemIndex: null,
  },
};

export const Hover = {
  args: {
    items: [
      { title: 'Item 1', starred: false },
      { title: 'Item 2', starred: false },
      { title: 'Item 3', starred: false },
    ],
    selectedItemIndex: null,
  },
};

export const Selected = {
  args: {
    items: [
      { title: 'Item 1', starred: false },
      { title: 'Item 2', starred: false },
      { title: 'Item 3', starred: false },
    ],
    selectedItemIndex: 1,
  },
};