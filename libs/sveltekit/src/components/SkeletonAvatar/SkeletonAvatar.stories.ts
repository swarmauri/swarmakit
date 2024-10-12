import SkeletonAvatar from './SkeletonAvatar.svelte';
import type { LoadingState } from './SkeletonAvatar.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonAvatar',
  component: SkeletonAvatar,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonAvatar,
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