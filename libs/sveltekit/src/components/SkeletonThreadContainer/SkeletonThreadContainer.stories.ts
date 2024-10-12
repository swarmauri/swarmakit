import SkeletonThreadContainer from './SkeletonThreadContainer.svelte';
import type { LoadingState } from './SkeletonThreadContainer.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonThreadContainer',
  component: SkeletonThreadContainer,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonThreadContainer,
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