import SkeletonMessageInputBox from './SkeletonMessageInputBox.svelte';
import type { LoadingState } from './SkeletonMessageInputBox.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonMessageInputBox',
  component: SkeletonMessageInputBox,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonMessageInputBox,
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