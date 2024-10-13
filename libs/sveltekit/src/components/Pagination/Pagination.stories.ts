import Pagination from './Pagination.svelte';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const Active = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
};

export const Inactive = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const Hover = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
  parameters: {
    pseudo: {
      hover: '.pagination-button',
    },
  },
};