import SkeletonGroupMemberList from './SkeletonGroupMemberList.svelte';
import type { LoadingState } from './SkeletonGroupMemberList.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonGroupMemberList',
  component: SkeletonGroupMemberList,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonGroupMemberList,
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