import SkeletonPinnedMessage from './SkeletonPinnedMessage.svelte';
import type { LoadingState } from './SkeletonPinnedMessage.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonPinnedMessage',
  component: SkeletonPinnedMessage,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonPinnedMessage,
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