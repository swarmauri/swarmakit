import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonGroupMemberList, { SkeletonGroupMemberListProps } from './SkeletonGroupMemberList';

export default {
  title: 'component/SkeletonLoaders/SkeletonGroupMemberList',
  component: SkeletonGroupMemberList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonGroupMemberListProps> = (args) => <SkeletonGroupMemberList {...args} />;

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