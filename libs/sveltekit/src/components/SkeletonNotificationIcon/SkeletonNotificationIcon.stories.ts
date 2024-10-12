import SkeletonNotificationIcon from './SkeletonNotificationIcon.svelte';
import type { LoadingState } from './SkeletonNotificationIcon.svelte';

export default {
  title: 'SkeletonLoaders/SkeletonNotificationIcon',
  component: SkeletonNotificationIcon,
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'hidden'],
    },
  },
};

const Template = (args: { state: LoadingState }) => ({
  Component: SkeletonNotificationIcon,
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