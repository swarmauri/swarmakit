import LoadMoreButtonInList from './LoadMoreButtonInList.svelte';

export default {
  title: 'Lists/LoadMoreButtonInList',
  component: LoadMoreButtonInList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isLoading: false,
    hasMore: true,
  },
};

export const Loading = {
  args: {
    isLoading: true,
    hasMore: true,
  },
};

export const EndOfList = {
  args: {
    isLoading: false,
    hasMore: false,
  },
};