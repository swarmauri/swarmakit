import SkeletonTypingIndicator from './SkeletonTypingIndicator.svelte';
import type { LoadingState } from './SkeletonTypingIndicator.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonTypingIndicator',
  component: SkeletonTypingIndicator,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonTypingIndicator,
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