import SkeletonChatListItem from './SkeletonChatListItem.svelte';
import type { LoadingState } from './SkeletonChatListItem.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonChatListItem',
  component: SkeletonChatListItem,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonChatListItem,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};