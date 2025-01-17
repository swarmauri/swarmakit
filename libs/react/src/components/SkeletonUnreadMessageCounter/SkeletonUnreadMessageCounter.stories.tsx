import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonUnreadMessageCounter, { SkeletonUnreadMessageCounterProps } from './SkeletonUnreadMessageCounter';

export default {
  title: 'component/SkeletonLoaders/SkeletonUnreadMessageCounter',
  component: SkeletonUnreadMessageCounter,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonUnreadMessageCounterProps> = (args) => <SkeletonUnreadMessageCounter {...args} />;

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