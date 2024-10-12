import SkeletonUnreadMessageCounter from './SkeletonUnreadMessageCounter.svelte';
import type { LoadingState } from './SkeletonUnreadMessageCounter.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonUnreadMessageCounter',
  component: SkeletonUnreadMessageCounter,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonUnreadMessageCounter,
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