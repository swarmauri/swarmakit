import LoadmorebuttoninList from './LoadmorebuttoninList.svelte';
import type { ButtonState } from './LoadmorebuttoninList.svelte';

export default {
  title: 'Lists/LoadmorebuttoninList',
  component: LoadmorebuttoninList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(ButtonState),
    },
    items: { control: 'object' },
    loadMore: { action: 'loadMore' },
  },
};

const Template = (args) => ({
  Component: LoadmorebuttoninList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: ButtonState.Default,
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => console.log('Load more items'),
};

export const Loading = Template.bind({});
Loading.args = {
  state: ButtonState.Loading,
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => console.log('Loading more items'),
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  state: ButtonState.EndOfList,
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => console.log('No more items to load'),
};