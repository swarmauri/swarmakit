import SkeletonReactionButton from './SkeletonReactionButton.svelte';
import type { LoadingState } from './SkeletonReactionButton.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonReactionButton',
  component: SkeletonReactionButton,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonReactionButton,
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