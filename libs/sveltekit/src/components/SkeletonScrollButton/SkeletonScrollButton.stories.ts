import SkeletonScrollButton from './SkeletonScrollButton.svelte';
import type { LoadingState } from './SkeletonScrollButton.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonScrollButton',
  component: SkeletonScrollButton,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonScrollButton,
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