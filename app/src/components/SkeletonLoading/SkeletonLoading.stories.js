import React from 'react';
import SkeletonLoading from './SkeletonLoading';

export default {
  title: 'Miscellaneous/SkeletonLoading',
  component: SkeletonLoading,
};

const Template = (args) => <SkeletonLoading {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Active = Template.bind({});
Active.args = {
  loading: false,
};