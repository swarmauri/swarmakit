import SkeletonSendButton from './SkeletonSendButton.svelte';
import type { LoadingState } from './SkeletonSendButton.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonSendButton',
  component: SkeletonSendButton,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonSendButton,
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