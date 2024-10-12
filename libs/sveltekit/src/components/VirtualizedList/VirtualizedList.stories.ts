import VirtualizedList from './VirtualizedList.svelte';

export default {
  title: 'Lists/VirtualizedList',
  component: VirtualizedList,
  argTypes: {
    items: { control: 'array' },
    isLoadingMore: { control: 'boolean' },
    hasMoreItems: { control: 'boolean' },
    loadMoreItems: { action: 'loadMoreItems' },
  },
};

const Template = (args) => ({
  Component: VirtualizedList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  isLoadingMore: false,
  hasMoreItems: true,
  loadMoreItems: () => console.log('Loading more items...'),
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  ...Default.args,
  isLoadingMore: true,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  ...Default.args,
  hasMoreItems: false,
};