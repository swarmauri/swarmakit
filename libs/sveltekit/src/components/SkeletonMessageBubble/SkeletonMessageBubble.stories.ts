import SkeletonMessageBubble from './SkeletonMessageBubble.svelte';
import type { LoadingState } from './SkeletonMessageBubble.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonMessageBubble',
  component: SkeletonMessageBubble,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonMessageBubble,
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