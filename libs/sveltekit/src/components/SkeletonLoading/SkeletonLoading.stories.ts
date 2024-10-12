import SkeletonLoading from './SkeletonLoading.svelte';

export default {
  title: 'Miscellaneous/SkeletonLoading',
  component: SkeletonLoading,
  argTypes: {
    isLoading: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: SkeletonLoading,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Active = Template.bind({});
Active.args = {
  isLoading: false,
};