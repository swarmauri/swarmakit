import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonLoading, { SkeletonLoadingProps } from './SkeletonLoading';

export default {
  title: 'component/Miscellaneous/SkeletonLoading',
  component: SkeletonLoading,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonLoadingProps> = (args) => (
  <SkeletonLoading {...args}>
    <div>This is the loaded content</div>
  </SkeletonLoading>
);

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Active = Template.bind({});
Active.args = {
  isLoading: false,
};